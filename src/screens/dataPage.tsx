import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import Carsold from '../component/Carsold';
import ClosingSoon from '../component/closingdata';
import Product from '../component/Products';
import icons from '../constants/icons';
import image from '../constants/image';
const DataPage = () => {
  return (
    <ScrollView >
      <View style={{height:"100%"}}>
        <StatusBar
          animated={true}
          backgroundColor={"#0a0127"}
        />
        <View
          style={{
            backgroundColor: "#0a0127",

          }}>
          <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={icons.stsicon}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 50,
                  marginLeft: "5%"
                }}
              />
            </View>
            <View style={{ flexDirection: "column" }}>

              <Image
                source={icons.user}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 30,
                  marginTop: "2%"
                }}
              />

            </View>
          </View>
        </View>
        <View >
          <View style={{ padding: "3%",height:"7%"}}>
            <View style={{ backgroundColor: "#070022", borderRadius: 8}}>
              <View style={{ padding: "10%", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "column", width: "70%" }}>
                  <Text style={{ color: "white", fontSize: 8 }}>Lorem ipsum dolor sit amet,</Text>
                  <Text style={{ color: "white", fontSize: 14 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                  <Text style={{ color: "white", fontSize: 8, marginTop: "9%" }}>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectet</Text>
                  <TouchableOpacity style={{ borderWidth: 1, borderRadius: 8, borderColor: "white", marginTop: "6%", width: "50%", height: "20%" }}>
                    <Text style={{ color: "white", fontSize: 12, textAlign: "center", padding: "3%" }}>See Details</Text>
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
          <View style={{ padding:"1%"}}>
            <Text style={{fontSize:20,marginLeft:"4%"}}>Closing Soon</Text>
            <View>
                <ClosingSoon/>
            </View>
            <View >
              <Product/>
            </View>
            <View>
            <View style={{padding:5,backgroundColor:"red",height:150,}}>
              <Text style={{color:"white",marginLeft:25}}>
                  SOLD OUT
              </Text>
              <Text style={{color:"white",marginLeft:25}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              
            </View>
              <Carsold/>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({

  container: {
    alignContent: "center"
  },
  view1: {
    alignContent: "center"
  },
  text1: {
    alignContent: "center"
  },

})
export default DataPage;