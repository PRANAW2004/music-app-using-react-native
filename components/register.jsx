import { View,Text,StyleSheet,TextInput,TouchableOpacity,Pressable, BackHandler } from "react-native";
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import Toast from "react-native-root-toast";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Register({navigation}){
        const [eye,setEye] = useState('eye');
        const [securetext,setsecuretext] = useState(true);
        const [username,setUsername] = useState('');
        const [password,setPassword] = useState('');


        useEffect(() => {
            console.log("inside useEffect in register");
            BackHandler.addEventListener("hardwareBackPress", () => {
                navigation.goBack();
                return true;
            })
        },[])


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


        function press(){
            console.log("inside press");
            createUserWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                AsyncStorage.setItem("Signin",true);
                Toast.show("Registration Successfuly,Login to HearFree",{
                    duration: Toast.durations.LONG,
                });      
                navigation.navigate("Login");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage,errorCode)
                if(errorCode === "auth/invalid-email"){
                    Toast.show("Please enter a valid email address",{
                        duration: Toast.durations.LONG,
                    })
                }
                if(errorCode === "auth/missing-password"){
                    Toast.show("Please enter a password",{
                        duration: Toast.durations.LONG,
                    })
                }
                if(errorCode === "auth/email-already-in-use"){
                    Toast.show("Email address already in use",{
                        durations: Toast.durations.LONG,
                    })
                }
                if(errorCode === "auth/weak-password"){
                    Toast.show("password should be a minimum of 8 characters", {
                        duration: Toast.durations.LONG,
                    })
                }
                if(errorCode === "auth/missing-email"){
                    Toast.show("Please Enter your Email address", {
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
        <View style={styles.regcontainer}>
            <View>
                <Text style={[styles.headregtext,{fontWeight: 700}]}>Create free HearFree account</Text>
            </View>
            <View style={styles.registercontainer}>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginBottom:10,marginTop:20}}>
                <View style={{backgroundColor:"white",height:50,display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <MaterialIcons name="email" size={30} color="black"/>
                </View>
                <TextInput 
                style={[styles.textinput,{width: 244,height: 50}]} 
                placeholder="Email"
                onChangeText={(e)=>setUsername(e)}
                >
                </TextInput>
            </View>
            <View style={styles.passwordblock}>
                <View style={{backgroundColor:"white",height:50,display:"flex",justifyContent:"center"}}>
                    <MaterialIcons name="lock" size={30} color="black"/>
                </View>
                    <TextInput 
                    style={[styles.textinput,{width: 220,height: 50}]} 
                    placeholder="password"
                    textContentType='newPassword' 
                    secureTextEntry={securetext} 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    onChangeText={(e)=>setPassword(e)}
                    >

                    </TextInput>
                    <Pressable style={{backgroundColor: "white",display:"flex",justifyContent: "center",alignItems:"center",marginBottom: 20}} onPress={onPress}>
                        <MaterialCommunityIcons name={eye} size={22} color={'grey'}>
                        </MaterialCommunityIcons>
                    </Pressable>
                </View>
                <TouchableOpacity style={[{},styles.registerbutton]} onPress={press}>
                    <Text style={[{color: "white",fontSize:20}]}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.downtext}>
                <View>
                <Text style={{color: "white",fontSize:17,marginTop:30,display: "flex",justifyContent:"center",alignItems:"center"}}>Go back to </Text>
                </View>
                <View>
                    <Pressable style={{marginTop:30}} onPress={()=>navigation.navigate("Login")}>
                        <Text style={{color:"yellow",fontSize:17}}>Login Page</Text>
                    </Pressable>
                </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    regcontainer: {
        display:"flex",
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#212529"
    },
    headregtext: {
        color: "white",
        fontSize: 27,     
    },
    textinput:{
        backgroundColor: "white",
        color: "black",
        marginBottom: 20,
    }   ,
    registercontainer: {
        display:"flex",
        flexDirection:"column",
        // borderColor: "white",
        // borderWidth: 2,
        marginTop: 20,
        width: 300,
        justifyContent: "center",
        alignItems:"center",
    },
    registerbutton: {
        backgroundColor: "blue",
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        marginBottom: 10,
        width: 150,
        borderRadius: 10
    },
    passwordblock:{
        display:"flex",
        flexDirection: "row",
    },
    downtext: {
        display: "flex",
        flexDirection: "row"
      }
})