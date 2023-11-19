import React, { useEffect, useState } from 'react'
import { FlatList, Image, View } from 'react-native';
import Header from '../components/Header';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import ButtonGroup from './ButtonGroup';
import LoadScreen from '../components/LoadScreen';
import LoadImages from './LoadImages';

export default function Home() {
	const [data, setData] = useState<ApodApi[] | null>(null);
	const [date, setDate] = useState<Date | undefined>();
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchDataFromApi = async () => {
			try {
				const result = await LoadImages();
				console.log(result);
				setData(result);
			} catch (error: any) {
				console.log(error);
				setError(error.message);
			}
		};

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

	return (
		<>
			<Header></Header>
			<ButtonGroup
				onButtonDateChange={showDatepicker}
				onButtonRandomPress={() => console.log("Fui Clicado.")} 
			/>

			{!data && <LoadScreen />}
			<View>
				<FlatList
					data={data}
					keyExtractor={(item) => item.title}
					renderItem={renderItem}
				/>
			</View>
		</>
	)
}

const renderItem = ({ item }: { item: ApodApi }) => (
	<Image width={200} height={200} source={{ uri: item.hdurl ? item.url : "" }} />
);

interface ApodApi {
	concepts: string,
	copyright: string,
	date: string,
	explanation: string,
	hdurl: string,
	media_type: string,
	title: string,
	url: string
}



