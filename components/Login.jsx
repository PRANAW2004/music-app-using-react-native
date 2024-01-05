import { View,Text,StyleSheet,TextInput,Pressable,Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider, signInWithRedirect,getRedirectResult } from "firebase/auth";
import Toast from "react-native-root-toast";


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

    // GoogleSignin.configure({
    //   webClientId: "48669470679-nci0rsr9jg7upn4p54j8jdnrq5qjavuh.apps.googleusercontent.com",
    // })

    // function press(){
    //     console.log("inside press");
    //     createUserWithEmailAndPassword(auth, username, password)
    //     .then((userCredential) => {
    //       const user = userCredential.user;
    //       console.log(user);
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       console.log(errorMessage,errorCode)
    //     });

    //   }

      function signin(){
        signInWithEmailAndPassword(auth,username,password)
        .then((userCredential) => {
          console.log("inside firebase signin");
          const user = userCredential.user;
          navigation.navigate("mainPage");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          if(errorCode === "auth/invalid-email"){
            Toast.show("Invalid Email Id", {
              duration: Toast.durations.LONG,
            })
          }
          if(errorCode === "auth/invalid-credential"){
            console.log("inside if");
            Toast.show("Check your Password", {
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

  //   function GoogleSignIn(){

  // const provider = new GoogleAuthProvider(app1);

  //     signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       const user = result.user;

  //     }).catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       const email = error.customData.email;
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //     })
  //   }

    function onPress(){
        setsecuretext(securetext?false : true);
        setEye(securetext?'eye-off':'eye');
      }

    return(
    <View style={styles.mainLogin}>
        <Text style={{color: "white",fontSize: 30,marginBottom: 30,fontWeight: 700}}>Welcome to HearFree</Text>
         <View style={styles.container1}>
            {/* <Text style={[styles.headlogintext,{fontWeight: 500}]}>Login</Text> */}
            <TextInput 
                style={[styles.textinput,{color: "black",width: 222,margin: 20}]} 
                onChangeText={(e)=>setUsername(e)} 
                placeholder='Email'>
            </TextInput>
            <View style={styles.container2}>
            <View style={styles.container22}>
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
        <Text style={{color: "white",fontSize:15,marginTop:30,display: "flex",justifyContent:"center",alignItems:"center"}}>Don't have a account already? </Text>
        </View>
        <View>
            <Pressable style={{marginTop:30}} onPress={()=>navigation.navigate("Register")}>
                <Text style={{color:"red",fontSize:15}}>Register Now</Text>
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
        width: 200,
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