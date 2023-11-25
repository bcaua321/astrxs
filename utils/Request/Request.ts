import options from './options';

export async function request<T>(url: string = "", option: options): Promise<T> {
	const response = await fetch(url, {
		method: option.method,
		headers: {
			"Content-Type": option.header.contentType,
		}
	});

	if (!response.ok) {
		throw new Error('Não foi possível obter os dados da API');
	}

	const result = await response.json() as T;

	return result;
}