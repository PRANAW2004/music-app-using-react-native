import { View,Text,BackHandler } from "react-native";
import { useEffect,useCallback,useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function History({navigation}){

    const [historydate,sethistorydate] = useState([]);
    const [history,sethistory] = useState([]);
    const [bool,setbool] = useState(true);

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


        let histdata = await AsyncStorage.getItem("history");
        let histdatadate = await AsyncStorage.getItem("historydate");
        let arr1 = JSON.parse(histdata);
        let arr2 = JSON.parse(histdatadate);
        let arr3 = [];
        let arr4 = [];
        let arr5 = [];
        let arr6 = [];
        let arr7 = [];
        let arr8 = [];
        let flag = true;

        for(var i=0;i<arr1.length;i++){
            arr3 = arr1[i].split(":");
            arr4.push(arr3);
        }
        // console.log(arr4);
        // for(var i=0;i<arr4.length;i++){
        //     console.log(arr4[i][0]);
        //     if(arr5.length === 0){
        //         console.log("1");
        //         arr5.push(arr4[i][0]);
        //         arr6.push(arr4[i][1]);
        //     }else{
        //         console.log("2");
        //         for(var j=0;j<arr5.length;j++){
        //             console.log("3");
        //             if(arr4[i][0] === arr5[j]){
        //                 console.log("4");
        //                 arr6.push(arr4[i][1]);
        //                 console.log("array 6 is ",arr6);
        //                 setbool(false);
        //             }else{
        //                 arr7.push(arr4[i][1]);
        //                 console.log("array 7 is ",arr7);
        //                 setbool(true);
        //             }
        //         }
        //         if(bool){
        //             arr8.push(arr7);
        //         }else{
        //             arr8.push(arr6);
        //         }
        //     }
            
        // }
        console.log(arr5,arr8);
        // sethistory(arr7);
        // sethistorydate(arr3);
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
                })
                }
                </View>

                
            )

        })
            
        }
            {/* <Text>This is a text</Text> */}
        </View>
    )
}