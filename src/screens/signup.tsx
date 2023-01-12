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
import InputBox from 'react-native-floating-label-inputbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";

const Signup = () => {

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
        <Text style={{ fontSize: 30, color: "white" }}>Grandealz</Text>
      </View>
      <View style={styles.subdivTwo}>
        <Text style={{ fontSize: 25, color: "black", textAlign: "center", marginTop: verticalScale(20) }}>Register</Text>
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
          <TextInput
            placeholder="Fisrt Name"
            style={{ borderWidth: 1, paddingStart: 15, borderRadius: 8, width: verticalScale(320), marginTop: verticalScale(20) }}
          />
          <TextInput
            placeholder="Last Name"
            style={{ borderWidth: 1, paddingStart: 15, borderRadius: 8, width: verticalScale(320), marginTop: verticalScale(20) }}
          />
           <TextInput
            placeholder="Email"
            style={{ borderWidth: 1, paddingStart: 15, borderRadius: 8, width: verticalScale(320), marginTop: verticalScale(20) }}
          />
          <View style={{flexDirection:"row"}}>
          <TextInput
            placeholder="+91"
            style={{ borderWidth: 1,flexDirection:"column", paddingStart: 10, borderRadius: 8, width: verticalScale(50), marginTop: verticalScale(20) }}
          />
          <TextInput
            placeholder="Phone"
            style={{ borderWidth: 1, paddingStart: 15,flexDirection:"column", borderRadius: 8, width: verticalScale(261),marginLeft:"2%", marginTop: verticalScale(20) }}
          />
          </View>
          
           <TextInput
            placeholder="Password"
            style={{ borderWidth: 1, paddingStart: 15, borderRadius: 8, width: verticalScale(320), marginTop: verticalScale(20) }}
          />
          {/* <CheckBox>Remember Me</CheckBox> */}
        </View>
        <View style={{ flexDirection: "row", marginTop: "4%",alignSelf:"center" }}>
          <Text style={{ flexDirection: "column", alignSelf: "flex-start" }}>I agree to </Text><Text style={{color: "#E70736", textDecorationLine: "underline" }}>Usage Terms</Text><Text> and </Text><Text style={{color: "#E70736", textDecorationLine: "underline" }}>Privacy Policy</Text>
          {/* <TouchableOpacity style={{ alignSelf: "flex-end", flexDirection: "column", left: 110, }}><Text style={{ color: "#E70736" }}>Forget Password?</Text></TouchableOpacity> */}
        </View>
        <TouchableOpacity style={{ alignSelf: "center", marginTop: "6%", borderWidth: 1, borderRadius: 8, width: verticalScale(200), padding: "4%" }}>
          <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}>Register</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: "3%", alignSelf: "center" }}>
          <Text style={{ flexDirection: "column", alignSelf: "flex-start" }}>Existing User </Text>
          <TouchableOpacity style={{ alignSelf: "flex-end", flexDirection: "column" }} onPressIn={()=>navigation.navigate("login")}><Text style={{ color: "#E70736" }}>Log in</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  subdivOne: {
    width: horizontalScale(375),
    height: verticalScale(350),
    backgroundColor: "#0a0127",
    alignItems: "center",
  },
  subdivTwo: {
    width: horizontalScale(350),
    height: verticalScale(580),
    backgroundColor: "white",
    bottom: verticalScale(150),
    alignSelf: "center",
    borderRadius: 25
  }
})
export default Signup;