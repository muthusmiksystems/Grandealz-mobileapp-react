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

        <View style={{ width: "100%", borderRadius: moderateScale(20), backgroundColor: COLORS.white,  alignSelf: "center",marginVertical:verticalScale(40) }}>
            <View style={{ width: "100%", borderRadius: 18, padding: "3%", backgroundColor: COLORS.white }}>
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(16), ...FONTS.lexendsemibold, padding: "3%" }}>Price Details</Text>
                <View style={{ borderBottomColor:"#616161", borderBottomWidth: 2, margin: "1%" }} />
                <View style={{ width: "100%", alignSelf: "center" }}>
                    <View style={{ flexDirection: "row", marginTop: "3%", paddingBottom: "2%" }}>
                        <View style={{ width: "75%",alignItems:"flex-start"}}>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(13), ...FONTS.lexendregular }}>Total MRP </Text>
                        </View>
                        <View style={{ width: "25%",alignItems:"flex-end"}}>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(13), ...FONTS.lexendregular, }}>₹ 2000.00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: "2%" }}>
                    <View style={{ width: "75%",alignItems:"flex-start"}}>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(13), ...FONTS.lexendregular,  }}>Tax(GST) </Text>
                        </View>
                        <View style={{ width: "25%",alignItems:"flex-end"}}>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(13), ...FONTS.lexendregular,}}>₹ 360.00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: "2%" }}>
                    <View style={{ width: "75%",alignItems:"flex-start"}}>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(13), ...FONTS.lexendregular,  }}>Promo Code </Text>
                        </View>
                        <View style={{ width: "25%",alignItems:"flex-end"}}>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(13), ...FONTS.lexendregular, }}>-₹ 200.00</Text>
                        </View>
                    </View>
                </View>
                <View style={{ borderBottomColor:"#616161", borderBottomWidth: 2, margin: "1%" }} />
                <View style={{ width: horizontalScale(310), alignSelf: "center" }}>
                    <View style={{ flexDirection: "row", paddingBottom: "2%", alignItems: "center" }}>
                    <View style={{ width: "75%",alignItems:"flex-start"}}>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(13), ...FONTS.lexendregular,  }}>Total Amount{"\n"}<Text style={{fontSize: RFValue(10),}}>Inclusive of Tax (GST)</Text></Text>
                        </View>
                        <View style={{ width: "25%",alignItems:"flex-end"}}>
                        <Text style={{ color: COLORS.gray, fontSize: RFValue(13), ...FONTS.lexendregular,}}>₹ 2160.00</Text>
                        </View>
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