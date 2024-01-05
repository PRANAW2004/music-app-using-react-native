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

const Stack = createNativeStackNavigator();

export default function App() {

  // console.log(data);


  // function onPress(){
  //   setsecuretext(securetext?false : true);
  //   setEye(securetext?'eye-off':'eye');
  // }

  return (
    // <View style={styles.container}>
    //   {/* <View style={styles.container1}>
    //   <TextInput style={[styles.textinput,{color: "black",width: 122}]} onChangeText={(e)=>setUsername(e)} placeholder='name'></TextInput>
    //   <View style={styles.container2}>
    //   <TextInput style={[styles.textinput,{color: "black"}]} onChangeText={(e)=>setPassword(e)} placeholder='password' textContentType='newPassword' secureTextEntry={securetext} autoCapitalize='none' autoCorrect={false}></TextInput>
    //   <Pressable style={{backgroundColor: "white"}} onPress={onPress}>
    //     <MaterialCommunityIcons name={eye} size={22} color={'grey'}>

    //     </MaterialCommunityIcons>
    //   </Pressable>
    //   </View>
    //   </View>
    //   <Button title='submit' onPress={press}></Button>
    //   <StatusBar style="auto" /> */}

    //   {/* <Carousel1 /> */}
    //   <MainCarousel />
    // </View>
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
    <StatusBar backgroundColor={'transparent'}/>
    </NavigationContainer>
    </RootSiblingParent>
    </View>
  );
}

