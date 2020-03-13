import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function SettingButton() {
	return (
		<View style={styles.button}>
            <TouchableOpacity>
                <View style={styles.setting}>
                    <Text>설정</Text>
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
    setting: {

    },
});
