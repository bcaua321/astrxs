import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import textStyles from '../../styles/textStyles';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={textStyles.title}>APOD</Text>
            <Text style={textStyles.subtitle}>Astronomy Picture of the Day</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
    }
});