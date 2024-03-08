interface Character {
    name: string;
    justu: Array<string> | string;
    images: string;
}

export async function fetchCharacters(): Promise<Character[]> {
    try {
        const response = await fetch("https://narutodb.xyz/api/character?page=1&limit=20");
        if (!response.ok) {
            throw new Error("Failed to fetch characters");
        }
        const data = await response.json();
        return data.characters;
    } catch (error) {
        console.error("Error fetching characters:", error);
        return [];
    }
}