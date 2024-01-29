import {View,Text,StyleSheet,Image} from 'react-native';

export default function Song_Render(props){
    return(
        <View style={{width:'100%'}}>
            {/* <Text style={{color: "white"}}>{props.data}</Text> */}
            {props.data.map((e)=>{
                console.log("'"+e['artwork']+"'");
                return(            
                    <View style={{width:'100%',display:"flex",alignItems: "center"}}>
                    <View style={styles.songblock}>
                    <Image source={{uri: "'"+e['artwork']+"'"}} style={{height: 40,width:40}}/>
                    <Text style={{color: "black"}}>{e['id']}</Text>

                    </View>
                    </View> 
                )

            })}
        </View>
    )
}
const styles = StyleSheet.create({
    folkview: {
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        flex:1,
        width:'100%'
    },
    songblock: {
        display: "flex",
        backgroundColor: "lightblue",
        // marginBottom: 10,
        // padding: 10,
        width: '90%',
        marginTop: 20,
        borderRadius: 20,
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "center",
        height: 60,
        // height: '100%',
    }
})