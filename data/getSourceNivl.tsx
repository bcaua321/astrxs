export type GeneralResponse = {
    collection?: NivlApiInfo
}

export type NivlApiInfo = {
    version?: string,
    href?: string,
    items?: NivlResponse[] 
}

export type NivlResponse = {
    href?: string,
    data?: NivlData[],
    links?: NivlResponseLinks[]
}

export type NivlResponseLinks = {
    href?: string,
    rel?: string,
    render?: string
}

export type NivlData = {
    description?: string,
    title?: string,
    photographer?: string,
    location: string,
    nasa_id: string,
    date_created: string,
    keywords: string[],
    media_type: string,
    center: string
}
        
export async function getSource({ input } : {input: string}) : Promise<GeneralResponse | undefined> {
    const url = `https://images-api.nasa.gov/search?q=${input}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const jsonData : GeneralResponse = await response.json();
        return jsonData;

    }  catch (error) {
        console.error('Erro ao buscar dados:', error);
    }

    return undefined;
}