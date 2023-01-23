import React from "react";
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
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
const Address = () => {

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
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(24), width: horizontalScale(280), textAlign: "center" }}>Address</Text>
            </View>
            <ScrollView style={{ height: "80%" }}>
                {/* <RadioButton.Group onValueChange={newValue => { setValue(newValue), parentCallback(newValue) }} value={value} > */}
                <View style={{ width: "92%",alignSelf:"center", borderRadius: 20, backgroundColor: COLORS.white, margin: "2%", marginTop: "5%", padding: "2%" }}>
                    <TouchableOpacity style={{ flexDirection: "row", width: "100%", borderRadius: 5, justifyContent: "center" }} onPress={() => navigation.navigate('AddAddress')}>
                        <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, margin: "3%" }}>Add new Address</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: "92%",alignSelf:"center", borderRadius: 20, backgroundColor: COLORS.white, marginHorizontal: "2%", marginTop: "5%",marginBottom:"0%", borderColor: COLORS.element, borderWidth: 1 }}>
                    <View style={{ flexDirection: "row", width: "100%", borderRadius: 10, padding: "1%" }}>
                        <View style={{ flexDirection: "column", width: "90%", }}>
                            <View style={{ flexDirection: "row",width:"100%" }}>
                                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginLeft: "3%",marginVertical:"1%"}}>Davin connor</Text>
                                <TouchableOpacity style={{ width: "15%", justifyContent: "center", alignItems: "center", marginStart: "2%", }}>
                                    <Text style={{ width: "100%", color: COLORS.gray, fontSize: RFValue(11),textAlign:"center", ...FONTS.lexendregular, borderRadius: 5, borderWidth: 1, borderColor: COLORS.gray, paddingHorizontal: "5%" }}>Home</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: "column", width: "10%", borderRadius: 5,  alignItems: "center", backgroundColor: COLORS.element, padding: "2%",marginVertical:"0.5%" }}>
                            <Entypo name="edit" size={moderateScale(15)} color={COLORS.white} style={{ paddingVertical:"2%" }} />
                        </View>

                    </View>
                    <View>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(12), ...FONTS.lexendregular, marginHorizontal: "3%",marginTop:"0%" }}>
                            120, Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(12), ...FONTS.lexendregular, margin: "3%" }}>
                            Mobile: <Text style={{ color: COLORS.textHeader, fontSize: RFValue(12), ...FONTS.lexendregular, margin: "3%" }}>9654896542</Text>
                        </Text>
                    </View>
                </View>
                <View style={{ width: "92%",alignSelf:"center", borderRadius: 20, backgroundColor: COLORS.white, margin: "2%", marginTop: "5%", }}>
                    <View style={{ flexDirection: "row", width: "100%", borderRadius: 10, padding: "1%" }}>
                        <View style={{ flexDirection: "column", width: "90%", }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginLeft: "3%",marginVertical:"1%" }}>Davin connor</Text>
                                <TouchableOpacity style={{ width: "25%", justifyContent: "center", alignItems: "center",marginStart: "2%", }}>
                                    <Text style={{ color: COLORS.gray, fontSize: RFValue(11), ...FONTS.lexendregular, borderRadius: 5,textAlign:"center", borderWidth: 1, borderColor: COLORS.gray, paddingHorizontal: "5%" }}>Work</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: "column", width: "10%", borderRadius: 5,  alignItems: "center", alignSelf: "flex-end", borderColor: COLORS.black, borderWidth:1, padding: "2%",marginVertical:"0.5%" }}>
                        <Entypo name="edit" size={moderateScale(15)} color={COLORS.black} style={{ paddingVertical:"2%" }} />
                        </View>

                    </View>
                    <View>
                    <Text style={{ color: COLORS.gray, fontSize: RFValue(12), ...FONTS.lexendregular, marginHorizontal: "3%",marginTop:"0%" }}>
                            120, Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(12), ...FONTS.lexendregular, margin: "3%" }}>
                            Mobile: <Text style={{ color: COLORS.textHeader, fontSize: RFValue(12), ...FONTS.lexendregular, margin: "3%" }}>9654896542</Text>
                        </Text>
                    </View>
                </View>

                {/* </RadioButton.Group> */}
            </ScrollView>
            <View style={{ flexDirection: "row", height: "8%", backgroundColor: COLORS.white ,paddingHorizontal:horizontalScale(8)}}>
                <View style={{ flexDirection: "column", width: "55%",marginHorizontal:"3%", marginVertical: "4%"}}>
                    <Text style={{ color: COLORS.element, fontSize: RFValue(14), ...FONTS.lexendregular }} >₹100.00</Text>
                    <Text style={{ color: COLORS.gray, fontSize: RFValue(12), ...FONTS.lexendregular }} >Total Amount</Text>
                </View>
                <TouchableOpacity  onPress={() => navigation.navigate("Delivery")} style={{ flexDirection: "column", width: "35%", marginVertical: "1%", borderRadius: 5, borderWidth: 1, alignSelf: "center" }} >
                    <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendregular ,paddingVertical:verticalScale(10),textAlign:"center"}}>Continue</Text>
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
    }

})
export default Address;