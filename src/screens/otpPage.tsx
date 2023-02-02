import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  // CheckBox,
  useColorScheme,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  // Button
} from "react-native";
import { horizontalScale, verticalScale } from "../constants/metrices";
import { loginicon } from "../constants/icons";
import OTPTextView from 'react-native-otp-textinput';
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useDispatch } from "react-redux";
import { VerifyHandler } from "../store/reducers/verify";
import { unwrapResult } from '@reduxjs/toolkit';

const OtpPage = () => {

 const [otp,setOtp]=useState("");
  const dispatch=useDispatch();
  const navigation = useNavigation();
  const containerStyle = {
    fontFamily: "Lexend-Regular",
    borderBottomWidth: 3,
    width: horizontalScale(40),
    marginTop:verticalScale(9)
  }
  const handleSubmit=()=>{    
    if(otp.length>3){
    dispatch(VerifyHandler(otp))
    .then(unwrapResult)
    .then((originalPromiseResult) => {
       console.log("successfully returned to login with response ", originalPromiseResult);
         if (originalPromiseResult.status==="200") {
             const param = originalPromiseResult.data;
             navigation.navigate("login")
        } else {
           console.log("error",originalPromiseResult.message);
           ;
        }
    })
    }
    
  }
  return (
    <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#f1f1f1" }}>
      <StatusBar
        animated={true}
        backgroundColor="#0a0127"
      />
      <View style={styles.subdivOne}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "column", marginTop: verticalScale(18), marginLeft: horizontalScale(18) }}>
          <EntypoIcons name="chevron-left" size={30} color={"white"} />
        </TouchableOpacity>
        <View style={{flexDirection:"column",marginLeft:horizontalScale(78),marginTop:verticalScale(45)}}>
        <Image
          source={loginicon}
          resizeMode='contain'
          style={{
            height:verticalScale(150),
            width:horizontalScale(130)
           }}
        
        />
        </View>
        {/* <Text style={{ fontSize: 35, color: "white", fontFamily: "Lexend-Regular" }}>Grandealz</Text> */}
      </View>
      <View style={styles.subdivTwo}>
        <Text style={{ fontSize:  RFValue(25), color: "black", textAlign: "center", fontFamily: "Lexend-SemiBold", marginTop: verticalScale(14) }}>Confirm OTP</Text>
        <View style={{ alignItems: "center" }}>
          <Text style={{ width: horizontalScale(300), fontSize: RFValue(12), color: "black", marginTop: verticalScale(27), fontFamily: "Lexend-Regular" }}>
            Please  enter  the  verification  code  that  we  have  sent  to  the  mobile  number  +919549878945
          </Text> 
          <OTPTextView
            // handleTextChange={(value) => {setOtp(value) }}
            textInputStyle={containerStyle}
            inputCount={4}
            inputCellLength={1}
            tintColor={"#0a0127"}
            handleTextChange={(text) => {setOtp(text) }}
          />
          <View style={{flexDirection:"row",marginTop:"2%"}}>
          <Text style={{ color: "black", fontFamily: "Lexend-Regular",fontSize:RFValue(13) }}>Time Remaining 2:00</Text>
          <TouchableOpacity><Text style={{ color: "#E70736", fontFamily: "Lexend-Regular",fontSize:RFValue(13) }}>     Resend</Text></TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={{ alignSelf: "center", marginTop: "8%", borderWidth: 1, borderRadius: 8, width: horizontalScale(223), padding: "4%" }} onPress={() => { handleSubmit() }}>
          <Text style={{ textAlign: "center", fontSize:RFValue(16), fontFamily: "Lexend-SemiBold", color: "black" }}>Verify</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: "7%", alignSelf: "center",paddingBottom:verticalScale(52)}}>
          <TouchableOpacity onPress={() => navigation.navigate("ChangeMobileNumber")} style={{ flexDirection: "column" }}>
            <Text style={{ color: "#E70736", fontFamily: "Lexend-Regular",fontSize:RFValue(13)}}>Change Mobile Number</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  subdivOne: {
    width: horizontalScale(375),
    height: verticalScale(300),
    backgroundColor: "#0a0127",
    flexDirection: "row"
  },
  subdivTwo: {
    width: horizontalScale(330),
    // height: verticalScale(382),
    backgroundColor: "white",
    bottom: verticalScale(85),
    alignSelf: "center",
    borderRadius: 25
  }
})
export default OtpPage;