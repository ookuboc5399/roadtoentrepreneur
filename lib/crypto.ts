const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface Coin {
  symbol: string;
  name: string;
  price: string;
  price_change_24h: string;
  market_cap?: string;
  volume_24h?: string;
  description?: string;
  last_updated: string;
}

export interface UpcomingCoin {
  symbol: string;
  name: string;
  launch_date: string;
  description: string;
}

export interface NewListing {
  symbol: string;
  name: string;
  listing_date: string;
  initial_price: string;
  current_price: string;
}

export async function getCoinBySymbol(symbol: string): Promise<Coin> {
  const response = await fetch(`${API_BASE_URL}/api/crypto/coins/${symbol}/`);
  if (!response.ok) {
    throw new Error('Failed to fetch coin data');
  }
  return response.json();
}

export async function getTrendingCoins(): Promise<Coin[]> {
  const response = await fetch(`${API_BASE_URL}/api/crypto/trending/`);
  if (!response.ok) {
    throw new Error('Failed to fetch trending coins');
  }
  return response.json();
}

export async function searchCoins(query: string): Promise<Coin[]> {
  const response = await fetch(`${API_BASE_URL}/api/crypto/search/?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Failed to search coins');
  }
  return response.json();
}

export async function getUpcomingCoins(): Promise<UpcomingCoin[]> {
  const response = await fetch(`${API_BASE_URL}/api/crypto/upcoming/`);
  if (!response.ok) {
    throw new Error('Failed to fetch upcoming coins');
  }
  return response.json();
}

export async function getNewListings(): Promise<NewListing[]> {
  const response = await fetch(`${API_BASE_URL}/api/crypto/new-listings/`);
  if (!response.ok) {
    throw new Error('Failed to fetch new listings');
  }
  return response.json();
}
