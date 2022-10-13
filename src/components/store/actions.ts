import { PriceFilters } from "../../types/PriceFilters";
import { TransferFilters } from "../../types/TransferFilters";

export const SET_PRICE_FILTER = "setPriceFilter";
export const SET_TRANSFER_OPTIONS = "setTransferFlags";

interface SetPriceFilterAction {
  type: typeof SET_PRICE_FILTER;
  payload: PriceFilters;
}

interface SetTransferFiltersAction {
  type: typeof SET_TRANSFER_OPTIONS;
  payload: TransferFilters[];
}

export type Action = SetPriceFilterAction | SetTransferFiltersAction;

const setPriceFilter = (filter: PriceFilters): SetPriceFilterAction => {
  return { type: SET_PRICE_FILTER, payload: filter };
};

const setTransferFilters = (
  options: TransferFilters[]
): SetTransferFiltersAction => {
  return { type: SET_TRANSFER_OPTIONS, payload: options };
};

export const actions = { setPriceFilter, setTransferFilters };
