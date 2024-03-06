import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import styles from "../Calculator/calculator.module.css";
import { UseFormRegister, UseFormResetField, UseFormSetValue } from "react-hook-form";
import { ICalculatorFormInput } from "../Calculator/ICalculatorFormInput";
import { digitValidator } from "../../../utils";
import { Price } from "../../../constants";

export const Silver = ({
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
          <img src={process.env.PUBLIC_URL + "/calculator.png"} alt="Calculator Icon" /> রূপা
          <Typography variant={"body1"} className={styles["input-description"]}>
            (বার/বিস্কুট/অলংকার - ব্যবহৃত বা অব্যবহৃত)
          </Typography>
        </Typography>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>১) ২২ ক্যারেট রূপা</Typography>
        </Box>

        <Box className={styles["three-field-row"]}>
          <TextField
            {...register("silver.carat22.vori", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("silver.carat22.gram", (event.target.value * 11.664).toFixed(2));
                  setValue(
                    "silver.carat22.taka",
                    (event.target.value * 11.664 * Price.SellingPrice.Silver.carat22).toFixed(2)
                  );
                } else {
                  resetField("silver.carat22.gram");
                  resetField("silver.carat22.taka");
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
            {...register("silver.carat22.gram", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("silver.carat22.vori", (event.target.value / 11.664).toFixed(2));
                  setValue("silver.carat22.taka", (event.target.value * Price.SellingPrice.Silver.carat22).toFixed(2));
                } else {
                  resetField("silver.carat22.vori");
                  resetField("silver.carat22.taka");
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
            {...register("silver.carat22.taka", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue(
                    "silver.carat22.vori",
                    (event.target.value / 11.664 / Price.SellingPrice.Silver.carat22).toFixed(2)
                  );
                  setValue("silver.carat22.gram", (event.target.value / Price.SellingPrice.Silver.carat22).toFixed(2));
                } else {
                  resetField("silver.carat22.vori");
                  resetField("silver.carat22.gram");
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
          <Typography>২) ২১ ক্যারেট রূপা</Typography>
        </Box>

        <Box className={styles["three-field-row"]}>
          <TextField
            {...register("silver.carat21.vori", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("silver.carat21.gram", (event.target.value * 11.664).toFixed(2));
                  setValue(
                    "silver.carat21.taka",
                    (event.target.value * 11.664 * Price.SellingPrice.Silver.carat21).toFixed(2)
                  );
                } else {
                  resetField("silver.carat21.gram");
                  resetField("silver.carat21.taka");
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
            {...register("silver.carat21.gram", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("silver.carat21.vori", (event.target.value / 11.664).toFixed(2));
                  setValue("silver.carat21.taka", (event.target.value * Price.SellingPrice.Silver.carat21).toFixed(2));
                } else {
                  resetField("silver.carat21.vori");
                  resetField("silver.carat21.taka");
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
            {...register("silver.carat21.taka", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue(
                    "silver.carat21.vori",
                    (event.target.value / 11.664 / Price.SellingPrice.Silver.carat21).toFixed(2)
                  );
                  setValue("silver.carat21.gram", (event.target.value / Price.SellingPrice.Silver.carat21).toFixed(2));
                } else {
                  resetField("silver.carat21.vori");
                  resetField("silver.carat21.gram");
                }
              },
            })}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>বিক্রয় মূল্যঃ</InputAdornment>,
            }}
            variant="outlined"
            onKeyDown={digitValidator}
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৩) ১৮ ক্যারেট রূপা</Typography>
        </Box>

        <Box className={styles["three-field-row"]}>
          <TextField
            {...register("silver.carat18.vori", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("silver.carat18.gram", (event.target.value * 11.664).toFixed(2));
                  setValue(
                    "silver.carat18.taka",
                    (event.target.value * 11.664 * Price.SellingPrice.Silver.carat18).toFixed(2)
                  );
                } else {
                  resetField("silver.carat18.gram");
                  resetField("silver.carat18.taka");
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
            {...register("silver.carat18.gram", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("silver.carat18.vori", (event.target.value / 11.664).toFixed(2));
                  setValue("silver.carat18.taka", (event.target.value * Price.SellingPrice.Silver.carat18).toFixed(2));
                } else {
                  resetField("silver.carat18.vori");
                  resetField("silver.carat18.taka");
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
            {...register("silver.carat18.taka", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue(
                    "silver.carat18.vori",
                    (event.target.value / 11.664 / Price.SellingPrice.Silver.carat18).toFixed(2)
                  );
                  setValue("silver.carat18.gram", (event.target.value / Price.SellingPrice.Silver.carat18).toFixed(2));
                } else {
                  resetField("silver.carat18.vori");
                  resetField("silver.carat18.gram");
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
          <Typography>৪) সনাতন রূপা</Typography>
        </Box>

        <Box className={styles["three-field-row"]}>
          <TextField
            {...register("silver.old.vori", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("silver.old.gram", (event.target.value * 11.664).toFixed(2));
                  setValue("silver.old.taka", (event.target.value * 11.664 * Price.SellingPrice.Silver.old).toFixed(2));
                } else {
                  resetField("silver.old.gram");
                  resetField("silver.old.taka");
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
            {...register("silver.old.gram", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("silver.old.vori", (event.target.value / 11.664).toFixed(2));
                  setValue("silver.old.taka", (event.target.value * Price.SellingPrice.Silver.old).toFixed(2));
                } else {
                  resetField("silver.old.vori");
                  resetField("silver.old.taka");
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
            {...register("silver.old.taka", {
              onChange: (event) => {
                const value = event.target.value;
                if (value !== "") {
                  setValue("silver.old.vori", (event.target.value / 11.664 / Price.SellingPrice.Silver.old).toFixed(2));
                  setValue("silver.old.gram", (event.target.value / Price.SellingPrice.Silver.old).toFixed(2));
                } else {
                  resetField("silver.old.vori");
                  resetField("silver.old.gram");
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
