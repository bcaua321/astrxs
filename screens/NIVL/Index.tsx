import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	FlatList,
	Pressable,
	Image
} from "react-native";
import { PropsNivl } from "../../types/types";
import { useEffect, useState } from "react";
import loadResource from "./LoadResource";
import NivlApi from "../../utils/responses/nivlApi";
import { TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';

import { item } from "../../utils/responses/collection/collectionJson";

export default function Nivl({ route, navigation }: PropsNivl) {
	const [refreshing, setRefreshing] = useState<boolean>();
	const [collection, setCollection] = useState<NivlApi | undefined>();
	const [data, setData] = useState<item[] | undefined>();
	const [error, setError] = useState();
	const [searchStr, setSearchStr] = useState("");

	useEffect(() => {
		loadData('');
	}, []);

	const loadData = async (query: string | undefined) => {
		setRefreshing(true);
		try {
			const result = await loadResource('');

			setCollection(result);
			setData(result?.collection.items);
			console.log(data);

			setRefreshing(false);
		} catch (error: any) {
			setError(error.message);
		}
	};

	const renderItem = ({ item }: { item: item }) => (

		<Pressable>
			<View style={[styles.container, styles.elevation]}>
				<View style={styles.head}>
					<Image style={styles.image} source={{ uri: item.links[0].href }} />
				</View>
				<View style={styles.containerInner}>
					<View style={styles.description}>
						<Text style={styles.title}>{item.data[0].title}</Text>
						<Text style={styles.date}>Date: {item.data[0].date_created.toString()}</Text>
					</View>
				</View>
			</View>
		</Pressable>
	);


	return (
		<View style={[{ flex: 1 }, styles.container]}>
			<View>
				<View style={styles.searchSection}>
					<Icon style={styles.searchIcon} name="search" size={18} color="#bdbdbd" />
					<TextInput
						style={styles.input}
						mode="outlined"
						placeholder="Apollo 11"
						placeholderTextColor="#ccc"
						value={searchStr}
						onChangeText={(searchString) => { setSearchStr(searchString) }}
						outlineColor="#FFFFFF"
						activeOutlineColor="#FFFFFF"
						cursorColor="#000"
						right={
							searchStr && <TextInput.Icon icon="close" onPress={() => setSearchStr("")} />
						}
					/>
				</View>
				<FlatList
					data={data}
					keyExtractor={(item) => item.href}
					renderItem={renderItem}
				/>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight,
		marginBottom: StatusBar.currentHeight,
		width: '100%',
		display: 'flex',
		alignItems: 'center'
	},
	searchSection: {
		width: '85%',
		borderRadius: 5,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	searchIcon: {
		paddingLeft: 15,
		paddingRight: 0,
	},
	input: {
		flex: 1,
		backgroundColor: '#ffffff',
		color: '#424242',
		padding: 0
	},
	containerInner: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 15,
		height: 'auto',
		padding: 'auto'
	},
	head: {
		height: 500 / 1.3,
	},
	image: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		width: 250,
		height: 500 / 1.3,
		resizeMode: 'cover'
	},
	description: {
		width: 200
	},
	title: {
		flexWrap: 'wrap',
		fontFamily: 'Roboto',
		fontSize: 15,
		fontWeight: '800',
		color: '#555555'
	},
	date: {
		flexWrap: 'wrap',
		fontSize: 15,
		fontWeight: '700',
		color: '#797575',
		marginTop: 15
	},
	button: {
		fontFamily: 'Roboto',
		fontSize: 15,
		fontWeight: '600',
		textDecorationLine: 'underline'
	},
	elevation: {
		elevation: 20,
		shadowColor: '#615e5e',
	}
})