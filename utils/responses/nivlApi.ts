import { collectionJson } from "./collection/collectionJson";

// based on response of NASA Image and Video Library API
export default interface NivlApi {
	collection: collectionJson
}