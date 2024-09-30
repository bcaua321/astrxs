export type ApodResponse = {
    resource?: {
        image_set: string
    },
    concept_tags?: string,
    date?: string,
    title?: string,
    url?: string,
    explanation?: string,
    copyright?: string
}

export async function getImages({ date } : {date: string}) : Promise<ApodResponse | undefined> {
    const secret = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${secret}&date=${date}`;
    const urlDemo = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`;

    try {
        const response = await fetch(urlDemo);

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const jsonData : ApodResponse = await response.json();
        return jsonData;
    }  catch (error) {
        console.error('Erro ao buscar dados:', error);
    }

    return undefined;
}