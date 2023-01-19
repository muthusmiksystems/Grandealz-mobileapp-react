import React from "react";
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
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

const MyOrders = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: "#F1F1F", height: "100%" }}>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={styles.subdivOne}>
                <TouchableOpacity
                    style={{ margin: "5.5%" }}
                    onPress={()=>navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Lexend-Regular", color: "white", fontSize: RFValue(22), marginStart: "20%" }}>My Orders</Text>

            </View>
            <ScrollView style={{ height: "80%" }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "78%", borderRadius: 20, backgroundColor: "#FFFFFF", margin: "2%", flexDirection: "column" }}>
                        <View style={{ flexDirection: "row", width: "100%", borderRadius: 10, padding: "3%" }}>
                            <View style={{ flexDirection: "column", }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Image
                                        source={icons.search}

                                        style={{ height: 30, width: 30 }}
                                    />
                                    <Text style={{ color: COLORS.gray, fontSize: RFValue(16), ...FONTS.lexendregular, marginStart: "5%" }}>Search in orders</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={{ borderRadius:10, backgroundColor: "#FFFFFF", marginVertical: "2%", flexDirection: "column" }}>
                        <View style={{ flexDirection: "row", marginHorizontal: "2%",}}>
                            <TouchableOpacity style={{backgroundColor: "white", flexDirection: "column"}} >
                                <Image
                                    source={icons.filter}
                                    
                                    style={{ height: 30, width:28,margin:8,left:5,borderRadius:10 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View >
                    <OrderList/>
                </View>
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
        height: "10%",
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
    }

})
export default MyOrders;