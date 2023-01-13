import React, { useEffect } from "react";
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

const OtpPage = () => {

  const navigation = useNavigation();
  const containerStyle = {
    fontFamily: "Lexend-Regular",
    borderBottomWidth: 3,
    width: horizontalScale(40),
    marginTop:verticalScale(15)
  }

  return (
    <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#f1f1f1" }}>
      <StatusBar
        animated={true}
        backgroundColor="#0a0127"
      />
      <View style={styles.subdivOne}>
        <Image
          source={loginicon}
          resizeMode='contain'
          style={{
            marginTop: verticalScale(50)
          }}
        >
        </Image>
        <Text style={{ fontSize: 35, color: "white", fontFamily: "Lexend-Regular" }}>Grandealz</Text>
      </View>
      <View style={styles.subdivTwo}>
        <Text style={{ fontSize: 25, color: "black", textAlign: "center", fontFamily: "Lexend-SemiBold", marginTop: verticalScale(20) }}>Confirm OTP</Text>
        <View style={{ alignItems: "center" }}>
          <Text style={{ width: horizontalScale(300), textAlign: "justify", fontSize: 14, color: "black", marginTop: verticalScale(20), fontFamily: "Lexend-Regular" }}>
            Please enter the verification code that we have sent to the mobile number +91 9549878945
          </Text>
          <OTPTextView
            // handleTextChange={(value) => {setOtp(value) }}
            textInputStyle={containerStyle}
            inputCount={4}
            inputCellLength={1}
            tintColor={"#0a0127"}
          />
          <View style={{flexDirection:"row",marginTop:"2%"}}>
          <Text style={{ color: "black", fontFamily: "Lexend-Regular" }}>Time Remaining 2:00</Text>
          <TouchableOpacity><Text style={{ color: "#E70736", fontFamily: "Lexend-Regular" }}>     Resend</Text></TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={{ alignSelf: "center", marginTop: "8%", borderWidth: 1, borderRadius: 8, width: verticalScale(200), padding: "4%" }}>
          <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-SemiBold", color: "black" }}>Verify</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: "6%", alignSelf: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("ChangeMobileNumber")} style={{ flexDirection: "column" }}><Text style={{ color: "#E70736", fontFamily: "Lexend-Regular" }}>Change Mobile Number</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  subdivOne: {
    width: horizontalScale(375),
    height: verticalScale(310),
    backgroundColor: "#0a0127",
    alignItems: "center",
  },
  subdivTwo: {
    width: horizontalScale(350),
    height: verticalScale(400),
    backgroundColor: "white",
    bottom: verticalScale(100),
    alignSelf: "center",
    borderRadius: 25
  }
})
export default OtpPage;