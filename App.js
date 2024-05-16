import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect, useCallback } from 'react';
import FirstNavigation from './components/firstNavigation';
import SecondNavigation from './components/secondNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  SplashScreen.preventAutoHideAsync();

  useEffect(() => {
    (async() => {setTimeout(() => {
    // console.log("inside set time out");
  SplashScreen.hideAsync();
  // timebool = false;
  },5000)
  })();
},[])

  const [loggedin,isloggedin] = useState(false);

  const Stack = createNativeStackNavigator();

  const data3 = useCallback(async() => {
      const value = await AsyncStorage.getItem("Login");
      isloggedin(value);
  })
  useEffect(data3,[]);

  if(loggedin==="true"){
    console.log("loggedin value is ",loggedin);
    return(
      <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="SecondNavigation"
            component={SecondNavigation}
            options={{headerShown:false}}
          />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }else{
    return(
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerLeft: null,
        }}>
          <Stack.Screen 
            name="FirstNavigation"
            component={FirstNavigation}
            options={{headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>

)}}
