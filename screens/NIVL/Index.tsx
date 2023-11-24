import { View, Text } from "react-native";
import { PropsNivl } from "../../types/types";
import { useEffect, useState } from "react";
import loadResource from "./LoadResource";
import NivlApi from "../../responses/NivlApi";

export default function Nivl({ route, navigation }: PropsNivl) {
    const [refreshing, setRefreshing] = useState<boolean>();
    const [data, setData] = useState<NivlApi[] | undefined>();
    const [error, setError] = useState();
    
    useEffect(() => {
		// When date is change, the flatlist will re-render
		loadData('');
	}, []);

    const loadData = async (query: string | undefined) => {
		setRefreshing(true);
		try {
			const result = await loadResource('');
			setData(result);
			setRefreshing(false);
		} catch (error: any) {
			setError(error.message);
		}
	};

    return (
        <View>
            <Text>Hello World :)</Text>
        </View>
    )
}