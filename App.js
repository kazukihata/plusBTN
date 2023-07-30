
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen({navigation}){
  const [visible, setVisible] = useState(false)
  const [btnVisible, setBtnVisible] = useState(true)

  const toggleVisible = () => {
    setVisible((rev) => !rev)
  }

  const togglePlusBtn = () => {
    setBtnVisible((rev)=> !rev)
  } 


  const setPopup = () => {
    toggleVisible() 
    togglePlusBtn()
  }


  const closeModal = () => {
    setVisible((rev) => !rev)
    togglePlusBtn()
  }

  const moveTodos = () => {
    closeModal()
    navigation.navigate("MakeToDos")
  }

  const moveTasks = () => {
    closeModal()
    navigation.navigate("MakeTasks")
  }



  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.plus} onPress={setPopup}>
        {btnVisible === true ?
        (<AntDesign name="pluscircleo" size={45} color="black" />)
        :null
        }
      </TouchableOpacity>
      <Modal 
        animationType='none'
        presentationStyle='overFullScreen'
        visible={visible}
        transparent={true}
      >
        <View style={styles.icons}>
          <TouchableOpacity style={styles.todos} onPress={moveTodos}>
            <Text style={styles.text}>ToDos</Text>
            <AntDesign name="profile" size={45} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.tasks} onPress={moveTasks}>
            <Text style={styles.text2}>Tasks</Text>
            <AntDesign name="form" size={45} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.xbtn} onPress={closeModal}>
            <AntDesign name="closecircleo" size={45} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>

      
      
      
      <StatusBar style="auto" />
    </View>
  );
}

function MakeToDos(){
  <View style={{flex:1, alignItems:"center",justifyContent:"center"}}>
    <Text>Make ToDos!!</Text>
  </View>
}

function MakeTasks(){
  <View style={{flex:1, alignItems:"center",justifyContent:"center"}}>
    <Text>Make Tasks!!</Text>
  </View>
}

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MakeToDos" component={MakeToDos} />
        <Stack.Screen name="MakeTasks" component={MakeTasks} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    marginTop: 630,
    marginLeft: 275,
    },
  plus:{
    marginTop: 610,
    marginLeft: 290
  },
  xbtn:{
    marginLeft: 38,
  },
  todos:{
    marginBottom: 8,
    marginRight: 50,
    flexDirection: "row"
  },
  tasks:{
    marginBottom: 8,
    flexDirection: "row"
  },  
  text:{
    marginTop: 15,
    marginRight: 3
  },
  text2:{
    marginTop: 15,
    marginRight: 6
  }
});


