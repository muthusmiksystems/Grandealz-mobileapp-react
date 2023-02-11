import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { horizontalScale, verticalScale } from "../../constants/metrices";
import icons, { shoppingCart } from "../../constants/icons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { FONTS, COLORS } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import image from "../../constants/image";
import OrderList from "./orderList";
import StepIndicator from 'react-native-step-indicator';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { orderdetailsHandle } from "../../services/orderdetails"

const { width, height } = Dimensions.get("window");
const labels = ["Cart", "Delivery Address", "Order Summary", "Payment Method"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#E70736',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#E70736',
    stepStrokeUnFinishedColor: '#000',
    separatorFinishedColor: '#E70736',
    separatorUnFinishedColor: '#000',
    stepIndicatorFinishedColor: '#E70736',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#E70736',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#000',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#E70736'
}
const OrderDetails = ({ route }) => {


    const [orderdetailsdata, setOrderdetailsdata] = useState()
    const [currentPosition, setCurrentPosition] = useState(3)
    const navigation = useNavigation();

    const orderid = route.params;
    console.log("details", orderid._id);

   

    useEffect(() => {
        const orderDetail = async () => {
            let Orderdata = await orderdetailsHandle(orderid._id)
            setOrderdetailsdata(Orderdata)
        }
        orderDetail();
    }, [])

    console.log("queen", orderdetailsdata)



    const Data = [
        {
            label: 'Order Confirmed',
            datetime: 'Fri, 11th Fab 22'
        },
        {
            label: 'Shipped',
            datetime: 'Set, 12th Fab 22'
        },
        {
            label: 'Out For Delivery',
            datetime: 'Mon, 14th Fab 22'
        },
        {
            label: 'Delivered',
            datetime: 'Mon, 14th Fab 22'
        }
    ];
    return (
        <SafeAreaView style={{ backgroundColor: "#F1F1F", height: "100%" }}>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={styles.subdivOne}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(18), flexDirection: "column" }}>
                    <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(20), width: "78%", textAlign: "center" }}>Order Details</Text>

            </View>
            <ScrollView style={{ height: "80%", padding: "4%" }}>
                <View style={{ width: "100%", borderRadius: 8, backgroundColor: "#FFFFFF", flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", width: "100%", borderRadius: 10, padding: "3%" }}>
                        <View style={{ flexDirection: "column", }}>
                            {(orderdetailsdata) ? (
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: COLORS.gray, fontSize: RFValue(13), ...FONTS.lexendregular, marginStart: "5%" }}>Order ID<Text style={{ textTransform: 'uppercase' }}> - {orderdetailsdata._id}</Text></Text>
                                </View>
                            ) : null}
                        </View>
                    </View>
                </View>
                {(orderdetailsdata) ? (orderdetailsdata.draws.map((data, index) => (
<<<<<<< Updated upstream
                    <TouchableOpacity style={{ marginVertical: "4%" }} onPress={() => navigation.navigate("PlayNow")}>
=======
                    <TouchableOpacity style={{ marginVertical: "4%" }} onPress={() => navigation.navigate("PayPage")}>
>>>>>>> Stashed changes
                        <View key={index} style={{ flexDirection: "row", backgroundColor: "white", borderRadius: 10 }}>
                            <View style={{ flexDirection: "row", width: "65%", paddingVertical: "5%", paddingLeft: "3%" }}>
                                <View style={{ flexDirection: "column", backgroundColor: COLORS.pagebackground, padding: "4%", width: "45%", alignItems: "center", borderRadius: 5 }}>
                                    <Image
                                        source={{ uri: data.draw.product_image }}
                                        resizeMode="contain"
                                        style={{ height: verticalScale(100), width: horizontalScale(80) }}
                                    />
                                </View>
                                <View style={{ flexDirection: "column", width: "50%", paddingLeft: "4%", marginTop: RFValue(5) }}>
                                    <Text style={{ fontSize: RFValue(16), ...FONTS.lexendsemibold, color: COLORS.black }}>{data.draw.product_title}</Text>
                                    <Text style={{ fontSize: RFValue(14), ...FONTS.lexendregular, color: "#616161" }}>{data.draw.product_description}</Text>
                                    <Text style={{ fontSize: RFValue(20), ...FONTS.lexendregular, color: "red", marginTop: 20 }}>₹{data.draw.product_price}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "column", width: "33%", marginLeft: "2%", justifyContent: "flex-end" }}>
                                <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(12), color: "#000", textAlign: "right", marginRight: "5%" }}>Avail Your Ticket</Text>
                                <View style={{ width: "95%", backgroundColor: COLORS.element, alignSelf: "flex-end", flexDirection: "row", borderBottomEndRadius: 10, borderTopStartRadius: 10 }}>
                                    <Text style={{ width: "100%", textAlign: "center", paddingVertical: "8%", ...FONTS.lexendregular, color: COLORS.white }}>Play Now</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))) : null}
                <View style={{ marginTop: 10 }}>
                    <View style={{ backgroundColor: "#fff", borderRadius: 8, paddingHorizontal: 8 }}>
                        <StepIndicator
                            customStyles={customStyles}
                            currentPosition={currentPosition}
                            labels={labels}
                            stepCount={4}
                            direction="vertical"
                            renderLabel={({ position, stepStatus, label, currentPosition }) => {
                                return (
                                    <View style={{ padding: 10, paddingLeft: 5, width: width - 100 }}>
                                        <Text style={{ ...FONTS.lexendsemibold, color: "black" }}>{Data[position]?.label}</Text>
                                        <Text style={{}}>{Data[position]?.datetime}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>
                <View style={{ marginVertical: "4%", borderRadius: 8, padding: 10, backgroundColor: "white", flexDirection: "row" }}>
                    <Image
                        source={icons.download}
                        style={{
                            borderWidth: 1,
                            paddingLeft: 10,
                            width: 20,
                            height: 20,
                            flexDirection: "column"
                        }}
                    />
                    <Text style={{ flexDirection: "column", ...FONTS.lexendregular, color: COLORS.black }}>  Invoice <Text style={{ color: "#E70736" }}>    download</Text> </Text>
                </View>
                <View style={{ borderRadius: 8, padding: 10, backgroundColor: "white", flexDirection: "row" }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ ...FONTS.lexendsemibold, color: "black" }}>
                            Shipping Details
                        </Text>
                        <Text style={{ marginTop: 10, ...FONTS.lexendregular, color: "black" }}>Davin connor</Text>
                        <Text style={{ marginTop: 10, ...FONTS.lexendregular, color: "#616161" }}>120, Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <Text style={{ marginTop: 20, ...FONTS.lexendregular, color: "#616161" }}>Mobile:<Text style={{ marginTop: 10, ...FONTS.lexendregular, color: "black" }}> 9654896542 </Text></Text>
                    </View>
                </View>
                {(orderdetailsdata) ? (
                    <>
                        <View style={{ marginVertical: "4%", borderRadius: 8, padding: 5, backgroundColor: "white", flexDirection: "row", }}>
                            <View style={{ width: "100%" }}>
                                <Text style={{ ...FONTS.lexendsemibold, color: "black", padding: 10 }}>
                                    Price Details
                                </Text>
                                <View style={{ borderWidth: 0.5, borderColor: "#616161", width: "95%", marginLeft: RFValue(9) }} />
                                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                                    <View style={{ flexDirection: "column", ...FONTS.lexendregular }}>
                                        <Text>Total MRP</Text>
                                    </View>
                                    <View style={{ flexDirection: "column", ...FONTS.lexendregular }}>
                                        <Text>₹{orderdetailsdata.sub_total}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                                    <View style={{ flexDirection: "column", ...FONTS.lexendregular }}>
                                        <Text>Tax (GST)</Text>
                                    </View>
                                    <View style={{ flexDirection: "column", ...FONTS.lexendregular }}>
                                        <Text>₹{orderdetailsdata.tax}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                                    <View style={{ flexDirection: "column", ...FONTS.lexendregular }}>
                                        <Text>Promo Code</Text>
                                    </View>
                                    <View style={{ flexDirection: "column", ...FONTS.lexendregular }}>
                                        <Text>₹{orderdetailsdata.coupon_discount}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                                    <View style={{ flexDirection: "column", ...FONTS.lexendregular }}>
                                        <Text>Coins</Text>
                                    </View>
                                    <View style={{ flexDirection: "column", ...FONTS.lexendregular }}>
                                        <Text>₹{orderdetailsdata.coin_redeem}</Text>
                                    </View>
                                </View>
                                <View style={{ borderWidth: 0.5, borderColor: "#616161", width: "95%", marginLeft: RFValue(9) }} />
                                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                                    <View style={{ flexDirection: "column", ...FONTS.lexendregular }}>
                                        <Text>Total Amount</Text>
                                        <Text>Inclusive of Tax (GST)</Text>
                                    </View>
                                    <View style={{ flexDirection: "column", ...FONTS.lexendregular }}>
                                        <Text>₹{orderdetailsdata.total}</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style={{ marginBottom: "4%", borderRadius: 8, backgroundColor: "white", height: RFValue(40) }}>
                            <View style={{ margin: RFValue(10), flexDirection: "row" }}>
                                <Text style={{ flexDirection: "column", color: "black", marginTop: RFValue(2) }}>{'\u2B24'}</Text>
                                <Text style={{ ...FONTS.lexendsemibold, color: "black", fontSize: RFValue(15), flexDirection: "column" }}> Debit Card ₹{orderdetailsdata.total}</Text>
                            </View>
                        </View>
                    </>
                ) : null}
                <View style={{ padding: "5%" }}></View>
            </ScrollView>
            {/* <View style={{ flexDirection: "row", height: "7%", backgroundColor: COLORS.white }}>
                <TouchableOpacity style={{ flexDirection: "column", width: "45%", marginHorizontal: "3%", marginVertical: "1%", borderRadius: 5, borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendregular }}>Continue to Shopping</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "column", width: "45%", marginHorizontal: "3%", marginVertical: "1%", backgroundColor: COLORS.element, borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: COLORS.white, fontSize: RFValue(14), ...FONTS.lexendregular }} >Process to Checkout </Text>
                </TouchableOpacity>
            </View> */}
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
    indicatorCOntainer: {
        height: height - 170,
        width: width - 30,
        padding: 30,
        margin: 15,
        elevation: 10,
        borderRadius: 20,
        backgroundColor: "red"
    }

})
export default OrderDetails;