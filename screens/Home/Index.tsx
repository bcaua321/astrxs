import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, RefreshControl, View } from 'react-native';
import Header from '../components/Header';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import ButtonGroup from './ButtonGroup';
import LoadImages from './LoadImages';
import ApodApi from '../../responses/ApodApi';
import Card from '../components/Card';
import { PropsHome } from "../../types/types";

export default function Home({ route, navigation }: PropsHome) {
	const [data, setData] = useState<ApodApi[] | null>([]);
	const [date, setDate] = useState<Date | undefined>();
	const [refreshing, setRefreshing] = useState<boolean>(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// When date is change, the flatlist will re-render
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
			// YYYY-MM-DD
			const dateFormated = date?.toISOString().split('T')[0];
			const result = await LoadImages(dateFormated);
			setData(result);
			setRefreshing(false);
		} catch (error: any) {
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
					<RefreshControl
						colors={['#663399']}
						refreshing={refreshing}
						onRefresh={() => fetchDataFromApi(undefined)}
					/>
				}
			/>
		</View>
	)
}
