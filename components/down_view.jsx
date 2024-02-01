import { View,Text,Pressable,Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Down_View(){
    return(
        <View style={{backgroundColor: "blue"}}>
            <Pressable style={{width: "100%"}}>
            <View style={{backgroundColor: "#83C0C1",height:50,width: "100%",display:"flex",flexDirection: "row",alignItems: "center",gap: 60}}>
                <Image source={''} />
                <Text>This is a text</Text>
                <View style={{height: 50,width: "50%",justifyContent: "center",alignItems: "flex-end"}}>
                <MaterialIcons name="play-arrow" color="black" size={40}/>
                </View>
                
            </View>
            </Pressable>
            </View>
    )
}