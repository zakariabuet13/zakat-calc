import { Box, TextField, Typography } from "@mui/material";
import Layout from "../../components/layout";
import styles from "./calculator.module.css";

export const Calculator = () => {
  return (
    <Layout>
      <Box className={styles["page-wrapper"]}>
        <Box className={styles["calculator"]}>
          <Box component={"section"}>
            <Typography variant="h5" color={"primary.main"} textAlign={"center"} mb={2}>
              যে সকল সম্পদের উপর যাকাত ফরয
            </Typography>

            <Typography>
              স্বর্ণ (ব্যবহৃত অলংকার হোক বা ব্যবসার পণ্য, অলংকার, বার বা গিনি কয়েন যে আকারেই থাকুক সব প্রকারের স্বর্ণ
              হিসাবযোগ্য)
            </Typography>
            <TextField fullWidth placeholder="Small" variant="outlined" size="small" />
          </Box>

          <Box component={"section"} mt={6}>
            <Typography variant="h5" color={"primary.main"} textAlign={"center"} mb={2}>
              যাকাত থেকে বিয়োগযোগ্য সম্পদ
            </Typography>
            সাংসারিক প্রয়োজনে গৃহীত ঋণ
          </Box>
        </Box>

        <Box className={styles["result"]}>result</Box>
      </Box>
    </Layout>
  );
};
