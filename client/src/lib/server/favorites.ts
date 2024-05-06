// src/lib/server/favorites.ts
import { db } from '$lib/server/database';
import { favorites } from '../stores';

export async function loadFavorites(userId: string) {
  const favoritesData = await db.favorite.findMany({
    where: { userId: userId },
    include: { character: true },
  });
  favorites.set(favoritesData);
}

export async function toggleFavorite(userId: string, characterId: number) {
    const isFavorite = await checkIfFavorite(userId, characterId);
    if (isFavorite) {
      // First, find the favorite entry
      const favorite = await db.favorite.findFirst({
        where: {
          AND: [
            { userId: userId },
            { characterId: characterId },
          ],
        },
      });
  
      // Then, delete the found favorite entry
      if (favorite) {
        await db.favorite.delete({ where: { id: favorite.id } });
        favorites.update(favorites => favorites.filter(f => f.characterId!== characterId));
      }
    } else {
      await db.favorite.create({
        data: {
          user: { connect: { id: userId } },
          character: { connect: { id: characterId } },
        },
      });
      favorites.update(favorites => [...favorites, {userId, characterId }]);
    }
  }
  
export async function checkIfFavorite(userId: string, characterId: number): Promise<boolean> {
    const favorite = await db.favorite.findFirst({
        where: {
          AND: [
            { userId: userId },
            { characterId: characterId },
          ],
        },
      });
      
    return!!favorite;
  }
