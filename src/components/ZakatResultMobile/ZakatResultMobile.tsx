import { Box, Button, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { numberFormatter } from "../../utils";
import { Nisab } from "../../constants";
import { useAppSelector } from "../../redux/hooks";
import ZakatResultExplanationModal from "../Modal/ZakatResultExplanationModal";

export const ZakatResultMobile = () => {
  const [isExplanationModalOpen, setIsExplanationModalOpen] = useState(false);
  const NisabAmount = useMemo(() => numberFormatter.format(Nisab), []);
  const totalZakatableAssets = useAppSelector((state) => state.assets.totalZakatableAssets);
  const totalZakat = useAppSelector((state) => state.assets.zakat);

  return (
    <Box px={2} py={1} sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Typography variant={"body2"} fontWeight={700}>
          যাকাতের নিসাবঃ {NisabAmount}
        </Typography>
        <Typography variant={"body2"} fontWeight={700}>
          মোট সম্পদঃ {numberFormatter.format(totalZakatableAssets)}
        </Typography>
        <Typography variant={"body2"} color={"primary.main"} fontWeight={700}>
          আদায়যোগ্য যাকাতঃ {numberFormatter.format(totalZakat)}
        </Typography>
      </Box>

      <Box textAlign={"center"} mt={2}>
        {totalZakatableAssets && (
          <Button
            variant="contained"
            size="small"
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
