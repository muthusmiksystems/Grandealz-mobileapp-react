import React from "react";
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { horizontalScale, verticalScale } from "../constants/metrices";
import { love } from "../constants/icons"
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import icons from "../constants/icons"
import image from "../constants/image";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, FONTS } from "../constants";
import OrderList from "./Myorders/orderList";
import WishlistData from "./wishListData";
const Data = [
    {
        id: '1',
        imag: image.pencil,
        name: "Pencil",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
        id: '2',
        imag: image.pencil,
        name: "Pencil",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'

    },
    {
        id: '3',
        imag: image.bottel,
        name: "Bottel",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
        id: '4',
        imag: image.tshirt,
        name: "T-Shirt",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'

    },
    {
        id: '5',
        imag: image.cap,
        name: "Cap",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'

    },
    {
        id: '6',
        imag: image.pencil,
        name: "Pencil",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
        id: '7',
        imag: image.bottel,
        name: "Bottel",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'

    },
    {
        id: '8',
        imag: image.tshirt,
        name: "T-Shirt",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
];
const HowItWorks = () => {
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
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(24), textAlign: "center", width: "75%" }}>How It Works</Text>

            </View>
            <ScrollView >
                <View style={{ padding: "10%", paddingBottom: "10%" }}>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(20), color: "#E70736" }}>How It Work in 3 Steps</Text>
                        <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(12), textAlign: "center" }}>Simply buy our products and get a chance to win luxury prizes</Text>
                    </View>
                    <View style={{ backgroundColor: "white",padding:"10%" }}>
                        <Image
                            source={image.audi}
                            resizeMode="contain"
                            style={{
                                borderWidth: 1
                            }}
                        />
                        <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(10), color: "black", textAlign: "center" }}>Buy a Hashtag Hoodie <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(10), color: "#E70736" }}>₹1500</Text></Text>
                        <View style={{ borderWidth: 1, borderRadius: 8, padding: "7%", marginTop: "4%" }}>
                            <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(12), textAlign: "center" }}>Start Shopping</Text>
                        </View>
                        <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(10), color: "black", textAlign: "center", marginTop: "3%" }}>Get a chance to <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(10), color: "#E70736" }}>WIN</Text></Text>
                        <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(10), color: "black", textAlign: "center", marginTop: "5%" }}>All new Audi entron GT </Text>
                    </View>
                    <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(10), color: "black", textAlign: "center", marginTop: "5%" }}>*Terms and condition apply</Text>
                    <View style={{ marginTop: "10%" }}>
                        <Text style={{ textAlign: "center", ...FONTS.lexendsemibold, fontSize: RFValue(20), color: "#E70736" }}>Shop From our Products</Text>
                        <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(13), color: "black", textAlign: "center", margin: "5%" }}>Select from our wide range of clothing and stationery</Text>
                    </View>
                    <View style={{ marginTop: "10%" }}>
                        <Text style={{ textAlign: "center", ...FONTS.lexendsemibold, fontSize: RFValue(18), color: "#E70736" }}>Get complimentary coupons
                            to enter the draw</Text>
                        <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(11), color: "black", textAlign: "center", marginTop: "2%" }}>With each product purchased, you are awarded a complimentary coupon to a prize draw.</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ backgroundColor: "white", flexDirection: "row", width: horizontalScale(350), alignSelf: "center", height: verticalScale(180), borderRadius: 6 }}>
                    <View style={{ flexDirection: "column", width: horizontalScale(30), right: horizontalScale(10), alignSelf: "center", backgroundColor: COLORS.lightGray, height: verticalScale(65), borderBottomEndRadius: 55, borderTopEndRadius: 55 }} />
                    <View style={{ flexDirection: "column", width: horizontalScale(300), right: horizontalScale(10) }}>
                        <View style={{ flexDirection: "row", padding: 8, borderBottomWidth: 2 }}>
                            <View style={{ flexDirection: "column", alignSelf: "center", width: horizontalScale(208) }}>
                                <View>
                                    <Image
                                        source={icons.ticketicon}
                                        resizeMode="contain"
                                        style={{ height: verticalScale(40), width: horizontalScale(120) }}
                                    />
                                </View>
                                <Text style={{ ...FONTS.lexendsemibold, color: COLORS.black, fontSize: RFValue(10), paddingVertical: 8 }}>Video :- <Text style={{ ...FONTS.lexendregular }}>Lorem Ipsum is simply</Text></Text>
                                <Text style={{ ...FONTS.lexendsemibold, color: COLORS.black, fontSize: RFValue(10) }}>Price :- <Text style={{ ...FONTS.lexendregular }}> ₹1500 Cash</Text></Text>
                                <Text style={{ ...FONTS.lexendsemibold, color: COLORS.black, fontSize: RFValue(10), paddingVertical: 8 }}>Watched On :- <Text style={{ ...FONTS.lexendregular, color: COLORS.gray }}>12.08.22 09:55 PM</Text></Text>
                            </View>
                            <View style={{ flexDirection: "column", backgroundColor: "#F1F1F1", borderRadius: 10, width: horizontalScale(100), right: horizontalScale(16), height: verticalScale(105), top: verticalScale(10) }}>
                                <Text style={{ ...FONTS.lexendregular, color: "white", textAlign: "center" }}></Text>
                                <Image
                                    source={image.cars}
                                    resizeMode="contain"
                                    style={{ height: verticalScale(50), width: horizontalScale(100) }}
                                />
                                <View></View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "column", width: horizontalScale(30), alignSelf: "center", backgroundColor: COLORS.lightGray, height: verticalScale(65), borderBottomStartRadius: 50, borderTopStartRadius: 50 }} />

                </TouchableOpacity>
                <View style={{ width: horizontalScale(345), paddingHorizontal: 8, backgroundColor: "white", marginLeft: "4%", elevation: 3, borderBottomEndRadius: 8, borderBottomStartRadius: 8 }}>
                    <Text style={{ ...FONTS.lexendsemibold, color: COLORS.gray, fontSize: RFValue(10), paddingVertical: 8 }}>Ticket no. <Text style={{ ...FONTS.lexendregular, color: COLORS.element }}>ticket no.20-232301-32133265</Text></Text>
                </View>
                <View style={{ width: horizontalScale(345), paddingHorizontal: 8, backgroundColor: "white", marginLeft: "4%", elevation: 2, borderBottomEndRadius: 8, borderBottomStartRadius: 8 }}>
                    <Text style={{ ...FONTS.lexendsemibold, color: COLORS.gray, fontSize: RFValue(10), paddingVertical: 8 }}>Ticket no. <Text style={{ ...FONTS.lexendregular, color: COLORS.element }}>ticket no.20-232301-32133265</Text></Text>
                </View>
                <View style={{ width: horizontalScale(345), paddingHorizontal: 8, backgroundColor: "white", marginLeft: "4%", elevation: 1, borderBottomEndRadius: 8, borderBottomStartRadius: 8 }}>
                    <Text style={{ ...FONTS.lexendsemibold, color: COLORS.gray, fontSize: RFValue(10), paddingVertical: 8 }}>Ticket no. <Text style={{ ...FONTS.lexendregular, color: COLORS.element }}>ticket no.20-232301-32133265</Text></Text>
                </View>
                <View style={{ padding: "10%", paddingBottom: "10%" }}>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(20), color: "#E70736" }}>How It Work in 3 Steps</Text>
                        <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(12), textAlign: "center" }}>Simply buy our products and get a chance to win luxury prizes</Text>
                    </View>
                    <View style={{ marginTop: "5%",padding:"10%" }}>
                        <Image
                            source={image.audi}
                            resizeMode="contain"
                            style={{
                                borderWidth: 1
                            }}
                        />
                    </View>
                    <View style={{borderWidth:1,alignSelf:"center",padding:"4%",marginTop:"2%"}}>
                        <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(15),color:COLORS.black}}>Have Question? Read Our Faqs</Text>
                    </View>
                </View>
            </ScrollView>
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
        flexDirection: "row"
    },
    subdivTwo: {
        height: verticalScale(748),
        alignItems: "center",
        justifyContent: "center",
        // borderWidth:2
    }

})
export default HowItWorks;