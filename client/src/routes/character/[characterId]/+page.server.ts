import { getCharacterById } from '$lib/services/characterService';
import { addCharacterToDatabase } from '$lib/server/database';


export const load = async ({ params }) => {

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
