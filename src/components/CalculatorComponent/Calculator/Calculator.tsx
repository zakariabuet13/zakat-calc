import { Box, Typography } from "@mui/material";
import styles from "./calculator.module.css";
import Gold from "../../CalculatorComponent/Gold";
import Silver from "../Silver";
import Money from "../Money";
import NonZakatableAssets from "../NonZakatableAssets";
import ZakatResult from "../../ZakatResult";
import ZakatResultMobile from "../../ZakatResultMobile";
import { useForm } from "react-hook-form";
import { ICalculatorFormInput } from "./ICalculatorFormInput";
import { useEffect } from "react";

export const CalculatorComponent = () => {
  const { register, getValues, setValue, resetField } = useForm<ICalculatorFormInput>();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(getValues());
  //   }, 10000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <Box className={styles["page-wrapper"]}>
      <Box className={styles["calculator"]}>
        <Box component={"section"}>
          <Typography variant="h5" color={"primary.main"} textAlign={"center"} mb={2} fontWeight={700}>
            যে সকল সম্পদের উপর যাকাত ফরয
          </Typography>

          <Gold register={register} setValue={setValue} resetField={resetField} />
          <Silver register={register} setValue={setValue} resetField={resetField} />
          <Money register={register} />
        </Box>

        <Box component={"section"} mt={6}>
          <Typography variant="h5" color={"primary.main"} textAlign={"center"} mb={2} fontWeight={700}>
            যাকাত থেকে বিয়োগযোগ্য সম্পদ
          </Typography>

          <NonZakatableAssets register={register} />
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
