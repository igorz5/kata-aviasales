import { ITicket } from "./ITicket";
import { PriceFilters } from "./PriceFilters";
import { TransferFilters } from "./TransferFilters";

export interface IAppState {
  priceFilter: PriceFilters;
  transferFilters: TransferFilters[];
  searchId: string | null;
  error: string | null;
  tickets: ITicket[];
  isLoading: boolean;
  currentTicketsCount: number;
  total: number;
  stop: boolean;
}
