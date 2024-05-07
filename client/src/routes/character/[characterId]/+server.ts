// src/routes/character/[characterId]/+server.ts
import { toggleFavorite } from '$lib/server/database';

export async function PUT({ locals, params }) {
    const userId = locals.user.id;
    const characterId = params.characterId;

    try {
        await toggleFavorite(userId, Number(characterId))
        return new Response(null, { status: 204 });

    } catch (error) {
        console.error('Error toggling favorite:', error);
    }
}
