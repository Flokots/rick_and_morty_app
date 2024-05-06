// lib/server/database.ts
import prisma from '@prisma/client'

export const db = new prisma.PrismaClient()

export async function addFavorite(userId: string, characterId: number) {
  try {
    return await db.favorite.create({
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
        character: {
          connect: {
            id: characterId,
          },
        },
      },
    });
  } catch (error) {
    throw new Error(`Could not add favorite: ${error}`);
  }
}

export async function removeFavorite(favoriteId: number) {
  try {
    return await db.favorite.delete({
      where: {
        id: favoriteId,
      },
    });
  } catch (error) {
    throw new Error(`Could not remove favorite: ${error}`);
  }
}

export async function getFavoritesByUserId(userId: string) {
  try {
    return await db.favorite.findMany({
      where: {
        userId: userId,
      },
      include: {
        character: true,
      },
    });
  } catch (error) {
    throw new Error(`Could not get favorites: ${error}`);
  }
}
