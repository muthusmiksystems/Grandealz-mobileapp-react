import React, { type PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
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
import EntypoIcons from "react-native-vector-icons/Entypo";


const PaymentGate = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.subdivOne}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(18), flexDirection: "column" }}>
                    <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
                </TouchableOpacity>
                {/* <Text style={{ fontFamily: "Lexend-Regular", color: "white", fontSize: RFValue(22), marginStart: "15%" }}></Text> */}
            </View>
            <View style={{ height: "81%", padding: "4%" }}>
                <View style={{ width: "100%", borderRadius: 20, backgroundColor: COLORS.white }}>

                    <View style={{ width: "100%", borderRadius: 18, padding: "3%", backgroundColor: COLORS.white }}>
                        <Text style={{ color: COLORS.textHeader, fontSize: RFValue(16), ...FONTS.lexendsemibold, padding: "3%" }}>Price Details</Text>
                        <View style={{ borderBottomColor: COLORS.gray, borderBottomWidth: 2, margin: "1%" }} />
                        <View style={{ flexDirection: "row", marginTop: "3%" }}>
                            <Text style={{ color: COLORS.gray, fontSize: RFValue(14), ...FONTS.lexendregular, width: "80%", }}>Total MRP{"\n"} </Text>
                            <Text style={{ color: COLORS.gray, fontSize: RFValue(14), ...FONTS.lexendregular, width: "20%", justifyContent: "flex-end" }}>₹100.00</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingBottom: "2%" }}>
                            <Text style={{ color: COLORS.gray, fontSize: RFValue(14), ...FONTS.lexendregular, width: "80%" }}>Tax (GST) </Text>
                            <Text style={{ color: COLORS.gray, fontSize: RFValue(14), ...FONTS.lexendregular, width: "20%", justifyContent: "flex-end" }}>₹30.00</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingBottom: "2%" }}>
                            <Text style={{ color: COLORS.gray, fontSize: RFValue(14), ...FONTS.lexendregular, width: "80%" }}>Promo Code </Text>
                            <Text style={{ color: COLORS.gray, fontSize: RFValue(14), ...FONTS.lexendregular, width: "20%", justifyContent: "flex-end" }}>₹10.00</Text>
                        </View>
                        <View style={{ borderBottomColor: COLORS.gray, borderBottomWidth: 2, margin: "1%" }} />
                        <View style={{ flexDirection: "row", paddingBottom: "2%" }}>
                            <Text style={{ color: COLORS.gray, fontSize: RFValue(14), ...FONTS.lexendregular, width: "80%" }}>Total Amount </Text>
                            <Text style={{ color: COLORS.gray, fontSize: RFValue(14), ...FONTS.lexendregular, width: "20%", justifyContent: "flex-end" }}>  ₹70.00</Text>
                        </View>

                    </View>


                </View>
                <TouchableOpacity style={{ marginVertical: "3%", padding: "2%", flexDirection: "row", width: "100%", borderRadius: 10, backgroundColor: COLORS.white, alignItems: "center" }} onPress={() => navigation.navigate('AddNewPayee')}>
                    <View style={{ width: "88%", flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={icons.crcard}
                            resizeMode={"cover"}
                            style={{ width: 30, height: 30 }} />
                        <Text style={{ color: COLORS.textHeader, fontSize: RFValue(12), ...FONTS.lexendregular, paddingHorizontal: "5%", width: "89%" }}>Credit/Debit Card</Text>
                    </View>
                    <View style={{ width: "15%", flexDirection: "row" }}>
                        <MCIcon name="chevron-right" size={34} style={{ color: "black" }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: "2%", flexDirection: "row", width: "100%", borderRadius: 10, backgroundColor: COLORS.white, alignItems: "center" }}>
                    <View style={{ width: "88%", flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={icons.Upi}
                            resizeMode={"cover"}
                            style={{ width: 30, height: 30 }} />
                        <Text style={{ color: COLORS.textHeader, fontSize: RFValue(12), ...FONTS.lexendregular, paddingHorizontal: "5%" }}>Phonepe/Google Pay/BHIM UPI</Text>
                    </View>
                    <View style={{ width: "15%", flexDirection: "row" }}>
                        <MCIcon name="chevron-right" size={34} style={{ color: "black" }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: "3%", padding: "2%", flexDirection: "row", width: "100%", borderRadius: 10, backgroundColor: COLORS.white, alignItems: "center" }}>
                    <View style={{ width: "88%", flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={icons.netBanking}
                            resizeMode={"contain"}
                            style={{ width: 30, height: 30 }} />
                        <Text style={{ color: COLORS.textHeader, fontSize: RFValue(12), ...FONTS.lexendregular, paddingHorizontal: "5%" }}>Net Banking</Text>
                    </View>
                    <View style={{ width: "15%", flexDirection: "row" }}>
                        <MCIcon name="chevron-right" size={34} style={{ color: "black" }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", height: "10%", backgroundColor: COLORS.white }}>
                <View style={{ flexDirection: "column", width: "50%", marginHorizontal: "3%", marginVertical: "4%", }} onPress={() => navigation.navigate("Delivery")}>
                    <Text style={{ color: COLORS.element, fontSize: RFValue(14), ...FONTS.lexendregular }} >₹100.00</Text>
                    <Text style={{ color: COLORS.gray, fontSize: RFValue(12), ...FONTS.lexendregular }} >Total Amount</Text>
                </View>
                <TouchableOpacity style={{ flexDirection: "column", width: "35%", marginHorizontal: "3%", marginVertical: "4%", borderRadius: 5, borderWidth: 1, justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendregular }}>Continue</Text>
                </TouchableOpacity>

            </View>

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
    },
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

})
export default PaymentGate;