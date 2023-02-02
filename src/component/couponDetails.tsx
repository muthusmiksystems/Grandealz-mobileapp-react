import React, { type PropsWithChildren,useEffect,useState } from 'react';
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
import image from '../constants/image';
import icons from '../constants/icons';
import { horizontalScale, verticalScale } from '../constants/metrices';
import { COLORS, FONTS } from '../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { couponPage } from '../services/copoun';


const data = [
    {
        id: '1',
        imag: icons.ticketicon,
        imag1: image.cash,
        video: "Lorem Ipsum is simply",
        price: "1500 Cash",
        watchedOn: "12.08.22 09:55pm",
        ticketno: "20-232301-32133265",

    },
    {
        id: '2',
        imag: icons.ticketicon,
        imag1: image.cash,
        video: "Lorem Ipsum is simply",
        price: "1500 Cash",
        watchedOn: "12.08.22 09:55pm",
        ticketno: "20-232301-32133265",
    },
    {
        id: '3',
        imag: icons.ticketicon,
        imag1: image.cash,
        video: "Lorem Ipsum is simply",
        price: "1500 Cash",
        watchedOn: "12.08.22 09:55pm",
        ticketno: "20-232301-32133265",
    },
    

];
const CouponDetails = () => {
    const [dataoff , setDataOff]=useState();
    useEffect(()=>{
        const coupn = async ()=>{
             let offer= await couponPage()
             console.log("offer coupons",offer);
            setDataOff(offer)
         }
         coupn();
     },[]) 


    return (
        <SafeAreaView >
            <View style={{ width: horizontalScale(375), height: verticalScale(670) }} >
                <TouchableOpacity style={{ width: "95%", padding: "3%", borderRadius: 20, backgroundColor: COLORS.white, margin: "2%", marginTop: "5%", }}>
                    <View style={{ flexDirection: "row", width: "100%", borderRadius: 10, padding: "3%", justifyContent: "space-between", alignItems: "center", marginLeft: "3%" }}>
                        <View style={{ flexDirection: "column", }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginStart: "5%" }}>Apply Promo Code</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "column", }}>
                            <View style={{ flexDirection: "row", alignItems: "center", }}>
                                <Text style={{ borderWidth: 1, padding: 5, borderRadius: 8, color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginStart: "5%" }}>Apply</Text>
                            </View>
                        </View>
                        {/* <MCIcon name="chevron-right" size={moderateScale(35)} color={COLORS.black} style={{ flexDirection: "column", width: "75%" }} /> */}
                    </View>
                </TouchableOpacity>

                <FlatList
                    data={dataoff}
                    contentContainerStyle={{ marginLeft: horizontalScale(12), paddingBottom: "5%" }}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{ paddingTop: verticalScale(14), }}>
                            <TouchableOpacity style={{ backgroundColor: "white", flexDirection: "row", width: horizontalScale(350), height: verticalScale(130), borderRadius: 6 }}>
                                <View style={{ flexDirection: "column", width: horizontalScale(30), right: horizontalScale(10), alignSelf: "center", backgroundColor: COLORS.lightGray, height: verticalScale(65), borderBottomEndRadius: 95, borderTopEndRadius: 95 }} />
                                <View style={{ flexDirection: "column", width: horizontalScale(300), right: horizontalScale(10) }}>
                                    <View style={{ flexDirection: "row", padding: 8,/* paddingBottom:25, borderBottomColor: "#616161", borderBottomWidth: 1 */ }}>
                                        <View style={{ flexDirection: "column", width: horizontalScale(208) }}>
                                            <View style={{ marginBottom: "0%" }}>
                                                <Text style={{ ...FONTS.lexendsemibold, color: COLORS.black, fontSize: RFValue(16), paddingVertical: 2 }}>Flat {item.discount}% OFF</Text>
                                            </View>
                                            <Text style={{ ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingVertical: 2 }}>Use {item.coupon} </Text>
                                        </View>
                                    </View>
                                    <View style={{ borderStyle: "dashed", borderBottomWidth: 1, borderColor: "grey",marginStart:"4%" }} />
                                    <View style={{  flexDirection: "row",justifyContent:"space-between" }}>
                                        <View style={{ flexDirection: "column" }}>
                                        <Text style={{ ...FONTS.lexendsemibold, color: COLORS.black, fontSize: RFValue(12), paddingVertical: 4 }}>{item.description}</Text>
                                            <Text style={{ ...FONTS.lexendsemibold, color: COLORS.black, fontSize: RFValue(12), paddingVertical: 4 }}>Save ₹20 with this code</Text>
                                        </View>
                                        <View style={{ flexDirection: "column", }}>
                                            <View style={{ flexDirection: "column", alignItems: "center",paddingTop:6 }}>
                                                <Text style={{ borderWidth: 1, padding: 5, borderRadius: 8, color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginStart: "5%" }}>Apply</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "column", width: horizontalScale(30), alignSelf: "center", backgroundColor: COLORS.lightGray, height: verticalScale(65), borderBottomStartRadius: 50, borderTopStartRadius: 50 }} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
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

})
export default CouponDetails;