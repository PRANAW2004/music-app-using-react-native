import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './mainPage';
import { View } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Register from './register';
const Stack = createNativeStackNavigator();


export default function SecondNavigation(){
    return(
        <View style={{display:"flex",flex:1,backgroundColor: "#212529"}}>
    <RootSiblingParent>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="mainPage"
          component={MainPage}
          options={{headerShown: false}}
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
        </Stack.Navigator>
        </NavigationContainer>
        </RootSiblingParent>
        </View>
    )
}