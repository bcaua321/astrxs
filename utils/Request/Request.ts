import options from './options';

export async function Request<T>(url: string = "", option: options): Promise<T> {
	const response = await fetch(url, {
		method: option.method,
		headers: {
			"Content-Type": option.header.contentType,
		}
	});

	if (!response.ok) {
		throw new Error('Não foi possível obter os dados da API');
	}

	let res = await response.json();
	console.log(`${res}`);

	const result: T = await response.json();

	return result;
}