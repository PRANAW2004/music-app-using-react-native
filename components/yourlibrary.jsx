import { View,Text,StyleSheet } from "react-native";

export default function YourLibrary(){
    return(
        <View style={styles.localcontainer}>
            <Text style={styles.localtext}>This is Your Library screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    localcontainer:{ 
        backgroundColor: "black",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        flex: 1

    },
    localtext:{
        color: "white",
    }
})