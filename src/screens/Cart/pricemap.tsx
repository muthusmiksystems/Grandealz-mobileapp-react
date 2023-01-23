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

const data = [
    {
        id: '1',
        imag: image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"

    },
    {
        id: '2',
        imag: image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },
    {
        id: '3',
        imag: image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },
    {
        id: '4',
        imag: image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },
    {
        id: '5',
        imag: image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },
    {
        id: '6',
        imag: image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },
    {
        id: '7',
        imag: image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },
];
const PriceMap = () => {
    const navigation = useNavigation();
    return (

        <View style={{ width: "92%", borderRadius: 20, backgroundColor: COLORS.white, margin: "4%", alignSelf: "center" }}>
            <View style={{ width: "100%", borderRadius: 18, padding: "3%", backgroundColor: COLORS.white }}>
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(16), ...FONTS.lexendsemibold, padding: "3%" }}>Price Details</Text>
                <View style={{ borderBottomColor: COLORS.gray, borderBottomWidth: 2, margin: "1%" }} />
                <View style={{ width: horizontalScale(310), alignSelf: "center" }}>
                    <View style={{ flexDirection: "row", marginTop: "3%", paddingBottom: "2%" }}>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(13), ...FONTS.lexendregular, width: "75%" }}>Total MRP </Text>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(13), ...FONTS.lexendregular, width: "25%" }}>₹ 2000.00</Text>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: "2%" }}>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(14), ...FONTS.lexendregular, width: "75%" }}>Tax (GST) </Text>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(14), ...FONTS.lexendregular, width: "25%" }}>₹ 360.00</Text>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: "2%" }}>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(14), ...FONTS.lexendregular, width: "75%" }}>Promo Code </Text>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(14), ...FONTS.lexendregular, width: "25%" }}>-₹ 200.00</Text>
                    </View>
                </View>
                <View style={{ borderBottomColor: COLORS.gray, borderBottomWidth: 2, margin: "1%" }} />
                <View style={{ width: horizontalScale(310), alignSelf: "center" }}>
                    <View style={{ flexDirection: "row", paddingBottom: "2%", alignItems: "center" }}>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(14), ...FONTS.lexendregular, width: "75%" }}>Total Amount{"\n"}<Text>Inclusive of Tax (GST)</Text></Text>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(14), ...FONTS.lexendregular, width: "25%" }}>₹ 2160.00</Text>
                    </View>
                </View>
            </View>
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
export default PriceMap;