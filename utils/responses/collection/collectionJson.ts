export interface collectionJson {
    version: string,
    href: string,
    items: item[] 
}

export interface item {
    href: string,
    data:  itemDetail[],
    links: link[]
}

export interface itemDetail {
    album: string[],
    center: string,
    title: string,
    keywords: string[],
    nasa_id: string,
    date_created: Date,
    media_type: string,
    description: string
}

interface error {
    title: string,
    code: string,
    message: string
}

export interface link {
    href: string,
    rel: string,
    prompt: string | undefined,
    render: string | undefined
}