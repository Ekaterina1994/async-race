import { createContext, useContext } from "react";

const STUB_FUNCTION = () => undefined;
const STUB_STRING = "";

export type SettingsCars = {
  colorValue: string,
  setColorValue: (color: string) => void,
  nameValue: string,
  setNameValue: (color: string) => void,
}


export const SettingsCarsContext = createContext<SettingsCars>({
  colorValue: STUB_STRING,
  setColorValue: STUB_FUNCTION,
  nameValue: STUB_STRING,
  setNameValue: STUB_FUNCTION,
});

export const useSettingsCarsContext = () => useContext(SettingsCarsContext);