export type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  total_volume: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
};

export type Exchange = {
  id: string;
  name: string;
  year_established: number;
  url: string;
  image: string;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
};

export type GlobalData = {
  data: {
    active_cryptocurrencies: number;
    total_market_cap: Record<string, number>;
    total_volume: Record<string, number>;
    market_cap_percentage: {
      btc: number;
    };
  };
};
