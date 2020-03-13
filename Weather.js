import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Weather() {
	return (
		<View style={styles.weather}>
		</View>
	);
}

const styles = StyleSheet.create({
	weather: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
    },
});
