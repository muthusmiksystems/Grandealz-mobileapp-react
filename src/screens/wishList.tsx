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

const WishList = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={styles.subdivOne}>
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
            </View>
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