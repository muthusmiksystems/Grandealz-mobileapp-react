import React, { useEffect,useState } from "react";
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { horizontalScale, verticalScale } from "../../constants/metrices";
import { icons } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import { audicar } from "../../constants/image";
import { useNavigation } from "@react-navigation/native";
import { orderdata, quizGet } from "../../services/quizGet";
const PlayNow = (props) => {

    const navigation = useNavigation();
    const orderId = props.route.params;
    const [orderDetails,setOrderDetails]=useState();
    const [title,setTitle]=useState();
    console.log("Order Id......", orderId)
    const callingApiForQuiz = async () => {
        await quizGet().then((originalPromiseResult) => {
            // console.log("Quiz response in play now.................", originalPromiseResult.data.data)
            if (originalPromiseResult.status == "200") {
                navigation.replace("playnowquiz", originalPromiseResult?.data?.data, orderId)
            }
            else {
                ToastAndroid.showWithGravity(
                    'Something went wrong!, Please try again later',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                )
            }
        })
    }
    useEffect(() => {
        console.log("inside ap call");
            callingOrderId(orderId);
    }, [])

    const callingOrderId = async (orderId: any) => {
        let res =await orderdata(orderId) 
        if (res.status === "200") {
            setOrderDetails(res.data.draws[0].draw.draw_image);
            setTitle(res.data.draws[0].draw.draw_title)
           console.log("result in order",res.data.draws[0].draw.draw_image)
        }
        else {
            ToastAndroid.showWithGravity(
                'Something went wrong!, Please try again later',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            )
        }
    }
    return (
        <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: "#f1f1f1" }}>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={Styles.submaindiv}>
                <View style={{ marginTop: verticalScale(15) }}>
                    <View style={Styles.subdiv1}>
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
                    <View style={{ width: horizontalScale(330), height: verticalScale(60), backgroundColor: "#FF636C", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                        <Text style={{ fontSize: RFValue(18), color: "#FFFFFF", textAlign: "center", margin: horizontalScale(15), fontFamily: "Lexend-SemiBold" }}>The All new Audi Q3</Text>
                    </View>
                    <View style={{ width: horizontalScale(300), height: verticalScale(70), margin: verticalScale(18) }}>
                        <Text style={{ textAlign: "center", lineHeight: verticalScale(30), color: "#303030", fontFamily: "Lexend-Regular", fontWeight: "400" }}>
                            Please provide an answer to the question and avail your ticket.
                        </Text>
                    </View>

                    <TouchableOpacity>
                        <View style={{ borderWidth: 1, borderColor: "lightgray", width: horizontalScale(295), height: verticalScale(220), marginLeft: verticalScale(19), borderRadius: 15 }}>
                            <View style={{ width: horizontalScale(294), height: verticalScale(50), backgroundColor: "#FF636C", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                                <Text style={{ fontSize: RFValue(17), color: "#FFFFFF", textAlign: "center", margin: horizontalScale(9), fontFamily: "Lexend-SemiBold" }}>Chance to win</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flexDirection: "column", width: horizontalScale(120), height: verticalScale(120), borderRadius: 5, margin: 10 }}>
                                    <Image
                                        source={{uri:orderDetails}}
                                        resizeMode={"contain"}
                                        style={{ height: 80, width: 90, justifyContent: "center", margin: "10%" }}
                                    />
                                </View>
                                <View style={{ flexDirection: "column", width: horizontalScale(150), height: verticalScale(70), marginTop: verticalScale(15) }}>
                                    <Text style={{ fontSize: RFValue(14), color: "#0a0127", marginTop: 10, fontFamily: "Lexend-Regular" }}>{title}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignSelf: "center", marginTop: "8%", borderWidth: 1, borderRadius: 8, width: horizontalScale(300), padding: "4%" }} onPress={() => callingApiForQuiz()}>
                        <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-SemiBold", color: "black" }}>Start</Text>
                    </TouchableOpacity>

                    <View style={{ marginTop: 30 }}>
                        <Text style={{ fontSize: 16, textAlign: "center", color: "#E70736", fontFamily: "Lexend-Regular" }}>Terms and conditions</Text>
                    </View>

                </View>

            </View>
        </SafeAreaView>


    )
}
const Styles = StyleSheet.create({
    submaindiv: {
        width: horizontalScale(375),
        height: verticalScale(900),
        backgroundColor: "#0a0127",
    },
    subdiv1: {
        margin: 20,
        width: horizontalScale(330),
        height: 70,
        alignItems: "center"

    },
    subdiv2: {
        width: horizontalScale(330),
        height: verticalScale(550),
        marginLeft: 20,
        borderRadius: 15,
        backgroundColor: "#FFFFFF"
    }

})

export default PlayNow;
