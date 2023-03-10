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
import { RFValue } from "react-native-responsive-fontsize";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { COLORS, FONTS } from "../constants";

const ChangeMobileNumber = () => {

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
              height:verticalScale(150),
              width:horizontalScale(130)
             }}
          />
        </View>
        {/* <Text style={{ fontSize: 35, color: "white",fontFamily:"Lexend-Regular" }}>Grandealz</Text> */}
      </View>
      <View style={styles.subdivTwo}>
        <Text style={{ fontSize: RFValue(25), color: "black", textAlign: "center", fontFamily: "Lexend-SemiBold", marginTop: verticalScale(20) }}>Change Mobile No.</Text>
        <View style={{ alignItems: "center" }}>
          <TextInput
            keyboardType={"phone-pad"}
            placeholder="Mobile Number"
            maxLength={10}
            placeholderTextColor={COLORS.black}
            style={{ borderWidth: 1, paddingStart: 15, borderRadius: 8, width: horizontalScale(300), borderColor: "#c4c4c2", marginTop: verticalScale(40), ...FONTS.lexendregular, fontSize: RFValue(14) }}
          />
        </View>
        <View style={{paddingBottom:verticalScale(52)}}>
        <TouchableOpacity style={{ alignSelf: "center", marginTop: "15%", borderWidth: 1, borderRadius: 8, width: horizontalScale(180), padding: "4%"}} onPress={() => navigation.navigate("OtpPage")}>
          <Text style={{ textAlign: "center", fontSize: 16,fontFamily: "Lexend-SemiBold",color: "black" }}>Request OTP</Text>
        </TouchableOpacity>
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
    flexDirection: "row"
  },
  subdivTwo: {
    width: horizontalScale(330),
    // height: verticalScale(298),
    backgroundColor: "white",
    bottom: verticalScale(85),
    alignSelf: "center",
    borderRadius: 25
  }
})
export default ChangeMobileNumber;