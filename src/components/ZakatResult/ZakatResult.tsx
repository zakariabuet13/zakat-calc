import { Box, Button, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import ZakatResultExplanationModal from "../Modal/ZakatResultExplanationModal";
import { useAppSelector } from "../../redux/hooks";
import { Nisab } from "../../constants";
import { numberFormatter } from "../../utils";

export const ZakatResult = () => {
  const [isExplanationModalOpen, setIsExplanationModalOpen] = useState(false);
  const NisabAmount = useMemo(() => numberFormatter.format(Nisab), []);
  const totalZakatableAssets = useAppSelector((state) => state.assets.totalZakatableAssets);
  const totalZakat = useAppSelector((state) => state.assets.zakat);

  return (
    <Box p={1}>
      <Typography variant={"h6"} color={"primary.main"} textAlign={"center"} mb={2} fontWeight={700}>
        যাকাতের পরিমাণ
      </Typography>

      <Typography variant={"body1"} fontWeight={700}>
        যাকাতের নিসাবঃ {NisabAmount}
      </Typography>
      <Typography variant={"body1"} fontWeight={700}>
        মোট সম্পদঃ {numberFormatter.format(totalZakatableAssets)}
      </Typography>
      <Typography variant={"body1"} color={"primary.main"} fontWeight={700}>
        আদায়যোগ্য যাকাতঃ {numberFormatter.format(totalZakat)}
      </Typography>

      <Box textAlign={"center"} mt={2}>
        {totalZakatableAssets > 0 && (
          <Button
            variant="contained"
            onClick={() => {
              setIsExplanationModalOpen(true);
            }}
          >
            ব্যাখ্যা
          </Button>
        )}

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
