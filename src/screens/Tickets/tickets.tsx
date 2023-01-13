import React, { useEffect,useState } from "react";
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
import { horizontalScale, verticalScale } from "../../constants/metrices";
// import InputBox from 'react-native-floating-label-inputbox';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import icons from "../../constants/icons";
import { FONTS } from "../../constants";



const Tickets = (props: Props) => {
    


   
return(
  <ScrollView style={{ flex: 1 }} >

  <View style={{ flex: 0.8 }}>
    <StatusBar
      animated={true}
      backgroundColor={"#0a0127"}
    />
    <View
      style={{
        backgroundColor: "#0a0127",

      }}>
      <View style={{ flexDirection: 'row', alignItems: "center" }}>
        <TouchableOpacity
          style={{ margin: "5.5%" }}
        >
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,

            }}
          />
        </TouchableOpacity>

        <View style={{ marginTop: "4%", flexDirection: 'row', justifyContent: "center" }}>
          <Text style={{ color: "white", fontSize: 20, marginLeft: "25%", bottom: 8, ...FONTS.lexendregular}}>Tickets</Text>
        </View>
      </View>
    </View>
    </View>
    </ScrollView >
)
}
const styles = StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
    },
  });
export default Tickets;