const allowedInputKeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowRight",
];

export const numberFormatter = new Intl.NumberFormat("bn-BD", { maximumFractionDigits: 0 });

export const digitValidator = (event: React.KeyboardEvent<HTMLDivElement>) => {
  if (!allowedInputKeys.includes(event.key)) {
    event.preventDefault();
  }
};
