import { View,Text,StyleSheet,TextInput,Pressable,Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider, signInWithRedirect,getRedirectResult } from "firebase/auth";
import Toast from "react-native-root-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login({navigation}){

  const firebaseConfig = {
    apiKey: "AIzaSyBj52BnrmS18P_gHVHPUHTH3hBou8h_Qe8",
    authDomain: "musicapp-c920a.firebaseapp.com",
    projectId: "musicapp-c920a",
    storageBucket: "musicapp-c920a.appspot.com",
    messagingSenderId: "48669470679",
    appId: "1:48669470679:web:6b9637387d6f38e2a0a592",
    measurementId: "G-DHNTJMFVJ0"
  };

  const app1 = initializeApp(firebaseConfig);
  const auth = getAuth(app1);

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [securetext,setsecuretext] = useState(true);
    const [eye,setEye] = useState('eye');
    const [userCredential,setuserCredential] = useState('');

      function signin(){
        signInWithEmailAndPassword(auth,username,password)
        .then((userCredential) => {
          console.log("inside firebase signin");
          const user = userCredential.user;
          AsyncStorage.setItem("Login","true");
          navigation.navigate("mainPage");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorCode === "auth/invalid-email"){
            Toast.show("Invalid Email Id", {
              duration: Toast.durations.LONG,
            })
          }
          if(errorCode === "auth/invalid-credential"){
            Toast.show("Invalid creadentials,Check your Email Id and Password", {
              duration: Toast.durations.LONG,
            })
          }
          if(errorCode === "auth/too-many-requests"){
            Toast.show("Please try again later",{
              duration: Toast.durations.LONG,
            })
          }
          if(errorCode === "auth/missing-password"){
            Toast.show("Please enter you password",{
              duration: Toast.durations.LONG,
            })
          }
        });
      }

    function onPress(){
        setsecuretext(securetext?false : true);
        setEye(securetext?'eye-off':'eye');
      }

    return(
    <View style={styles.mainLogin}>
        <Text style={{color: "white",fontSize: 30,marginBottom: 30,fontWeight: 700}}>Welcome to HearFree</Text>
         <View style={styles.container1}>
            {/* <Text style={[styles.headlogintext,{fontWeight: 500}]}>Login</Text> */}
            <View style={{display:'flex',flexDirection:"row",marginBottom:20,marginTop:20}}>
            <View style={{backgroundColor:"white",height:50,display:"flex",justifyContent:"center",alignItems:"center"}}>
                <MaterialIcons name="email" size={30} color="black"/>
            </View>
            <TextInput 
                style={[styles.textinput,{color: "black",width: 250,}]} 
                onChangeText={(e)=>setUsername(e)} 
                placeholder='Email'>
            </TextInput>
            </View>
            <View style={styles.container2}>
            <View style={[styles.container22]}>
            <View style={{backgroundColor:"white",height:50,display:"flex",justifyContent:"center"}}>
            <MaterialIcons name="lock" size={30} color="black"/>
            </View>
              <TextInput 
                      style={[styles.textinput,{color: "black"}]} 
                      onChangeText={(e)=>setPassword(e)} 
                      placeholder='password' 
                      textContentType='newPassword' 
                      secureTextEntry={securetext} 
                      autoCapitalize='none' 
                      autoCorrect={false}>
                  </TextInput>
                  <Pressable style={{backgroundColor: "white",display:"flex",justifyContent: "center",alignItems:"center"}} onPress={onPress}>
                      <MaterialCommunityIcons name={eye} size={22} color={'grey'}>
                      </MaterialCommunityIcons>
                  </Pressable>
            </View>
            <View>
              <Pressable style={{marginBottom: 20}} onPress={()=>navigation.navigate("ForgotPassword")}><Text style={{color: "yellow"}}>Forgot Password ?</Text></Pressable>
            </View>
            </View>
            
            <TouchableOpacity style={styles.loginbutton} onPress={signin}>
                <Text style={{color: "white",fontSize: 20}}>Login</Text>
            </TouchableOpacity>
            {/* <Text style={{color: "white",marginBottom: 10,}}>Or</Text>
            <TouchableOpacity 
              style={{marginBottom: 20,backgroundColor: "red",height: 50,width: 200,display:"flex",justifyContent:"center",alignItems:"center"}}
              onPress={GoogleSignIn}
              >
                <Text style={{color: "white",fontSize: 20}}>SignIn with Google</Text>
            </TouchableOpacity> */}
        </View>
        {/* <Button title='submit'></Button> */}
        <View style={styles.downtext}>
        <View>
        <Text style={{color: "white",fontSize:17,marginTop:30,display: "flex",justifyContent:"center",alignItems:"center"}}>Don't have a account already? </Text>
        </View>
        <View>
            <Pressable style={{marginTop:30}} onPress={()=>navigation.navigate("Register")}>
                <Text style={{color:"red",fontSize:17}}>Register Now</Text>
            </Pressable>
        </View>
        </View>
        <StatusBar backgroundColor={'transparent'}/>
    </View>)
}

const styles = StyleSheet.create({
    mainLogin: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#212529",
    },
    textinput: {
        borderColor: "white",
        // backgroundColor: "green",
        // borderBlockColor: "white",
        // borderWidth: 1,
        width: 227,
        height: 50,
        backgroundColor: "white",
      },
      container1: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        borderColor: "white",
        width: 300,
        // height: "50%",
        borderWidth: 2,
      },
      container2: {
        display:"flex",
        flexDirection: "column"
      },
      headlogintext:{
        color: "white",
        fontSize: 30,
      },
      loginbutton: {
        borderWidth: 2,
        // borderColor: "red",
        backgroundColor: "red",
        height: 50,
        width: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
      },
      downtext: {
        display: "flex",
        flexDirection: "row"
      },
      container22: {
        display: "flex",
        flexDirection: "row",
      }
})