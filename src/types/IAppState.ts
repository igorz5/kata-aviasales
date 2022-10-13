import { PriceFilters } from "./PriceFilters";
import { TransferFilters } from "./TransferFilters";

export interface IAppState {
  priceFilter: PriceFilters;
  transferFilters: TransferFilters[];
}
