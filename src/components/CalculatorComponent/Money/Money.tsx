import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import styles from "../Calculator/calculator.module.css";
import { useAppDispatch } from "../../../redux/hooks";
import { updateMoneyAmount } from "../../../redux/assetsSlice";
import { UseFormRegister } from "react-hook-form";
import { ICalculatorFormInput } from "../Calculator/ICalculatorFormInput";
import { digitValidator } from "../../../utils";

export const Money = ({ register }: { register: UseFormRegister<ICalculatorFormInput> }) => {
  const dispatch = useAppDispatch();

  return (
    <Box mb={6}>
      <Box mb={2}>
        <Typography variant={"h5"} display={"flex"} alignItems={"center"} gap={1} flexWrap={"wrap"} fontWeight={700}>
          <img src={process.env.PUBLIC_URL + "/calculator.png"} alt="Calculator Icon" /> অর্থ/কড়ি এবং ব্যবসায়িক মাল
        </Typography>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>১) ক্যাশ/নগদ টাকা</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (মৌলিক প্রয়োজনের অতিরিক্ত যা নিজের কাছে নগদ আছে)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("money.cash")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>সমপরিমান মূল্যঃ</InputAdornment>,
            }}
            variant="outlined"
            size="small"
            onChange={(event) => {
              dispatch(updateMoneyAmount(Number(event.target.value.replace(/\D/g, ""))));
            }}
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>২) সঞ্চয়/ডিপোজিট</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (ব্যাংক বা আর্থিক প্রতিষ্ঠানে কারেন্ট/সেভিংস/ফিক্সড একাউন্ট বা এফডিআর বা ডিপিএস বা জীবন বীমা বা মোবাইল
            ব্যাংকিং একাউন্টে যা জমা আছে [অতিরিক্ত ইন্টারেস্ট পুরোটাই সদকা করা জরুরী])
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("money.savings")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>সমপরিমান মূল্যঃ</InputAdornment>,
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৩) বৈদেশিক মুদ্রা</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (ডলার/রিয়াল - যাকাত আদায়ের দিনের রেটে)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("money.foreignCurrency")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>সমপরিমান মূল্যঃ</InputAdornment>,
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৪) আমানত</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (ব্যাংক লকারে রক্ষিত বা কোন ব্যক্তির কাছে আমানত হিসেবে গচ্ছিত মাল)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("money.amanot")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>সমপরিমান মূল্যঃ</InputAdornment>,
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৫) ঋণ</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (অন্যের কাছে পাওনা টাকা - যা পাওয়া নিশ্চিত বা পাওয়ার আশা রয়েছে। পাওয়ার আশা না থাকলে হিসেবে আসবে না।
            কিন্তু পরবর্তিতে যদি পাওয়া যায়, তাহলে বিগত বছরের যাকাত আদায় করে নিবে)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("money.loan")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>সমপরিমান মূল্যঃ</InputAdornment>,
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৬) এডভান্স/সিকিউরিটি মানি</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (ফেরতযোগ্য জামানত যেমন, বাসা/দোকান ভাড়া নেয়ার সময় যে টাকা এডভান্স হিসেবে দেয়া হয় এবং যদি তা বাসা/দোকান ছেড়ে
            দেয়ার সময় ফেরতযোগ্য হয়। আর যদি কর্তনযোগ্য হয় তাহলে যাকাত আদায়ের দিন পর্যন্ত কর্তনকৃত পরিমানের অবশিষ্টাংশ
            [তবে হাতে আসার পরও বিগত বছরের যাকাত আদায় করা যাবে])
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("money.advance")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>সমপরিমান মূল্যঃ</InputAdornment>,
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৭) সমিতিতে সঞ্চিত নগদ অর্থ</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (নিজের জমাকৃত ব্যালেন্স)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("money.associationSavings")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>সমপরিমান মূল্যঃ</InputAdornment>,
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৮) ব্যবসায়িক মাল</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (বিক্রয়ের নিয়তে ক্রয়কৃত মাল; যেমন, কাঁচামাল, উৎপাদিত পণ্য, স্টক লট, জায়গাজমি, ফ্লাট, গাড়ী, গরু, ছাগল, মাছ,
            মুরগি ইত্যাদি, যা ক্রয় করাই হয়েছে বিক্রয়ের নিয়তে। যাকাত আদায়ের দিন সব মাল একত্রে বিক্রি করলে যে মূল্য পাবে।
            পাইকারী বিক্রেতা হলে পাইকারী মূল্য, খুচরা বিক্রেতা হলে খুচরা মূল্য)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("money.businessAssets")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>সমপরিমান মূল্যঃ</InputAdornment>,
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>৯) বিক্রিত পণ্যের বকেয়া মূল্য</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (যা পাওয়া নিশ্চিত বা পাওয়ার আশা রয়েছে)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("money.arrears")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>সমপরিমান মূল্যঃ</InputAdornment>,
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>১০) কোম্পানির শেয়ার</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (ক্যাপিটাল গেইন বা বিক্রয়ের নিয়তে ক্রয়কৃত - মার্কেট ভ্যালু)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("money.companyShare")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>সমপরিমান মূল্যঃ</InputAdornment>,
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>১১) কোম্পানির শেয়ার</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (শুধুমাত্র ডিভিডেন্ট গ্রহণের নিয়তে ক্রয়কৃত শেয়ার - এ শেয়ারের মোট মুল্য থেকে শেয়ার অনুপাতে কোম্পানির অপারেটিং
            অ্যাসেট যেমন, বিল্ডিং, মেশিনারী, কার-পিকআপ ইত্যাদির মূল্য বাদ দিয়ে মূল্য নির্ধারণ করবে। তবে তা সম্ভব না হলে
            সতর্কতা মূলক মার্কেট ভ্যালু হিসেবে যাকাত দিবে)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("money.companyShare2")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>সমপরিমান মূল্যঃ</InputAdornment>,
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>১২) ডিভিডেন্ড/প্রফিট</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (ক্যাশ/স্টক/শেয়ার ডিভিডেন্ড/পার্টনারশিপ থেকে প্রাপ্ত লভ্যাংশ)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("money.divident")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>সমপরিমান মূল্যঃ</InputAdornment>,
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>১৩) সিকিউরিটিজ বা আর্থিক সার্টিফিকেট</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (বন্ড, ডিবেঞ্চার, মিউচুয়াল ফান্ড, প্রাইজ বন্ড, সঞ্চয়পত্র, ট্রেজারি বিল)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("money.securities")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>সমপরিমান মূল্যঃ</InputAdornment>,
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      <Box className={styles["input-group"]}>
        <Box>
          <Typography>১৪) প্রভিডেন্ট ফান্ড</Typography>
          <Typography variant="body2" className={styles["input-description"]}>
            (সরকার নিয়ন্ত্রিত প্রভিডেন্ট ফান্ড হলে, হাতে আসার পর শুধু সে বছরের। প্রতিষ্ঠান বা পরিচালনা কমিটি নিয়ন্ত্রিত
            হলে বর্তমান জমাকৃত)
          </Typography>
        </Box>

        <Box>
          <TextField
            {...register("money.providentFund")}
            fullWidth
            onKeyDown={digitValidator}
            InputProps={{
              startAdornment: <InputAdornment position="start" disablePointerEvents={true}>সমপরিমান মূল্যঃ</InputAdornment>,
            }}
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>
    </Box>
  );
};
