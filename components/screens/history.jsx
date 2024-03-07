import { View,Text,BackHandler } from "react-native";
import { useEffect,useCallback,useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function History({navigation}){

    const [historydate,sethistorydate] = useState([]);
    const [history,sethistory] = useState([]);

    console.log("inside the history");

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


    const historydata = useCallback(async () => {

        // CONTINUE FROM HERE.

        // let histdata = await AsyncStorage.getItem("history");
        // let histdatadate = await AsyncStorage.getItem("historydate");
        // let arr1 = JSON.parse(histdata);
        // let arr2 = JSON.parse(histdatadate);
        // let arr3 = [];
        // let arr4 = [];
        // let flag = 0;
        // console.log(arr1);
        // for(var i=0;i<arr1.length;i++){
        //     console.log(arr1[i]);
            
        //     arr4.push(arr1[i].split(":"));
        //     if(arr3.length === 0){
        //         arr3.push(arr4[1]);
        //     }
        //     else{
        //         for(var i=0;i<arr3.length;i++){
        //             if(arr4[0] === arr3[i]){
        //                 console.log("match is found");
        //             }
        //         }
        //     }
        // }
        // console.log(arr4);
        // sethistory(arr1);
        // sethistorydate(arr2);
    });

    useEffect(historydata,[]);

    return(
        <View style={{display:"flex",justifyContent:"center",alignItems:"center",flex:1}}>
        {historydate.map((q) => {
            return(
                <View>
                <Text>{q}</Text>
                {history.map((e) => {
                return(
                    <View>
                        
                        <Text>{e}</Text>
                    </View>
                )
            })}
                </View>

                
            )

        })
            
        }
            {/* <Text>This is a text</Text> */}
        </View>
    )
}