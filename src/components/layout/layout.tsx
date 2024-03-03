import { Box, Container } from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
import Header from "../header";

export const Layout = ({ children }: any) => {
  return (
    <Box>
      <Header />

      <Container maxWidth="lg">{children}</Container>

      <ScrollToTop smooth top={120} color={'#264490'}/>
    </Box>
  );
};
