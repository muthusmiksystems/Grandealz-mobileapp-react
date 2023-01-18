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
import { COLORS } from "../constants";


const Login = () => {
  const navigation = useNavigation();
  const [passShow,setPassShow]=useState("true");
  console.log("PAss show",passShow);
  
  const CheckBoxes = (props) => {
    const [isSelected, setSelection] = useState(false);
    return (
      <View style={{ flexDirection: "row", left: horizontalScale(17) }}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkBox}
        // tintColors={{true: COLORS.primary}}
        />
        <Text style={{ color: "#E70736", fontFamily: "Lexend-Regular", flexDirection: "column", alignSelf: "center" }}>{props.label}</Text>
      </View>
    )
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
        />
      </View>
      <View style={styles.subdivTwo}>
        <Text style={{ fontSize: RFValue(26), color: "black", textAlign: "center", fontFamily: "Lexend-SemiBold", marginTop: verticalScale(16) }}>Log In</Text>
        <View style={{ alignSelf: "center",flexDirection:"row",borderWidth: 1, paddingStart: 10, borderRadius: 8, borderColor: "#c4c4c2", width: verticalScale(332), marginTop: verticalScale(40), color: "#000"  }}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={"black"}
            style={{ flexDirection:"column",width:horizontalScale(250)}}
          />
          <Fontisto name='email' size={30} style={{alignSelf:"center"}}/>
        </View>

        <View style={{alignSelf:"center",flexDirection:"row", borderWidth: 1, paddingStart: 10, borderRadius: 8, borderColor: "#c4c4c2", width: verticalScale(332), marginTop: verticalScale(18), color: "#000"}}>
          <TextInput
            placeholder="Password"
            secureTextEntry={passShow ? true : false}
            placeholderTextColor={"black"}
            style={{ flexDirection:"column",width:horizontalScale(250) }}
          />
          <TouchableOpacity style={{alignSelf:"center",flexDirection:"column"}} onPress={()=>setPassShow(passShow)}>
            {passShow ? <Ionicons name="eye-outline" size={30} /> :
            <Ionicons name='eye-off-outline' size={30} /> }
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: "1%" }}>
          <View style={{ flexDirection: "column" }}>
            <CheckBoxes label="Remember Me" />
          </View>
          <TouchableOpacity style={{ alignItems: "flex-end", flexDirection: "column", left: horizontalScale(70) }} onPressIn={() => navigation.navigate("ForgetPassword")}><Text style={{ color: "#E70736", fontFamily: "Lexend-Regular" }}>Forgot Password?</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={{ alignSelf: "center", marginTop: "8%", borderWidth: 1, borderRadius: 8, width: verticalScale(200), padding: "3%" }} onPressIn={() => navigation.navigate("Tabs")}>
          <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-SemiBold", color: "black" }}>Log In</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: "14%", alignSelf: "center" }}>
          <Text style={{ flexDirection: "column", alignSelf: "flex-start", fontFamily: "Lexend-Regular", color: "#000" }}>New User? </Text>
          <TouchableOpacity style={{ alignSelf: "flex-end", flexDirection: "column" }} onPressIn={() => navigation.navigate("Signup")}><Text style={{ color: "#E70736", fontFamily: "Lexend-Regular" }}>Create New Account</Text></TouchableOpacity>
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
  }
})
export default Login;
