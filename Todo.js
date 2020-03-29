import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import PropTypes from "prop-types";

const { width, height } = Dimensions.get("window");

export default function Todo(props) {
	// const propTypes = {
	// 	id: PropTypes.string.isRequired,
	// 	time:  PropTypes.string.isRequired,
	// 	schedule:  PropTypes.string.isRequired,
	// 	isComplete: PropTypes.bool.isRequired 
	// }

	const [id , setId] = useState(props.id);
	const [time , setTime] = useState(props.time);
	const [schedule , setSchedule] = useState(props.schedule);
	const [isComplete , setIsComplete] = useState(props.isComplete);
	const [isEdit , setIsEdit] = useState(false);
	console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
	console.log("props" , props);
	console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

	return (
		<View style={styles.container}>
			<View style={styles.time}>
				<Text>{time}</Text>
			</View>
			<View style={styles.content}>
				<Text>{schedule}</Text>
			</View>
			<View style={styles.imageArea}>
				<TouchableOpacity style={styles.iconWrap}>
					<Image style={styles.icon} source={require('./images/check.png')}/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconWrap} >
					<Image style={styles.icon} source={require('./images/pencil.png')}/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconWrap} >
					<Image style={styles.icon} source={require('./images/cross.png')}/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%' ,
		alignItems: 'center',
		flexDirection: "row",
		justifyContent: "space-between"
	},
	imageArea: {
		flex: 0.5,
		height: '100%',
		alignItems: 'center',
		flexDirection: "row",
		justifyContent: "space-between"
	},
	time: {
		width: 40,
	},
	content: {
		flex: 1
	},
	iconWrap: {
		flex: 1,
		height: '100%'
	},
	icon: {
		flex: 1, 
		height: '100%',
		resizeMode:'contain'
	}
});
