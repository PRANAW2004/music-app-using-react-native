import { useEffect, useState,useCallback } from "react";
import { View,Text,StyleSheet,Button,BackHandler,TouchableOpacity, Pressable,Image, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from './song_data';
import TrackPlayer,{useProgress} from 'react-native-track-player';

export default function MainPage({navigation}){

    const [visible,modalvisible] = useState(false);
    const [renderimage,setrenderimage] = useState(null);
    const [rendername,setrendername] = useState('');
    const [renderauthor,setrenderauthor] = useState('');

    let progress = useProgress();


    useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress",()=>{
            console.log("back button is pressed in home page");
            BackHandler.exitApp();
            return true;
        });
    },[]);



    const currentGenre = useCallback(async () => {
        let value = await AsyncStorage.getItem("current-genre");
        console.log("Value is ",value);
        console.log(JSON.parse(value) === 'folk');
        if(JSON.parse(value) === 'folk'){
            console.log("inside the folk");
            let value1 = await AsyncStorage.getItem("current-playing");
            console.log(JSON.parse(value1));
            for(var i=0;i<data.length;i++){
                if(data[i]['id'] === JSON.parse(value1)){
                    setrenderimage(data[i]['artwork']);
                    setrendername(data[i]['title']);
                    setrenderauthor(data[i]['artist']);
                    break;
                }
            }
        }else{
            console.log("inside else");
        }
    })

    useEffect(currentGenre,[]);
    

    TrackPlayer.addEventListener("playback-track-changed",async () => {
        // console.log("Playback track changed");
        let a = await TrackPlayer.getActiveTrack();
        // console.log("playback track changed");
        setrenderimage(a['artwork']);
        setrendername(a['title']);
        setrenderauthor(a['artist'])
        AsyncStorage.setItem("current-playing", JSON.stringify(a['id']));
    })

    async function position(){
        console.log("inside the position");
        let a = await TrackPlayer.getProgress();
        console.log(a['duration']/60);
        console.log("progress is",progress);
    }


    return(
        <View style={styles.maincontainer}>
            <View style={styles.firstsection}>
                 <Pressable onPress={()=>console.log("liked songs button is pressed")}>
                    <View style={{height:60,width:150,borderColor: "grey",borderWidth: 1,flexDirection:'row',alignItems: "center",borderRadius: 36}}>
                        <Image source={require("../images/main-page-icons/liked.png")} style={[{height: 60,width:60,marginRight:10}]}/>
                        <View style={{}}>
                            <Text style={{color:"white",fontSize: 20}}>Liked</Text>
                            <Text style={{color:"white",fontSize:15}}>Songs</Text>
                        </View>
                    </View>
                </Pressable>
                <Pressable onPress={()=>console.log("history button is pressed")}>
                    <View style={{height: 60,width:150,borderRadius:36,borderColor: "grey",borderWidth:1,flexDirection: "row",alignItems: "center"}}>
                        <Image source={require("../images/main-page-icons/history.png")} style={[{height: 60,width:60,marginRight:10}]} />
                        <View>
                            <Text style={{color:"white",fontSize: 20}}>History</Text>
                        </View>
                    </View>
                </Pressable>


            </View>

            <Modal visible={visible}>
            <View style={styles.modalview}>
                <MaterialIcons name='close' size={30} onPress={() => modalvisible(false)}/>
                {/* <Image source={} /> */}
            </View>
            </Modal>

            <View style={{width:"90%",marginBottom: 20}}>
            <Pressable style={{width: "100%",borderRadius:36}} onPress={() => {position();modalvisible(true)}}>
            <View style={{backgroundColor: "#40A2E3",height:60,width: "100%",display:"flex",flexDirection: "row",alignItems: "center",borderRadius:36}}>
                {/* {console.log(<Image source={{uri: renderimage}} />)} */}
                <View style={{display: "flex",flexDirection: "row",borderRadius: 36,width:'50%'}}>
                <Image source={{uri: renderimage}} style={{height:60,width:60,borderRadius:36,marginRight: 10}}/>
                <View style={{display:"flex",flexDirection: "column",justifyContent: "center"}}>
                    <Text style={{color: "white",fontSize: 20}}>{rendername === ''?'Press any song to play':rendername}</Text>
                <Text style={{color: "white",fontSize: 15}}>{renderauthor === ''?'play':renderauthor}</Text>
                </View>
                </View>
                <View style={{width: "50%",justifyContent: "center",alignItems: "flex-end",borderRadius: 36}}>
                <MaterialIcons name="play-arrow" color="white" size={40} style={{marginRight: 10}}/>
                </View>
            </View>
            </Pressable>
            </View>
            
            

        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "black",
        flex:1,
    },
    firstsection: {
        display: "flex",
        flex:1,
        // backgroundColor: "green",
        margin: 20,
        flexDirection: "row",       
        gap:20 
    },
    modalview: {
        backgroundColor: "#83C0C1",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
})