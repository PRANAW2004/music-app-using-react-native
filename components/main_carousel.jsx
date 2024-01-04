import Carousel from 'react-native-snap-carousel';
import data from './data';
import { Dimensions,View,StyleSheet,Image,Text,Pressable } from 'react-native';
import {useState} from 'react';
import { Pagination } from 'react-native-snap-carousel';


const dwidth = Dimensions.get('window').width;

export default function MainCarousel({navigation}){
  const [index,setIndex] = useState(0);

  function Carousel1({index,item}){
    return(<View style = {styles.carouselcontainer}>
      <Image style={styles.image} source={item.image}></Image>
      <View style={styles.carouselText}>
      <Text style={styles.maintext}>{item.mainText}</Text>
      <Text style={styles.text1}>{item.text}</Text>
      </View>
      <View style={styles.pressable}>
      <Pressable onPress={() => navigation.navigate("Login")} style={[{display: item.id===3?'flex':'none',backgroundColor: item.id===3?"red":"none"},styles.Login]}>
          <Text style={{color: "white",fontSize: 25}}>{item.button}</Text>
      </Pressable>
      </View>
  </View>)
  }

  return(<View style={styles.container}>
     <Carousel
        data={data}
        layout="default"
        layoutCardOffset={9}
        renderItem={Carousel1}
        sliderWidth={dwidth}
        itemWidth={dwidth}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination 
        dotsLength={data.length}
        activeDotIndex={index}
        dotStyle={{
          color: "red",
          height: 20,
          width: 20,
          backgroundColor: "white",
          borderRadius: 36
        }}
        inactiveDotOpacity={0.3}
        inactiveDotScale={0.6}
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
      fontSize: 40,
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