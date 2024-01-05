import MainCarousel from './main_carousel';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Register from './register';
import ForgotPassword from './ForgotPassword';
import { RootSiblingParent } from 'react-native-root-siblings';
import { View } from 'react-native';
import MainPage from './mainPage';

const Stack = createNativeStackNavigator();

export default function FirstNavigation(){
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
        <Stack.Screen 
          name="mainPage"
          component={MainPage}
          options={{headerShown: false}}
        />
        </Stack.Navigator>
        </NavigationContainer>
        </RootSiblingParent>
        </View>
    )

}