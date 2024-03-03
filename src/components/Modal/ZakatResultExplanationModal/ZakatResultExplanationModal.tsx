import { Dialog, DialogContent, DialogTitle, IconButton, Typography, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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

      <DialogContent sx={{ pt: 0 }}>
        <Typography sx={{ mb: 2 }}>
          আপনার মোট স্বর্ণের বিক্রয় মূল্য 9878 টাকা, রূপার বিক্রয় মূল্য 16546 টাকা, যাকাতযোগ্য অর্থ/ব্যবসায়িক সম্পদ
          23434 টাকা, যাকাত থেকে বিয়োগযোগ্য সম্পদ 987 টাকা।
        </Typography>

        <Typography>
          সুতরাং, মোট আদায়যোগ্য যাকাতের পরিমানঃ <br />
          (45615 + 4684 + 897213 - 155564) * 2.5% = 8952 টাকা।
        </Typography>
      </DialogContent>
    </BootstrapDialog>
  );
};
