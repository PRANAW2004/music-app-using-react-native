import AsyncStorage from "@react-native-async-storage/async-storage";
import { View,Text,StyleSheet,Button } from "react-native";

export default function MainPage({navigation}){
    return(
        <View style={styles.maincontainer}>
            <Text style={styles.maincontainertext}>This is a main page</Text>
            <Button title="Logout" onPress={()=>{AsyncStorage.setItem("Login",JSON.stringify(false));navigation.navigate("Login")}}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#212529",
        flex:1,
    },
    maincontainertext:{
        color:"white",
    }
})