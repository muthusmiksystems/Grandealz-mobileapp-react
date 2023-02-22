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
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { horizontalScale, verticalScale } from "../constants/metrices";
import { loginicon } from "../constants/icons";
import { useNavigation } from "@react-navigation/native";
// import InputBox from 'react-native-floating-label-inputbox';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EntypoIcons from "react-native-vector-icons/Entypo";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, FONTS } from "../constants";
import { changepasswordHandle } from "../store/reducers/changepassword";
import Toast from 'react-native-simple-toast';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ChangePassword = () => {

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [expassword, setExpassword] = useState('')
  const [newpassword, setNewpassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const [passShowEx, setPassShowEx] = useState("true");
  const [passShowNw, setPassShowNw] = useState("true");
  const [passShowCp, setPassShowCp] = useState("true");

  const [error, setError] = useState()




  const validatePassword = () => {
    if (expassword.length == 0 || newpassword.length == 0 || confirmpassword.length == 0) {
      setError('Please enter your password');
    } else {
      setError('');


      if ((newpassword !== confirmpassword) || (expassword === newpassword)) {
        setError("Please Check your password");

      } else {
        if (!/^[a-zA-Z0-9!@#$%^&*~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{8,16}$/.test(newpassword) && !/^[a-zA-Z0-9!@#$%^&*~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{8,16}$/.test(confirmpassword)) {
          setError("minimum 8 characters should be with uppercase,lowercase and number");
        }
        else {
          setError("");
          const value = {
            "password": expassword,
            "new_password": confirmpassword
          };
          dispatch(changepasswordHandle(value)).then(unwrapResult).then((originalPromiseResult) => {

            console.log("successfully returned to change Password with response ", originalPromiseResult);
            if (originalPromiseResult === "Password has been changed.") {
              Toast.show('Password has been changed successfully', Toast.LONG, { backgroundColor: 'red' });
              setExpassword(""),
                setNewpassword(""),
                setConfirmpassword("")
              navigation.navigate('User')
            }
            else {
              setError(originalPromiseResult)

            }
          })

        }
      }
    }
  }

  return (
    <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#f1f1f1" }}>
      <StatusBar
        animated={true}
        backgroundColor="#0a0127"
      />

      <ScrollView>
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
          <Text style={{ fontSize: RFValue(25), color: "black", textAlign: "center", marginTop: verticalScale(20), fontFamily: "Lexend-SemiBold" }}>Change Password</Text>
          <View style={{ alignItems: "center" }}>
            <View style={{ alignSelf: "center", flexDirection: "row", borderWidth: 1, paddingStart: 10, borderRadius: 8, borderColor: "#c4c4c2", width: horizontalScale(300), color: "#000", marginTop: verticalScale(20), ...FONTS.lexendregular, }}  >
              <TextInput
                placeholder="Existing Password"
                placeholderTextColor={"black"}
                secureTextEntry={passShowEx ? true : false}
                onChangeText={(text: String) => { setExpassword(text), error ? setError("") : null }}
                value={expassword}
                style={{
                  flexDirection: "column",
                  width: horizontalScale(250),
                  ...FONTS.lexendregular,
                  fontSize: RFValue(14), color: "black"
                }}
              />
              <TouchableOpacity style={{ alignSelf: "center", flexDirection: "column" }} onPress={() => setPassShowEx(!passShowEx)}>
                {passShowEx ? <Ionicons name="eye-outline" size={30} style={{ color: COLORS.gray }} /> :
                  <Ionicons name='eye-off-outline' size={30} style={{ color: COLORS.gray }} />
                }
              </TouchableOpacity>
            </View>
            <View style={{ alignSelf: "center", flexDirection: "row", borderWidth: 1, paddingStart: 10, borderRadius: 8, borderColor: "#c4c4c2", width: horizontalScale(300), color: "#000", marginTop: verticalScale(20), ...FONTS.lexendregular }} >
              <TextInput
                placeholder="New Password"
                placeholderTextColor={"black"}
                secureTextEntry={passShowNw ? true : false}
                onChangeText={(text: String) => { setNewpassword(text), error ? setError("") : null }}
                value={newpassword}
                style={{
                  flexDirection: "column",
                  width: horizontalScale(250),
                  ...FONTS.lexendregular,
                  fontSize: RFValue(14), color: "black"
                }}
              />
              <TouchableOpacity style={{ alignSelf: "center", flexDirection: "column" }} onPress={() => setPassShowNw(!passShowNw)}>
                {passShowNw ? <Ionicons name="eye-outline" size={30} style={{ color: COLORS.gray }} /> :
                  <Ionicons name='eye-off-outline' size={30} style={{ color: COLORS.gray }} />
                }
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: verticalScale(20), ...FONTS.lexendregular, alignSelf: "center", flexDirection: "row", borderWidth: 1, paddingStart: 10, borderRadius: 8, borderColor: "#c4c4c2", width: horizontalScale(300), color: "#000", marginTop: verticalScale(20), ...FONTS.lexendregular }} >
              <TextInput
                 placeholder="Confirm Password"
                 placeholderTextColor={"black"}
                 secureTextEntry={passShowCp ? true : false}
                 onChangeText={(text: String) => { setConfirmpassword(text), error ? setError("") : null }}
                 value={confirmpassword}
                style={{
                  flexDirection: "column",
                  width: horizontalScale(250),
                  ...FONTS.lexendregular,
                  fontSize: RFValue(14), color: "black"
                }}
              />
              <TouchableOpacity style={{ alignSelf: "center", flexDirection: "column" }} onPress={() => setPassShowCp(!passShowCp)}>
                {passShowCp ? <Ionicons name="eye-outline" size={30} style={{ color: COLORS.gray }} /> :
                  <Ionicons name='eye-off-outline' size={30} style={{ color: COLORS.gray }} />
                }
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ height: "10%", alignItems: "center", marginRight: RFValue(18) }}>

            {error ? <Text style={{ ...FONTS.lexendregular, color: COLORS.element, fontSize: RFValue(12), paddingStart: "7%" }}>{error}</Text> : null}
          </View>
          <TouchableOpacity style={{ alignSelf: "center", marginTop: "1%", borderWidth: 1, borderRadius: 8, width: verticalScale(200), padding: "3%" }}
            onPress={() => validatePassword()}
          >
            <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-SemiBold", color: "black" }}>Update</Text>
          </TouchableOpacity>
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
    height: verticalScale(430),
    backgroundColor: "white",
    bottom: verticalScale(85),
    alignSelf: "center",
    borderRadius: 25
  }
})
export default ChangePassword;