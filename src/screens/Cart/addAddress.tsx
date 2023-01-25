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
import { horizontalScale, moderateScale, verticalScale } from "../../constants/metrices";
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
            <View style={{ flexDirection:"column"}}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkBox}
                    tintColors={{true: "green"}}
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
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(14) }}>
                    <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(20), width: horizontalScale(290), textAlign: "center" }}>Add New Address</Text>
            </View>
            <ScrollView style={{ height: "80%" }}>
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginLeft: "5%", marginTop: "5%" }}>CONTACT DETAILS</Text>
                <View style={{ marginHorizontal: "3%", marginVertical: "2%" }}>
                    <TextInput
                        keyboardType={"default"}
                        placeholder="Name*"
                        maxLength={10}
                        placeholderTextColor={COLORS.gray}
                        style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13) }}
                    />
                </View>
                <View style={{ marginHorizontal: "3%" }}>
                    <TextInput
                        keyboardType={"default"}
                        placeholder="MobileNo*"
                        maxLength={10}
                        placeholderTextColor={COLORS.gray}
                        style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13) }}
                    />
                </View>


                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginLeft: "5%", marginTop: "3%" }}>ADDRESS</Text>
                <View style={{ marginHorizontal: "3%", marginVertical: "2%" }}>
                    <TextInput
                        keyboardType={"default"}
                        placeholder="Pin Code*"
                        maxLength={10}
                        placeholderTextColor={COLORS.gray}
                        style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13) }}
                    />
                </View>
                <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                    <TextInput
                        keyboardType={"default"}
                        placeholder="Address (House No, Building, street, Area)*"
                        maxLength={10}
                        placeholderTextColor={COLORS.gray}
                        style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(14) }}
                    />
                </View>
                <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                    <TextInput
                        keyboardType={"default"}
                        placeholder="Locality / Town*"
                        maxLength={10}
                        placeholderTextColor={COLORS.gray}
                        style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(14) }}
                    />
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: "2%" }}>
                    <View style={{ flexDirection: "column", width: "48.5%" }}>
                        <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                            <TextInput
                                keyboardType={"default"}
                                placeholder="City / District*"
                                maxLength={10}
                                placeholderTextColor={COLORS.gray}
                                style={{ paddingStart: 15, borderRadius: 8, width: "91%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13) }}
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
                                style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13) }}
                            />
                        </View>
                    </View>
                </View>


                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginLeft: "5%", marginTop: "3%" }}>SAVE ADDRESS AS</Text>
                <View style={{ marginVertical: "2%", flexDirection: "row", width: "90%", alignSelf: "center", borderRadius: 10, backgroundColor: COLORS.white }}>
                    <TouchableOpacity style={{ paddingVertical: "3%", marginHorizontal: "3.5%" }}><Text style={{ color: COLORS.gray, textAlign: "center", fontSize: RFValue(11), ...FONTS.lexendregular, borderRadius: 4, borderWidth: 1, borderColor: COLORS.gray, paddingVertical: "1%", paddingHorizontal: "4%" }}>Home</Text></TouchableOpacity>
                    <TouchableOpacity style={{ paddingVertical: "3%" }}><Text style={{ color: COLORS.gray, textAlign: "center", fontSize: RFValue(11), ...FONTS.lexendregular, borderRadius: 4, borderWidth: 1, borderColor: COLORS.gray, paddingHorizontal: "4%", paddingVertical: "1%" }}>Work</Text></TouchableOpacity>
                </View>

                <View style={{ marginHorizontal: "3%", marginBottom: "2%", padding: "2%", flexDirection: "row", width: "90%", borderRadius: 10, backgroundColor: COLORS.white, alignSelf: "center" }}>
                    <CheckBoxes />    
                    <Text style={{ color: COLORS.gray, fontSize:moderateScale(12), ...FONTS.lexendregular, alignSelf: "center",flexDirection:"column" }}>Make this my default address</Text>
                </View>
            </ScrollView>
            <View style={{ flexDirection: "row", height: "8%", backgroundColor: COLORS.white, paddingVertical: "1%", paddingHorizontal: "2%" }}>

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
        height: verticalScale(80),
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
        borderWidth:1,
        borderColor:"black",
    }

})
export default AddAddress;