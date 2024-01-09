import { View,Text,StyleSheet } from "react-native";

export default function Search(){
    return(
        <View style={styles.searchcontainer}>
            <Text style={styles.searchtext}>This is the search page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    searchcontainer: {
        display:"flex",
        flex:1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    searchtext: {
        color: "white",
    }
})