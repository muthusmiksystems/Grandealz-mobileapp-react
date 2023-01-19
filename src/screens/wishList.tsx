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

const WishList = () => {
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
            <Text style={{ fontFamily: "Lexend-Regular", color: "white", fontSize: RFValue(22), marginStart: "20%" }}>Wishlist</Text>

        </View>
        <ScrollView style={{ height: "80%" }}>
            <View style={{ flexDirection: "row" }}>
             <WishlistData/>   
            </View>
        </ScrollView>
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    subdivOne: {
        width: horizontalScale(375),
        height: verticalScale(65),
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
export default WishList;