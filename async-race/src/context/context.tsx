import { createContext, useContext } from "react";

const STUB_FUNCTION = () => undefined;
const STUB_NUMBER = 0;
const STUB_STRING = "";

export type SettingsCars = {
  colorValue: string,
  setColorValue: (color: string) => void,
  // brandValues: string[],
  // setBrandValues: (array: string[]) => void,
  // categoryValues: string[],
  // setCategoryValues: (array: string[]) => void,
  // priceValues: [number, number],
  // setPriceValues: (priceValues: [number, number]) => void,
  // stockValues: [number, number],
  // setStockValues: (stockValues: [number, number]) => void,
  // dropdownValue: string,
  // setDropdownValue: (dropdownValue: string) => void,
}


export const SettingsCarsContext = createContext<SettingsCars>({
  colorValue: STUB_STRING,
  setColorValue: STUB_FUNCTION,
  // searchValue: STUB_STRING,
  // setSearchValue: STUB_FUNCTION,
  // brandValues: [STUB_STRING],
  // setBrandValues: STUB_FUNCTION,
  // categoryValues: [STUB_STRING],
  // setCategoryValues: STUB_FUNCTION,
  // priceValues: [STUB_NUMBER, STUB_NUMBER],
  // setPriceValues: STUB_FUNCTION,
  // stockValues: [STUB_NUMBER, STUB_NUMBER],
  // setStockValues: STUB_FUNCTION,
  // dropdownValue: STUB_STRING,
  // setDropdownValue: STUB_FUNCTION,
});

export const useSettingsCarsContext = () => useContext(SettingsCarsContext);