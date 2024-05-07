import { addCharacterToDatabase } from '$lib/server/database';
import { getCharacterById } from '$lib/services/characterService';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ locals, params }) => {
    if (!locals.user) {
        redirect(302, '/')
      }
      
    try {
        // Fetch character data
        const characterData = await getCharacterById(params.characterId);

        // Add character to the database
        await addCharacterToDatabase(characterData);

        return {
            character: characterData,
        };

    } catch (error) {
        console.error('Error loading character:', error);
        return {
            status: 500,
            error: 'Failed to load character',
        };
    }
}
