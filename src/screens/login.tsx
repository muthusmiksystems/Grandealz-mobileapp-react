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
import { useNavigation } from "@react-navigation/native";
import { horizontalScale, verticalScale } from "../constants/metrices";
import { loginicon } from "../constants/icons";
// import InputBox from 'react-native-floating-label-inputbox';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Login = () => {
  const navigation=useNavigation()
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
            marginTop: verticalScale(80)
          }}
        >
        </Image>
        <Text style={{ fontSize: 35, color: "white" }}>Grandealz</Text>
      </View>
      <View style={styles.subdivTwo}>
        <Text style={{ fontSize: 25, color: "black", textAlign: "center", marginTop: verticalScale(20) }}>Log In</Text>
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
            placeholder="Email"
            style={{ borderWidth: 1, paddingStart: 15, borderRadius: 8, width: verticalScale(320), marginTop: verticalScale(50) }}
          />
          <TextInput
            placeholder="Password"
            style={{ borderWidth: 1, paddingStart: 15, borderRadius: 8, width: verticalScale(320), marginTop: verticalScale(30) }}
          />
          {/* <CheckBox>Remember Me</CheckBox> */}
        </View>
        <View style={{ flexDirection: "row", marginTop: "4%" }}>
          <Text style={{ flexDirection: "column", left: 42, alignSelf: "flex-start", color: "#E70736" }}>Remember Me</Text>
          <TouchableOpacity style={{ alignSelf: "flex-end", flexDirection: "column", left: 110, }} onPress={()=>navigation.navigate('ForgetPassword')}><Text style={{ color: "#E70736" }}>Forget Password?</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={{ alignSelf: "center", marginTop: "8%", borderWidth: 1, borderRadius: 8, width: verticalScale(200), padding: "4%" }} onPress={()=>navigation.navigate('Tabs')}>
          <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}>Log In</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: "14%", alignSelf: "center" }}>
          <Text style={{ flexDirection: "column", alignSelf: "flex-start" }}>New User? </Text>
          <TouchableOpacity style={{ alignSelf: "flex-end", flexDirection: "column" }} onPress={()=>navigation.navigate('ForgetPassword')}><Text style={{ color: "#E70736" }}>Create New Account</Text></TouchableOpacity>
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
    height: verticalScale(530),
    backgroundColor: "white",
    bottom: verticalScale(100),
    alignSelf: "center",
    borderRadius: 25
  }
})
export default Login;