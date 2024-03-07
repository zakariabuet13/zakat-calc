import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import styles from "../Calculator/calculator.module.css";
import { useForm } from "react-hook-form";
import { ICalculatorFormInputGold } from "../Calculator/ICalculatorFormInput";
import { Price } from "../../../constants";
import { digitValidator } from "../../../utils";
import { useEffect } from "react";

export const Gold = () => {
  const { register, getValues, setValue, resetField, watch } = useForm<ICalculatorFormInputGold>();
  const formWatcher = watch();

  useEffect(() => {
    console.log(getValues());
  }, [formWatcher]);

  return (
    <Box mb={6}>
      <Box mb={2}>
        <Typography variant={"h5"} display={"flex"} alignItems={"center"} gap={1} flexWrap={"wrap"} fontWeight={700}>
          <img src={process.env.PUBLIC_URL + "/calculator.png"} alt="Calculator Icon" /> স্বর্ণ
          <Typography variant={"body1"} className={styles["input-description"]}>
            (বার/বিস্কুট/অলংকার - ব্যবহৃত বা অব্যবহৃত)
          </Typography>
        </Typography>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>১) ২২ ক্যারেট স্বর্ণ</Typography>
        </Box>

        <Box className={styles["three-field-row"]}>
          <TextField
            {...register("carat22.vori", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("carat22.gram", (event.target.value * 11.664).toFixed(2));
                  setValue("carat22.taka", (event.target.value * 11.664 * Price.SellingPrice.Gold.carat22).toFixed(2));
                } else {
                  resetField("carat22.gram");
                  resetField("carat22.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  ভরিঃ
                </InputAdornment>
              ),
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("carat22.gram", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("carat22.vori", (event.target.value / 11.664).toFixed(2));
                  setValue("carat22.taka", (event.target.value * Price.SellingPrice.Gold.carat22).toFixed(2));
                } else {
                  resetField("carat22.vori");
                  resetField("carat22.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  গ্রামঃ
                </InputAdornment>
              ),
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("carat22.taka", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("carat22.vori", (event.target.value / 11.664 / Price.SellingPrice.Gold.carat22).toFixed(2));
                  setValue("carat22.gram", (event.target.value / Price.SellingPrice.Gold.carat22).toFixed(2));
                } else {
                  resetField("carat22.vori");
                  resetField("carat22.gram");
                }
              },
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  বিক্রয় মূল্যঃ
                </InputAdornment>
              ),
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>২) ২১ ক্যারেট স্বর্ণ</Typography>
        </Box>

        <Box className={styles["three-field-row"]}>
          <TextField
            {...register("carat21.vori", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("carat21.gram", (event.target.value * 11.664).toFixed(2));
                  setValue("carat21.taka", (event.target.value * 11.664 * Price.SellingPrice.Gold.carat21).toFixed(2));
                } else {
                  resetField("carat21.gram");
                  resetField("carat21.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  ভরিঃ
                </InputAdornment>
              ),
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("carat21.gram", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("carat21.vori", (event.target.value / 11.664).toFixed(2));
                  setValue("carat21.taka", (event.target.value * Price.SellingPrice.Gold.carat21).toFixed(2));
                } else {
                  resetField("carat21.vori");
                  resetField("carat21.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  গ্রামঃ
                </InputAdornment>
              ),
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("carat21.taka", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("carat21.vori", (event.target.value / 11.664 / Price.SellingPrice.Gold.carat21).toFixed(2));
                  setValue("carat21.gram", (event.target.value / Price.SellingPrice.Gold.carat21).toFixed(2));
                } else {
                  resetField("carat21.vori");
                  resetField("carat21.gram");
                }
              },
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  বিক্রয় মূল্যঃ
                </InputAdornment>
              ),
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৩) ১৮ ক্যারেট স্বর্ণ</Typography>
        </Box>

        <Box className={styles["three-field-row"]}>
          <TextField
            {...register("carat18.vori", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("carat18.gram", (event.target.value * 11.664).toFixed(2));
                  setValue("carat18.taka", (event.target.value * 11.664 * Price.SellingPrice.Gold.carat18).toFixed(2));
                } else {
                  resetField("carat18.gram");
                  resetField("carat18.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  ভরিঃ
                </InputAdornment>
              ),
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("carat18.gram", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("carat18.vori", (event.target.value / 11.664).toFixed(2));
                  setValue("carat18.taka", (event.target.value * Price.SellingPrice.Gold.carat18).toFixed(2));
                } else {
                  resetField("carat18.vori");
                  resetField("carat18.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  গ্রামঃ
                </InputAdornment>
              ),
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("carat18.taka", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("carat18.vori", (event.target.value / 11.664 / Price.SellingPrice.Gold.carat18).toFixed(2));
                  setValue("carat18.gram", (event.target.value / Price.SellingPrice.Gold.carat18).toFixed(2));
                } else {
                  resetField("carat18.vori");
                  resetField("carat18.gram");
                }
              },
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  বিক্রয় মূল্যঃ
                </InputAdornment>
              ),
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৪) সনাতন স্বর্ণ</Typography>
        </Box>

        <Box className={styles["three-field-row"]}>
          <TextField
            {...register("old.vori", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("old.gram", (event.target.value * 11.664).toFixed(2));
                  setValue("old.taka", (event.target.value * 11.664 * Price.SellingPrice.Gold.old).toFixed(2));
                } else {
                  resetField("old.gram");
                  resetField("old.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  ভরিঃ
                </InputAdornment>
              ),
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("old.gram", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("old.vori", (event.target.value / 11.664).toFixed(2));
                  setValue("old.taka", (event.target.value * Price.SellingPrice.Gold.old).toFixed(2));
                } else {
                  resetField("old.vori");
                  resetField("old.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  গ্রামঃ
                </InputAdornment>
              ),
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("old.taka", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("old.vori", (event.target.value / 11.664 / Price.SellingPrice.Gold.old).toFixed(2));
                  setValue("old.gram", (event.target.value / Price.SellingPrice.Gold.old).toFixed(2));
                } else {
                  resetField("old.vori");
                  resetField("old.gram");
                }
              },
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  বিক্রয় মূল্যঃ
                </InputAdornment>
              ),
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>
    </Box>
  );
};
