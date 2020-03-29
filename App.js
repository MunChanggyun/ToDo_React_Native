import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image} from 'react-native';
import { AppLoading } from 'expo';
import RefreshButton from './RefreshButton';
import SettingButton from './SettingButton';
import Weather from './Weather';
import Todo from './Todo';
import { setLightEstimationEnabled } from 'expo/build/AR';
import uuid4 from "uuid4";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [toDos, setToDos] = useState([]);
  const [key, setKey] = useState(0);

  const _addTodo = () => {
    const ID = uuid4();
    setKey(ID);

    const newToDo = {
      id: ID,
      time: "9시",
      schedule: "할일",
      isComplete: false
    }

    setToDos((prevToDos) => [...prevToDos, newToDo]);
    // setToDos([newToDo]);

    toDos.map(todo => {
      console.log(todo);
      console.log("------------------------------------------");
    })
  }

	return (
		<View style={styles.container}>
			<View style={styles.buttonwrap}>
				<RefreshButton />
				<SettingButton />
			</View>
				<View style={styles.weatherwrap}>
			</View>
      <View style={styles.content}>
        <View style={styles.displaySelect}>
          <TouchableOpacity style={styles.commonCenter}>
            <Text>리스트</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.commonCenter}>
            <Text>캘린더</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.centerArea}>
          <Text>날짜 선택 영역</Text>
        </View>
        <View style={styles.centerArea}>
          <TouchableOpacity style={styles.iconWrap} onPress={_addTodo}>
            <Image style={styles.icon} source={require('./images/plus.png')}/>
            <Text>일정 추가</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.commonCenter}>
          {/* {Object.values(toDos).reverse().map(todo => <Todo key={key} {...todo} />)} */}
          {toDos.map((todo, index) => <Todo key={todo.id} {...todo} />)}
        </ScrollView>
      </View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20
	},
	buttonwrap: {
    width: width,
    height: 50,
    flexDirection: "row",
    alignItems: 'center',
	},
	weatherwrap: {
    height: 100,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20
  }, 
  displaySelect: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between"
  },
  commonCenter: {
    flex:1,
    alignItems: "center"
  },
  centerArea: { 
    width:'100%',
    alignItems: "center"
  },
  iconWrap: {  
    width: '100%',
    height: '100%',
    flexDirection: "row",
  },
  icon: {
    flex:0.2,
    height: '100%',
    resizeMode:"contain",
  } 
});
