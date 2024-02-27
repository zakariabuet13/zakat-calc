import { Box, Container, Typography } from "@mui/material";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Box py={2} sx={{ bgcolor: "secondary.main" }}>
      <Container maxWidth={"lg"} sx={{ display: "flex" }} className={styles.header}>
        <Link to={"/"}>
          <Box className={styles.logo}>
            <Typography variant="h4">যাকাত</Typography>
            <Typography variant="h5">ক্যালকুলেটর</Typography>
          </Box>
        </Link>

        <Box className={styles.menu}>
          <Link to={"/"} className={styles["menu-item"]}>ক্যালকুলেটর</Link>
          <Link to={"/about-zakat"} className={styles["menu-item"]}>যাকাত সম্পর্কে</Link>
        </Box>
      </Container>
    </Box>
  );
};
