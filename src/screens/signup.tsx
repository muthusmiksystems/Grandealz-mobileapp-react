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
  ToastAndroid,
  Pressable,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from "react-redux";
import { registerHandler } from "../store/reducers/register";
import useForm from "./Auth/useForm";
import validate from "./Auth/validate";
<<<<<<< Updated upstream
import { countryList } from "../services/countryList";
=======

>>>>>>> Stashed changes

const Signup = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { handleChange, handleSubmit, formErrors, data, formValues } = useForm(validate);

  const [firstName, setFirstName] = useState<any>("");
  const [lastName, setLastName] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [phone, setPhone] = useState<any>("");
  const [password, setPassword] = useState<any>("");
<<<<<<< Updated upstream
  const [error, setError] = useState<any>("");
=======
  const [error,setError]=useState<any>("");
>>>>>>> Stashed changes
  const [errorFirst, setErrorFirst] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorPhone, setErrorPhone] = useState(null);
  const [errorLast, setErrorLast] = useState(null);

<<<<<<< Updated upstream
  const [countryListValue, setCountryListValue] = useState([])
  const [mblCode, setMblCode] = useState("");
  const getCountryList = async () => {
    let listCountries = await countryList().then((originalPromiseResult) => {
      console.log("Personal Details Country....", originalPromiseResult);
      // const value = originalPromiseResult
      setCountryListValue(originalPromiseResult);
      console.log("listCoun", originalPromiseResult[56].name)
    })
  }
  useEffect(() => {
    getCountryList();
  }, [])
=======

>>>>>>> Stashed changes
  useEffect(() => {
    console.log(Object.keys(formValues).length, "kk", formErrors)
    if (formErrors && Object.keys(formErrors).length > 0) {
      if (formErrors && formErrors.allerror) {
        setError(formErrors.allerror)
      }
      else if (formErrors && formErrors.firstName) {
        //setFirstName(formErrors.firstName)
        setErrorFirst(formErrors.firstName);
        console.log(firstName, "firstname failed", formErrors)

      }
      else if (formErrors && formErrors.lastName) {
        console.log("lastname failed")
        //setLastName(formErrors.lastName);
        setErrorLast(formErrors.lastName);
      }
      else if (formErrors && formErrors.email) {
        //setEmail(formErrors.email);
        setErrorEmail(formErrors.email);
        console.log("email failed", formErrors.email)
      }
      else if (formErrors && formErrors.password) {
        console.log("password Validation failed")
        //setPassword(formErrors.password);
        setErrorPassword(formErrors.password);
<<<<<<< Updated upstream
      }
=======
      } 
>>>>>>> Stashed changes
      else if (formErrors && formErrors.phone) {
        console.log("phone failed")
        //setPhone(formErrors.phone);
        setErrorPhone(formErrors.phone);
      }
    }
    // console.log("im the formerror data........",formValues)
<<<<<<< Updated upstream

  }, [formErrors])

  useEffect(() => {
=======
    
  }, [formErrors])

  useEffect(()=>{
>>>>>>> Stashed changes
    if (data && Object.keys(data)) {
      const reg = {
        "first_name": data.firstName,
        "last_name": data.lastName,
        "email": data.email,
        "phone": data.phone,
        "password": data.password,
        "country_phone_code": "+91",
        "term_and_condition": true,
        "referralcode": ""
      }
<<<<<<< Updated upstream
      console.log("data inside the handle submit", reg);
=======
      console.log("data inside the handle submit",reg);
>>>>>>> Stashed changes
      dispatch(registerHandler(reg))
        .then(unwrapResult)
        .then(async (originalPromiseResult) => {
          console.log("success samuvel you did itdone", originalPromiseResult.data.access_token);
          await AsyncStorage.setItem('loginToken', originalPromiseResult.data.access_token);
          if (originalPromiseResult.status === "200") {
            var data = originalPromiseResult.data.access_token
            navigation.navigate("OtpPage")
          }
          else if (originalPromiseResult === "You have already registered") {
            console.log("im the error data", originalPromiseResult)
<<<<<<< Updated upstream
            ToastAndroid.showWithGravity(
              originalPromiseResult,
              ToastAndroid.CENTER,
              ToastAndroid.SHORT
            )
=======
            ToastAndroid.showWithGravity(originalPromiseResult),
              ToastAndroid.CENTER, ToastAndroid.SHORT
>>>>>>> Stashed changes
          }
          else {
            console.log(originalPromiseResult, "error")
          }
        })

    }
<<<<<<< Updated upstream

  }, [data])
=======
    
  },[data])
>>>>>>> Stashed changes

  // const handleSubmited = () => {
  //   const data = {
  //     "first_name": firstName,
  //     "last_name": lastName,
  //     "email": email,
  //     "phone": phone,
  //     "password": password,
  //     "country_phone_code": "+91",
  //     "term_and_condition": true,
  //     "referralcode": ""
  //   }
  //   console.log("data inside the handle submit", data);
  // }
  const handleBox = () => {
    if (errorEmail) {
      setEmail(""),
<<<<<<< Updated upstream
        setEmail(""), setErrorEmail("");
    }
    else if (errorFirst) {
      setFirstName(""),
        setFirstName(""), setErrorFirst("");
=======
      setEmail(""), setErrorEmail("");
    }
    else if (errorFirst) {
      setFirstName(""),
      setFirstName(""), setErrorFirst("");
>>>>>>> Stashed changes
    }
    else if (errorLast) {
      setLastName("")
      setLastName(""), setErrorLast("");
    }
    else if (errorPhone) {
      setPhone("")
      setPhone(""), setErrorPhone("");
    }
    else if (errorPassword) {
      setPassword("")
      setPassword(""), setErrorPassword("");
    }
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
          <Text style={{ fontFamily: "Lexend-Regular", color: "black", fontSize: RFValue(12) }}>I agree to <Text style={styles.underLineText}>Usage Terms</Text> and <Text style={styles.underLineText}>Privacy Policy</Text></Text>
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

              <Pressable onPressIn={() => handleBox()}>
                <TextInput
                  placeholder="First Name"
                  // placeholderStyle={{ fontFamily: "Lexend-Regular" }}
                  value={firstName}
                  clearButtonMode="always"
                  placeholderTextColor={"black"}
                  //style={{ borderWidth: 1, paddingStart: 15, borderColor: "#c4c4c2", borderRadius: 8, width: horizontalScale(300), marginTop: verticalScale(30), ...FONTS.lexendregular, fontSize: RFValue(14) }}
                  onChangeText={e => { handleChange(e, "firstName"), setErrorFirst(""), setFirstName(e) }}
                  style={{ ...styles.textInput, ...{ marginTop: verticalScale(14) }, ...{ color: (errorFirst) ? "red" : "black" } }}
                />
              </Pressable>
              <View style={{ height: "4%" }}>
                {formErrors.firstName || formErrors.allerror ?
                  <Text style={styles.ErrorText}>{errorFirst}</Text> : null}
              </View>
              <Pressable onPressIn={() => handleBox()}>
                <TextInput
                  placeholder="Last Name"
                  value={lastName}
                  placeholderTextColor={"black"}
                  onChangeText={e => { handleChange(e, "lastName"), setErrorLast(""), setLastName(e) }}
                  // onChangeText={(text) => { setLastName(text), text ? setError("") : setError(...errordata, errordata.lastname = "enter last name") }}
                  style={{ ...styles.textInput, ...{ color: (errorLast) ? "red" : "black" } }} />
              </Pressable>
              <View style={{ height: "4%" }}>
                {formErrors.lastName || formErrors.allerror ?
                  <Text style={styles.ErrorText}>{errorEmail}</Text> : null}
              </View>
              <Pressable onPressIn={() => handleBox()}>
                <TextInput
                  placeholder="Email"
                  keyboardType="email-address"
                  value={email}
                  placeholderTextColor={"black"}
                  onChangeText={e => { handleChange(e, "email"), setErrorEmail(""), setEmail(e) }}
                  // onChangeText={(text) => { setEmail(text), text ? setError("") : setError([...errordata, errordata.email = "enter valid email"]) }}
                  style={{ ...styles.textInput, ...{ color: (errorEmail) ? "red" : "black" } }} />

              </Pressable>
              <View style={{ height: "4%" }}>
                {formErrors.email || formErrors.allerror ?
                  <Text style={styles.ErrorText}>{errorEmail}</Text> : null}
              </View>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  placeholder="+91"
                  maxLength={3}
                  keyboardType="phone-pad"
                  placeholderTextColor={"black"}
                  style={{ ...styles.phone }}
                />
                <Pressable onPressIn={() => handleBox()}>
                  <TextInput
                    keyboardType={"phone-pad"}
                    placeholder="Phone"
                    value={phone}
                    maxLength={10}
                    onChangeText={e => { handleChange(e, "phone"), setErrorPhone(""), setPhone(e) }}
                    //onChangeText={(text) => { setPhone(text), text ? setError("") : setError(...errordata, errordata.phone = "enter phone number") }}
                    placeholderTextColor={"black"}
                    style={{ ...styles.pin, ...{ color: (errorPhone) ? "red" : "black" } }}
                  />
                </Pressable>

              </View>
              <View style={{ height: "4%" }}>
                {formErrors.phone || formErrors.allerror ?
                  <Text style={styles.ErrorText}>{errorPhone}</Text> : null}
              </View>
              <Pressable onPressIn={() => handleBox()}>
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={e => { handleChange(e, "password"), setErrorPassword(""), setPassword(e) }}
                  //onChangeText={(text) => { setPassword(text), text ? setError("") : setError(...errordata, errordata.password = "enter the password") }}
                  placeholderTextColor={"black"}
                  style={{ ...styles.textInput, ...{ color: (errorPassword) ? "red" : "black" } }} />
              </Pressable>
            </View>
            <View style={{ alignSelf: "center", width: horizontalScale(300), }}>
              <CheckBoxes />
            </View>
<<<<<<< Updated upstream
            <View style={{}}>
              {formErrors.allerror || formErrors.password ?
                <Text style={styles.Errorpass}>{error}{errorPassword}</Text> : null}
            </View>
=======
            <View style={{ }}>
                {formErrors.allerror || formErrors.password ?
                  <Text style={styles.Errorpass}>{error}{errorPassword}</Text> : null}
              </View>
>>>>>>> Stashed changes
            <TouchableOpacity style={{ alignSelf: "center", borderWidth: 1, borderRadius: 8, width: horizontalScale(200), padding: "4%" }} onPress={e => { handleSubmit(e, "2"), Keyboard.dismiss }} disabled={false} /* onPress={() => { handleSubmited() }} */ /* onPress={() => navigation.navigate("OtpPage")} */>

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
  },
  phone: {
    borderWidth: 1,
    flexDirection: "column",
    borderColor: "#c4c4c2",
    paddingStart: 10,
    borderRadius: 8,
    width: horizontalScale(45),
    ...FONTS.lexendregular,
    fontSize: RFValue(14)
  },
  pin: {
    borderWidth: 1,
    paddingStart: 15,
    borderColor: "#c4c4c2",
    flexDirection: "column",
    borderRadius: 8,
    width: horizontalScale(248),
    marginLeft: "2%",
    ...FONTS.lexendregular, fontSize: RFValue(14)
  },
  ErrorText: {
    color: "red",
    ...FONTS.lexendregular,
    fontSize: RFValue(10),
<<<<<<< Updated upstream
    marginStart:"7%",
    // width: horizontalScale(100)
=======
    textAlign: "center",
    width: horizontalScale(100)
>>>>>>> Stashed changes
  },
  Errorpass: {
    color: "red",
    ...FONTS.lexendregular,
    fontSize: RFValue(10),
<<<<<<< Updated upstream
    textAlign: "center",
=======
    textAlign:"center",
>>>>>>> Stashed changes
    width: horizontalScale(350)
  },
  textInput: {
    borderWidth: 1,
    paddingStart: 15,
    borderColor: "#c4c4c2",
    borderRadius: 8,
    width: horizontalScale(300),
    ...FONTS.lexendregular,
    fontSize: RFValue(14)
  },
})
export default Signup;