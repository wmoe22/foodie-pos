import { AppSlice, GetAppDataOptions, Theme } from "@/types/app";
import { config } from "@/utils/config";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setAddonCategories } from "./addonCategorySlice";
import { setAddons } from "./addonSlice";
import { setCompany } from "./companySlice";
import { setDisabledLocationMenuCategories } from "./disabledLocationMenuCategorySlice";
import { setDisabledLocationMenus } from "./disabledLocationMenuSlice";
import { setLocations } from "./locationSlice";
import { setMenuAddonCategories } from "./menuAddonCategorySlice";
import { setMenuCategoryMenus } from "./menuCategoryMenuSlice";
import { setMenuCategories } from "./menuCategorySlice";
import { setMenus } from "./menuSlice";
import { setOrders } from "./orderSlice";
import { setTables } from "./tableSlice";

const initialState: AppSlice = {
  init: false,
  theme: "light",
  isLoading: false,
  error: null,
};

export const fetchAppData = createAsyncThunk(
  "app/fetchAppData",
  async (options: GetAppDataOptions, thunkApi) => {
    const { tableId, onSuccess, onError } = options;
    try {
      const appDataUrl = tableId
        ? `${config.orderApiUrl}/app?tableId=${tableId}`
        : `${config.backofficeApiUrl}/app`;
      const response = await fetch(appDataUrl);
      const appData = await response.json();
      const {
        locations,
        menuCategories,
        menus,
        menuCategoryMenus,
        menuAddonCategories,
        addonCategories,
        addons,
        tables,
        disabledLocationMenuCategories,
        disabledLocationMenus,
        orders,
        company,
      } = appData;
      thunkApi.dispatch(setInit(true));
      thunkApi.dispatch(setLocations(locations));
      thunkApi.dispatch(setMenuCategories(menuCategories));
      thunkApi.dispatch(setMenus(menus));
      thunkApi.dispatch(setMenuCategoryMenus(menuCategoryMenus));
      thunkApi.dispatch(setMenuAddonCategories(menuAddonCategories));
      thunkApi.dispatch(setAddonCategories(addonCategories));
      thunkApi.dispatch(setAddons(addons));
      thunkApi.dispatch(setTables(tables));
      thunkApi.dispatch(
        setDisabledLocationMenuCategories(disabledLocationMenuCategories)
      );
      thunkApi.dispatch(setDisabledLocationMenus(disabledLocationMenus));
      thunkApi.dispatch(setOrders(orders));
      thunkApi.dispatch(setCompany(company));
      thunkApi.dispatch(
        setTheme((localStorage.getItem("theme") as Theme) ?? "light")
      );
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInit: (state, action) => {
      state.init = action.payload;
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setInit, setTheme } = appSlice.actions;
export default appSlice.reducer;
