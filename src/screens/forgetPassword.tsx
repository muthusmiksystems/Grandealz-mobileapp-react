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
import { useNavigation } from "@react-navigation/native";
// import InputBox from 'react-native-floating-label-inputbox';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const ForgetPassword = () => {

  const navigation=useNavigation();

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
        <Text style={{ fontSize: 35, color: "white",fontFamily:"Lexend-Regular" }}>Grandealz</Text>
      </View>
      <View style={styles.subdivTwo}>
        <Text style={{ fontSize: 25, color: "black", textAlign: "center", marginTop: verticalScale(20), fontFamily:"Lexend-SemiBold"}}>Forgot Password</Text>
        <View style={{ alignItems: "center" }}>
          {/* <InputBox
            // inputOutLine
            label={"Password"}
            // value={password}
            // secureTextEntry={errorPassword ? false : true}
            rightIcon={<FontAwesome5 name={'eye'} size={38} />}
            passHideIcon={<FontAwesome5 name={'eye-slash'} size={38} />}
            // labelStyle={{ ...FONTS.robotoregular }}
            // customLabelStyle={{ ...styles.textPassword, ...{ color: (errorLogin || errorEmail) ? "red" : COLORS.black, } }}
            // onChangeText={e => { handleChange(e, "loginpassword"), setErrorLogin(""), setPassword(e), setErrorPassword(null) }}
          /> */}
          <Text style={{width:horizontalScale(300),textAlign:"justify",fontSize:14,color:"black",marginTop:verticalScale(30),fontFamily:"Lexend-Regular"}}>
            Enter your registered email address and we will send you a link to reset your password : 
          </Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor={"black"}
            style={{ borderWidth: 1, paddingStart: 15, borderRadius: 8,borderColor:"#c4c4c2", width: verticalScale(320), marginTop: verticalScale(30) }}
          />
          {/* <TextInput
            placeholder="Password"
            style={{ borderWidth: 1, paddingStart: 15, borderRadius: 8, width: verticalScale(320), marginTop: verticalScale(30) }}
          /> */}
          {/* <CheckBox>Remember Me</CheckBox> */}
        </View>
        <TouchableOpacity style={{ alignSelf: "center", marginTop: "14%", borderWidth: 1, borderRadius: 8, width: verticalScale(200), padding: "3%" }}
          onPress={()=>navigation.navigate("OtpPage")}
        >
          <Text style={{ textAlign: "center", fontSize: 16,fontFamily:"Lexend-SemiBold",color:"black" }}>Submit</Text>
        </TouchableOpacity>
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
    height: verticalScale(350),
    backgroundColor: "white",
    bottom: verticalScale(90),
    alignSelf: "center",
    borderRadius: 25
  }
})
export default ForgetPassword;