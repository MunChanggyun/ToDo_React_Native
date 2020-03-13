import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import RefreshButton from './RefreshButton';
import SettingButton from './SettingButton';
import Weather from './Weather';
import Todo from './Todo';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.buttonwrap}>
				<RefreshButton />
				<SettingButton />
			</View>
				<View style={styles.weatherwrap}>
			</View>
			<ScrollView style={styles.todowrap}>
				<Todo />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonwrap: {
	},
	weatherwrap: {

	},
	todowrap: {

	},
});
