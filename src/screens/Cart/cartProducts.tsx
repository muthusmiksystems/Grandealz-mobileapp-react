import React, { useState } from "react";
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
import { horizontalScale, verticalScale } from "../../constants/metrices";
import { shoppingCart } from "../../constants/icons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { FONTS, COLORS } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntIcon from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native';
import image from "../../constants/image";

const CartProducts = () => {

    const navigation = useNavigation();
    const [toggle,setToggle]=useState(false);
    const data = ["all", "hello", "everybody", "world"]
    return (

        <View style={{ width: "92%", borderRadius: 20, backgroundColor: COLORS.white, margin: "2%",alignSelf:"center" }}>

            {data.map((item, index) => {
                return (
                    <>
                        <View style={{ flexDirection: "row", width: "100%", borderRadius: 10, padding: "2%" }}>
                            <View style={{ flexDirection: "column", width: "90%", }}>
                                <View style={{ flexDirection: "row", }}>
                                    <View style={{ width: "35%", backgroundColor: "#F9F9F9" }}>
                                        <Image
                                            source={image.pencil}
                                            resizeMode={"cover"}
                                            style={{ height: 80, width: 90, justifyContent: "center", margin: "10%" }}
                                        />
                                    </View>
                                    <View style={{ width: "70%", marginHorizontal: "10%" }}>
                                        <Text style={{ color: COLORS.textHeader, fontSize: RFValue(16), ...FONTS.lexendsemibold, }}>Pencil</Text>
                                        <Text style={{ color: COLORS.gray, fontSize: RFValue(14), ...FONTS.lexendregular, }}>Blanco Set</Text>
                                        <Text style={{ color: COLORS.element, fontSize: RFValue(14), ...FONTS.lexendregular, }}>INR 100.00</Text>
                                        <Text style={{ color: COLORS.textHeader, fontSize: RFValue(12), ...FONTS.lexendregular, marginTop: "5%" }}>1 Coupon
                                            <Text style={{ color: COLORS.gray }}> per unit</Text> </Text>
                                    </View>

                                </View>
                            </View>
                            <View style={{ flexDirection: "column", width: "15%",alignSelf:"center" }}>
                                <TouchableOpacity><AntIcon name="plussquare" size={28} color={COLORS.element} style={{ marginBottom: "10%" }} /></TouchableOpacity>
                                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendregular, marginStart: "15%" }}>2</Text>
                                <TouchableOpacity><AntIcon name="minussquare" size={28} color={COLORS.element} style={{ marginTop: "10%" }} /></TouchableOpacity>
                            </View>

                        </View>

                        <View style={{ borderBottomColor: "#F1F1F1", borderBottomWidth: 3 }} />
                    </>
                )
            })}

            <View style={{ flexDirection: "row", width: "100%", borderBottomStartRadius: 10, borderBottomEndRadius: 10, backgroundColor: COLORS.element }}>
                <View style={{marginTop:"5%",marginLeft:"3%"}}>
                <ToggleSwitch
                    isOn={toggle}
                    onColor="#0a0127"
                    offColor="#FF777F"
                    size="small"
                    onToggle={isOn => setToggle(!toggle)}
                />
                </View>
                <Text style={{ color: COLORS.white, fontSize: RFValue(12), ...FONTS.lexendregular, padding: "5%" }}>Donate Product(s) & Double Your Tickets</Text>
            </View>
        </View>


    );
}
const styles = StyleSheet.create({
    subdivOne: {
        width: horizontalScale(375),
        height: verticalScale(65),
        backgroundColor: "#0a0127",
        alignItems: "center",
        // justifyContent: 'center',
        flexDirection: "row"
    },
    subdivTwo: {
        height: verticalScale(748),
        alignItems: "center",
        justifyContent: "center",
        // borderWidth:2
    }

})
export default CartProducts;