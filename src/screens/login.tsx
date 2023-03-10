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
  Keyboard,
  Pressable,
  View,
  Image,
  Alert,
  BackHandler,
  TouchableOpacity,
  ToastAndroid,
  // Button
} from "react-native";
// import {useBackHandler} from '@react-native-community/hooks';
import { Icon } from "react-native-vector-icons/Icon";
import { horizontalScale, verticalScale } from "../constants/metrices";
import { loginicon } from "../constants/icons";
// import InputBox from 'react-native-floating-label-inputbox';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from "@react-navigation/native";
import CheckBox from "@react-native-community/checkbox";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, FONTS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { loginHanlder } from "../store/reducers/login";
import useForm from "./Auth/useForm";
import validate from "./Auth/validate";
import { unwrapResult } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StorageController from "../services/storagectrl";


function handleBackButton() {
  // if (screen === 'Login') {
  console.log("BackHandler Function");
  BackHandler.exitApp();
  return true;
  // }
}
const Login = (props: Prop) => {

  const navigation = useNavigation();
  let screen = "Login";
  const storage = StorageController
  const dispatch = useDispatch();
  const [passShow, setPassShow] = useState("true");

  const [isSelected, setSelection] = useState(false);

  const { handleChange, details, handleSubmit, formErrors, data, formValues } = useForm(validate);
  const [token, setToken] = useState("");
  const [errorLogin, setErrorLogin] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    console.log(Object.keys(formValues).length, "kk", formErrors.password)
    if (formErrors && Object.keys(formErrors).length > 0) {
      if (formErrors && formErrors.email && formErrors.password) {
        //setEmail(formErrors.email);
        setErrorEmail(formErrors.email);

        setErrorPassword(formErrors.password); 

        console.log("email password failed", formErrors.email)
      }
      else if (formErrors && formErrors.password) {
        console.log("password Validation failed")
        //setPassword(formErrors.password);
        setErrorPassword(formErrors.password);
      }

      else if (formErrors && formErrors.email ){

        setErrorEmail(formErrors.email);
        console.log("email failed", formErrors.email)
      }
    }
    console.log(data, "data........", formValues)
  }, [formErrors])

  useEffect(() => {
    navigation.addListener("blur", () => { BackHandler.removeEventListener("hardwareBackPress", handleBackButton); })
    navigation.addListener("focus", () => { BackHandler.addEventListener("hardwareBackPress", handleBackButton); })
  }, [handleBackButton])


  //   const Redirecthandle =() =>{
  //   Alert.alert("","are sure u want app"),[{
  //     text:"no",
  //     onPress:()=>null,
  //     style:"cancel"
  //   },{
  //     text:"yes",
  //     onPress:()=>BackHandler.exitAPP(),
  //   }]
  //   }

  // useBackHandler(Redirecthandle)



  useEffect(() => {
    if (data && Object.keys(data)) {
      const reg = {
        "email": data.email,
        "password": data.password,
        "fcm_id": ""
      }
      console.log("data inside the handle submit", reg);
      dispatch(loginHanlder(reg))
        .then(unwrapResult)

        .then(async (originalPromiseResult:any) => {

          console.log("successfully returned to login with response ", originalPromiseResult);
          if (originalPromiseResult?.data?.access_token) {
            // if(isSelected===true){
              console.log("token  sam   ...dddd", originalPromiseResult.data.access_token);
            await AsyncStorage.setItem('loginToken', originalPromiseResult.data.access_token)
            // }
            ToastAndroid.showWithGravity(
              "Successfully logged in",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            )
            props.navigation.replace("Tabs")

          }
          else if (originalPromiseResult.message) {
            ToastAndroid.showWithGravity(
              originalPromiseResult.message,
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            )
          }
          else {
            // console.log("setError response ", originalPromiseResult);
            ToastAndroid.showWithGravity(
              originalPromiseResult,
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            )
            //  setErrorLogin(originalPromiseResult.message);

          }
        }).catch((rejectedValueOrSerializedError) => {
          console.log(" Inside catch", rejectedValueOrSerializedError);
          ToastAndroid.showWithGravity(
            "Something went wrong!, please try again later",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          )
        })
    }
  }, [data])

  const handlePasswordBox = () => {
    // console.log("box pass")
    if (errorEmail) {
      setEmail(""), setErrorEmail("");
    }
    else if (errorPassword) {
      setPassword(""), setErrorPassword("");
    }
  }
  return (
    <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#f1f1f1" }}>
      <StatusBar
        animated={true}
        backgroundColor="#0a0127"
      />
      <View style={styles.subdivOne}>
        <View style={{ flexDirection: "column", marginTop: verticalScale(45) }}>
          <Image
            source={loginicon}
            resizeMode='contain'
            style={{
              height: verticalScale(150),
              width: horizontalScale(130),
            }}
          />
        </View>
      </View>
      <View style={styles.subdivTwo}>
        <Text style={{ fontSize: RFValue(26), color: "black", textAlign: "center", fontFamily: "Lexend-SemiBold", marginTop: verticalScale(16) }}>Log In</Text>
        <TouchableOpacity style={{ alignSelf: "center", flexDirection: "row", borderWidth: 1, paddingStart: 10, borderRadius: 8, borderColor: "#c4c4c2", width: horizontalScale(300), marginTop: verticalScale(40), color: "#000" }}
          onPressIn={() => handlePasswordBox()}>
          <TextInput
            placeholder="Email"
            value={email}
            placeholderTextColor={"black"}
            keyboardType="email-address"

            onChangeText={e => { handleChange(e, "email"), setErrorEmail(""), setErrorLogin(""), setEmail(e) }}

            style={{
              flexDirection: "column",
              width: horizontalScale(250),
              ...FONTS.lexendregular,
              fontSize: RFValue(14), color: (errorEmail) ? "red" : "black"
            }}
          />
          <Fontisto name='email' size={30} style={{ alignSelf: "center", color: COLORS.gray }} />
        </TouchableOpacity>

        <View style={{ height: "5%" }}>

          {formErrors.email || formErrors.loginundef ?
            <Text style={styles.ErrorText}>{errorEmail}</Text> : null}
        </View>
        <TouchableOpacity style={{ alignSelf: "center", flexDirection: "row", borderWidth: 1, paddingStart: 10, borderRadius: 8, borderColor: "#c4c4c2", width: horizontalScale(300), color: "#000" }} onPressIn={() => handlePasswordBox()} >
          <TextInput
            placeholder="Password"
            value={password}
            secureTextEntry={passShow ? true : false}
            placeholderTextColor={"black"}

            onChangeText={e => { handleChange(e, "password"), setErrorPassword(""), setErrorLogin(""), setPassword(e) }}

            style={{
              flexDirection: "column",
              width: horizontalScale(250),
              ...FONTS.lexendregular,
              fontSize: RFValue(14), color: (errorPassword) ? "red" : "black"
            }}
          />
          <TouchableOpacity style={{ alignSelf: "center", flexDirection: "column" }} onPress={() => setPassShow(!passShow)}>
            {passShow ? <Ionicons name="eye-outline" size={30} style={{ color: COLORS.gray }} /> :
              <Ionicons name='eye-off-outline' size={30} style={{ color: COLORS.gray }} />
            }
          </TouchableOpacity>

        </TouchableOpacity>

        <View style={{ height: "6%" }}>
          {formErrors.password || formErrors.loginundef ?
            <Text style={styles.ErrorText}>{errorPassword}</Text> : null}
          {console.log("uuuuuuuuuuuuuuus", errorLogin ? true : false)}
          {errorLogin ? <Text style={styles.ErrorText}>{errorLogin}</Text> : null}

        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: "5%" }}>
          <View style={{ display: 'flex', flexDirection: "column", marginStart: "1.5%" }}>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkBox}
                tintColors={{ true: COLORS.element }}
              />
              <Text style={{ color: "#E70736", fontFamily: "Lexend-Regular", flexDirection: "column", alignSelf: "center", fontSize: RFValue(12) }}>Remember Me</Text>
            </View>
          </View>
          <TouchableOpacity style={{ display: 'flex', flexDirection: "column", marginEnd: "2.5%" }} onPressIn={() => navigation.navigate("ForgetPassword")}><Text style={{ color: "#E70736", fontFamily: "Lexend-Regular", fontSize: RFValue(12) }}>Forgot Password?</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={{ alignSelf: "center", marginTop: "8%", borderWidth: 1, borderRadius: 8, width: horizontalScale(193), padding: "3%" }} onPress={e => { handleSubmit(e, "1"), Keyboard.dismiss }} disabled={false}>

          <Text style={{ textAlign: "center", fontSize: RFValue(16), fontFamily: "Lexend-SemiBold", color: "black" }}>Log In</Text>

        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: "10%", alignSelf: "center" }}>
          <Text style={{ flexDirection: "column", alignSelf: "flex-start", fontFamily: "Lexend-Regular", color: "#000", fontSize: RFValue(13) }}>New User? </Text>
          <TouchableOpacity style={{ alignSelf: "flex-end", flexDirection: "column" }} onPressIn={() => navigation.navigate("Signup")}><Text style={{ color: "#E70736", fontFamily: "Lexend-Regular", fontSize: RFValue(13) }}>Create New Account</Text></TouchableOpacity>
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
    alignItems: "center",
  },
  subdivTwo: {
    width: horizontalScale(342),
    height: verticalScale(440),
    backgroundColor: "white",
    bottom: verticalScale(85),
    alignSelf: "center",
    borderRadius: 25
  },
  checkBox: {
    alignSelf: "center",
    flexDirection: "column",
    borderRadius: 25
  },
  ErrorText: {
    color: "red",
    ...FONTS.lexendregular,
    fontSize: RFValue(10),

    marginStart:"7%"

  }
})
export default Login;
