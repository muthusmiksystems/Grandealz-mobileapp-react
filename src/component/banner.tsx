import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import Swiper from 'react-native-swiper'
import { FONTS } from '../constants';
import icons from '../constants/icons';
import image from '../constants/image';

const Banner=()=>{

return(
    <Swiper style={{ height:210,}} loop={false} 
    dot={
        <View
          style={{
            backgroundColor: 'red',
            width: 5,
            height: 5,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 90,
            marginBottom: 3
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: 'red',
            width: 25,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 90,
            marginBottom: 3
          }}
        />
      }
    >
    <View testID="Hello" style={{}}>
       <View style={{ backgroundColor: "#070022", borderRadius: 8}}>
              <View style={{ padding: "10%", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "column", width: "70%" }}>
                <Text style={{ color: "white", fontSize:RFValue(6),...FONTS.lexendregular}}>Lorem Ipsum is simply dummy text of the printing.</Text>
                  <Text style={{ color: "white", fontSize: RFValue(13),...FONTS.lexendregular }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
                  <Text style={{ color: "white",fontSize:RFValue(5), marginTop: "9%",...FONTS.lexendregular }}>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.</Text>
                  <TouchableOpacity style={{ borderWidth: 1, borderRadius: 8, borderColor: "white", marginTop: "6%", width: "50%", height: "20%" }}>
                    <Text style={{ color: "white", fontSize: RFValue(12),...FONTS.lexendregular, textAlign: "center", padding: "3%" }}>See Details</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: "30%", flexDirection: "column" }}>
                  <Image
                    source={image.cars}
                    resizeMode="contain"
                    style={{
                      width: 100,
                      height: 50,
                      marginTop: 50
                    }}
                  />
                </View>
              </View>
            </View>
    </View>
    <View testID="Beautiful" style={{}}>
    <View style={{ backgroundColor: "#070022", borderRadius: 8}}>
              <View style={{ padding: "10%", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "column", width: "70%" }}>
                 <Text style={{ color: "white", fontSize:RFValue(6),...FONTS.lexendregular}}>Lorem Ipsum is simply dummy text of the printing.</Text>
                  <Text style={{ color: "white", fontSize: RFValue(13),...FONTS.lexendregular }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
                  <Text style={{ color: "white",fontSize:RFValue(5),...FONTS.lexendregular, marginTop: "9%" }}>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.</Text>
                  <TouchableOpacity style={{ borderWidth: 1, borderRadius: 8, borderColor: "white", marginTop: "6%", width: "50%", height: "20%" }}>
                    <Text style={{ color: "white", fontSize:RFValue(12),...FONTS.lexendregular, textAlign: "center", padding: "3%" }}>See Details</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: "30%", flexDirection: "column" }}>
                  <Image
                    source={image.cars}
                    resizeMode="contain"
                    style={{
                      width: 100,
                      height: 50,
                      marginTop: 50
                    }}
                  />
                </View>
              </View>
            </View>
    </View>
    <View testID="Simple" style={{marginBottom:"2%"}}>
    <View style={{ backgroundColor: "#070022", borderRadius: 8}}>
              <View style={{ padding: "10%", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "column", width: "70%" }}>
                <Text style={{ color: "white", fontSize:RFValue(6),...FONTS.lexendregular}}>Lorem Ipsum is simply dummy text of the printing.</Text>
                  <Text style={{ color: "white", fontSize: RFValue(13),...FONTS.lexendregular }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
                  <Text style={{ color: "white",fontSize:RFValue(5 ),...FONTS.lexendregular, marginTop: "9%" }}>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.</Text>
                  <TouchableOpacity style={{ borderWidth: 1, borderRadius: 8, borderColor: "white", marginTop: "6%", width: "50%", height: "20%"}}>
                    <Text style={{ color: "white", fontSize: RFValue(12),...FONTS.lexendregular, textAlign: "center", padding: "3%" }}>See Details</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: "30%", flexDirection: "column" }}>
                  <Image
                    source={image.cars}
                    resizeMode="contain"
                    style={{
                      width: 100,
                      height: 50,
                      marginTop: 50
                    }}
                  />
                </View>
              </View>
            </View>
    </View>
  </Swiper>
)
}
const styles = StyleSheet.create({
    wrapper: {
        height:"27%"
    },
    slide1: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: 'red',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })
export default Banner;