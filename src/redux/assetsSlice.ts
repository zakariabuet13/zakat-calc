import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AssetsState {
  gold: {
    vori: number;
    gram: number;
    taka: number;
  };
  silver: {
    vori: number;
    gram: number;
    taka: number;
  };
  money: number;
  nonZakatableAssets: number;
  totalZakatableAssets: number;
  zakat: number;
}

const initialState: AssetsState = {
  gold: {
    vori: 0,
    gram: 0,
    taka: 0,
  },
  silver: {
    vori: 0,
    gram: 0,
    taka: 0,
  },
  money: 0,
  nonZakatableAssets: 0,
  totalZakatableAssets: 0,
  zakat: 0,
};

export const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    updateMoneyAmount: (state, action: PayloadAction<number>) => {
      state.money = action.payload ?? 0;
    },
  },
});

export const { updateMoneyAmount } = assetsSlice.actions;

export default assetsSlice.reducer;
