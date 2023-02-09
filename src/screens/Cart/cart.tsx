import React, { useEffect, useState } from "react";
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
import CartProducts from "./cartProducts";
import CartRelated from "../Draws/cartRelated";
import PriceDetails from "../PriceDetails";
import PriceMap from "./pricemap";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AddCouponHandle } from "../../store/reducers/addcouponcode";
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const CouponPrice: any = useSelector<any>(state => state.AddCouponHandle.data.data);
    console.log("UseSelector.................",CouponPrice)
    const navigation = useNavigation();
    const [apply, setApply] = useState(true);
    const [copounprice, setCouponprice] = useState();
    return (
        <SafeAreaView style={{ backgroundColor: "#F1F1F", height: "100%" }}>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={styles.subdivOne}>
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(20), textAlign: "center" }}>Cart</Text>
            </View>
            <ScrollView style={{ height: "80%", paddingHorizontal: "4%" }}>
                <TouchableOpacity style={{ width: "100%", borderRadius: 20, backgroundColor: COLORS.white, margin: "2%", marginTop: "5%", alignSelf: "center" }} onPress={() => { navigation.navigate("Coupons") }}>
                    <View style={{ flexDirection: "row", width: "100%", borderRadius: 10, padding: "3%", alignItems: "center", marginLeft: "3%" }}>
                        <View style={{ flexDirection: "column", width: "85%", }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image
                                    source={image.coupon}
                                    resizeMode={"contain"}
                                    style={{ height: verticalScale(26), width: horizontalScale(26) }}
                                />
                                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginStart: "5%" }}>Apply Coupon Code</Text>
                            </View>
                        </View>
                        <MCIcon name="chevron-right" size={moderateScale(35)} color={COLORS.black} style={{ flexDirection: "column", width: "75%" }} />
                    </View>
                    {(CouponPrice)?(
                    <View style={{ flexDirection: "row", width: "100%", borderBottomStartRadius: 18, borderBottomEndRadius: 18, backgroundColor: "#FFCACD", alignItems: "center" }}>
                        <Text style={{ flexDirection: "column", width: "80%", color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, padding: "3%", marginStart: "5%" ,fontWeight:"700"}}>{CouponPrice.coupon_code} Applied</Text>
                        <Text style={{ flexDirection: "column", width: "15%", color: COLORS.textHeader, fontSize: RFValue(11), ...FONTS.lexendregular, }}>-₹{CouponPrice.coupon_discount}{"\n"}
                        <Text style={{ color: COLORS.element, fontSize: RFValue(10), ...FONTS.lexendregular, }}>Remove</Text></Text>
                    </View>
                    ):null}
                </TouchableOpacity>

                <View style={{ width: "100%", borderRadius: 10, backgroundColor: "#0B0029", margin: "2%", alignSelf: "center" }}>
                    <View style={{ flexDirection: "row", width: "100%", borderRadius: 10, paddingVertical: "3%" }}>
                        <View style={{ flexDirection: "column", width: "45%", alignItems: "center", justifyContent: "center" }}>
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
                        <View style={{ flexDirection: "column", width: "32%", marginStart: "20%" }}>
                            {apply ?
                                <TouchableOpacity style={{ flexDirection: "row", backgroundColor: COLORS.element, borderRadius: 5, alignItems: "center", justifyContent: "center", borderWidth: 1, }} onPress={() => setApply(!apply)}>
                                    <Text style={{ color: COLORS.white, fontSize: RFValue(14), ...FONTS.lexendregular, marginStart: "5%", padding: "4%" }}>Remove</Text>
                                </TouchableOpacity> :
                                <TouchableOpacity style={{ flexDirection: "row", borderColor: Colors.white, borderRadius: 5, alignItems: "center", justifyContent: "center", borderWidth: 1, }} onPress={() => setApply(!apply)}>
                                    <Text style={{ color: COLORS.white, fontSize: RFValue(14), ...FONTS.lexendregular, marginStart: "5%", padding: "4%" }}>Apply</Text>
                                </TouchableOpacity>
                            }
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
            <View style={{ flexDirection: "row", height: "8%", backgroundColor: COLORS.white, padding: "2%" }}>
                <TouchableOpacity style={{ flexDirection: "column", width: "45%", borderRadius: 5, borderWidth: 1, justifyContent: "center", alignItems: "center", marginLeft: "3%" }}>
                    <Text style={{ color: COLORS.textHeader, fontSize: RFValue(11), ...FONTS.lexendsemibold }}>Continue to Shopping</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "column", width: "45%", backgroundColor: COLORS.element, borderRadius: 5, justifyContent: "center", alignItems: "center", marginLeft: "4%", }} onPress={() => { navigation.navigate("Delivery") }}>
                    <Text style={{ color: COLORS.white, fontSize: RFValue(11), ...FONTS.lexendregular }} >Process to Checkout </Text>
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
        // alignItems: "center",
        justifyContent: 'center',
        // flexDirection: "row",


    },
    subdivTwo: {
        height: verticalScale(748),
        alignItems: "center",
        justifyContent: "center",
        // borderWidth:2
    }

})
export default Cart;