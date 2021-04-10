import {
  Flex,
  Link,
  Text,
} from '@chakra-ui/layout';

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        <Link href="https://github.com/dustinlacewel/react-ecs" isExternal>
          github.com/dustinlacewell/react-ecs
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
