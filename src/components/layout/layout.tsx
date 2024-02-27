import { Box, Container } from "@mui/material";
import Header from "../header";

export const Layout = ({ children }: any) => {
  return (
    <Box>
      <Header />

      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};
