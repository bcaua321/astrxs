import { View, StyleSheet, Dimensions } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const windowHeight = Dimensions.get('window').height;

export default function LoadScreen() {
    return  (
        <View style={[{flex: 1}, styles.container]}>
            <ActivityIndicator animating={true} size={'large'} color={"#663399"} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginTop: windowHeight - (windowHeight / 1.5)
    }
})