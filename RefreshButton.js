import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function RefreshButton() {
	return (
		<View style={styles.button}>
            <TouchableOpacity>
                <View style={styles.refresh}>
                    <Text>새로고침</Text>
                </View>
            </TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
    },
    refresh: {

    },
});
