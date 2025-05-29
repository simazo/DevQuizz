import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';
import { Box, Heading, VStack, Button } from '@chakra-ui/react';

const HomePage: React.FC = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">Home</Heading>
      <VStack align="start" mb={8}>
        <Button asChild><Link to={PATHS.ARCHITECTURE}>アーキテクチャ</Link></Button>
        <Button asChild><Link to={PATHS.DESIGN_PATTERN}>デザインパターン</Link></Button>
      </VStack>
    </Box>
  );
};

export default HomePage;
