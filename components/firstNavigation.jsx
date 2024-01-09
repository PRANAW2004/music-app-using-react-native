import MainCarousel from './main_carousel';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Register from './register';
import ForgotPassword from './ForgotPassword';
import { RootSiblingParent } from 'react-native-root-siblings';
import { View,Pressable } from 'react-native';
import MainPage from './mainPage';
import { StatusBar } from 'expo-status-bar';
import BottomNavigator from './bottomtabnavigator';
import { Ionicons } from '@expo/vector-icons';
import Settings from './settings';

const Stack = createNativeStackNavigator();

export default function FirstNavigation({navigation}){

  const date = new Date();
  const time = date.getHours();

    return(
        <View style={{display:"flex",flex:1,backgroundColor: "#212529"}}>
    <RootSiblingParent>
      {/* <NavigationContainer> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainCarousel}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen 
          name="mainPage"
          component={MainPage}
          options={
        {
          title: time > 0 && time < 12?"Good Morning":time >= 12 && time <18?"Good Afternoon":"Good Evening",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          
        }
        }
        /> */}
        <Stack.Screen 
          name="BottomNavigator"
          component={BottomNavigator}
          options={
        {
          title: time > 0 && time < 12?"Good Morning":time >= 12 && time <18?"Good Afternoon":"Good Evening",
          headerStyle: {
            backgroundColor: "#212529",
          },
          headerTintColor: "white",
          headerRight: ()=>(
          <Pressable onPress={()=>{navigation.navigate("Settings")}}>
            <Ionicons name={"settings-outline"} color={"white"} size={25}/>
          </Pressable>
          )

        }
        }
        />
        <Stack.Screen 
          name="Settings"
          component={Settings}
        />
        </Stack.Navigator>
        {/* <Stack.Screen 
          name="BottomNavigator"
          component={BottomNavigator}
          options={{headerShown: false}}
        /> */}
        {/* </NavigationContainer> */}
        </RootSiblingParent>
        <StatusBar backgroundColor='transparent' />
        </View>
    )
}