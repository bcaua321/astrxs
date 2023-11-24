import React from 'react';
import Home from './screens/Home/Index';
import ImageDetail from './screens/ImageDetail/Index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/types';
import Nivl from './screens/NIVL/Index';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<>
			<NavigationContainer> 
				<Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Nivl">
					<Stack.Screen name="Home"  component={Home} />
					<Stack.Screen name="Detail" component={ImageDetail} />
					<Stack.Screen name="Nivl" component={Nivl} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}