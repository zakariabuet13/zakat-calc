import { Dialog, DialogContent, DialogTitle, IconButton, Typography, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { numberFormatter2Fraction } from "../../../utils";
import { Nisab } from "../../../constants";
import { useAppSelector } from "../../../redux/hooks";

type ExplanationModalProps = {
  isExplanationModalOpen: boolean;
  onExplanationModalClose: () => void;
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    paddingInline: theme.spacing(2),
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(3),
  },
}));

export const ZakatResultExplanationModal = ({
  isExplanationModalOpen,
  onExplanationModalClose,
}: ExplanationModalProps) => {
  const assets = useAppSelector((state) => state.assets);

  function renderExplanationTexts() {
    if (assets.silver.vori === 0 && assets.money === 0 && assets.gold.vori < 7.5) {
      return (
        <>
          <Typography sx={{ mb: 2 }}>
            আপনার শুধুমাত্র স্বর্ণ আছে। এক্ষেত্রে যাকাত ফরয হওয়ার জন্য ৭.৫ ভরি স্বর্ণ থাকতে হবে। আপনার যেহেতু স্বর্ণের
            পরিমাণ ৭.৫ ভরি থেকে কম, তাই আপনার উপর যাকাত ফরয নয়।
          </Typography>
        </>
      );
    }

    if (assets.gold.vori === 0 && assets.money === 0 && assets.silver.vori < 52.5) {
      return (
        <>
          <Typography sx={{ mb: 2 }}>
            আপনার শুধুমাত্র রূপা আছে। এক্ষেত্রে যাকাত ফরয হওয়ার জন্য ৫২.৫ ভরি রূপা থাকতে হবে। আপনার যেহেতু রূপার
            পরিমাণ ৫২.৫ ভরি থেকে কম, তাই আপনার উপর যাকাত ফরয নয়।
          </Typography>
        </>
      );
    }

    if (assets.totalZakatableAssets >= Nisab) {
      return (
        <>
          <Typography sx={{ mb: 2 }}>
            আপনার মোট স্বর্ণের বিক্রয় মূল্য {numberFormatter2Fraction.format(assets.gold.taka)} টাকা, রূপার বিক্রয় মূল্য{" "}
            {numberFormatter2Fraction.format(assets.silver.taka)} টাকা, যাকাতযোগ্য অর্থ/ব্যবসায়িক সম্পদ{" "}
            {numberFormatter2Fraction.format(assets.money)} টাকা, যাকাত থেকে বিয়োগযোগ্য সম্পদ{" "}
            {numberFormatter2Fraction.format(assets.nonZakatableAssets)} টাকা।
          </Typography>

          <Typography>
            সুতরাং, আপনার মোট আদায়যোগ্য যাকাতের পরিমানঃ <br />({numberFormatter2Fraction.format(assets.gold.taka)} +{" "}
            {numberFormatter2Fraction.format(assets.silver.taka)} + {numberFormatter2Fraction.format(assets.money)} -{" "}
            {numberFormatter2Fraction.format(assets.nonZakatableAssets)}) * ২.৫% ={" "}
            {numberFormatter2Fraction.format(assets.zakat)} টাকা।
          </Typography>
        </>
      );
    }

    return (
      <>
        <Typography sx={{ mb: 2 }}>আপনার নিসাব পরিমাণ সম্পদ নেই। সুতরাং আপনার উপর যাকাত ফরয নয়।</Typography>
      </>
    );
  }

  return (
    <BootstrapDialog
      onClose={onExplanationModalClose}
      aria-labelledby="customized-dialog-title"
      open={isExplanationModalOpen}
    >
      <DialogTitle sx={{ m: 0, px: 2, pb: 1, pt: 2, textAlign: "center", color: "primary.main", fontWeight: 700 }}>
        যাকাতের পরিমাণ
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={onExplanationModalClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 4,
          color: (theme) => theme.palette.error.main,
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ pt: 0 }}>{renderExplanationTexts()}</DialogContent>
    </BootstrapDialog>
  );
};
