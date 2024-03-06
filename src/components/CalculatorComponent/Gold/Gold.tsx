import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import styles from "../Calculator/calculator.module.css";
import { UseFormRegister, UseFormResetField, UseFormSetValue } from "react-hook-form";
import { ICalculatorFormInput } from "../Calculator/ICalculatorFormInput";
import { Price } from "../../../constants";
import { digitValidator } from "../../../utils";

export const Gold = ({
  register,
  setValue,
  resetField,
}: {
  register: UseFormRegister<ICalculatorFormInput>;
  setValue: UseFormSetValue<ICalculatorFormInput>;
  resetField: UseFormResetField<ICalculatorFormInput>;
}) => {
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
            {...register("gold.carat22.vori", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("gold.carat22.gram", (event.target.value * 11.664).toFixed(2));
                  setValue(
                    "gold.carat22.taka",
                    (event.target.value * 11.664 * Price.SellingPrice.Gold.carat22).toFixed(2)
                  );
                } else {
                  resetField("gold.carat22.gram");
                  resetField("gold.carat22.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>ভরিঃ</InputAdornment>,
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("gold.carat22.gram", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("gold.carat22.vori", (event.target.value / 11.664).toFixed(2));
                  setValue("gold.carat22.taka", (event.target.value * Price.SellingPrice.Gold.carat22).toFixed(2));
                } else {
                  resetField("gold.carat22.vori");
                  resetField("gold.carat22.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>গ্রামঃ</InputAdornment>,
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("gold.carat22.taka", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue(
                    "gold.carat22.vori",
                    (event.target.value / 11.664 / Price.SellingPrice.Gold.carat22).toFixed(2)
                  );
                  setValue("gold.carat22.gram", (event.target.value / Price.SellingPrice.Gold.carat22).toFixed(2));
                } else {
                  resetField("gold.carat22.vori");
                  resetField("gold.carat22.gram");
                }
              },
            })}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>বিক্রয় মূল্যঃ</InputAdornment>,
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
            {...register("gold.carat21.vori", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("gold.carat21.gram", (event.target.value * 11.664).toFixed(2));
                  setValue(
                    "gold.carat21.taka",
                    (event.target.value * 11.664 * Price.SellingPrice.Gold.carat21).toFixed(2)
                  );
                } else {
                  resetField("gold.carat21.gram");
                  resetField("gold.carat21.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>ভরিঃ</InputAdornment>,
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("gold.carat21.gram", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("gold.carat21.vori", (event.target.value / 11.664).toFixed(2));
                  setValue("gold.carat21.taka", (event.target.value * Price.SellingPrice.Gold.carat21).toFixed(2));
                } else {
                  resetField("gold.carat21.vori");
                  resetField("gold.carat21.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>গ্রামঃ</InputAdornment>,
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("gold.carat21.taka", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue(
                    "gold.carat21.vori",
                    (event.target.value / 11.664 / Price.SellingPrice.Gold.carat21).toFixed(2)
                  );
                  setValue("gold.carat21.gram", (event.target.value / Price.SellingPrice.Gold.carat21).toFixed(2));
                } else {
                  resetField("gold.carat21.vori");
                  resetField("gold.carat21.gram");
                }
              },
            })}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>বিক্রয় মূল্যঃ</InputAdornment>,
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
            {...register("gold.carat18.vori", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("gold.carat18.gram", (event.target.value * 11.664).toFixed(2));
                  setValue(
                    "gold.carat18.taka",
                    (event.target.value * 11.664 * Price.SellingPrice.Gold.carat18).toFixed(2)
                  );
                } else {
                  resetField("gold.carat18.gram");
                  resetField("gold.carat18.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>ভরিঃ</InputAdornment>,
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("gold.carat18.gram", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("gold.carat18.vori", (event.target.value / 11.664).toFixed(2));
                  setValue("gold.carat18.taka", (event.target.value * Price.SellingPrice.Gold.carat18).toFixed(2));
                } else {
                  resetField("gold.carat18.vori");
                  resetField("gold.carat18.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>গ্রামঃ</InputAdornment>,
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("gold.carat18.taka", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue(
                    "gold.carat18.vori",
                    (event.target.value / 11.664 / Price.SellingPrice.Gold.carat18).toFixed(2)
                  );
                  setValue("gold.carat18.gram", (event.target.value / Price.SellingPrice.Gold.carat18).toFixed(2));
                } else {
                  resetField("gold.carat18.vori");
                  resetField("gold.carat18.gram");
                }
              },
            })}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>বিক্রয় মূল্যঃ</InputAdornment>,
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
            {...register("gold.old.vori", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("gold.old.gram", (event.target.value * 11.664).toFixed(2));
                  setValue("gold.old.taka", (event.target.value * 11.664 * Price.SellingPrice.Gold.old).toFixed(2));
                } else {
                  resetField("gold.old.gram");
                  resetField("gold.old.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>ভরিঃ</InputAdornment>,
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("gold.old.gram", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("gold.old.vori", (event.target.value / 11.664).toFixed(2));
                  setValue("gold.old.taka", (event.target.value * Price.SellingPrice.Gold.old).toFixed(2));
                } else {
                  resetField("gold.old.vori");
                  resetField("gold.old.taka");
                }
              },
            })}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>গ্রামঃ</InputAdornment>,
            }}
            onKeyDown={digitValidator}
            variant="outlined"
            size="small"
          />
          <TextField
            {...register("gold.old.taka", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("gold.old.vori", (event.target.value / 11.664 / Price.SellingPrice.Gold.old).toFixed(2));
                  setValue("gold.old.gram", (event.target.value / Price.SellingPrice.Gold.old).toFixed(2));
                } else {
                  resetField("gold.old.vori");
                  resetField("gold.old.gram");
                }
              },
            })}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>বিক্রয় মূল্যঃ</InputAdornment>,
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
