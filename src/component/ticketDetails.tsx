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
import moment from 'moment';



const TicketDetails = (Ticketdata) => {
    console.log("drma.....", Ticketdata.Ticketdata)

    return (
        <SafeAreaView >
            <View style={{ width: "100%", height: verticalScale(670), padding: "4%" }} >
                <FlatList
                    data={Ticketdata.Ticketdata}
                    contentContainerStyle={{ paddingBottom: "15%" }}
                    keyExtractor={item => item.draw._id}
                    renderItem={({ item }) => (
                        <View style={{ marginBottom: "4%" }}>
                            <TouchableOpacity style={{ backgroundColor: "white", flexDirection: "row", width: "100%", height: verticalScale(158), borderRadius: 6 }}>
                                <View style={{ flexDirection: "column", width: horizontalScale(25), right: horizontalScale(10), alignSelf: "center", backgroundColor: COLORS.lightGray, height: verticalScale(52), borderBottomEndRadius: 55, borderTopEndRadius: 55 }} />
                                <View style={{ flexDirection: "column", width: horizontalScale(300), right: horizontalScale(10) }}>
                                    <View style={{ flexDirection: "row", padding: 8, borderBottomColor: "#616161", borderBottomWidth: 1 }}>
                                        <View style={{ flexDirection: "column", alignSelf: "center", width: horizontalScale(208) }}>
                                            <View style={{ marginBottom: "0%" }}>
                                                <Image
                                                    source={icons.ticketicon}
                                                    resizeMode="contain"
                                                    style={{ height: verticalScale(40), width: horizontalScale(120) }}
                                                />
                                            </View>
                                            <Text style={{ ...FONTS.lexendsemibold, color: COLORS.black, fontSize: RFValue(10), paddingVertical: "1%" }}><Text style={{ ...FONTS.lexendregular }}>{(item.draw.draw_title).substring(0, 30)}{(item.draw.draw_title).length > 20 ? "..." : ""}</Text></Text>
                                            <Text style={{ ...FONTS.lexendsemibold, color: COLORS.black, fontSize: RFValue(10) }}>product :- <Text style={{ ...FONTS.lexendregular }}>{(item.draw.product_description).substring(0, 20)}{(item.draw.product_description).length > 20 ? "..." : ""}</Text></Text>
                                            <Text style={{ ...FONTS.lexendsemibold, color: COLORS.black, fontSize: RFValue(10), paddingVertical: "1%" }}>Purchased on :- <Text style={{ ...FONTS.lexendregular, color: COLORS.gray }}>{item.draw.createdAt}</Text></Text>
                                            {/* {console.log("timebeing",moment(item.draw.createdAt).format("MMM-DD-YYYY HH:mm:ss"))} */}
                                        </View>
                                        <View style={{ flexDirection: "column", borderRadius: 10, marginLeft: 10, width: horizontalScale(100), right: horizontalScale(16), height: verticalScale(88), top: verticalScale(10) }}>
                                            {/* <Text style={{ ...FONTS.lexendregular, color: "white", textAlign: "center" }}>Cash</Text> */}
                                            <Image
                                                source={{ uri: item.draw.draw_image }}
                                                resizeMode="contain"
                                                style={{ height: verticalScale(68), width: horizontalScale(98) }}
                                            />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ ...FONTS.lexendsemibold, color: COLORS.gray, fontSize: RFValue(8), paddingVertical: "1%", textAlign: "right" }}>Ticket no. <Text style={{ ...FONTS.lexendregular, color: COLORS.element }}>{item.draw_ticket}</Text></Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "column", width: horizontalScale(25), alignSelf: "center", backgroundColor: COLORS.lightGray, height: verticalScale(52), borderBottomStartRadius: 50, borderTopStartRadius: 50 }} />
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