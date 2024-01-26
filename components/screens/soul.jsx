import { View, Text,StyleSheet,BackHandler } from 'react-native';
import { useEffect } from 'react';

export default function Soul({navigation}){


    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
        // console.log(navigation.getState());

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

    return(
        <View style={styles.folkview}>
            <Text>This is a Soul song page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    folkview: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})