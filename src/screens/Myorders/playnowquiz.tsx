import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, Alert, ToastAndroid } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { horizontalScale, verticalScale } from '../../constants/metrices';
import { COLORS, icons } from '../../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { allocteTickets } from '../../services/allocateTicket';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Playnowquiz = (props) => {
    console.log("Page props in play now quiz.............", props.route)
    let questions = props.route.params;
    const navigation = useNavigation();
    const [answer, setAnswer] = useState<any>('')
    const [option, setOption] = useState<any>('')
    const [error, setError] = useState<any>('')
    const [tryAgainState, setTryAgainState] = useState(true)
    const [buttonOptionOne, setButtonOptionOne] = useState(false)
    const [buttonOptionTwo, setButtonOptionTwo] = useState(false)
    const [buttonOptionThree, setButtonOptionThree] = useState(false)
    const [buttonOptionFour, setButtonOptionFour] = useState(false)
    const [buttonSubmit, setButtonSubmit] = useState(true)
    useEffect(() => {
        if (option == 1) {
            setButtonOptionTwo(true), setButtonOptionThree(true), setButtonOptionFour(true), setButtonSubmit(false)
        }
        else if (option == 2) {
            setButtonOptionOne(true), setButtonOptionThree(true), setButtonOptionFour(true), setButtonSubmit(false)
        }
        else if (option == 3) {
            setButtonOptionTwo(true), setButtonOptionOne(true), setButtonOptionFour(true), setButtonSubmit(false)
        }
        else if (option == 4) {
            setButtonOptionTwo(true), setButtonOptionThree(true), setButtonOptionOne(true), setButtonSubmit(false)
        }
        else {
            setButtonOptionTwo(false), setButtonOptionThree(false), setButtonOptionOne(false), setButtonSubmit(false)
        }
    }, [option])

    const validateAnswer = async () => {
        if (answer.length == null) {
            console.log("Ans from api.....", questions[0].ans, "User selected ans........", answer)
            let orderId = await AsyncStorage.getItem("orderIdForPlay")
            console.log("OrderId in play now quiz..............", orderId)
            if (answer == questions[0].ans) {
                await allocteTickets(orderId)
                    .then((originalPromiseResult) => {
                        console.log("Response for allocate........", originalPromiseResult)
                        if (originalPromiseResult === undefined) {
                            ToastAndroid.showWithGravity(
                                "Something",
                                ToastAndroid.CENTER,
                                ToastAndroid.SHORT
                            )
                        }
                        else if (originalPromiseResult.status === "201") {
                            navigation.replace("Playnowquizsubmit", originalPromiseResult.data)
                        }
                    })
                // console.log("enna mapla ok yaaaaa.",result)
            }
            else {
                ToastAndroid.showWithGravity(
                    "Oops! Your answer is wrong",
                    ToastAndroid.CENTER,
                    ToastAndroid.SHORT
                )
                setTryAgainState(false)
                setButtonSubmit(true)
            }
        }
        else {
            setError('Please select any choice')
            setButtonSubmit(false)
            setTryAgainState(true)
        }
    }
    const tryAgainFunction = () => {
        navigation.replace("playnowquiz", props.route.params)
        // setButtonOptionOne(false), setButtonOptionTwo(false), setButtonOptionThree(false), setButtonOptionFour(false), setButtonSubmit(false), setOption(0), setTryAgainState(true)
    }
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
                                marginLeft: "12%"
                            }}
                        />
                    </View>
                </View>
                <View style={Styles.subdiv2}>
                    <View style={{ width: horizontalScale(300), height: verticalScale(80), marginTop: 20, marginLeft: 15, backgroundColor: "#EEEEEE", justifyContent: "center" }}>
                        <Text style={{ textAlign: "center", lineHeight: 20, color: "#303030", fontFamily: "Lexend-Regular" }}>{questions[0].q}</Text>
                    </View>
                    <Button disabled={buttonOptionOne} style={{ ...Styles.options, ...{ backgroundColor: (option == 1) ? COLORS.element : "none", borderColor: (option == 1) ? COLORS.element : COLORS.black } }} onPress={() => { setAnswer(questions[0].options[0]), setOption(1), setError("") }}>
                        <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-Regular", color: "#616161" }}>{questions[0].options[0]}</Text>
                    </Button>
                    <Button disabled={buttonOptionTwo} style={{ ...Styles.options, ...{ backgroundColor: (option == 2) ? COLORS.element : "none", borderColor: (option == 2) ? COLORS.element : COLORS.black } }} onPress={() => { setAnswer(questions[0].options[1]), setOption(2), setError("") }}>
                        <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-Regular", color: "#616161" }}>{questions[0].options[1]}</Text>
                    </Button>
                    <Button disabled={buttonOptionThree} style={{ ...Styles.options, ...{ backgroundColor: (option == 3) ? COLORS.element : "none", borderColor: (option == 3) ? COLORS.element : COLORS.black } }} onPress={() => { setAnswer(questions[0].options[2]), setOption(3), setError("") }}>
                        <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-Regular", color: "#616161" }}>{questions[0].options[2]}</Text>
                    </Button>
                    <Button disabled={buttonOptionFour} style={{ ...Styles.options, ...{ backgroundColor: (option == 4) ? COLORS.element : "none", borderColor: (option == 4) ? COLORS.element : COLORS.black } }} onPress={() => { setAnswer(questions[0].options[3]), setOption(4), setError("") }}>
                        <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-Regular", color: "#616161" }}>{questions[0].options[3]}</Text>
                    </Button>
                    <Button disabled={buttonSubmit} style={{ ...Styles.options, borderColor: COLORS.black }} onPress={() => validateAnswer()}>
                        <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Lexend-Regular", color: "#0a0127" }}>Submit</Text>
                    </Button>
                    <View style={{ height: "3%" }}>
                        {(error) ? <Text style={{ fontFamily: "Lexend-Regular", fontSize: RFValue(12), textAlign: "center", color: COLORS.element }}>{error}</Text> : null}
                    </View>
                    <Button disabled={tryAgainState} style={{ marginTop: 8 }} onPress={() => tryAgainFunction()}>
                        <Text style={{ fontSize: RFValue(14), textAlign: "center", color: (tryAgainState) ? COLORS.lightGray : COLORS.element, fontFamily: "Lexend-SemiBold" }}>Try Again</Text>
                    </Button>
                </View>
            </View>
        </SafeAreaView >
    )
}
const Styles = StyleSheet.create({
    subdivmain: {
        width: horizontalScale(375),
        height: verticalScale(900),
        backgroundColor: "#0a0127",
    },
    subdivmain1: {
        marginTop: "8%",
        width: horizontalScale(330),
        height: verticalScale(140),
        justifyContent: "center",
        alignItems: "center"
    },
    subdiv2: {
        width: horizontalScale(330),
        height: verticalScale(550),
        marginLeft: 20,
        borderRadius: 15,
        backgroundColor: "#FFFFFF",

    },
    options: {
        alignSelf: "center", marginTop: "8%", borderWidth: 1, borderRadius: 8, width: horizontalScale(300), padding: "1%"
    }
})
export default Playnowquiz
