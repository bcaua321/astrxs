import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ApodApi from "../responses/ApodApi";

export type RootStackParamList = {
	Home: undefined;
	Detail: { item: ApodApi }
};

export type PropsHome = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type PropsDetail = NativeStackScreenProps<RootStackParamList, 'Detail'>;