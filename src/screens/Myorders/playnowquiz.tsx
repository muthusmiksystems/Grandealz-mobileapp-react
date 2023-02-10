import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { horizontalScale, verticalScale } from '../../constants/metrices';
import { icons } from '../../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

const Playnowquiz = () => {
    const navigation=useNavigation();
    return (
        <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: "#f1f1f1" }}>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={Styles.subdivmain}>
                <View style={{ marginTop: verticalScale(15) }}>
                    <View style={Styles.subdivmain1}>
                        <Image
                            source={icons.loginwhite}
                            resizeMode='contain'
                            style={{
                                height: verticalScale(160),
                                width: horizontalScale(180),
                                marginTop: -30

                            }}
                        />
                    </View>
                </View>
                <View style={Styles.subdiv2}>
                    <View style={{ width: horizontalScale(300), height: verticalScale(80), marginTop: 20, marginLeft: 15, backgroundColor: "#EEEEEE" }}>
                        <Text style={{ textAlign: "center", padding: 5, lineHeight: 20, fontWeight: "400", color: "#303030",fontFamily: "Lexend-Regular",marginTop:5 }}>Lorem Ipsum is simply dummy text of printing and typesetting ?</Text>
                    </View>
                    <TouchableOpacity style={{ alignSelf: "center", marginTop: "8%", borderWidth: 1, borderRadius: 8, width: horizontalScale(300), padding: "4%" }}>
                        <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-Regular", color: "#616161" }}>L</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf: "center", marginTop: "8%", borderWidth: 1, borderRadius: 8, width: horizontalScale(300), padding: "4%" }}>
                        <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-Regular", color: "#616161" }}>P</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf: "center", marginTop: "8%", borderWidth: 1, borderRadius: 8, width: horizontalScale(300), padding: "4%" }}>
                        <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-Regular", color: "#616161" }}>N</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf: "center", marginTop: "8%", borderWidth: 1, borderRadius: 8, width: horizontalScale(300), padding: "4%" }}>
                        <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-Regular", color: "#616161" }}>R</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf: "center", marginTop: "8%", borderWidth: 1, borderRadius: 8, width: horizontalScale(300), padding: "4%" }} onPress={() => navigation.navigate("Playnowquizsubmit")}>
                        <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-Regular", color: "#0a0127" }}>Submit</Text>
                    </TouchableOpacity>

                    <View style={{marginTop:20}}>
                    <Text style={{fontSize:RFValue(16),textAlign:"center",color:"#E70736",fontWeight:"700",fontFamily: "Lexend-SemiBold"}}>Try Again</Text>
                    </View>
                </View>

                

            </View>
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    subdivmain: {
        width: horizontalScale(375),
        height: verticalScale(900),
        backgroundColor: "#0a0127",
    },
    subdivmain1: {
        margin: 20,
        width: horizontalScale(330),
        height: 70,
        alignItems: "center"
    },
    subdiv2: {
        width: horizontalScale(330),
        height: verticalScale(600),
        marginLeft: 20,
        borderRadius: 15,
        backgroundColor: "#FFFFFF"
    }
})
export default Playnowquiz