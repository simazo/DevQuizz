import { Box, type BoxProps } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface CenterLayoutProps extends BoxProps {
  children: ReactNode;
}

const CenterLayout: React.FC<CenterLayoutProps> = ({ children, ...boxProps }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      p={8}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default CenterLayout;
