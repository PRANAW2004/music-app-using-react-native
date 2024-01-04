import { View,Text,StyleSheet,TextInput,TouchableOpacity } from "react-native";

export default function Register(){
    return(
        <View style={styles.regcontainer}>
            <View>
                <Text style={[styles.headregtext,{fontWeight: 700}]}>Create free HearFree account</Text>
            </View>
            <View style={styles.registercontainer}>
                <TextInput style={[styles.textinput,{width: 222,margin: 10,height: 40}]} placeholder="Email"></TextInput>
                <TextInput style={[styles.textinput,{width: 222,margin: 10,height: 40}]} placeholder="Email"></TextInput>
                <TouchableOpacity style={[{},styles.registerbutton]}>
                    <Text style={[{color: "white",fontSize:20}]}>Register</Text>
                </TouchableOpacity>
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
        borderColor: "white",
        borderWidth: 2,
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
        width: 150
    }
})