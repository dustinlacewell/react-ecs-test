import { Box } from "@chakra-ui/layout";
import { Canvas, useFrame } from "@react-three/fiber";

import SomeText from "components/SomeText";
import SomeImage from "components/SomeImage";
import CTASection from "components/CTASection";
import React, { FC } from "react";

import { useRef } from "react";
import { Cylinder, Torus } from "@react-three/drei";
import { TorusBufferGeometry, Vector3 } from "three";
import {ThreeView} from "@ldlework/react-ecs2/extras/three"
import { Entity, Facet } from "@ldlework/react-ecs2"
import { useQuery, useSystem, useECS } from "@ldlework/react-ecs2/hooks";

class Spinning extends Facet<Spinning> {
  rotation = new Vector3(0, 0, 0);
}

const SpinningSystem = () => {
  const query = useQuery(e => e.hasAll(ThreeView, Spinning));

  return useSystem((dt: number) => {
      query.loop([ThreeView, Spinning], (e, [view, spin]) => {
          const transform = view.ref.current!;
          const rotation = spin.rotation.clone().multiplyScalar(dt);
          const newRotation = transform.rotation
              .toVector3()
              .add(rotation);
          transform.rotation.setFromVector3(newRotation);
      });
  });
};

const SpinningCube = () => {
  return (
      <Entity>
          <Spinning rotation={new Vector3(1, 1, 1)} />
          <ThreeView>
              <Torus />
          </ThreeView>
      </Entity>
  );
};


export const SpinningCubeStory: FC = () => {
  const ECS = useECS();

  useFrame((_, dt) => ECS.update(dt));

  return (
      <ECS.Provider>
          <SpinningSystem />
          <SpinningCube />
      </ECS.Provider>
  );
};

const Home = () => {
  return (
    <Box mb={8} w="full">
      <Canvas>
        <SpinningCubeStory />
      </Canvas>
    </Box>
  );
};

export default Home;
