import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { horizontalScale, verticalScale } from "../../constants/metrices";

import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

import image from "../../constants/image";
import { RFValue } from "react-native-responsive-fontsize";


const WishListEmpty = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Image
                source={image.heartEmpty}
                resizeMode="contain"
                style={{ height: verticalScale(100), width: horizontalScale(80) }}
            />
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
    },
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
export default WishListEmpty;