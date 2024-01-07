import Carousel from 'react-native-snap-carousel';
import data from './data';
import { Dimensions,View,StyleSheet,Image,Text,Pressable } from 'react-native';
import {useEffect, useState} from 'react';
import { Pagination } from 'react-native-snap-carousel';
import * as Font from "expo-font";

const dwidth = Dimensions.get('window').width;

export default function MainCarousel({navigation}){
  const [index,setIndex] = useState(0);
    

  function Carousel1({index,item}){
    return(<View style = {styles.carouselcontainer}>
      <Image style={styles.image} source={item.image}></Image>
      <View style={styles.carouselText}>
      <Text style={[styles.maintext,{fontSize: 40,marginBottom: 20}]}>{item.mainText}</Text>
      <Text style={styles.text1}>{item.text}</Text>
      </View>
      <View style={styles.pressable}>
      <Pressable onPress={() => navigation.navigate("Login")} style={[{display: item.id===3?'flex':'none',backgroundColor: item.id===3?"red":"none",borderRadius: 36},styles.Login]}>
          <Text style={{color: "white",fontSize: 25}}>{item.button}</Text>
      </Pressable>
      </View>
  </View>)
  }

  return(<View style={styles.container}>
     <Carousel
        data={data}
        layout="default"
        // layoutCardOffset={9}
        renderItem={Carousel1}
        sliderWidth={dwidth}
        itemWidth={dwidth}
        inactiveSlideShift={1}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
        inactiveSlideScale={0}
      inactiveSlideOpacity={0} 
      enableMomentum={false}
     decelerationRate={0.5}
    //  cubicBezierCurve={{ x1: 0.2, y1: 0.4, x2: 0.6, y2: 0.8 }}
      />
      <Pagination 
        dotsLength={data.length}
        activeDotIndex={index}
        dotStyle={{
          // color: "red",
          height: 10,
          width: 20,
          backgroundColor: "red",
          borderRadius: 36,
          borderColor: "white",
          borderWidth: 10,
        }}
        inactiveDotOpacity={0.3}
        inactiveDotScale={0.6}
        dotColor='red'
      />
  </View>)

}

const styles = StyleSheet.create({
  image: {
      height: 300,
      width: 300,
      // backgroundColor: "yellow",
  },
  text1: {
      color: "white",
      fontSize: 20,
  },
  carouselcontainer: {
      display:"flex",
      flexDirection: 'column',
      justifyContent:"center",
      alignItems: "center",
      // backgroundColor: "green",
      flex: 1,
      // marginTop: 100,
      display: "flex",
      flex: 1,
  },
  carouselText: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // width: '70%',
      padding: 20,
  },
  Login: {
      height: 50,
      width: 300,
      color: "white",
      borderColor: "red",
      // backgroundColor: "red",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  },
  pressable: {
      // marginTop: 20,
  },
  maintext: {
      // fontSize: 40,
      color: "white",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#212529",
    flex: 1
  },
})