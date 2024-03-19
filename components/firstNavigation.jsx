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
import YourLibrary from './yourlibrary';
import Search from './search';
import Folk from './screens/folk';
import Pop from './screens/pop';
import Rock from './screens/rock';
import Soul from './screens/soul';
import Liked from './screens/liked';
import SearchPage from './searchPage';
import History from './screens/history';
import English from './language/english';
import Hindi from './language/hindi';
import Tamil from './language/tamil';
import Telugu from './language/telugu';
import Other from './language/other';
import Best from './language/best';

const Stack = createNativeStackNavigator();

export default function FirstNavigation({navigation}){

  const date = new Date();
  const time = date.getHours();

    return(
        <View style={{display:"flex",flex:1,backgroundColor: "#212529"}}>
    <RootSiblingParent>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainCarousel}
          options={{headerShown: false,
            animation:"slide_from_right",
            presentation: 'modal',
          animationTypeForReplace: 'push',}}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{headerShown: false,
            animation:"slide_from_right",
            presentation: 'modal',
          animationTypeForReplace: 'push',}}
        />
        <Stack.Screen 
          name="Register"
          component={Register}
          options={{headerShown: false,
            animation:"slide_from_right",
            presentation: 'modal',
          animationTypeForReplace: 'push',}}
        />
        <Stack.Screen 
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false,
            animation:"slide_from_right",
            presentation: 'modal',
          animationTypeForReplace: 'push',}}
        />
        <Stack.Screen 
          name="BottomNavigator"
          component={BottomNavigator}
          options={
        {
          headerLeft: null,
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
          // headerLeft: null,
          headerBackVisible: false,
        }
        }
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
            animation:"slide_from_right",
            presentation: 'modal',
          animationTypeForReplace: 'push',
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
            animation:"slide_from_left",
            presentation: 'modal',
          animationTypeForReplace: 'push',
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
            animation:"slide_from_right",
            presentation: 'modal',
          animationTypeForReplace: 'push',
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
            animation:"slide_from_left",
            presentation: 'modal',
          animationTypeForReplace: 'push',
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
            animation:"slide_from_right",
            presentation: 'modal',
          animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen 
          name="Liked Songs"
          component={Liked}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#212529",
            },
            headerTintColor: "white",
            animation:"slide_from_left",
            presentation: 'modal',
          animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen 
          name="search"
          component={SearchPage}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#212529",
            },
            headerTintColor: "white",
            animation:"slide_from_right",
            presentation: 'modal',
          animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen 
          name="History"
          component={History}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#212529",
            },
            headerTintColor: "white",
            animation:"slide_from_right",
            presentation: 'modal',
          animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen 
          name="English"
          component={English}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#212529",
            },
            headerTintColor: "white",
            animation:"slide_from_left",
            presentation: 'modal',
          animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen 
          name="Hindi"
          component={Hindi}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#212529",
            },
            headerTintColor: "white",
            animation:"slide_from_right",
            presentation: 'modal',
          animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen 
          name="Tamil"
          component={Tamil}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#212529",
            },
            headerTintColor: "white",
            animation:"slide_from_right",
            presentation: 'modal',
          animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen 
          name="Telugu"
          component={Telugu}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#212529",
            },
            headerTintColor: "white",
            animation:"slide_from_left",
            presentation: 'modal',
          animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen 
          name="Other Language"
          component={Other}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#212529",
            },
            headerTintColor: "white",
            animation:"slide_from_right",
            presentation: 'modal',
          animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen 
          name="Best Songs of all time"
          component={Best}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#212529",
            },
            headerTintColor: "white",
            animation:"slide_from_left",
            presentation: 'modal',
          animationTypeForReplace: 'push',
          }}
        />

        </Stack.Navigator>
        </RootSiblingParent>
        <StatusBar backgroundColor='transparent' />
        </View>
    )
}