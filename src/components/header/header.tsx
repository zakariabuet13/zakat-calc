import { Box, Container, Typography } from "@mui/material";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Box
      py={2}
      mb={2}
      sx={{ bgcolor: "secondary.main", boxShadow: "0 0px 8px 0px #ccc", position: "sticky", top: 0 }}
      zIndex={9}
    >
      <Container maxWidth={"lg"} sx={{ display: "flex" }} className={styles.header}>
        <Link to={"/"}>
          <Box className={styles.logo}>
            <Typography variant="h5" color={"primary.main"} fontWeight={700} lineHeight={1.2}>
              যাকাত
            </Typography>
            <Typography variant="h6" color={"primary.main"} fontWeight={700} lineHeight={1.2}>
              ক্যালকুলেটর
            </Typography>
          </Box>
        </Link>

        <Box className={styles.menu}>
          <Link to={"/"}>
            <Typography className={styles["menu-item"]} color={"primary.main"}>
              ক্যালকুলেটর
            </Typography>
          </Link>
          <Link to={"/masala"}>
            <Typography className={styles["menu-item"]} color={"primary.main"}>
              মাসআলা
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};
