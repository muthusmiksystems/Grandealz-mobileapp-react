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
import { FONTS,COLORS } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import image from "../../constants/image";
import CartProducts from "./cartProducts";
import CartRelated from "../Draws/cartRelated";
import PriceDetails from "../PriceDetails";
import PriceMap from "./pricemap";
const Cart = () => {

    const navigation=useNavigation();

    return (
        <SafeAreaView style={{backgroundColor:"#F1F1F",height:"100%"}}>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={styles.subdivOne}>

                <Text style={{ fontFamily: "Lexend-Regular", color: "white", fontSize:RFValue(22),marginStart:"15%" }}>Cart</Text>

            </View>
            <ScrollView style={{ height: "80%" }}>
                <View style={{ width: "95%", borderRadius: 20, backgroundColor: COLORS.white, margin: "2%", marginTop: "5%" }}>
                    <View style={{ flexDirection: "row", width: "100%", borderRadius: 10, padding: "2%" }}>
                        <View style={{ flexDirection: "column", width: "85%", }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    source={image.coupon}
                                    resizeMode={"contain"}
                                    style={{ height: 20, width: 20 }}
                                />
                                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendregular, marginStart: "5%" }}>Apply Coupon Code</Text>
                            </View>
                        </View>
                        <MCIcon name="chevron-right" size={44} style={{ flexDirection: "column", width: "75%", color: COLORS.textHeader, fontSize: RFValue(12), ...FONTS.lexendregular, }} />
                    </View>
                    <View style={{ flexDirection: "row", width: "100%", borderBottomStartRadius: 18, borderBottomEndRadius: 18, padding: "2%", backgroundColor: "#FFCACD" }}>
                        <Text style={{ flexDirection: "column", width: "85%", color: COLORS.textHeader, fontSize: RFValue(12), ...FONTS.lexendregular, padding: "3%" }}>FREE delivery Applied!</Text>
                        <Text style={{ flexDirection: "column", width: "15%", color: COLORS.textHeader, fontSize: RFValue(10), ...FONTS.lexendregular, }}>-₹10.00{"\n"}
                            <Text style={{ color: COLORS.element, fontSize: RFValue(10), ...FONTS.lexendregular, }}>Remove</Text></Text>
                    </View>
                </View>

                <View style={{ width: "95%", borderRadius: 20, backgroundColor: "#0B0029", margin: "2%", }}>
                    <View style={{ flexDirection: "row", width: "100%", borderRadius: 10, padding: "3%" }}>
                        <View style={{ flexDirection: "column", width: "55%", }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    source={image.coin}
                                    resizeMode={"contain"}
                                    style={{ height: 20, width: 20 }}
                                />
                                <Text style={{ color: COLORS.white, fontSize: RFValue(14), ...FONTS.lexendregular, marginStart: "5%" }}>50 coins</Text>
                                <Text style={{ color: COLORS.white, fontSize: RFValue(10), ...FONTS.lexendregular, marginTop: "1.5%", marginHorizontal: "4%" }}>-₹ 20</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "column", width: "35%", }}>
                            <TouchableOpacity style={{ flexDirection: "row", backgroundColor: COLORS.element, borderRadius: 5, alignItems: "center", justifyContent: "center" }}>

                                <Text style={{ color: COLORS.white, fontSize: RFValue(14), ...FONTS.lexendregular, marginStart: "5%", padding: "2%" }}>Remove</Text>

                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <CartProducts />
                <CartRelated />
                <PriceMap />
                {/* <View style={styles.subdivTwo}>
                <Image
                    source={shoppingCart}
                    resizeMode='contain'
                    style={{
                        width: horizontalScale(80),
                        height: verticalScale(80),
                    }}
                >

                </Image>
                <Text style={{ fontFamily: "Lexend-Regular", color: "black", fontSize: 16, marginTop: 20 }}>Your cart in empty</Text>
            </View> */}
            </ScrollView>
            <View style={{ flexDirection: "row", height: "7%", backgroundColor: COLORS.white }}>
                <TouchableOpacity style={{ flexDirection: "column", width: "45%", marginHorizontal: "3%", marginVertical: "1%", borderRadius: 5, borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendregular }}>Continue to Shopping</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "column", width: "45%", marginHorizontal: "3%", marginVertical: "1%", backgroundColor: COLORS.element, borderRadius: 5, justifyContent: "center", alignItems: "center" }} onPress={()=>navigation.navigate("Delivery")}>
                    <Text style={{ color: COLORS.white, fontSize: RFValue(14), ...FONTS.lexendregular }} >Process to Checkout </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    subdivOne: {
        width: horizontalScale(375),
        height:"10%",
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
export default Cart;