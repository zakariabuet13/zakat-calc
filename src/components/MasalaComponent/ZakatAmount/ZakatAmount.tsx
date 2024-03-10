import { Box, Typography } from "@mui/material";

export const ZakatAmount = () => {
  return (
    <Box>
      <Typography mb={1}>
        নিজস্ব মালিকানাভুক্ত যাকাতযোগ্য অর্থ-সম্পদ নিসাব বা শরীয়ত নির্ধারিত পরিমাণ এক চান্দ্র বছর (৩৫৪ দিন) অতিক্রম হলে
        তার ১/৪০ ভাগ বা ২.৫ শতাংশ (২.৫%) যাকাত দিতে হবে।
      </Typography>
      <Typography mb={1}>আর যদি এক সৌর বছর (৩৬৫/৩৬৬ দিন) অতিক্রম করে তাহলে ২.৬ শতাংশ (২.৬%) যাকাত দিবে।</Typography>
    </Box>
  );
};
