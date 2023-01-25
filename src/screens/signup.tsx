import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  // CheckBox,
  useColorScheme,
  TextInput,
  View,
  Image,
  Keyboard,
  TouchableOpacity,
  // Button
} from "react-native";
import { horizontalScale, verticalScale } from "../constants/metrices";
import { unwrapResult } from '@reduxjs/toolkit';
import { loginicon } from "../constants/icons";
// import InputBox from 'react-native-floating-label-inputbox';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import CheckBox from "@react-native-community/checkbox";
import { RFValue } from "react-native-responsive-fontsize";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { COLORS, FONTS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { registerHandler } from "../store/reducers/register";
import useForm from "./Auth/useForm";
import validate from "./Auth/validate";


const Signup = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { handleChange, handleSubmit, formErrors, data, formValues } = useForm(validate);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorfirst, setErrorFirst] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorPhone, setErrorPhone] = useState(null);
  const [errorLast, setErrorLast] = useState(null);


  useEffect(() => {
    console.log(Object.keys(formValues).length, "kk",formValues)
    if (formErrors && Object.keys(formErrors).length > 0) {
      if (formErrors && formErrors.firstName) {
        console.log("firstname failed")
        setFirstName(formErrors.firstName)
        setErrorFirst(true);
      } 
      else if (formErrors && formErrors.lastName) {
        console.log("lastname failed")
        setLastName(formErrors.lastName);
        setErrorLast(formErrors.lastName);
      }
      else if (formErrors && formErrors.email) {
        console.log("email failed")
        setEmail(formErrors.email);
        setErrorEmail(formErrors.email);
      } 
      else if (formErrors && formErrors.password) {
        console.log("password  failed")
        setPassword(formErrors.password);
        setErrorPassword(formErrors.password);
      } else if (formErrors && formErrors.phonenumber) {
        console.log("password Validation failed")
        setPhone(formErrors.phonenumber);
        setErrorPhone(formErrors.phonenumber);
      }
    }
  }, [formErrors])

  const handleSubmited = () => {
    const data = {
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "phone": phone,
      "password": password,
      "country_phone_code": "+91",
      "term_and_condition": true,
      "referralcode": ""
    }
    console.log("data inside the handle submit", data);
    // dispatch(registerHandler(data))
    //   .then(unwrapResult)
    //   .then((originalPromiseResult) => {
    //     console.log("success samuvel you did itdone", originalPromiseResult);
    //     var data = originalPromiseResult.result
    //     navigation.navigate("OtpPage")
    //   })
    //   .catch((rejectedValueOrSerializedError) => {
    //     console.log(" Inside catch", rejectedValueOrSerializedError);

    //   })

  }
  const CheckBoxes = () => {
    const [isSelected, setSelection] = useState(false);
    return (
      <View style={{ flexDirection: "row", right: horizontalScale(4), alignSelf: "center" }}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkBox}
          tintColors={{ true: COLORS.element }}
        />
        <View style={{ flexDirection: "column", alignSelf: "center" }}>
          <Text style={{ fontFamily: "Lexend-Regular", color: "black", fontSize: RFValue(11) }}>I agree to <Text style={styles.underLineText}>Usage Terms</Text> and <Text style={styles.underLineText}>Privacy Policy</Text></Text>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#f1f1f1" }}>
      <StatusBar
        animated={true}
        backgroundColor="#0a0127"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
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

          {/* <Text style={{ fontSize: 35, color: "white", fontFamily: "Lexend-Regular" }}>Grandealz</Text> */}
        </View>

        <View style={styles.subdivTwo}>

          <View style={{ paddingBottom: "1%" }}>
            <Text style={{ fontSize: RFValue(26), color: "black", textAlign: "center", marginTop: verticalScale(10), fontFamily: "Lexend-SemiBold" }}>Register</Text>
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
                placeholder="First Name"
                placeholderTextColor={"black"}
                // onChangeText={(e) => { setFirstName(text), text ? setError("") : setError(...errordata, errordata.firstname = "enter first name") }}
                onChangeText={e => { handleChange(e, "firstName"), setErrorFirst(""), setFirstName(e) }}
                style={{ borderWidth: 1, paddingStart: 15, borderColor: "#c4c4c2", borderRadius: 8, width: horizontalScale(300), marginTop: verticalScale(30), ...FONTS.lexendregular, fontSize: RFValue(14) }}
              />
              <TextInput
                placeholder="Last Name"
                placeholderTextColor={"black"}
                onChangeText={e => { handleChange(e, "lastName"), setErrorLast(""), setLastName(e) }}
                // onChangeText={(text) => { setLastName(text), text ? setError("") : setError(...errordata, errordata.lastname = "enter last name") }}
                style={{ borderWidth: 1, paddingStart: 15, borderColor: "#c4c4c2", borderRadius: 8, width: horizontalScale(300), marginTop: verticalScale(18), ...FONTS.lexendregular, fontSize: RFValue(14) }}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor={"black"}
                onChangeText={e => { handleChange(e, "email"), setErrorEmail(""), setEmail(e) }}
                // onChangeText={(text) => { setEmail(text), text ? setError("") : setError([...errordata, errordata.email = "enter valid email"]) }}
                style={{ borderWidth: 1, paddingStart: 15, borderColor: "#c4c4c2", borderRadius: 8, width: horizontalScale(300), marginTop: verticalScale(18), ...FONTS.lexendregular, fontSize: RFValue(14) }}
              />
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  placeholder="+91"
                  maxLength={3}
                  keyboardType="phone-pad"
                  placeholderTextColor={"black"}
                  style={{ borderWidth: 1, flexDirection: "column", borderColor: "#c4c4c2", paddingStart: 10, borderRadius: 8, width: horizontalScale(45), marginTop: verticalScale(18), ...FONTS.lexendregular, fontSize: RFValue(14) }}
                />
                <TextInput
                  keyboardType={"phone-pad"}
                  placeholder="Phone"
                  maxLength={10}
                  onChangeText={e => { handleChange(e, "phonenumber"), setErrorPhone(""), setPhone(e) }}
                  //onChangeText={(text) => { setPhone(text), text ? setError("") : setError(...errordata, errordata.phone = "enter phone number") }}
                  placeholderTextColor={"black"}
                  style={{ borderWidth: 1, paddingStart: 15, borderColor: "#c4c4c2", flexDirection: "column", borderRadius: 8, width: horizontalScale(248), marginLeft: "2%", marginTop: verticalScale(18), ...FONTS.lexendregular, fontSize: RFValue(14) }}
                />
              </View>

              <TextInput
                placeholder="Password"
                onChangeText={e => { handleChange(e, "password"), setErrorPassword(""), setPassword(e) }}
                //onChangeText={(text) => { setPassword(text), text ? setError("") : setError(...errordata, errordata.password = "enter the password") }}
                placeholderTextColor={"black"}
                style={{ borderWidth: 1, paddingStart: 15, borderColor: "#c4c4c2", borderRadius: 8, width: horizontalScale(300), marginTop: verticalScale(18), ...FONTS.lexendregular, fontSize: RFValue(14) }}
              />
            </View>
            <View style={{ alignSelf: "center", width: horizontalScale(300) }}>
              <CheckBoxes />
            </View>
            <TouchableOpacity style={{ alignSelf: "center", marginTop: "5%", borderWidth: 1, borderRadius: 8, width: horizontalScale(200), padding: "4%" }} onPress={e => { handleSubmit(e), Keyboard.dismiss }} disabled={false} /* onPress={() => { handleSubmited() }} */ /* onPress={() => navigation.navigate("OtpPage")} */>
              <Text style={{ textAlign: "center", fontSize: RFValue(16), fontFamily: "Lexend-SemiBold", color: "black" }}>Register</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginTop: "4%", alignSelf: "center" }}>
              <Text style={{ flexDirection: "column", alignSelf: "flex-start", fontFamily: "Lexend-Regular", color: "black", fontSize: RFValue(13) }}>Existing User </Text>
              <TouchableOpacity style={{ alignSelf: "flex-end", flexDirection: "column" }} onPressIn={() => navigation.navigate("login")}><Text style={{ color: "#E70736", fontFamily: "Lexend-Regular", fontSize: RFValue(13) }}>Log in</Text></TouchableOpacity>
            </View>
          </View>


        </View>
      </ScrollView>

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
    height: verticalScale(580),
    backgroundColor: "white",
    bottom: verticalScale(82),
    alignSelf: "center",
    borderRadius: 25
  },
  checkBox: {
    alignSelf: "center",
    flexDirection: "column",
  },
  underLineText: {
    color: "#E70736",
    textDecorationLine: "underline",
    fontFamily: "Lexend-Regular"
  }
})
export default Signup;