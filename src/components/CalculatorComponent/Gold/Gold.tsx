import { Box, TextField, Typography } from "@mui/material";
import styles from "../Calculator/calculator.module.css";

export const Gold = () => {
  return (
    <Box mb={6}>
      <Box mb={2}>
        <Typography variant={"h5"} display={"flex"} alignItems={"center"} gap={1} flexWrap={"wrap"} fontWeight={700}>
          <img src="/calculator.png" alt="Calculator Icon" /> স্বর্ণ
          <Typography variant={"body1"} className={styles["input-description"]}>
            (বার/বিস্কুট/অলংকার - ব্যবহৃত বা অব্যবহৃত)
          </Typography>
        </Typography>
      </Box>

      <Box className={styles['input-group']}>
        <Box>
          <Typography>১) ২২ ক্যারেট স্বর্ণ</Typography>
        </Box>

        <Box className={styles["three-field-row"]}>
          <TextField placeholder="ভরি" variant="outlined" size="small" />
          <TextField placeholder="গ্রাম" variant="outlined" size="small" />
          <TextField placeholder="সমপরিমান বিক্রয় মূল্য" variant="outlined" size="small" />
        </Box>
      </Box>

      <Box className={styles['input-group']}>
        <Box>
          <Typography>২) ২১ ক্যারেট স্বর্ণ</Typography>
        </Box>

        <Box className={styles["three-field-row"]}>
          <TextField placeholder="ভরি" variant="outlined" size="small" />
          <TextField placeholder="গ্রাম" variant="outlined" size="small" />
          <TextField placeholder="সমপরিমান বিক্রয় মূল্য" variant="outlined" size="small" />
        </Box>
      </Box>

      <Box className={styles['input-group']}>
        <Box>
          <Typography>৩) ১৮ ক্যারেট স্বর্ণ</Typography>
        </Box>

        <Box className={styles["three-field-row"]}>
          <TextField placeholder="ভরি" variant="outlined" size="small" />
          <TextField placeholder="গ্রাম" variant="outlined" size="small" />
          <TextField placeholder="সমপরিমান বিক্রয় মূল্য" variant="outlined" size="small" />
        </Box>
      </Box>
      
      <Box className={styles['input-group']}>
        <Box>
          <Typography>৪) সনাতন স্বর্ণ</Typography>
        </Box>

        <Box className={styles["three-field-row"]}>
          <TextField placeholder="ভরি" variant="outlined" size="small" />
          <TextField placeholder="গ্রাম" variant="outlined" size="small" />
          <TextField placeholder="সমপরিমান বিক্রয় মূল্য" variant="outlined" size="small" />
        </Box>
      </Box>
    </Box>
  );
};
