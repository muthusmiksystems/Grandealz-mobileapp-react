import React, { type PropsWithChildren, useState, useEffect } from 'react';
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
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONTS } from '../../constants';
import { horizontalScale, verticalScale } from '../../constants/metrices';
import { drawWinnerGet } from '../../services/register';
import { ActivityIndicator } from 'react-native';
import OrderEmpty from '../ExceptionScreens/orderEmpty';
import DrawEmpty from '../ExceptionScreens/DrawEmpty';

const Winners = (filters) => {
    console.log("winners", filters.win)
    const [close, setClose] = useState<any>();

    useEffect(() => {
        setClose(filters.win)
    }, [filters])
    return (
        <View>
            {close ?
                <FlatList
                    data={close}
                    contentContainerStyle={{ width: "91%", alignSelf: "center", marginTop: "5%" }}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{ borderRadius: 9, backgroundColor: "white", alignItems: "center", padding: "5%", marginBottom: "5%" }}>
                            <TouchableOpacity>
                                <View style={{ height: verticalScale(180), width: horizontalScale(300), alignItems: "center" }}>
                                    <Image
                                        source={{ uri: item.draw_image }}
                                        resizeMode="contain"
                                        style={{ height: "100%", width: "100%", borderRadius: 5}}
                                    />
                                </View>
                                <View>
                                    <Text style={{ fontSize: RFValue(15), color: COLORS.topBackground, ...FONTS.lexendsemibold, paddingVertical: "1%" }}>CONGRATULATIONS </Text>
                                    <Text style={{ fontSize: RFValue(13), color: COLORS.textHeader, ...FONTS.lexendregular }}>
                                        <Text style={{ fontSize: RFValue(13), color: COLORS.textHeader, ...FONTS.lexendsemibold }}>{item.winner.user.first_name} {item.winner.user.last_name} </Text>
                                        on Winning</Text>
                                    <Text style={{ fontSize: RFValue(13), color: COLORS.textHeader, ...FONTS.lexendsemibold, paddingVertical: "1%" }}>1 entry our {item.draw_title}</Text>
                                    <Text style={{ fontSize: RFValue(13), color: COLORS.black, ...FONTS.lexendregular }}>Ticket no. {item.winner.draw_ticket}</Text>
                                    {/* <Text style={{ fontSize: RFValue(10), color: COLORS.gray, paddingTop: "3%", ...FONTS.lexendregular, marginHorizontal: "1%", paddingHorizontal: "3.5%" }}>Announced on</Text>
                                    <Text style={{ fontSize: RFValue(10), color: COLORS.gray, ...FONTS.lexendregular, marginHorizontal: "1%", paddingHorizontal: "3.5%" }}>August 07,2022 8:05 PM</Text> */}
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
                : <DrawEmpty value={"There are no Winner Announced at the moment. Please try again later."} />}
        </View>

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
export default Winners;