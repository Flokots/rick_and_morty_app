// src/lib/server/database.ts
import type { Character } from '$lib/types';
import prisma from '@prisma/client';

export const db = new prisma.PrismaClient();

export async function toggleFavorite(userId: string, characterId: number) {
  try {
    const existingFavorite = await db.favorite.findFirst({
      where: {
        AND: [
          { userId: userId },
          { characterId: characterId },
        ],
      },
    });

    if (existingFavorite) {
      await removeFavorite(existingFavorite.id);
      return { message: "Favorite removed" };
    } else {
      await addFavorite(userId, characterId);
      return { message: "Favorite added" };
    }
  } catch (error) {
    throw new Error(`Could not toggle favorite: ${error}`);
  }
}

export async function addFavorite(userId: string, characterId: number) {
  try {
    return await db.favorite.create({
      data: {
        userId: userId,
        characterId: characterId,
      }
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

export async function addCharacterToDatabase(character: Character) {
  try {
    const existingCharacter = await db.character.findUnique({
      where: { id: character.id }
    });

    if (!existingCharacter) {
      await db.character.create({
        data: {
          id: character.id,
          name: character.name,
          image: character.image,
          status: character.status,
          species: character.species,
          gender: character.gender,
          origin: character.origin.name,
          location: character.location.name,
          created: character.created
        }
      });
    }

    console.log(`${character.name} added to the database successfully`);
  } catch (error) {
    throw new Error(`Failed to add character to the database: ${error}`);
  }
}
