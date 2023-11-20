import React, { useState } from 'react';
import { Button, StatusBar, View, StyleSheet, ScrollView } from 'react-native'; import Home from './screens/Home/Home';
import { PaperProvider } from 'react-native-paper';

export default function App() {

	return (
		<PaperProvider>
			<View>
				<StatusBar />
				<Home />
			</View>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
});