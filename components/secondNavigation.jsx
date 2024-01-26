import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './mainPage';
import { View,Text, Pressable } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Register from './register';
import { StatusBar } from 'expo-status-bar';
import BottomNavigator from './bottomtabnavigator';
import { Ionicons } from 'react-native-vector-icons';
import Settings from './settings';
import YourLibrary from './yourlibrary';
import Search from './search';
import Folk from './screens/folk';
import Pop from './screens/pop';
import Rock from './screens/rock';
import Soul from './screens/soul';

const Stack = createNativeStackNavigator();


export default function SecondNavigation({navigation}){

  const date = new Date();
  const time = date.getHours();

 
    return(
        <View style={{display:"flex",flex:1,backgroundColor: "#212529"}}>
    <RootSiblingParent>
       <Stack.Navigator       
       >
     
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
          ),
        }
        }
        />
        
       <Stack.Screen 
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
          <Stack.Screen 
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
         <Stack.Screen 
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Settings"
          component={Settings}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#212529",
            },
            headerTintColor: "white",
          }}
        />
         <Stack.Screen 
          name="Pop"
          component={Pop}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#212529",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen 
          name="Rock"
          component={Rock}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#212529",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen 
          name="Soul"
          component={Soul}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#212529",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen 
          name="Folk"
          component={Folk}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#212529",
            },
            headerTintColor: "white",
          }}
        />
        
         </Stack.Navigator>
         </RootSiblingParent>
         <StatusBar backgroundColor='transparent' />
         </View>
    )
}