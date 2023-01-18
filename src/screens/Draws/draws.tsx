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
// import InputBox from 'react-native-floating-label-inputbox';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { horizontalScale, verticalScale } from "../../constants/metrices";
// import InputBox from 'react-native-floating-label-inputbox';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import icons from "../../constants/icons";
import { COLORS, FONTS } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import DrawsHeader from "./drawsListHorizontal";

import DrawsMain from "./drawsMain";


const Draws = (props: Props) => {
    


   
return(
  
  <ScrollView style={{ flex: 1 }} >
       <StatusBar animated={true}  backgroundColor={"#0a0127"}/>
          <View style={{ flexDirection: 'row', alignItems: "center",backgroundColor: "#0a0127",padding:"4%"}}>
            {/* <TouchableOpacity style={{ margin: "5.5%" }}>
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{ width: 20,height: 20,}} />
            </TouchableOpacity> */}
            <View style={{ marginTop: "4%", flexDirection: 'row', justifyContent: "center" }}>
              <Text style={{ color: "white", fontSize:RFValue(20), marginLeft: "25%", bottom: 8, ...FONTS.lexendregular}}>Draws</Text>
            </View>
        </View>
      <View style={{ marginHorizontal: "3%",marginTop:"5%",}}>
        <Text style={{ color: COLORS.textHeader, fontSize: RFValue(20),  bottom: 8, ...FONTS.lexendregular,borderBottomColor:COLORS.element2,borderBottomWidth:3,width:"20%" }}>Draws</Text>
      </View>
            <DrawsHeader/>

            <DrawsMain />

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
export default Draws;