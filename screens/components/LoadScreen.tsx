import { View, StyleSheet, Dimensions } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const windowHeight = Dimensions.get('window').height;

export default function LoadScreen() {
    return  (
        <View style={styles.container}>
            <ActivityIndicator animating={true} size={'large'} color={"#484848"} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight - (windowHeight / 2)
    }
})