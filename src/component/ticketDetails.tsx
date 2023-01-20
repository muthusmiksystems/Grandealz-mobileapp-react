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
import image from '../constants/image';
import icons from '../constants/icons';
import { horizontalScale, verticalScale } from '../constants/metrices';
import { COLORS, FONTS } from '../constants';
import { RFValue } from 'react-native-responsive-fontsize';


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
    {
        id: '4',
        imag: icons.ticketicon,
        imag1: image.cash,
        video: "Lorem Ipsum is simply",
        price: "1500 Cash",
        watchedOn: "12.08.22 09:55pm",
        ticketno: "20-232301-32133265",
    },
    {
        id: '5',
        imag: icons.ticketicon,
        imag1: image.cash,
        video: "Lorem Ipsum is simply",
        price: "1500 Cash",
        watchedOn: "12.08.22 09:55pm",
        ticketno: "20-232301-32133265",
    },

];
const TicketDetails = () => {
    return (
        <SafeAreaView >
            <View style={{ width: horizontalScale(375), height: verticalScale(670) }} >
                <FlatList
                    data={data}
                    contentContainerStyle={{ marginLeft: horizontalScale(12),paddingBottom:"5%" }}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{ paddingTop: verticalScale(14) }}>
                            <TouchableOpacity style={{ backgroundColor: "white", flexDirection: "row", width: horizontalScale(350), height: verticalScale(180), borderRadius: 6 }}>
                                <View style={{ flexDirection: "column", width: horizontalScale(30), right: horizontalScale(10), alignSelf: "center", backgroundColor: COLORS.lightGray, height: verticalScale(65), borderBottomEndRadius: 55, borderTopEndRadius: 55 }} />
                                <View style={{ flexDirection: "column", width: horizontalScale(300), right: horizontalScale(10) }}>
                                    <View style={{ flexDirection: "row", padding: 8, borderBottomWidth: 2 }}>
                                        <View style={{ flexDirection: "column", alignSelf: "center", width: horizontalScale(208) }}>
                                            <View>
                                                <Image
                                                    source={item.imag}
                                                    resizeMode="contain"
                                                    style={{ height:verticalScale(40),width:horizontalScale(120) }}
                                                />
                                            </View>
                                            <Text style={{ ...FONTS.lexendsemibold, color: COLORS.black, fontSize: RFValue(10), paddingVertical: 8 }}>Video :- <Text style={{ ...FONTS.lexendregular }}>{item.video}</Text></Text>
                                            <Text style={{ ...FONTS.lexendsemibold, color: COLORS.black, fontSize: RFValue(10) }}>Price :- <Text style={{ ...FONTS.lexendregular }}>₹{item.price}</Text></Text>
                                            <Text style={{ ...FONTS.lexendsemibold, color: COLORS.black, fontSize: RFValue(10), paddingVertical: 8 }}>Watched On :- <Text style={{ ...FONTS.lexendregular, color: COLORS.gray }}>{item.watchedOn}</Text></Text>
                                        </View>
                                        <View style={{ flexDirection: "column", backgroundColor: COLORS.element,borderRadius:10,width:horizontalScale(100),right:horizontalScale(16),height:verticalScale(105),top:verticalScale(10) }}>
                                            <Text style={{ ...FONTS.lexendregular, color: "white", textAlign: "center" }}>Cash</Text>
                                            <Image
                                                source={item.imag1}
                                                resizeMode="contain"
                                                style={{ height: verticalScale(50), width: horizontalScale(100) }}
                                            />
                                            <View></View>
                                        </View>
                                    </View>
                                    <View style={{ width: horizontalScale(300), paddingHorizontal: 8 }}>
                                        <Text style={{ ...FONTS.lexendsemibold, color: COLORS.gray, fontSize: RFValue(10), paddingVertical: 8 }}>Ticket no. <Text style={{ ...FONTS.lexendregular, color: COLORS.element }}>{item.ticketno}</Text></Text>

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
export default TicketDetails;