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
            height:verticalScale(80),
            justifyContent:"center"
          }}>
          <View style={{ flexDirection: 'row', alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(18) }}>
                    <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(24), textAlign: "center", width: "75%" }}>Price Details</Text>
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
              <View style={{ flexDirection: "column", marginLeft: "2%" }}>
                <Text style={{ color: COLORS.black, ...FONTS.lexendregular, fontSize: RFValue(13) }}>Max Draw Date: September 05,2022</Text>
                <Text style={{ color: COLORS.black, ...FONTS.lexendregular, fontSize: RFValue(10) }}>Or earlier if the campaign is sold out</Text>
              </View>
            </View>
            <View style={{ borderWidth: 0.5, width: "100%", borderColor: "lightgrey", marginTop: "2%" }} />
            <View style={{ alignItems: 'center', borderTopEndRadius: 8, }}>
              <View style={{ flexDirection: 'column', padding: 60 }}>
                <Image
                  source={image.inputcash}
                  style={{
                    borderWidth: 1,
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ marginLeft: 5, padding: 6, backgroundColor: "#D8D8D8 " }}>
            <View style={{ flexDirection: "row", marginVertical: "2%", justifyContent: "space-evenly" }}>
              <TouchableOpacity style={{ flexDirection: "column", borderRadius: 6 }}>
                <Text style={{ fontSize: RFValue(15), paddingHorizontal: 35, padding: 10, backgroundColor: "#E70736", color: "white", ...FONTS.lexendregular, borderRadius: 8 }}> Prize Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, borderRadius: 6, marginLeft: "5%" }} onPressIn={() => { navigation.navigate("ProductDetails") }}>
                <Text style={{ fontSize: RFValue(15), padding: 10, backgroundColor: "#fff", color: "#000", ...FONTS.lexendregular, borderRadius: 8 }}>
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