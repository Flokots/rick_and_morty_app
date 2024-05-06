const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const load = async ({fetch, params}) => {

    const fetchCharacter = async(id: string) => {
        try {
            const response = await fetch(`${BASE_URL}/${id}`);
            const data = await response.json();
            return data;
        } catch(error) {
            console.error('Error fetching character:', error);
            return 'Error fetching character';
        }
    }

    const characterData = await fetchCharacter(params.characterId);
    return {
        character: characterData,
    };
}
