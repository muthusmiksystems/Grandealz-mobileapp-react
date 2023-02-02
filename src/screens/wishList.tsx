import React, { useEffect, useState } from "react";
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
import { wishlistHandle } from "../services/wishlist";
const WishList = () => {
    const navigation = useNavigation();

    const [Wishlistdata, setWishlistdata] = useState<any>();

    useEffect(() => {
        const soon = async () => {
            let WishList = await wishlistHandle()
            setWishlistdata(WishList)
        }
        soon();
    }, [])
    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            {/* <View style={styles.subdivOne}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(30) }}>
                    <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Lexend-Regular", color: "white", fontSize: 20, marginLeft: horizontalScale(115) }}>Wishlist</Text>
            </View>
            <View style={styles.subdivTwo}>
                <Image
                    source={love}
                    resizeMode='contain'
                    style={{
                        width: horizontalScale(80),
                        height: verticalScale(80),
                    }}
                />
                <Text style={{ fontFamily: "Lexend-Regular", color: "black", fontSize: 16, marginTop: 20 }}>Your wishlist in empty</Text>
            </View> */}
            <View style={styles.subdivOne}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(18), flexDirection: "column" }}>
                    <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(21), width: "75%", textAlign: "center" }}>Wishlist</Text>

            </View>
            <ScrollView style={styles.subdivTwo}>
                <View style={{ flexDirection: "row" }}>
                    <WishlistData  Wishlist={Wishlistdata}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    subdivOne: {
        width: horizontalScale(375),
        height: verticalScale(80),
        backgroundColor: "#0a0127",
        alignItems: "center",
        // justifyContent: 'center',
        flexDirection: "row"
    },
    subdivTwo: {
        height: "92%",
        // alignItems: "center",
        // justifyContent: "center",
        // borderWidth:2
    }

})
export default WishList;