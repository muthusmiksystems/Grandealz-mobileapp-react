import React, { useState, useEffect, type PropsWithChildren } from 'react';
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
    Modal,
    TextInput,
    Alert,
    Pressable,
} from 'react-native';
import image from '../../constants/image';
import icons from '../../constants/icons';
import { COLORS, FONTS } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Winners from './winners';
import moment from 'moment';
import UpcomingDraws from './upcomingDraws';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/metrices';
// import { TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from "@react-native-community/datetimepicker";
import { drawCommingfilter, drawCommingGet, drawWinnerfilter } from '../../services/register';
import LoaderKit from 'react-native-loader-kit';


const DrawsMain = () => {
    const [showWinners, setShowWinners] = useState(true);
    const navigation = useNavigation();
    const [dateShow, setDateShow] = useState(false);
    const [date, setDate] = useState(moment(new Date()).toISOString());
    const [modalVisible, setModalVisible] = useState(false);
    const [searcher, setSearcher] = useState("");
    const [year, setYear] = useState("");
    const [winner, setWinner] = useState();
    const [close, setClose] = useState();
    const [loaders,setLoader]=useState(true);

    const daily = moment(new Date()).format("YYYY-MM-DD")

    const selectedDateFunction = (event, selectedDate: any) => {
        setDateShow(!dateShow);
        const currentDate = selectedDate;
        console.log("rgerfefefge", currentDate)
        setDate(currentDate);
    }
    const handleFilter = async (search) => {
        if (showWinners) {
            let searc = moment(search.date).format("YYYY-MM-DD")
            setModalVisible(!modalVisible)
            if (searc === daily) searc = "";
            const data = {
                "date": searc,
                "year": search.year,
                "search": search.searcher
            }
            console.log("date diff", data)
            const winnerfilter = async (data: any) => {
                let filterdata = await drawWinnerfilter(data)
                setWinner(filterdata.data)
                
                console.log("winner winner chicken dinner", filterdata)
            }
            winnerfilter(data);
        }
        else {

            setModalVisible(!modalVisible)
            const data = {
                "searcher": search.searcher
            }
            console.log("upcomming", data)
            const upcome = async (data: any) => {
                let filterdata = await drawCommingfilter(data)
                setClose(filterdata.data)
                
                console.log("upcomming data", filterdata.data);
            }
            upcome(data)
        }
    }
    useEffect(()=>{
        {winner ? setLoader(false): null}
    },[winner])

    const resetFilter = async () => {
        if (showWinners) {
            setModalVisible(!modalVisible)
            const data = { "date": "", "search": "", "year": "" }
            const winnerfilter = async (data: any) => {
                let filterdata = await drawWinnerfilter(data)
                setWinner(filterdata.data)
                
                console.log("winner winner chicken dinner", filterdata.data)
            }
            winnerfilter(data);
        }
        else {
            setModalVisible(!modalVisible)
            const data = { "searcher": "" }
            const upcome = async (data: any) => {
                let filterdata = await drawCommingfilter(data)
                setClose(filterdata.data)
                setLoader(fasle)
                console.log("upcomming data", filterdata.data);
            }
            upcome(data)
        }
    }

    useEffect(() => {
        //console.log("data..............");
        const data = {
            "date": "",
            "year": "",
            "search": ""
        }
        const win = async () => {
            let closingData = await drawWinnerfilter(data)
            let result = closingData.data;
            console.log("im inside the winner page ", result);
            setWinner(result)
            
            console.log("loader state...........",loader)
        }
        win();
        const value = "status=UpComming"
        const soon = async () => {
            let closingData = await drawCommingGet(value)
            let result = closingData.data;
            console.log("im inside the upcomming page ", result);
            setClose(result)
            
        }
        soon();

    }, [])
    return (
        <SafeAreaView>
            <View style={{ flexDirection: "row", width: "94%", alignSelf: "center", height: verticalScale(52) }}>

                <View style={{ flexDirection: "row", width: "80%", marginHorizontal: "1%", backgroundColor: "white", borderRadius: 10, }}>
                    <TouchableOpacity style={{ backgroundColor: showWinners ? COLORS.element : "white", flexDirection: "column", width: "50%", borderRadius: 10, justifyContent: "center", alignItems: "center" }} onPress={() => setShowWinners(!showWinners)}>
                        <Text style={{ color: showWinners ? "white" : COLORS.textHeader, fontSize: RFValue(15), ...FONTS.lexendregular, }}>Winners</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: !showWinners ? COLORS.element : "white", flexDirection: "column", width: "50%", borderRadius: 10, justifyContent: "center", alignItems: "center" }} onPress={() => setShowWinners(!showWinners)}>
                        <Text style={{ color: !showWinners ? "white" : COLORS.textHeader, fontSize: RFValue(15), ...FONTS.lexendregular, }}>Upcoming Draws</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                           
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", height: 50, marginTop: 10 }}>
                                    <TouchableOpacity style={{ marginTop: 10, width: "20%" }}>
                                        <Pressable
                                            onPress={() => setModalVisible(!modalVisible)}>
                                            <View>
                                                <Image
                                                    source={icons.back1}
                                                    resizeMode='contain'
                                                    style={{
                                                        width: 30,
                                                        height: 30,
                                                        marginTop: 0
                                                        , marginStart: RFValue(15)
                                                    }}
                                                />
                                            </View>
                                        </Pressable>
                                    </TouchableOpacity>
                                    <View style={{ width: "35%", marginTop: 10, marginStart: RFValue(15) }}>
                                        <Text style={{ textAlign: "center", fontFamily: "Lexend-Regular", fontSize: RFValue(20), color: "#000000", marginTop: 0 }}>Filter</Text>
                                    </View>
                                    <TouchableOpacity style={{ width: "35%", marginTop: 10 }} onPress={() => { setSearcher(""), setDate(moment(new Date()).toISOString()), setYear(""), resetFilter() }}>
                                        <Text style={{ textAlign: "center", fontFamily: "Lexend-Regular", fontSize: RFValue(15), color: "#E70736", marginTop: 5 }}>RESET</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={{ alignSelf: "center", flexDirection: "row", borderWidth: 1, paddingStart: 10, borderRadius: 8, borderColor: "#c4c4c2", width: "91%", marginTop: verticalScale(5), }}>
                                    <Ionicons name='ios-search-sharp' color={"black"} size={25} style={{ alignSelf: "center" }} />
                                    <TextInput
                                        placeholder="Search Here..."
                                        placeholderTextColor={"black"}
                                        underlineColor="white"
                                        value={searcher}
                                        onChangeText={(text: String) => setSearcher(text)}
                                        activeUnderlineColor={'transparent'}
                                        style={{ backgroundColor: "#FFFFFF", color:"black",height: verticalScale(45), width: horizontalScale(200), ...FONTS.lexendregular, fontSize: RFValue(14) }}
                                    />
                                </TouchableOpacity>
                                {showWinners ?
                                    <>
                                        <TouchableOpacity style={{ alignSelf: "center", flexDirection: "row", borderWidth: 1, paddingStart: 10, borderRadius: 8, borderColor: "#c4c4c2", width:"91%", marginVertical: verticalScale(5), }}>
                                            <TextInput
                                                placeholder="Year"
                                                keyboardType={"phone-pad"}
                                                placeholderTextColor={"black"}
                                                underlineColor="white"
                                                value={year}
                                                maxLength={4}
                                                onChangeText={(text: String) => setYear(text)}
                                                activeUnderlineColor={'transparent'}
                                                style={{ backgroundColor: "#FFFFFF", color:"black", flexDirection: "column", height: verticalScale(45), width: horizontalScale(200), ...FONTS.lexendregular, fontSize: RFValue(14) }}
                                            />
                                        </TouchableOpacity>
                                        <View >
                                            <TouchableOpacity style={{ width: "91%", borderWidth: 1, borderColor: "#c4c4c2", backgroundColor: COLORS.white, alignSelf: "center", justifyContent: "center", borderRadius: 8, ...FONTS.lexendregular, paddingLeft: 14, height: 50 }}
                                                onPress={() => setDateShow(true)}
                                            >
                                                <Text style={styles.dropText}>{(date) ? moment(date).format('YYYY-MM-DD') : 'YYYY-MM-DD'}</Text>

                                            </TouchableOpacity>
                                            {dateShow ?
                                                <DateTimePicker
                                                    value={new Date(date)}
                                                    mode="date"
                                                    display="default"
                                                    onChange={selectedDateFunction}
                                                    // minimumDate={new Date()}
                                                    maximumDate={new Date()}
                                                />
                                                : null}
                                        </View>
                                    </> : null}


                                <TouchableOpacity style={{ alignItems: "center", marginTop: verticalScale(20) }} onPress={() => { handleFilter({ searcher, date, year }) }}>
                                    <View style={{ width: 180, height: 45, borderRadius: 8, backgroundColor: "#E70736" }}>
                                        <Text style={{ marginTop: 3, textAlign: "center", color: "#FFFFFF", fontSize: RFValue(17), fontFamily: "Lexend-Regular", padding: 5 }}>Apply</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>

                <View style={{ flexDirection: "row", width: "16%", marginHorizontal: "1%", backgroundColor: "white", borderRadius: 10, alignItems: "center", padding: "2.8%" }}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Image
                            source={icons.filter}
                            resizeMode={"contain"}
                            style={{ height: 30, width: 35 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {!loaders ? 
            <View style={{ marginVertical: "1%", position: "relative", paddingBottom: "10%" }}>
                {showWinners ?
                    <View>
                        <Winners win={winner} />
                    </View> :
                    <View>
                        <UpcomingDraws son={close} />
                    </View>}
            </View>
            : 
            <View style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
            <LoaderKit
                style={{ width: 100, height: 105,top:"10%" }}
                name={'BallClipRotatePulse'} // Optional: see list of animations below
                size={30} // Required on iOS
                color={COLORS.element} // Optional: color can be: 'red', 'green',... or '#ddd', '#FFFFFF',
            />
        </View>
            }


        </SafeAreaView>
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 300,
        height: 290,
        margin: 0,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    dropText: {
        ...FONTS.lexendregular,
        color: COLORS.black,
        fontSize: moderateScale(16)
    },




})
export default DrawsMain;