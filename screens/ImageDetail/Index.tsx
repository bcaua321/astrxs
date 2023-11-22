import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Image, Text, ScrollView, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import { PropsDetail } from "../../types/types";
const windowWidth = Dimensions.get('window').width;

export default function ImageDetail({ route, navigation }: PropsDetail) {
    const { item } = route.params;
    const imgUrl = item.url ? item.url : item.hdurl;

    return (
        <>
            <View>
                <StatusBar backgroundColor={"#6d5783"} />
                <View style={styles.container}>
                    <Button icon="arrow-left" mode="text" onPress={() => navigation.navigate('Home')}>
                        Back
                    </Button>
                </View>
            </View>
            <ScrollView>
                <View>
                    <View>
                        <Image style={styles.image} source={{ uri: imgUrl }} />
                        <View style={styles.head}>
                            <Text style={[styles.font, styles.title]}>{item.title} - ({item.date})</Text>
                            <Text style={[styles.font]}>{item.copyright}</Text>
                        </View>
                    </View>
                    <View style={
                        {
                            width: windowWidth,
                            display: "flex",
                            justifyContent: 'center',
                            alignItems: 'center'
                        }
                    }>
                        <Text style={[styles.font, styles.descriptionText]}>{item.explanation}</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20
    },
    head: {
        width: 'auto',
        height: 80,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 'auto',
        height: 300,
        resizeMode: 'cover'
    },
    font: {
        fontFamily: 'Roboto'
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
        color: '#797575',
        marginTop: 20
    },
    descriptionText: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 17,
        fontWeight: '500',
        color: '#797575',
        padding: 18,
        lineHeight: 27,
        letterSpacing: 1
    }

});