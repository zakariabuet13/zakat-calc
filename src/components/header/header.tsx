import { Box, Container, Typography } from "@mui/material";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Box py={2} mb={4} sx={{ bgcolor: "secondary.main", position: "sticky", top: 0 }}>
      <Container maxWidth={"lg"} sx={{ display: "flex" }} className={styles.header}>
        <Link to={"/"}>
          <Box className={styles.logo}>
            <Typography variant="h4" color={"primary.main"}>
              যাকাত
            </Typography>
            <Typography variant="h5" color={"primary.main"}>
              ক্যালকুলেটর
            </Typography>
          </Box>
        </Link>

        <Box className={styles.menu}>
          <Link to={"/"} >
            <Typography className={styles["menu-item"]} color={"primary.main"}>ক্যালকুলেটর</Typography>
          </Link>
          <Link to={"/about-zakat"}>
            <Typography className={styles["menu-item"]} color={"primary.main"}>যাকাত সম্পর্কে</Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};
