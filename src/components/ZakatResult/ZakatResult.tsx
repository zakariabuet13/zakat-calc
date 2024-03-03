import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import ZakatResultExplanationModal from "../Modal/ZakatResultExplanationModal";

export const ZakatResult = () => {
  const [isExplanationModalOpen, setIsExplanationModalOpen] = useState(false);

  return (
    <Box p={1}>
      <Typography variant={"h6"} color={"primary.main"} textAlign={"center"} mb={2} fontWeight={700}>
        যাকাতের পরিমাণ
      </Typography>

      <Typography variant={"body1"} fontWeight={700}>
        যাকাতের নিসাবঃ 67,360
      </Typography>
      <Typography variant={"body1"} fontWeight={700}>
        মোট সম্পদঃ 0
      </Typography>
      <Typography variant={"body1"} color={"primary.main"} fontWeight={700}>
        আদায়যোগ্য যাকাতঃ 0
      </Typography>

      <Box textAlign={"center"} mt={2}>
        <Button
          variant="contained"
          onClick={() => {
            setIsExplanationModalOpen(true);
          }}
        >
          ব্যাখ্যা
        </Button>

        <ZakatResultExplanationModal
          isExplanationModalOpen={isExplanationModalOpen}
          onExplanationModalClose={() => {
            setIsExplanationModalOpen(false);
          }}
        />
      </Box>
    </Box>
  );
};
