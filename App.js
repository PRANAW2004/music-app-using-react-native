import { StatusBar } from 'expo-status-bar';
import MainCarousel from './components/main_carousel';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Register from './components/register';
import ForgotPassword from './components/ForgotPassword';
import { RootSiblingParent } from 'react-native-root-siblings';
import MainPage from './components/mainPage';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function App() {

  let value = AsyncStorage.getItem("Login");

  if(value === "true"){
    console.log(value);
    return(
      <View style={{display:"flex",flex:1,backgroundColor: "#212529"}}>
    <RootSiblingParent>
      <NavigationContainer>
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
        </Stack.Navigator>
        </NavigationContainer>
        </RootSiblingParent>
        </View>
    )
  }

else{ 
  console.log(value);
   return (
    <View style={{display:"flex",flex:1,backgroundColor: "#212529"}}>
    <RootSiblingParent>
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
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
        /> */}
        <Stack.Screen 
          name="mainPage"
          component={MainPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    <StatusBar backgroundColor={'transparent'}/>
    </NavigationContainer>
    </RootSiblingParent>
    </View>
  );
}
}

