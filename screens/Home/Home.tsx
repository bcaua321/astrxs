import React, { useEffect, useState } from 'react'
import { FlatList, Image, RefreshControl, ScrollView, View } from 'react-native';
import Header from '../components/Header';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import ButtonGroup from './ButtonGroup';
import LoadScreen from '../components/LoadScreen';
import LoadImages from './LoadImages';
import ApodApi from '../Responses/ApodApi';
import Card from '../components/Card';

export default function Home() {
	const [data, setData] = useState<ApodApi[] | null>([]);
	const [date, setDate] = useState<Date | undefined>();
	const [error, setError] = useState(null);
	const [refreshing, setRefreshing] = useState(true);

	useEffect(() => {
		fetchDataFromApi();
	}, []);

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

	const fetchDataFromApi = async () => {
		setRefreshing(true);
		try {
			const result = await LoadImages();
			setData(result);
			setRefreshing(false);
		} catch (error: any) {
			console.log(error);
			setError(error.message);
		}
	};

	console.log(`Refreshing: ${refreshing}`)
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
				keyExtractor={(item) => item.title}
				renderItem={renderItem}
				refreshControl={
					<RefreshControl colors={['#663399']} refreshing={refreshing} onRefresh={fetchDataFromApi} />
				}
			/>
		</View>
	)
}

const renderItem = ({ item }: { item: ApodApi }) => (
	<Card item={item} />
);