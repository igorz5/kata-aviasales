import { Action, SET_PRICE_FILTER, SET_TRANSFER_OPTIONS } from "./actions";
import { IAppState } from "../../types/IAppState";
import { PriceFilters } from "../../types/PriceFilters";

const initialState: IAppState = {
  priceFilter: PriceFilters.Cheap,
  transferFilters: [],
};

export const reducer = (state = initialState, action: Action): IAppState => {
  switch (action.type) {
    case SET_PRICE_FILTER:
      return { ...state, priceFilter: action.payload };
    case SET_TRANSFER_OPTIONS:
      return { ...state, transferFilters: action.payload };
    default:
      return state;
  }
};
