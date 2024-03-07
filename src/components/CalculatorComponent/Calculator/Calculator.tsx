import { Box, Typography } from "@mui/material";
import styles from "./calculator.module.css";
import Gold from "../../CalculatorComponent/Gold";
import Silver from "../Silver";
import Money from "../Money";
import NonZakatableAssets from "../NonZakatableAssets";
import ZakatResult from "../../ZakatResult";
import ZakatResultMobile from "../../ZakatResultMobile";

export const CalculatorComponent = () => {
  return (
    <Box className={styles["page-wrapper"]}>
      <Box className={styles["calculator"]}>
        <Box component={"section"}>
          <Typography variant="h5" color={"primary.main"} textAlign={"center"} mb={2} fontWeight={700}>
            যে সকল সম্পদের উপর যাকাত ফরয
          </Typography>

          <Gold/>
          <Silver/>
          <Money />
        </Box>

        <Box component={"section"} mt={6}>
          <Typography variant="h5" color={"primary.main"} textAlign={"center"} mb={2} fontWeight={700}>
            যাকাত থেকে বিয়োগযোগ্য সম্পদ
          </Typography>

          <NonZakatableAssets />
        </Box>
      </Box>

      <Box className={styles["result"]}>
        <ZakatResult />
      </Box>

      <Box className={styles["result-mobile"]}>
        <ZakatResultMobile />
      </Box>
    </Box>
  );
};
