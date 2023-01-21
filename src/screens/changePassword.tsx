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
import Fontisto from 'react-native-vector-icons/Fontisto';
import EntypoIcons from "react-native-vector-icons/Entypo";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, FONTS } from "../constants";

const ChangePassword = () => {

  const navigation = useNavigation();

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
              // marginTop: verticalScale(50)
            }}
          />
        </View>
        {/* <Text style={{ fontSize: 35, color: "white",fontFamily:"Lexend-Regular" }}>Grandealz</Text> */}
      </View>
      <View style={styles.subdivTwo}>
        <Text style={{ fontSize: 25, color: "black", textAlign: "center", marginTop: verticalScale(20), fontFamily: "Lexend-SemiBold" }}>Change Password</Text>
        <View style={{ alignItems: "center" }}>
          <View style={{ alignSelf: "center" }}>
            <TextInput
              placeholder="Existing Password"
              placeholderTextColor={"black"}
              style={{ borderWidth: 1, paddingStart: 15, borderRadius: 8, width: horizontalScale(300), borderColor: "#c4c4c2", marginTop: verticalScale(40), ...FONTS.lexendregular, fontSize: RFValue(14) }}
            />
            {/* <Fontisto name='email' size={30} style={{ alignSelf: "center" }} /> */}
          </View>
          <View style={{ alignSelf: "center" }}>
            <TextInput
              placeholder="New Password"
              placeholderTextColor={"black"}
              style={{ borderWidth: 1, paddingStart: 15, borderRadius: 8, width: horizontalScale(300), borderColor: "#c4c4c2", marginTop: verticalScale(20), ...FONTS.lexendregular, fontSize: RFValue(14) }}
            />
            {/* <Fontisto name='email' size={30} style={{ alignSelf: "center" }} /> */}
          </View>
          <View style={{ alignSelf: "center" }}>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={"black"}
              style={{ borderWidth: 1, paddingStart: 15, borderRadius: 8, width: horizontalScale(300), borderColor: "#c4c4c2", marginTop: verticalScale(20), ...FONTS.lexendregular, fontSize: RFValue(14) }}
            />
            {/* <Fontisto name='email' size={30} style={{ alignSelf: "center" }} /> */}
          </View>
        </View>
        <TouchableOpacity style={{ alignSelf: "center", marginTop: "12%", borderWidth: 1, borderRadius: 8, width: verticalScale(200), padding: "3%" }}
          onPress={() => navigation.navigate("OtpPage")}
        >
          <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-SemiBold", color: "black" }}>Update</Text>
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
    height: verticalScale(430),
    backgroundColor: "white",
    bottom: verticalScale(85),
    alignSelf: "center",
    borderRadius: 25
  }
})
export default ChangePassword;