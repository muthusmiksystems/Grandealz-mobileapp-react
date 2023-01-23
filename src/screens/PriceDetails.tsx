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
import { COLORS, FONTS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import EntypoIcons from "react-native-vector-icons/Entypo";
import { horizontalScale, verticalScale } from '../constants/metrices';
const PriceDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }} >
      <StatusBar
        animated={true}
        backgroundColor={"#0a0127"}
      />
      <View style={{ flex: 1.8 }}>
        <View
          style={{
            backgroundColor: "#0a0127",
            height: verticalScale(80),
            justifyContent: "center"
          }}>
          <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(18) }}>
              <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(24), textAlign: "center", width: "75%" }}>Prize Details</Text>
          </View>
        </View>
        <View style={{ padding: "4%" }}>
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
              <View style={{ flexDirection: "column", marginLeft: "2%" }}>
                <Text style={{ color: COLORS.black, ...FONTS.lexendregular, fontSize: RFValue(13) }}>Max Draw Date: September 05,2022</Text>
                <Text style={{ color: COLORS.black, ...FONTS.lexendregular, fontSize: RFValue(10) }}>Or earlier if the campaign is sold out</Text>
              </View>
            </View>
            <View style={{ borderWidth: 0.5, width: "100%", borderColor: "lightgrey", marginTop: "3%" }} />

            <View style={{ alignItems: 'center', borderTopEndRadius: 8, }}>
              <View style={{ alignSelf:"flex-start", marginLeft: "2%", borderTopEndRadius: 40, borderTopStartRadius: 40, borderBottomEndRadius: 40, borderBottomStartRadius: 40, borderWidth: 3, marginTop: "2%", height: verticalScale(55), width: horizontalScale(120), borderColor: "#D8000D", flexDirection: "row" }}>
                <View style={{ flexDirection: "column", padding: 4, marginLeft: "7%" }}>
                  <Text style={{ color: "#E70736", ...FONTS.lexendregular, fontSize: RFValue(13) }}> 1100</Text>
                  <Text style={{ ...FONTS.lexendsemibold, alignSelf: "center", color: "black", fontSize: RFValue(10), }}> Sold</Text>
                </View>
                <View style={{ backgroundColor: "#7F7E76B2", height: verticalScale(23), marginTop: verticalScale(15), borderWidth: 1, borderColor: "#7F7E76B2",marginLeft:8 }} />
                <View style={{ flexDirection: "column", padding: 8 }}>
                  <Text style={{ ...FONTS.lexendregular, color: " rgba(127, 126, 118, 0.7)", fontSize: RFValue(9) }}> OUT OF</Text>
                  <Text style={{ color: "#E70736", ...FONTS.lexendregular, fontSize: RFValue(13) }}> 1100</Text>
                </View>
              </View>
              <View style={{ alignSelf: "flex-end" }}>
                <Image
                  source={icons.share}
                  style={{
                    bottom: "70%",
                    marginRight: "2%",
                    width:25,
                    height:25
                  }}
                />
                <Image
                  source={icons.userHeart}
                  style={{
                    bottom: "40%",
                    marginRight: "2%",
                    width:25,
                    height:25
                  }}
                />
              </View>
              <View style={{ flexDirection: 'column', padding: 20 }}>

                <Image
                  source={image.inputcash}
                  style={{
                    borderWidth: 1,
                    width: 257,
                    height: 162
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ marginVertical:"5%", backgroundColor: "#D8D8D8 " }}>
            <View style={{ flexDirection: "row", margin: "2%", justifyContent: "space-between" }}>
              <TouchableOpacity style={{ flexDirection: "column",height:horizontalScale(46),width:verticalScale(186)}}>
                <Text style={{ fontSize: RFValue(15),borderRadius:8 , paddingHorizontal: 35, padding: 13, backgroundColor: "#E70736", color: "white", ...FONTS.lexendregular,  }}> Prize Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: "column" , borderRadius:10, borderWidth: 1,marginLeft: "2%",backgroundColor: "#fff" }} onPressIn={() => { navigation.navigate("ProductDetails") }}>
                <Text style={{ fontSize: RFValue(15), padding: 12,paddingHorizontal: 25, color: "#000", ...FONTS.lexendregular, }}>
                  Product Details
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{ margin: "1%", fontSize: RFValue(15), ...FONTS.lexendregular, color: COLORS.black, }}>Get a chance to win </Text>
            <Text style={{ color: "#E70736", margin: "1%", fontSize: RFValue(15), ...FONTS.lexendsemibold }}>₹1,50,000 Cash</Text>
            <Text style={{ margin: "2%", fontSize: 12, ...FONTS.lexendregular, color: COLORS.black, }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            {/* <View style={{ flexDirection: "row", marginVertical: "2%", justifyContent: "space-evenly" }}>
                <TouchableOpacity style={{ flexDirection: "column", marginLeft: 5, borderWidth: 1,borderRadius:10 }}>
                  <Text style={{ fontSize: 20, padding: 10, backgroundColor: "#fff", color: "#000",...FONTS.lexendregular,borderRadius:10 }}> Go To Home </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1,borderRadius:10 }}>
                  <Text style={{ fontSize: 20, padding: 10, backgroundColor: "#fff", color: "#000",...FONTS.lexendregular,borderRadius:10 }}>View Card</Text>
                </TouchableOpacity>
              </View> */}
           <View style={{ flexDirection: "row", marginVertical: "2%", justifyContent: "space-evenly" }}>
              <TouchableOpacity style={{ flexDirection: "column", borderRadius: 6 }}>
                <Text style={{ fontSize: RFValue(15), paddingHorizontal: 35, borderWidth: 1, padding: 10, backgroundColor: "#fff", color: "#000", ...FONTS.lexendregular, borderRadius: 8 }}> Go to Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, borderRadius: 6, marginLeft: "5%" }} >
                <Text style={{ fontSize: RFValue(15), padding: 10, paddingHorizontal: 35, backgroundColor: "#fff", color: "#000", ...FONTS.lexendregular, borderRadius: 8 }}>
                  View Card
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 0.15, backgroundColor: "white" }}>
        <View style={{ flexDirection: "row", marginVertical: "2%", justifyContent: "space-evenly" }}>
          <TouchableOpacity style={{ flexDirection: "column", borderRadius: 6 }}>
            <Text style={{ fontSize: RFValue(15), paddingHorizontal: 35, padding: 10, backgroundColor: "#E70736", color: "white", ...FONTS.lexendregular, borderRadius: 8 }}> ADD TO CART</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, borderRadius: 6, marginLeft: "2%" }}>
            <Text style={{ fontSize: RFValue(15), padding: 10, paddingHorizontal: 35, backgroundColor: "#fff", color: "#000", ...FONTS.lexendregular, borderRadius: 8 }}>
              BUY NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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