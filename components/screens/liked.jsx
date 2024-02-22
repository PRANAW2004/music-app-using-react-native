import { View,Text,BackHandler,StyleSheet,ScrollView } from 'react-native';
import {useEffect,useState,useCallback} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Liked({navigation}){

    console.log("inside the liked song page");

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            if(navigation.isFocused()){
                if(navigation.canGoBack()){
                    navigation.goBack();
                    return true;
                }
            }
            if(!navigation.isFocused()){
                if(navigation.canGoBack()){
                    BackHandler.exitApp();
                    return true;
                }
            }
        })
    },[])

    const [songliked,setsongliked] = useState("");

    const liked = useCallback(async () => {
        let value = await AsyncStorage.getItem("liked");
        console.log(JSON.parse(value));
        setsongliked(JSON.parse(value));
    })

    useEffect(liked,[])

    return(
        <View style={[styles.likedview]}>
        <View style={{width:'100%',flex:1}}>
        <ScrollView style={{width:'100%',height:"100%"}}>

        </ScrollView>
        </View>
            <Text style={{color: "white"}}>{songliked}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    likedview: {
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        flex:1,
        width:'100%'
    }
})