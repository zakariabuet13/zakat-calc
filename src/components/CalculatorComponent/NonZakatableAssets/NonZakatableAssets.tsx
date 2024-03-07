import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import styles from "../Calculator/calculator.module.css";
import { useForm } from "react-hook-form";
import { ICalculatorFormInputNonZakatable } from "../Calculator/ICalculatorFormInput";
import { digitValidator } from "../../../utils";
import { useEffect } from "react";

export const NonZakatableAssets = () => {
  const { register, getValues, watch } = useForm<ICalculatorFormInputNonZakatable>();
  const formWatcher = watch();

  useEffect(() => {
    console.log(getValues());
  }, [formWatcher]);

  return (
    <Box mb={6}>
      <Box className={styles["input-group"]}>
        <Box>
          <Typography>১) ব্যক্তিগত বা সাংসারিক প্রয়োজনে গৃহীত সকল ঋণ/লোন</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (সাধারণ ঋণ বা ক্রেডিট কার্ডের লোন)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("personalLoad")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  সমপরিমান মূল্যঃ
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>২) কিস্তিতে ক্রয়কৃত বস্তুর পরিশোধ্য কিস্তির পরিমাণ</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (এক বছরে আদায়যোগ্য কিস্তির পরিমাণ। কারো যদি ৬ মাসের কিস্তি পরিশোধ করা বাকি থাকে তাহলে ৬ মাসের কিস্তি, আর যদি
            ১৮ মাসের(১২ মাসের বেশি) কিস্তি পরিশোধ করা বাকি থাকে তাহলে ১২ মাসের আদায়যোগ্য কিস্তি)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("installments")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  সমপরিমান মূল্যঃ
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৩) অনাদায়ী স্ত্রীর মহর</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (যদি তা এই যাকাত বর্ষে আদায়ের নিয়ত করে থাকে)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("mahar")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  সমপরিমান মূল্যঃ
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৪) ইউটিলিটি বিল</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (বিদ্যুৎ, গ্যাস, পানি ইত্যাদির বিল যা যাকাত আদায়ের দিন পর্যন্ত পরিশোধ্য)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("utilityBill")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  সমপরিমান মূল্যঃ
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৫) বকেয়া পেমেন্ট</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (বাকিতে ক্রয়কৃত পণ্যের মূল্য, কর্মচারীদের বেতন-ভাতা ইত্যাদি যা যাকাত আদায়ের দিন পর্যন্ত পরিশোধ্য)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("outstandingPament")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  সমপরিমান মূল্যঃ
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৬) আগাম যাকাত</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (যা যাকাতের নিয়তে আগাম আদায় করা হয়েছে)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("advanceZakat")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  সমপরিমান মূল্যঃ
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৭) বিগত বছরের অনাদায়ী যাকাতের পরিমাণ</Typography>
        </Box>

        <Box>
          <TextField
            {...register("pastZakat")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  সমপরিমান মূল্যঃ
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৮) এডভান্স/সিকিউরিটি মানি</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (যা ফেরত দিতে হবে)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("securityMoney")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  সমপরিমান মূল্যঃ
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৯) কোম্পানির ঋণ/লোন</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (ঋণ/লোন এর অর্থ দিয়ে যে পরিমাণ যাকাতযোগ্য সম্পদ (যেমন, কাঁচামাল) ক্রয় করেছে সে পরিমাণ বিয়োগযোগ্য। যেমন, ১০
            লক্ষ টাকা লোন করেছে এর থেকে ৪ লক্ষ টাকার কাঁচামাল বা বিক্রয়যোগ্য পণ্য-দ্রব্য ক্রয় করেছে। তাহলে ৪ লক্ষ টাকা
            বিয়োগযোগ্য। বাকি ৬ লক্ষ টাকা যাকাত থেকে বিয়োগযোগ্য নয়)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("companyLoad")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  সমপরিমান মূল্যঃ
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>১০) হারাম বা অবৈধ অর্থ-সম্পদ</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (যেমন, সুদ। এটি পুরোটাই সাদাকা করে দিতে হবে। হারাম সম্পদের যাকাত নেই)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("illegalMoney")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" disablePointerEvents={true}>
                  সমপরিমান মূল্যঃ
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>
    </Box>
  );
};
