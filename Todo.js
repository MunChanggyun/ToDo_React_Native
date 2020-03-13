import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Todo() {
	return (
		<View style={styles.button}>
            <TouchableOpacity style={styles.setting} />
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
    },
    setting: {

    },
});
