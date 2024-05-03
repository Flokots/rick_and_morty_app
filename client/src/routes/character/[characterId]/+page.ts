const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const load = async ({fetch, params}) => {
    console.log(params);

    const fetchCharacter = async(id: string) => {
        try {
            const response = await fetch(`${BASE_URL}/${id}`);
            const data = await response.json();
            console.log(data);
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
