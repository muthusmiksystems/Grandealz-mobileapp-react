import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    Image,
    FlatList,
    useColorScheme,
    View,
    TouchableOpacity,
} from 'react-native';
import image from '../constants/image';
import icons from '../constants/icons';
import { COLORS, FONTS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { horizontalScale, moderateScale, verticalScale } from '../constants/metrices';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import CheckBox from "@react-native-community/checkbox";
import EntypoIcons from "react-native-vector-icons/Entypo";

const PrivacyPolicy = () => {
    const navigation = useNavigation();
    const CheckBoxes = () => {
        const [isSelected, setSelection] = useState(false);
        return (
          <View style={{ flexDirection: "row", left: horizontalScale(17) }}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkBox}
            // tintColors={{true: COLORS.primary}}
            />
          
          </View>
        )
      }
    
    return (
        <>
        <View style={styles.subdivOne}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(14) }}>
                    <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(24), width: "79%", textAlign: "center" }}>
            Privacy Policy</Text>
        </View>
        <Text style={{ fontFamily: "Lexend-SemiBold", color:COLORS.textHeader, fontSize: RFValue(16), margin: "3%" }}>Privacy Policy</Text>
        <View style={{ flexDirection: "row", marginHorizontal:"4%" }}>
           <Text style={{ color: COLORS.gray, fontSize: RFValue(14),...FONTS.lexendregular,textAlign:"justify"}}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
           </Text>
          </View>
        
          <View style={{ flexDirection: "row", marginHorizontal:"4%" }}>
           <Text style={{ color: COLORS.gray, fontSize: RFValue(14),...FONTS.lexendregular,textAlign:"justify"}}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
           </Text>
          </View>

          
          <View style={{ flexDirection: "row", marginHorizontal:"4%" }}>
           <Text style={{ color: COLORS.gray, fontSize: RFValue(14),...FONTS.lexendregular,textAlign:"justify"}}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
           </Text>
          </View>

          <View style={{ flexDirection: "row", marginHorizontal:"4%" }}>
           <Text style={{ color: COLORS.gray, fontSize: RFValue(14),...FONTS.lexendregular,textAlign:"justify"}}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
           </Text>
          </View>
          <View style={{ flexDirection: "row", marginHorizontal:"4%" }}>
           <Text style={{ color: COLORS.gray, fontSize: RFValue(14),...FONTS.lexendregular,textAlign:"justify"}}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
           </Text>
          </View>

          
       
    </>
)
}
const styles = StyleSheet.create({

    container: {
        alignContent: "center"
    },
    view1: {
        alignContent: "center"
    },
    text1: {
        alignContent: "center"
    }, subdivOne: {
        width: horizontalScale(375),
        height: "10%",
        backgroundColor: "#0a0127",
        alignItems: "center",
        // justifyContent: 'center',
        flexDirection: "row",


    },
    subdivTwo: {
        height: verticalScale(748),
        alignItems: "center",
        justifyContent: "center",
        // borderWidth:2
    },
    checkBox: {
        alignSelf: "center",
        flexDirection: "column",
      }
    })

export default PrivacyPolicy;