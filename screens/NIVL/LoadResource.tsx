import options from "../../utils/Request/Option";
import { Request } from '../../utils/Request/Request';
import NivlApi from "../../responses/NivlApi";
import { API_TOKEN, API_URL_NIVL }  from "@env";

const obj: options = {
	method: "GET",
	header: {
		contentType: "application/json"
	},
	apiKey: ""
}

const loadResource = async (query: string | undefined) : Promise<NivlApi[]> => {
	const url = `${API_URL_NIVL}`; 
	
    console.log(`${url}apollo 11&media_type=image`);
    const result = await Request<NivlApi[]>(`${url}apollo 11&media_type=image`, obj);
    console.log(`${result}`);
	return result;
};

export default loadResource;