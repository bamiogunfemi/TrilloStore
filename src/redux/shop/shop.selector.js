import { createSelector } from "reselect";

const selectShop = state => state.directory;
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
