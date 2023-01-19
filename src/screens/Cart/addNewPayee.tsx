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
import image from '../../constants/image';
import icons from '../../constants/icons';
import { COLORS, FONTS } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/metrices';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import CheckBox from "@react-native-community/checkbox";

const AddNewPayee = () => {
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
                <TouchableOpacity
                    style={{ margin: "5.5%" }}
                    onPress={()=>navigation.goBack()}
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
                <Text style={{ fontFamily: "Lexend-Regular", color: "white", fontSize: RFValue(22), marginStart: "15%" }}>Add New Card</Text>
            </View>
            <View style={{ margin: "2%", marginBottom: "2%", borderRadius: 8, width: "94%", backgroundColor: COLORS.white }}>
                <Text style={{ color: COLORS.gray, fontSize: RFValue(10), marginHorizontal: "5%", marginTop: "3%" }}>Credit/Debit Card number</Text>
                <TextInput
                    keyboardType={"default"}
                    placeholder="xxxx xxxx xxxx xxxx"
                    maxLength={10}

                    placeholderTextColor={COLORS.textHeader}
                    style={{ marginStart: "5%", fontSize: RFValue(20) }}
                />
            </View>
            <View style={{ flexDirection: "row", width: "100%",margin:"2%" }}>
                <View style={{ flexDirection: "column", width: "48%" }}>
                    <View style={{ margin: "2%", marginBottom: "2%", borderRadius: 8, width: "95%", backgroundColor: COLORS.white }}>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(10), marginHorizontal: "5%", marginTop: "3%" }}>Expiry Date</Text>
                        <TextInput
                            keyboardType={"default"}
                            placeholder="xx/xx"
                            maxLength={10}

                            placeholderTextColor={COLORS.textHeader}
                            style={{ marginStart: "5%", fontSize: RFValue(20) }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: "column", width: "45%" }}>
                    <View style={{ margin: "2%", marginBottom: "2%", borderRadius: 8, width: "98%", backgroundColor: COLORS.white }}>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(10), marginHorizontal: "5%", marginTop: "3%" }}>Enter CVV</Text>
                        <TextInput
                            keyboardType={"default"}
                            placeholder="xxx"
                            maxLength={10}

                            placeholderTextColor={COLORS.textHeader}
                            style={{ marginStart: "5%", fontSize: RFValue(20) }}
                        />
                    </View>
                </View>
            </View>

            <View style={{  marginBottom: "2%",flexDirection: "row", width: "95%",alignItems:"center" }}>
                  <CheckBoxes  />
                    <Text style={{ color: COLORS.textHeader, fontSize: RFValue(12), ...FONTS.lexendregular, paddingHorizontal: "5%" }}>Save the card for future purchases.</Text>
                </View>

            
            <TouchableOpacity style={{alignSelf:"center",marginTop:"15%", marginHorizontal: "3%", marginBottom: "2%", padding: "3%", flexDirection: "row", width: "35%",borderWidth:1, borderRadius: 10, alignItems: "center",justifyContent:"center",}}>
            <Text style={{ color: COLORS.textHeader, fontSize: RFValue(16), ...FONTS.lexendsemibold, paddingHorizontal: "5%" }}>Pay Now</Text>

            </TouchableOpacity>
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
export default AddNewPayee;