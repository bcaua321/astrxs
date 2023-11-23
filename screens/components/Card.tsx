import { Image, View, Text, StyleSheet, Dimensions} from 'react-native';
import ApodApi from '../../responses/ApodApi';
import { Button } from 'react-native-paper';


const windowWidth = Dimensions.get('window').width;

export default function Card({ item } : { item: ApodApi }) {
    const imgUrl = item.url ? item.url : item.hdurl;
    
    return (
        <View style={[style.container, style.elevation]}>
            <View style={style.head}>
                <Image style={style.image} source={{ uri : imgUrl}} />
            </View>
            <View style={style.containerInner}>
                <View style={style.description}>
                    <Text style={style.title}>{item.title}</Text>
                    <Text style={style.date}>Date: {item.date}</Text>
                </View>
                <Button mode="text">
                    <Text style={style.button}>
                        About
                    </Text>
                </Button>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: windowWidth - (windowWidth / 0.1),
        height: 500,
        margin: 10,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: "#FFF"
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
        width: 'auto',
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
    },
})