// src/namesdao.ts

import axios from 'axios';

interface NameResponse {
  address?: string;
  name: string;
  nft_coin_id: string;
  uris: string[];
  meta_uris: string[];
  created_block: number;
  last_transferred_block: number;
  expiry_block: number;
}

export class Namesdao {
  private static instance: Namesdao;

  private constructor() {}

  public static getInstance(): Namesdao {
    if (!Namesdao.instance) {
      Namesdao.instance = new Namesdao();
    }
    return Namesdao.instance;
  }

  public async getNameAddress(name: string): Promise<string> {
    // Trim and remove ".xch" if it exists
    const trimmedName = name.trim().replace(/\.xch$/, '');
    const response = await axios.get(`https://namesdaolookup.xchstorage.com/${trimmedName.toLowerCase()}.json`);

    if (response.data && 'address' in response.data) {
      return response.data.address;
    }
    
    throw new Error('Address not found for the given name.');
  }
}
