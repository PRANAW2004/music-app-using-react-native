import { View,Text,StyleSheet,TextInput,Button, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { sendPasswordResetEmail,getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import Toast from "react-native-root-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function ForgotPassword({navigation}){

    const [email,setemail] = useState('');

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

      function passwordReset(){

        sendPasswordResetEmail(auth, email)
        .then(() => {
            Toast.show("Password reset email sent. Please check your inbox",{
                duration:Toast.durations.LONG,
            })
            navigation.navigate("Login");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage,errorCode);
            if(errorCode === "auth/missing-email"){
                Toast.show("please enter a valid email address", {
                    duration: Toast.durations.LONG,
                })
            }
        });
      }

    return(
        <View style={styles.forgotcontainer}>
            <Text style={[styles.text,{fontWeight:500,marginBottom:20}]}>Forgot Password?</Text>
            <View style={styles.emailblock}>
                <View style={{backgroundColor:"white",height:40,display:"flex",justifyContent:"center",alignItems:"center"}}>
                <MaterialIcons name="email" size={30} color="black" style={{backgroundColor:"white"}}/>
                </View>
                <TextInput 
                placeholder="email" 
                style={{backgroundColor: "white",height:40,width:200}}
                onChangeText={(e)=>setemail(e)}
                ></TextInput>
            </View>
            <TouchableOpacity 
            style={{backgroundColor: "#007AFF",height:40,width:140,display:"flex",justifyContent:"center",alignItems:"center"}}
            onPress={passwordReset}
             >
                <Text style={{color:"white",fontSize:18}}>Send Email</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    forgotcontainer: {
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#212529",
        flexDirection: "column",
    },
    text:{
        color:"white",
        fontSize: 35,
    },
    emailblock:{
        display:"flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
        marginBottom:30,
    }
});