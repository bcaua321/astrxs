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
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`

const obj: options = {
	method: "GET",
	header: {
		contentType: "application/json"
	},
	apiKey: ""
}

const LoadImages = async () => {
    const result = Request<ApodApi[]>(url, obj);
	return result;
};

export default LoadImages;