export type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  total_volume: number;
  market_cap: number;
  market_cap_rank: number;
  circulating_supply: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency: number;
  price_change_percentage_30d_in_currency: number;
  sparkline_in_7d: {
    price: Array<number>;
  };
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
    market_cap_change_percentage_24h_usd: number;
    market_cap_percentage: {
      btc: number;
    };
  };
};
