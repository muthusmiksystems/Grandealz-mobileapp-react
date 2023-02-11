import React, { useState, type PropsWithChildren } from 'react';
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
    Alert,
    Pressable,
} from 'react-native';
import image from '../../constants/image';
import icons from '../../constants/icons';
import { COLORS, FONTS } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Winners from './winners';
import UpcomingDraws from './upcomingDraws';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/metrices';
import { TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-element-dropdown';



const DrawsMain = () => {
    const [showWinners, setShowWinners] = useState(true);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView>
<<<<<<< Updated upstream
            <View style={{ flexDirection: "row", width: "94%", alignSelf: "center", height: verticalScale(52) }}>

                <View style={{ flexDirection: "row", width: "80%", marginHorizontal: "1%", backgroundColor: "white", borderRadius: 10, }}>
                    <TouchableOpacity style={{ backgroundColor: showWinners ? COLORS.element : "white", flexDirection: "column", width: "50%", borderRadius: 10, justifyContent: "center", alignItems: "center" }} onPress={() => setShowWinners(!showWinners)}>
=======
            <View style={{ flexDirection: "row", width: "94%",alignSelf:"center",height:verticalScale(52) }}>

                <View style={{ flexDirection: "row", width: "80%", marginHorizontal: "1%", backgroundColor: "white", borderRadius: 10, }}>
                    <TouchableOpacity style={{ backgroundColor: showWinners ? COLORS.element : "white", flexDirection: "column", width: "50%",borderRadius: 10, justifyContent: "center", alignItems: "center" }} onPress={() => setShowWinners(!showWinners)}>
>>>>>>> Stashed changes
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
                            Alert.alert('Modal has been closed.');
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
                                                    }}
                                                />
                                            </View>
                                        </Pressable>
                                    </TouchableOpacity>
                                    <View style={{ width: "35%", marginTop: 10 }}>
                                        <Text style={{ textAlign: "center", fontFamily: "Lexend-Regular", fontSize: RFValue(20), color: "#000000", marginTop: 0 }}>Filter</Text>
                                    </View>
                                    <View style={{ width: "35%", marginTop: 10 }}>
                                        <Text style={{ textAlign: "center", fontFamily: "Lexend-Regular", fontSize: RFValue(15), color: "#E70736", marginTop: 5 }}>RESET</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={{alignSelf: "center", flexDirection: "row", borderWidth: 1, paddingStart: 10, borderRadius: 8, borderColor: "#c4c4c2", width: horizontalScale(280), marginTop: verticalScale(5), }}>
                                    <Ionicons name='ios-search-sharp' color={"black"} size={25} style={{ alignSelf: "center" }} />
                                    <TextInput
                                        placeholder="Search Here..."
                                        placeholderTextColor={"black"}
                                        underlineColor="white"
                                        activeUnderlineColor={'transparent'}
                                        style={{ backgroundColor: "#FFFFFF", flexDirection: "column", height:verticalScale(45),width: horizontalScale(200), ...FONTS.lexendregular, fontSize: RFValue(14), fontFamily: "Lexend-Regular", fontWeight: "700" }}
                                    />
                                </TouchableOpacity>
                                <View style={{ justifyContent:"space-around", alignSelf: "center", flexDirection: "row", borderWidth: 1, paddingStart: 0, borderRadius: 8, borderColor: "#c4c4c2", width: horizontalScale(280), marginTop: verticalScale(10), }}>

                                    <TextInput
                                        placeholder="Year"
                                        placeholderTextColor={"black"}
                                        underlineColor="white"
                                        activeUnderlineColor={'transparent'}
                                        style={{ marginLeft: -10,height:verticalScale(45), backgroundColor: "#FFFFFF", flexDirection: "column", width: horizontalScale(200), ...FONTS.lexendregular, fontSize: RFValue(14), fontFamily: "Lexend-Regular", fontWeight: "700" }}
                                    />
                                    <TouchableOpacity>
                                        <Image
                                            source={icons.back1}
                                            resizeMode='contain'
                                            style={{
                                                width: 25,
                                                height: 25,
                                                marginTop: 5,
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={{ alignSelf: "center", flexDirection: "row", borderWidth: 1, paddingStart:4, borderRadius: 8, borderColor: "#c4c4c2", width: horizontalScale(280), marginTop: verticalScale(10), }}>

                                    <TextInput
                                        placeholder="MM/DD/YYYY"
                                        placeholderTextColor={"black"}
                                        underlineColor="white"
                                        activeUnderlineColor={'transparent'}
                                        style={{ backgroundColor: "#FFFFFF", flexDirection: "column", width: horizontalScale(200),height:verticalScale(45),...FONTS.lexendregular, fontSize: RFValue(14), fontFamily: "Lexend-Regular", fontWeight: "700" }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{alignItems:"center",marginTop:verticalScale(20)}}>
                                    <View style={{ width:180, height: 45, borderRadius: 8, backgroundColor: "#E70736" }}>
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
<<<<<<< Updated upstream
            <View style={{ marginVertical: "1%", position: "relative", paddingBottom: "10%" }}>
=======
            <View style={{ marginVertical: "1%", position: "relative",paddingBottom:"10%" }}>
>>>>>>> Stashed changes
                {showWinners ?
                    <View>
                        <Winners />
                    </View> :
                    <View>
                        <UpcomingDraws />
                    </View>}
            </View>


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