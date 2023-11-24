import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ApodApi from "../responses/ApodApi";

export type RootStackParamList = {
	Home: undefined;
	Detail: { item: ApodApi };
	Nivl: undefined;
};

export type PropsHome = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type PropsDetail = NativeStackScreenProps<RootStackParamList, 'Detail'>;
export type PropsNivl = NativeStackScreenProps<RootStackParamList, 'Nivl'>;
