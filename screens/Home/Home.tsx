import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, RefreshControl, ScrollView, View } from 'react-native';
import Header from '../components/Header';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import ButtonGroup from './ButtonGroup';
import LoadImages from './LoadImages';
import ApodApi from '../Responses/ApodApi';
import Card from '../components/Card';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
	Home: undefined;
	Detail: { item: ApodApi }
};

type props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ route, navigation }: props) {
	const [data, setData] = useState<ApodApi[] | null>([]);
	const [date, setDate] = useState<Date | undefined>();
	const [error, setError] = useState(null);
	const [refreshing, setRefreshing] = useState(true);

	useEffect(() => {
		fetchDataFromApi(date);
	}, [date]);

	const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
		const currentDate = selectedDate;
		setDate(currentDate);
	}

	const showMode = (currentMode: any) => {
		DateTimePickerAndroid.open({
			value: date ? date : new Date(),
			onChange,
			mode: currentMode,
			display: "calendar"
		});
	};

	const showDatepicker = () => {
		showMode('date');
	};

	const fetchDataFromApi = async (date: Date | undefined) => {
		setRefreshing(true);
		try {
			const result = await LoadImages(date?.toISOString().split('T')[0]);

			setData(result);
			setRefreshing(false);
		} catch (error: any) {
			console.log(error);
			setError(error.message);
		}
	};
	
	const renderItem = ({ item }: { item: ApodApi }) => (
		<Pressable onPress={() => navigation.navigate('Detail', { item })}>
			<Card item={item} />
		</Pressable>
	);

	return (
		<View>
			<FlatList
				ListHeaderComponent={<View>
					<Header></Header>
					<ButtonGroup
						onButtonDateChange={showDatepicker}
					/>
				</View>}
				data={data}
				extraData={date}
				keyExtractor={(item) => item.title}
				renderItem={renderItem}
				refreshControl={
					<RefreshControl colors={['#663399']} refreshing={refreshing} onRefresh={fetchDataFromApi} />
				}
			/>
		</View>
	)
}
