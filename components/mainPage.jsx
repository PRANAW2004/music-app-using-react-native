import { View,Text,StyleSheet } from "react-native";

export default function MainPage(){
    return(
        <View style={styles.maincontainer}>
            <Text style={styles.maincontainertext}>This is a main page</Text>
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