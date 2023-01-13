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
import Banner from '../component/banner';
import Carsold from '../component/Carsold';
import ClosingSoon from '../component/closingdata';
import Product from '../component/Products';
import icons from '../constants/icons';
import image from '../constants/image';
import { FONTS } from '../constants';
const PriceDetails = () => {
  return (
    <ScrollView style={{ flex: 1 }} >
    
        <View style={{ flex: 0.8 }}>
          <StatusBar
            animated={true}
            backgroundColor={"#0a0127"}
          />
          <View
            style={{
              backgroundColor: "#0a0127",

            }}>
            <View style={{ flexDirection: 'row', alignItems: "center" }}>
              <TouchableOpacity
                style={{ margin: "5.5%" }}
              >
                <Image
                  source={icons.back}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,

                  }}
                />
              </TouchableOpacity>

              <View style={{ marginTop: "4%", flexDirection: 'row', justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 20, marginLeft: "25%", bottom: 8 ,...FONTS.lexendregular}}>Price Details</Text>
              </View>
            </View>
          </View>

          <View style={{ padding: "2%" }}>
            <View style={{ borderRadius: 9, backgroundColor: "white" }}>
              <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                <View>
                  <Image
                    source={image.calander}
                    style={{
                      borderWidth: 1,
                      height: 30,
                      width: 30,
                    }}
                  />
                </View>
                <View style={{ flexDirection: "column", marginLeft: "2%" ,...FONTS.lexendregular}}>
                  <Text>Max Draw Date: September 05,2022</Text>
                  <Text>Or earlier if the campaign is sold out</Text>
                </View>
              </View>
              <View style={{ alignItems: 'center', borderTopEndRadius: 8, borderTopStartRadius: 8 }}>
                <View style={{ flexDirection: 'column', padding: 10 }}>
                  <Image
                    source={image.inputcash}
                    style={{
                      borderWidth: 1,
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginLeft: 5, padding: 10, backgroundColor: "#D8D8D8 " }}>
              <View style={{ flexDirection: "row", marginVertical: "2%", justifyContent: "space-evenly" }}>
                <TouchableOpacity style={{ flexDirection: "column", marginLeft: 5, borderWidth: 1 }}>
                  <Text style={{ fontSize: 20, padding: 10, backgroundColor: "#E70736", color: "white" ,...FONTS.lexendregular}}> Prize Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, }}>
                  <Text style={{ fontSize: 20, padding: 10, backgroundColor: "#fff", color: "#000",...FONTS.lexendregular }}>
                    Product Details
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={{ margin: "1%", fontSize: 16,...FONTS.lexendregular }}>Get a chance to win </Text>
              <Text style={{ color: "#E70736", margin: "1%", fontSize: 16 ,...FONTS.lexendregular}}>₹1,50,000 Cash</Text>
              <Text style={{ margin: "2%", fontSize: 12 ,...FONTS.lexendregular}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
              <View style={{ flexDirection: "row", marginVertical: "2%", justifyContent: "space-evenly" }}>
                <TouchableOpacity style={{ flexDirection: "column", marginLeft: 5, borderWidth: 1 }}>
                  <Text style={{ fontSize: 20, padding: 10, backgroundColor: "#fff", color: "#000",...FONTS.lexendregular }}> Go To Home </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, }}>
                  <Text style={{ fontSize: 20, padding: 10, backgroundColor: "#fff", color: "#000",...FONTS.lexendregular }}>View Card</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>


        </View>
        <View style={{ flex: 0.1 }}>
          <View style={{ flexDirection: "row", margin: "10%", justifyContent: "space-evenly" }}>
            <TouchableOpacity style={{ flexDirection: "column", marginLeft: 5, borderWidth: 1 }}>
              <Text style={{ fontSize: 20, padding: 10, backgroundColor: "#E70736", color: "#fff",...FONTS.lexendregular }}>ADD TO CART </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, }}>
              <Text style={{ fontSize: 20, padding: 10, backgroundColor: "#fff", color: "#000",...FONTS.lexendregular }}>BUY NOW</Text>
            </TouchableOpacity>
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
    alignContent: "center",
    ...FONTS.lexendregular
  },

})
export default PriceDetails;