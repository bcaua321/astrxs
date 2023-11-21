import React, { useState } from 'react';
import { Button, StatusBar, View, StyleSheet, ScrollView } from 'react-native'; import Home from './screens/Home/Home';
import { PaperProvider } from 'react-native-paper';
import ImageDetail from './screens/ImageDetail/Index';
import { NavigationContainer, createNavigationContainerRef, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


type RootStackParamList = {
	Home: undefined;
	Detail: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<>
			<NavigationContainer> 
				<Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Detail">
					<Stack.Screen name="Home"  component={Home} />
					<Stack.Screen name="Detail" component={ImageDetail} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
});