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
import { horizontalScale, verticalScale } from "../../constants/metrices";
import { shoppingCart } from "../../constants/icons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { FONTS, COLORS } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import image from "../../constants/image";
// import { RadioButton } from "react-native-paper";
import icons from "../../constants/icons";

const Delivery = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: "#F1F1F", height: "100%" }}>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={styles.subdivOne}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(18) }}>
                    <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(20), textAlign: "center", width:horizontalScale(260) }}>Delivery</Text>
            </View>
            <ScrollView style={{ height: "80%" }}>
                {/* <RadioButton.Group onValueChange={newValue => { setValue(newValue), parentCallback(newValue) }} value={value} > */}
                <View style={{ width: "95%", borderRadius: 20, backgroundColor: COLORS.white, margin: "2%", marginTop: "5%", padding: "2%" }}>
                    <View style={{ flexDirection: "row", width: "100%", borderRadius: 10, padding: "2%" }}>
                        <View style={{ flexDirection: "column", width: "15%", }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    source={image.coupon}
                                    resizeMode={"contain"}
                                    style={{ height: 20, width: 20 }}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: "column", width: "65%", }}>

                            <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendsemibold, margin: "3%" }}>Deliver at your door step</Text>

                            <Text style={{ color: COLORS.gray, fontSize: RFValue(10), ...FONTS.lexendregular, margin: "5%" }}>For INR 50.00 your product(s) delivered to you and your ticker(s) will be used for draws.</Text>
                            <TouchableOpacity style={{ width: "40%", justifyContent: "center", alignItems: "center", borderRadius: 5, borderWidth: 1, padding: "2%", marginStart: "5%" }}>
                                <Text style={{ textAlign: "center", color: COLORS.textHeader, fontSize: RFValue(10), ...FONTS.lexendsemibold }} onPress={() => navigation.navigate("Address")}>Address</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "column", width: "20%", justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={image.busDelivery}
                                resizeMode={"contain"}
                                style={{ height: 70, width: 70 }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ width: "95%", borderRadius: 20, backgroundColor: COLORS.white, margin: "2%", marginTop: "5%", padding: "2%" }}>
                    <View style={{ flexDirection: "row", width: "100%", borderRadius: 10, padding: "2%" }}>
                        <View style={{ flexDirection: "column", width: "15%", }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    source={image.coupon}
                                    resizeMode={"contain"}
                                    style={{ height: 20, width: 20 }}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: "column", width: "65%", }}>

                            <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendsemibold, margin: "3%" }}>Self Pickup From Our Outlet</Text>

                        </View>

                    </View>
                </View>

                {/* </RadioButton.Group> */}
            </ScrollView>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    subdivOne: {
        width: horizontalScale(375),
        height: verticalScale(75),
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
export default Delivery;