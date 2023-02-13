import React, { type PropsWithChildren, useEffect, useState } from 'react';
import {
    SafeAreaView, 
    StatusBar,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';
import icons from '../constants/icons';
import { COLORS, FONTS } from '../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';


const OrderConfirmed = () => {
    function getRandom(min, max) {
        const floatRandom = Math.random()
      
        const difference = max - min
      
        // random between 0 and the difference
        const random = Math.round(difference * floatRandom)
      
        const randomWithinRange = random + min
      
        console.log("randomWithinRange",randomWithinRange)
      }
    const navigation = useNavigation();
    return (
        <SafeAreaView >
            <StatusBar
                animated={true}
                backgroundColor={"#0a0127"}
            />
            <View style={styles.container}>
                <View style={{ width: "100%", height: "20%", alignItems: "center", marginTop: "25%" }}>
                    <Image
                        source={icons.confirmTick}
                        resizeMode="cover"
                        style={{ width: 100, height: 100 }}
                    />
                    <Text style={{ color: "white", ...FONTS.lexendregular, fontSize: RFValue(20), marginVertical: "5%" }}>Order Confirmed</Text>
                </View>
                <View style={{ width: "100%", height: "25%", alignItems: "center", marginVertical: "4%" }}>
                    <Image
                        source={icons.threeTickets}
                        resizeMode="contain"
                        style={{ width: 200, height: 100 }}
                    />
                    <Text style={{ color: "white", ...FONTS.lexendregular, fontSize: RFValue(15), marginVertical: "5%" }}>Answer this question and avail your tickets</Text>
                </View>
                <View style={{ width: "100%", height: "25%", alignItems: "center" }}>
                    <TouchableOpacity style={{ borderWidth: 2, borderColor: "white", borderRadius: 8, width: "40%", height: "28%", alignItems: "center", justifyContent: "center" }}
                        onPress={() => navigation.navigate('MyOrders')}
                    >
                        <Text style={{ color: "white", ...FONTS.lexendregular, fontSize: RFValue(15) }}>Play now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "#060120"
    }
})
export default OrderConfirmed;