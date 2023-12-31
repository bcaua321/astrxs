import options from "../../utils/request/options";
import { request } from '../../utils/request/request';
import ApodApi from "../../utils/responses/apodApi";
import { API_TOKEN, API_URL }  from "@env";

const obj: options = {
	method: "GET",
	header: {
		contentType: "application/json"
	},
	apiKey: ""
}

const LoadImages = async (date: string | undefined) : Promise<ApodApi[]> => {
	// If date is not set, will fetch 25 items
	const params = date ? `date=${date}` : "count=25";
	const url = `${API_URL}${API_TOKEN}`; 
	
    const result = await request<ApodApi[]>(`${url}&${params}`, obj);

	if (!Array.isArray(result)) {
		const resultArray: ApodApi[] = [result];
		return resultArray;
	}

	return result;
};

export default LoadImages;