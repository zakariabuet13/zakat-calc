import { Box, Button, Typography } from "@mui/material";

export const ZakatResultMobile = () => {
  return (
    <Box px={2} py={1} sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Box>
        <Typography variant={"body2"} fontWeight={700}>
          যাকাতের নিসাবঃ 67,360
        </Typography>
        <Typography variant={"body2"} fontWeight={700}>
          মোট সম্পদঃ 0
        </Typography>
        <Typography variant={"body2"} color={"primary.main"} fontWeight={700}>
          আদায়যোগ্য যাকাতঃ 0
        </Typography>
      </Box>

      <Box textAlign={"center"} mt={2}>
        <Button variant="contained" size="small">ব্যাখ্যা</Button>
      </Box>
    </Box>
  );
};
