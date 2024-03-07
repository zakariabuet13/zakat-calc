import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Nisab } from "../constants";

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
    updateGoldAmount: (state, action: PayloadAction<{ vori: number; gram: number; taka: number }>) => {
      state.gold = action.payload ?? 0;

      calculateZakat(state);
    },
    updateSilverAmount: (state, action: PayloadAction<{ vori: number; gram: number; taka: number }>) => {
      state.silver = action.payload ?? 0;

      calculateZakat(state);
    },
    updateMoneyAmount: (state, action: PayloadAction<number>) => {
      state.money = action.payload ?? 0;

      calculateZakat(state);
    },
    updateNonZakatableAssetsAmount: (state, action: PayloadAction<number>) => {
      state.nonZakatableAssets = action.payload ?? 0;

      calculateZakat(state);
    },
  },
});

const calculateZakat = (state: AssetsState) => {
  state.totalZakatableAssets = state.gold.taka + state.silver.taka + state.money - state.nonZakatableAssets;

  if (state.silver.vori === 0 && state.money === 0) {
    if (state.gold.vori >= 7.5) {
      state.zakat = Math.ceil(state.totalZakatableAssets * 0.025);
      return;
    }

    state.zakat = 0;
    return;
  }

  if (state.gold.vori === 0 && state.money === 0) {
    if (state.silver.vori >= 52.5) {
      state.zakat = Math.ceil(state.totalZakatableAssets * 0.025);
      return;
    }

    state.zakat = 0;
    return;
  }

  if (state.totalZakatableAssets >= Nisab) {
    state.zakat = Math.ceil(state.totalZakatableAssets * 0.025);
    return;
  }

  state.zakat = 0;
};

export const { updateGoldAmount, updateSilverAmount, updateMoneyAmount, updateNonZakatableAssetsAmount } =
  assetsSlice.actions;

export default assetsSlice.reducer;
