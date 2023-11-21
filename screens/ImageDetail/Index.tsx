import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Appbar, Button, Props } from "react-native-paper";

type RootStackParamList = {
    Home: undefined;
    Detail: undefined
};

type props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function ImageDetail({route, navigation} : props) {

    return (
        <View>
            <StatusBar />
            <Button onPress={() => navigation.navigate('Home')}>Voltar</Button>
        </View>
    )
}

