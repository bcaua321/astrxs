import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	FlatList,
	Pressable,
	Image,
	Dimensions
} from "react-native";
import { PropsNivl } from "../../types/types";
import { useEffect, useState } from "react";
import loadResource from "./LoadResource";
import NivlApi from "../../utils/responses/nivlApi";
import { TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import { item, itemDetail, link } from "../../utils/responses/collection/collectionJson";

const windowWidth = Dimensions.get('window').width;


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

	const renderItem = ({ item }: { item: item }) => {
		const itemDetail: itemDetail = item.data[0];
		const itemLinks: link = item.links[0];

		return (
			<Pressable>
				<View style={styles.elevation}>
					<Image style={styles.image} source={{ uri: itemLinks.href }} />	
				</View>
			</Pressable>
		)
	};

	return (
		<View>
			<View style={styles.container}>
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
			</View>
			<View style={styles.images}>
				<FlatList
					columnWrapperStyle={{ justifyContent: 'space-around' }}
					numColumns={2}
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
		marginTop: StatusBar.currentHeight as number + 10,
		marginBottom: 25,
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
	images: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center'
	},
	image: {
		borderRadius: 10,
		margin: 10,
		height: 170,
		width: 170,
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
	elevation: {
		elevation: 20,
		shadowColor: '#615e5e',
	}
})