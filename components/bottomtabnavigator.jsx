import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MainPage from "./mainPage";
import Search from "./search";
import YourLibrary from "./yourlibrary";
import { useEffect,useCallback,useState } from "react";
import { BackHandler } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function BottomNavigator(){

    console.log("inside bottom navigator");

    useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress",() => {
          BackHandler.exitApp();
          return true;
        });
        },[]);
    
    let homeName = 'Home';
    let searchName = 'Search';
    let localName = 'Local';

    const Tab = createBottomTabNavigator();

    return(
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused,color,size}) => {
                        let iconName;
                        let iconColor;
                        let rn = route.name;
                        
                        if(rn === homeName){
                            // console.log("inside 1st if in tab")
                            iconName = focused?"home":"home-outline";
                        }else if(rn === searchName){
                            iconName = focused?"search":"search-outline";
                        }else{
                            iconName = focused?"folder":"folder-outline";
                        }
                        iconColor = focused?"green":"grey";
                        return <Ionicons name={iconName} size={23} color={iconColor} />
                    },
                    tabBarStyle: {
                        backgroundColor: "#212529",
                        paddingBottom: 10,
                        paddingTop: 10,
                        height: 63,     
                    },
                    tabBarActiveTintColor: "green",
                    tabBarLabelStyle: {
                        fontSize: 15
                    },
                })}
                
                
            >
            <Tab.Screen name={homeName} component={MainPage} options={{headerShown: false}}/>
            <Tab.Screen name={searchName} component={Search} options={{headerShown: false}}/>
            <Tab.Screen name={localName} component={YourLibrary} options={{headerShown: false}}/>

            </Tab.Navigator>
    )
}