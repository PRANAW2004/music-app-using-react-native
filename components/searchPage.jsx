import {View,Text, TextInput,StyleSheet,KeyboardAvoidingView} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import data from './song_data';

export default function SearchPage() {

    const [songname,setsongname] = useState([]);
    console.log(songname);

    function search(name){

        for(var i=0;i<data.length;i++){
            if(data[i]['title'].includes(name)){
                console.log("inside the if",data[i]);
                setsongname((e) => [...e,data[i]])
            }
        }
    }


    return(
        <View style={styles.searchmain}>
        <KeyboardAvoidingView style={styles.textinput} behavior='padding'>
        {/* <View  style={styles.textinput}> */}
            <View style={{display:"flex",justifyContent:"center"}}>
                <MaterialIcons name='search' size={30} color="black"/>
            </View>
            <View style={{justifyContent:"center",width:'100%'}}>
                <TextInput placeholder='what do you want to hear?' onChangeText={(e) => {search(e)}}></TextInput>
            </View>
            {/* </View> */}
        </KeyboardAvoidingView>
            <View>
            {songname.map((e) => {
                {/* console.log(e); */}
                return(
                    <Text style={{color: "white"}}>
                        {/* {e['title']} */}
                    </Text>
                )
            })}
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    searchmain: {
        backgroundColor: "black",
        flex:1,
        display:"flex",
        alignItems:"center",
    },
    textinput:{
        backgroundColor: "grey",
        width: '90%',
        marginTop:20,
        height: '7%',
        flexDirection:"row"
    }
})