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
const CartRelated = () => {
    const navigation = useNavigation();
    return (

        <View>
            <View style={{ margin: "4%", marginVertical: "5%" }}>
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendregular, }}>People Have also bought this together</Text>
            </View>
            {/* <View style={{borderWidth:2}}> */}
            <FlatList
                horizontal={true}
                data={data}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginLeft: "4%", paddingRight: "100%" }}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: COLORS.white, borderRadius: 14, paddingBottom: verticalScale(13) }}>
                        <TouchableOpacity style={{ margin: 3 }} onPress={() => navigation.navigate("PriceDetails")}>
                            {/* <View style={{}}>

                            </View> */}
                            <View style={{ backgroundColor: "#F9F9F9", padding: "2%", margin: 10 }}>
                                <Image
                                    source={image.money}
                                    resizeMode={'contain'}
                                    style={{
                                        height: RFValue(110),
                                        width: RFValue(110),
                                        margin: 5
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={{ marginHorizontal: "5%" }}>
                            <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendsemibold, paddingBottom: "2%" }}>INR 1000.00 Cash</Text>
                            <Text style={{ color: COLORS.textHeader, fontSize: RFValue(12), ...FONTS.lexendregular, paddingBottom: "2%" }}>Pencil</Text>
                            <Text style={{ color: COLORS.element, fontSize: RFValue(12), ...FONTS.lexendregular, }}>INR 100.00</Text>
                        </View>
                        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 5, marginTop: RFValue(5), width: "70%", alignSelf: "center" }}>
                            <Text style={{ color: COLORS.textHeader, fontSize: RFValue(16), ...FONTS.lexendregular, }}>Add</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            {/* </View> */}
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
export default CartRelated;