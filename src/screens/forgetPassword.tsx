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
  ToastAndroid,
  TouchableOpacity,
  // Button
} from "react-native";
import { horizontalScale, verticalScale } from "../constants/metrices";
import { loginicon } from "../constants/icons";
import { useNavigation } from "@react-navigation/native";
// import InputBox from 'react-native-floating-label-inputbox';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EntypoIcons from "react-native-vector-icons/Entypo";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, FONTS } from "../constants";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { forgotPasswordHandler } from "../store/reducers/forgotPassword";

const ForgetPassword = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [forgetEmail, setForgetEmail] = useState('')
  const [error, setError] = useState()
  // console.log("ForgetPAss.........", forgetEmail);

  const validateEmail = () => {
    if (forgetEmail.length == 0) {
      setError('Please enter your EmailID');
    }
    else if (forgetEmail !== undefined) {
      // console.log("..............",forgetEmail);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(forgetEmail)) {
        setError("Invalid EmailID");
      }
      else {
        setError("");
        // console.log("data.......", forgetEmail);
        const value = {
          "email": forgetEmail
        };
        // console.log("data.......data", forgetEmail);

        dispatch(forgotPasswordHandler(value)).then(unwrapResult).then((originalPromiseResult) => {
          console.log("successfully returned to ForgetPassword with response ", originalPromiseResult);
          if (originalPromiseResult==="Please check your registered email to reset your password.") {
            ToastAndroid.showWithGravity(
              originalPromiseResult,
              // 'Please check your registered email to reset your password.',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
            setForgetEmail('')
            navigation.navigate('login')
          }
          // else if(originalPromiseResult==="undefined"){
          //   ToastAndroid.showWithGravity(
          //     'Please try again later.',
          //     ToastAndroid.SHORT,
          //     ToastAndroid.CENTER,
          //   );
          // }
          else{
            ToastAndroid.showWithGravity(
              originalPromiseResult,
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
            // setError(originalPromiseResult)
            // console.log("error....",error);
          }
          // console.log(ori);
          
        })
      }
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
        <View style={{ flexDirection: "column", marginLeft: horizontalScale(78), marginTop: verticalScale(45) }}>
          <Image
            source={loginicon}
            resizeMode='contain'
            style={{
              height: verticalScale(150),
              width: horizontalScale(130)
            }}
          />
        </View>
        {/* <Text style={{ fontSize: 35, color: "white",fontFamily:"Lexend-Regular" }}>Grandealz</Text> */}
      </View>
      <View style={styles.subdivTwo}>
        <Text style={{ fontSize: RFValue(25), color: "black", textAlign: "center", marginTop: verticalScale(20), fontFamily: "Lexend-SemiBold" }}>Forgot Password</Text>
        <View style={{ alignItems: "center" }}>
          <Text style={{ width: horizontalScale(300), fontSize: RFValue(13), color: "black", marginTop: verticalScale(26), fontFamily: "Lexend-Regular" }}>
            Enter your registered email address and we will send you a link to reset your password :
          </Text>
          <View style={{ alignSelf: "center", flexDirection: "row", borderWidth: 1, paddingStart: 10, borderRadius: 8, borderColor: "#c4c4c2", width: horizontalScale(300), marginTop: verticalScale(32), color: "#000" }}>
            <TextInput
              placeholder="Email"
              maxLength={30}
              placeholderTextColor={"black"}
              onChangeText={(text: String) => setForgetEmail(text)}
              value={forgetEmail}
              style={{ flexDirection: "column", width: horizontalScale(250), ...FONTS.lexendregular, fontSize: RFValue(14),color:COLORS.black }}
            />
            <Fontisto name='email' size={30} style={{ alignSelf: "center",color:COLORS.gray }} />
          </View>
        </View>
        <View style={{ height: "5%" }}>
          {error ? <Text style={{ ...FONTS.lexendregular, color: COLORS.element, fontSize: RFValue(12), paddingStart: "7%" }}>{error}</Text> : null}
        </View>
        <TouchableOpacity style={{ alignSelf: "center", marginTop: "8%", borderWidth: 1, borderRadius: 8, width: horizontalScale(200), padding: "4%" }}
          onPress={() => validateEmail()}
        >
          <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-SemiBold", color: "black" }}>Submit</Text>
        </TouchableOpacity>
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
    width: horizontalScale(342),
    height: verticalScale(350),
    backgroundColor: "white",
    bottom: verticalScale(85),
    alignSelf: "center",
    borderRadius: 25
  }
})
export default ForgetPassword;