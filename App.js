import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect, useCallback } from 'react';
import FirstNavigation from './components/firstNavigation';
import SecondNavigation from './components/secondNavigation';


export default function App() {

  const [loggedin,isloggedin] = useState(false);

  const data3 = useCallback(async() => {
      const value = await AsyncStorage.getItem("Login");
      isloggedin(value);
  })
  useEffect(data3,[]);

  if(loggedin==="true"){
    console.log("loggedin value is ",loggedin);
    return(<SecondNavigation />);
  }else{
    return(<FirstNavigation />);
  }

}

