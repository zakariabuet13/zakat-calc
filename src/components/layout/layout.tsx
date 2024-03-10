import { Box, Container } from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
import Header from "../header";

export const Layout = ({ className, children }: any) => {
  return (
    <Box className={className}>
      <Header />

      <Container maxWidth="lg">{children}</Container>

      <ScrollToTop smooth top={120} color={'#264490'}/>
    </Box>
  );
};
