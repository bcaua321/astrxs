import options from "../../utils/request/options";
import NivlApi from "../../utils/responses/nivlApi";
import { request } from '../../utils/request/request';
import { API_URL_NIVL }  from "@env";

const obj: options = {
	method: "GET",
	header: {
		contentType: "application/json"
	},
	apiKey: ""
}

const loadResource =  async (query: string | undefined) : Promise<NivlApi | undefined> => {
	const url = `${API_URL_NIVL}${query}&media_type=image&page_size=25`; 
    const result = await request<NivlApi>(url, obj);
	 
	return result;
};

export default loadResource;