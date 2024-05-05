// src/lib/characterService.ts
import axios from 'axios';
import type { ApiResponse } from '../types';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

  export async function getCharacters(page: number = 1): Promise<ApiResponse | string> {
    try {
      const response = await axios.get<ApiResponse>(`${BASE_URL}?page=${page}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching characters:', error);
      return 'Error fetching characters';
    }
  }
  
  