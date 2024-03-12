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

        let histdata = await AsyncStorage.getItem("history");
        let arr1 = JSON.parse(histdata);
        let arr3 = [];
        let arr4 = [];
        let arr5 = [];
        let arr6 = [];
        let flag = true;

        for(var i=0;i<arr1.length;i++){
            arr3 = arr1[i].split(":");
            arr4.push(arr3);
        }
        for(var i=0;i<arr4.length;i++){
            if(arr5.length === 0){
                arr5.push(arr4[i][0]);
            }else{
                for(var j=0;j<arr5.length;j++){
                    if(arr5[j] === arr4[i][0]){
                        flag = false;
                    }
                }
                if(flag){
                    arr5.push(arr4[i][0]);
                }
                if(flag === false){
                    flag = true;
                }
            }
        }
        for(var i=0;i<arr4.length;i++){
            arr6.push(arr4[i]);
        }
        sethistorydate(arr5);
        sethistory(arr6);
    });

    useEffect(historydata,[]);

    return(
        <View style={{display:"flex",justifyContent:"center",alignItems:"center",flex:1}}>
        {historydate.map((q) => {
            return(
                <View>
                <Text>{q}</Text>
                {
                    history.map(([a,b]) => {
                        if(a === q){
                            return(
                            <View>
                                <Text>{b}</Text>
                            </View>
                        )
                        }
                        
                    })
                }
                </View>

                
            )

        })
            
        }
        </View>
    )
}