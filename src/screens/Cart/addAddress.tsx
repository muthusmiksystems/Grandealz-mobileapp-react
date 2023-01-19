import React,{useState} from "react";
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image, TextInput,
    TouchableOpacity
} from 'react-native';
import { horizontalScale, verticalScale } from "../../constants/metrices";
import { shoppingCart } from "../../constants/icons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { FONTS, COLORS } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import image from "../../constants/image";
import AntIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
// import { RadioButton } from "react-native-paper";
import icons from "../../constants/icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CheckBox from "@react-native-community/checkbox";
import PaymentGate from "./payPage";

const AddAddress = () => {
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
    
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: "#F1F1F", height: "100%" }}>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
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
                <Text style={{ fontFamily: "Lexend-Regular", color: "white", fontSize: RFValue(22), marginStart: "15%" }}>Add new Address</Text>
            </View>
            <ScrollView style={{ height: "80%" }}>
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendregular, margin: "3%" }}>CONTACT DETAILS</Text>
                <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                    <TextInput
                        keyboardType={"default"}
                        placeholder="Name*"
                        maxLength={10}
                        placeholderTextColor={COLORS.gray}
                        style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white }}
                    />
                </View>
                <View style={{ marginHorizontal: "3%" }}>
                    <TextInput
                        keyboardType={"default"}
                        placeholder="MobileNo*"
                        maxLength={10}
                        placeholderTextColor={COLORS.gray}
                        style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white }}
                    />
                </View>


                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendregular, margin: "3%" }}>CONTACT DETAILS</Text>
                <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                    <TextInput
                        keyboardType={"default"}
                        placeholder="Pin Code*"
                        maxLength={10}
                        placeholderTextColor={COLORS.gray}
                        style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white }}
                    />
                </View>
                <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                    <TextInput
                        keyboardType={"default"}
                        placeholder="Address (House No, Building, street, Area)*"
                        maxLength={10}
                        placeholderTextColor={COLORS.gray}
                        style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white }}
                    />
                </View>
                <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                    <TextInput
                        keyboardType={"default"}
                        placeholder="Locality / Town*"
                        maxLength={10}
                        placeholderTextColor={COLORS.gray}
                        style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white }}
                    />
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: "2%" }}>
                    <View style={{ flexDirection: "column", width: "50%" }}>
                        <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                            <TextInput
                                keyboardType={"default"}
                                placeholder="City / District*"
                                maxLength={10}
                                placeholderTextColor={COLORS.gray}
                                style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: "column", width: "50%" }}>
                        <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                            <TextInput
                                keyboardType={"default"}
                                placeholder="State*"
                                maxLength={10}
                                placeholderTextColor={COLORS.gray}
                                style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white }}
                            />
                        </View>
                    </View>
                </View>


                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendregular, margin: "3%" }}>SAVE ADDRESS AS</Text>
                <View style={{ marginHorizontal: "3%", marginBottom: "2%", flexDirection: "row", width: "90%", borderRadius: 10, backgroundColor: COLORS.white }}>
                    <TouchableOpacity style={{ width: "20%", margin: "3%", padding: "2%", }}><Text style={{ color: COLORS.gray, fontSize: RFValue(11), ...FONTS.lexendregular, borderRadius: 1, borderWidth: 1, borderColor: COLORS.gray, paddingHorizontal: "5%" }}>Home</Text></TouchableOpacity>
                    <TouchableOpacity style={{ width: "20%", margin: "3%", padding: "2%", }}><Text style={{ color: COLORS.gray, fontSize: RFValue(11), ...FONTS.lexendregular, borderRadius: 1, borderWidth: 1, borderColor: COLORS.gray, paddingHorizontal: "5%" }}>Work</Text></TouchableOpacity>
                </View>

                  <View style={{ marginHorizontal: "3%", marginBottom: "2%",padding:"2%",flexDirection: "row", width: "90%", borderRadius: 10, backgroundColor: COLORS.white,alignItems:"center" }}>
                  <CheckBoxes  />
                    <Text style={{ color: COLORS.gray, fontSize: RFValue(12), ...FONTS.lexendregular, paddingHorizontal: "5%" }}>Make this my default address</Text>
                </View>
            </ScrollView>
            <View style={{ flexDirection: "row", height: "6%", backgroundColor: COLORS.white }}>

                <TouchableOpacity style={{ flexDirection: "column", width: "90%", marginHorizontal: "5%", marginVertical: "1%", borderRadius: 5, borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendregular }}>Add Address</Text>
                </TouchableOpacity>

            </View>
            

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    subdivOne: {
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
export default AddAddress;