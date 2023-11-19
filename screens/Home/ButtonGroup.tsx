import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import React from "react";
import { GestureResponderEvent, View, StyleSheet, ViewStyle, StyleProp } from "react-native";
import { Button } from "react-native-paper";

export default function ButtonGroup(
    {
        onButtonDateChange,
        onButtonRandomPress,
    }: ButtonProps) {
    return (
        <View style={styles.buttonGroup}>
            <Button icon="dice-3-outline" mode="contained" onPress={onButtonRandomPress}>
                Random
            </Button>
            <Button icon="calendar-month" buttonColor='#484848' mode="contained" onPress={onButtonDateChange}>
                Selecionar Data
            </Button>
        </View>
    )
}

interface ButtonProps {
    onButtonDateChange: () => void,
    onButtonRandomPress: () => void
}

const styles = StyleSheet.create({
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 5,
        marginEnd: 10,
        marginBottom: 30
    }
});
// DCD5D5