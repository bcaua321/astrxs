// based on response of APOD API from Nasa
export default interface ApodApi {
	concepts: string,
	copyright: string,
	date: string,
	explanation: string,
	hdurl: string,
	media_type: string,
	title: string,
	url: string
}