import options from "../../utils/Request/Option";
import { Request } from '../../utils/Request/Request';

interface ApodApi {
	concepts: string,
	copyright: string,
	date: string,
	explanation: string,
	hdurl: string,
	media_type: string,
	title: string,
	url: string
}

const API_KEY = "1yl1VJCY3CHIK05N0qOTctBNualQALzzlFO8AUeg";
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

const obj: options = {
	method: "GET",
	header: {
		contentType: "application/json"
	},
	apiKey: ""
}

const LoadImages = async (date: string | undefined) : Promise<ApodApi[]> => {
	const params = date ? `date=${date}` : "count=25";
    const result = await Request<ApodApi[]>(`${url}&${params}`, obj);

	if (!Array.isArray(result)) {
		const resultArray: ApodApi[] = [result];

		return resultArray;
	}

	return result;
};
export default LoadImages;