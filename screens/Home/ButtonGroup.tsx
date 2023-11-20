import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import React from "react";
import { GestureResponderEvent, View, StyleSheet, ViewStyle, StyleProp } from "react-native";
import { Button } from "react-native-paper";

export default function ButtonGroup(
    {
        onButtonDateChange,
    }: ButtonProps) {
    return (
        <View style={styles.buttonGroup}>
            <Button icon="calendar-month" mode="outlined" onPress={onButtonDateChange}>
                Select Date
            </Button>
        </View>
    )
}

interface ButtonProps {
    onButtonDateChange: () => void,
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