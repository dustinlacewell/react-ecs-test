import AccessibleLink from 'components/AccessibleLink';

import {
  Box,
  Flex,
  Heading,
} from '@chakra-ui/layout';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <AccessibleLink href="/">
        <Heading as="h1">react-ecs nextjs test</Heading>
      </AccessibleLink>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
