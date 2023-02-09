import React, { type PropsWithChildren,useState, useEffect } from 'react';
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
import { verticalScale, horizontalScale, moderateScale } from '../constants/metrices';
import EntypoIcons from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector, useStore } from 'react-redux';
import moment from "moment";
import { addToWishlistHandle, wishlistHandle } from '../services/wishlist';

import { addToCartHandler } from '../store/reducers/addToCart';
import { unwrapResult } from '@reduxjs/toolkit';
const PriceDetails = ({route}) => {
  const pricing = route.params

  const[isWished,setIsWished]=useState(false)
  const dispatch=useDispatch();
  const store=useStore();

  console.log(pricing,"samuel sham")
  const navigation = useNavigation();
  

  const handleAdd=()=>{
    let value=pricing._id;
    dispatch(addToCartHandler(value))
    .then(unwrapResult)
    .then((orginalResult: any)=>{
      console.log("result of api is ",orginalResult)
    })
  }
  const [heart,setHeart]=useState(false)
  
  const handleAddWishlist=async()=>{
        const result= await addToWishlistHandle(pricing._id);
        setIsWished(true);
        console.log("done..........",pricing._id);
        setHeart(!heart)
        console.log("result...........",result)
        
  }
 const [pricelist,setPricelist]=useState();
 
 useEffect(()=>{
    const listprice=async ()=>{
      let priceitem=await wishlistHandle();
      setPricelist(priceitem)
      console.log("......hihihih........",priceitem)
    }
    listprice()
 },[])

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
            justifyContent: "center",
          }}>
          <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(18), flexDirection: "column" }}>
              <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
            </TouchableOpacity>
            <Text style={{ ...FONTS.lexendsemibold, color: "white", fontSize: RFValue(20), width: "78%", textAlign: "center" }}>Prize Details</Text>
          </View>
        </View>
        <ScrollView style={{ padding: "4%" }}>
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
                <Text style={{ color: COLORS.black, ...FONTS.lexendregular, fontSize: RFValue(13) }}>Max Draw Date: {moment (pricing.max_draw_date).format('Do MMMM, YYYY')}</Text>
                <Text style={{ color: COLORS.black, ...FONTS.lexendregular, fontSize: RFValue(10) }}>Or earlier if the campaign is sold out</Text>
              </View>
            </View>
            <View style={{ borderWidth: 0.5, width: "100%", borderColor: "lightgrey", marginTop: "2%" }} />
            <View style={{ alignItems: 'center', borderTopEndRadius: 8, }}>
              <View style={{ alignSelf: "flex-start", marginLeft: "2%", borderTopEndRadius: 40, borderTopStartRadius: 40, borderBottomEndRadius: 40, borderBottomStartRadius: 40, borderWidth: 3, marginTop: "2%", height: verticalScale(55), width: horizontalScale(120), borderColor: "#D8000D", flexDirection: "row" }}>
                <View style={{ flexDirection: "column", padding: 4, marginLeft: "7%" }}>
                  <Text style={{ color: "#E70736", ...FONTS.lexendregular, fontSize: RFValue(13),textAlign:"center" }}>{pricing.total_no_of_sold_out_tickets}</Text>
                  <Text style={{ ...FONTS.lexendsemibold, alignSelf: "center", color: "black", fontSize: RFValue(10), }}> Sold</Text>
                </View>
                <View style={{ backgroundColor: "#7F7E76B2", height: verticalScale(23), marginTop: verticalScale(15), borderWidth: 1, borderColor: "#7F7E76B2" }} />
                <View style={{ flexDirection: "column", padding: 4 }}>
                  <Text style={{ ...FONTS.lexendregular, color: " rgba(127, 126, 118, 0.7)", fontSize: RFValue(9) }}> OUT OF</Text>
                  <Text style={{ color: "#E70736", ...FONTS.lexendregular, fontSize: RFValue(13),textAlign:"center" }}>{pricing.total_no_of_tickets}</Text>
                </View>
              </View>
              <View style={{ alignSelf: "flex-end" }}>
                <Image
                  source={icons.share}
                  style={{
                    bottom: "70%",
                    marginRight: "2%",
                    width: 25,
                    height: 25
                  }}
                />
                <TouchableOpacity onPress={()=>handleAddWishlist()}>
                  {heart?
                 <FontAwesome name="heart-o" style={{
                  bottom: "40%",
                  marginRight: "2%",
                  width: 30,
                  height: 30,                  
                  
                }}size={30}  color={"black"} />
                :
                
                  <FontAwesome name="heart" style={{
                    bottom: "40%",
                    marginRight: "2%",
                    width: 30,
                    height: 30,                  
                    
                  }}size={30}  color={"red"} />
                  
                  }
                  
                
               
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'column', padding: moderateScale(10) }}>
                <Image
                  source={{uri:pricing.draw_image}}
                  style={{
                    borderWidth: 1,
                    width: 257,
                    height: 162
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ marginVertical: "5%",paddingBottom:"10%"}}>
            <View style={{ flexDirection: "row", marginVertical: "2%" }}>
              <TouchableOpacity style={{ flexDirection: "column", width: "48%", marginEnd: "2%" }}>
                <Text style={{ textAlign: "center", fontSize: RFValue(15), padding: "7%", backgroundColor: "#E70736", color: "white", ...FONTS.lexendregular, borderRadius: 5 }}> Prize Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, width: "49%", borderRadius: 5 }} onPressIn={() => { navigation.navigate("ProductDetails",pricing) }}>
                <Text style={{ textAlign: "center", fontSize: RFValue(15), padding: "6%", backgroundColor: "#fff", color: "#000", ...FONTS.lexendregular, borderRadius: 5 }}>
                  Product Details
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: RFValue(15), ...FONTS.lexendregular, color: COLORS.black, }}>Get a chance to win </Text>
            <Text style={{ color: "#E70736", fontSize: RFValue(15), ...FONTS.lexendsemibold }}>₹ {pricing.product_price} Cash</Text>
            <Text style={{ marginVertical: "2%", fontSize: RFValue(10), ...FONTS.lexendregular, color: COLORS.black, }}>{pricing.product_description}</Text>
            {/* <View style={{ flexDirection: "row", marginVertical: "2%", justifyContent: "space-evenly" }}>
                <TouchableOpacity style={{ flexDirection: "column", marginLeft: 5, borderWidth: 1,borderRadius:10 }}>
                  <Text style={{ fontSize: 20, padding: 10, backgroundColor: "#fff", color: "#000",...FONTS.lexendregular,borderRadius:10 }}> Go To Home </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1,borderRadius:10 }}>
                  <Text style={{ fontSize: 20, padding: 10, backgroundColor: "#fff", color: "#000",...FONTS.lexendregular,borderRadius:10 }}>View Card</Text>
                </TouchableOpacity>
              </View> */}
            <View style={{ flexDirection: "row", marginVertical: "2%",}}>
              <TouchableOpacity style={{ flexDirection: "column", width: "48%", marginEnd: "2%" }} onPressIn={() => {  navigation.navigate("Tabs") }} >
                <Text style={{ textAlign: "center", fontSize: RFValue(15), borderWidth: 1, padding: "6%", backgroundColor: "#fff", color: "#000", ...FONTS.lexendregular, borderRadius: 5 }}> Go to Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, borderRadius: 5, width: "49%" }}>
                <Text style={{ textAlign: "center", fontSize: RFValue(15), padding: "6%", backgroundColor: "#fff", color: "#000", ...FONTS.lexendregular, borderRadius: 5 }}>
                  View Card
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 0.15, backgroundColor: "white" }}>
        <View style={{ flexDirection: "row", marginVertical: "2%", marginHorizontal: "4%" }}>
          <TouchableOpacity style={{ flexDirection: "column", borderRadius: 6, width: "48%", marginEnd: "2%" }}>
            <Text style={{ textAlign: "center", fontSize: RFValue(15), padding: "7%", backgroundColor: "#E70736", color: "white", ...FONTS.lexendregular, borderRadius: 5 }} onPress={()=>{handleAdd()}}>ADD TO CART</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, borderRadius: 6, width: "49%" }} >
            <Text style={{ textAlign: "center", fontSize: RFValue(15), padding: "6%", backgroundColor: "#fff", color: "#000", ...FONTS.lexendregular, borderRadius: 8 }}>
              BUY NOW
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{ flexDirection: "row", marginVertical: "2%", justifyContent: "space-evenly" }}>
          <TouchableOpacity style={{ flexDirection: "column", borderRadius: 6 }}>
            <Text style={{ fontSize: RFValue(15), paddingHorizontal: 35, padding: 10, backgroundColor: "#E70736", color: "white", ...FONTS.lexendregular, borderRadius: 8 }}> ADD TO CART</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, borderRadius: 6, marginLeft: "2%" }}>
            <Text style={{ fontSize: RFValue(15), padding: 10, paddingHorizontal: 35, backgroundColor: "#fff", color: "#000", ...FONTS.lexendregular, borderRadius: 8 }}>
              BUY NOW
            </Text>
          </TouchableOpacity>
        </View> */}
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
