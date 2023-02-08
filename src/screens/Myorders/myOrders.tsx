import React,{useEffect,useState}from "react";
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,Modal,
} from 'react-native';
import { horizontalScale, verticalScale } from "../../constants/metrices";
import icons, { shoppingCart } from "../../constants/icons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { FONTS, COLORS } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import image from "../../constants/image";
import OrderList from "./orderList";
import { orderlistHandle } from "../../services/orderlist";

const MyOrders = () => {

    const navigation = useNavigation();

    const [Orderlistdata, setOrderlistdata] = useState<any>();

    const [modalVisible, setModalVisible] = useState(false);

    
    useEffect(() => {
      const  orderitems= async () => {
        let OrderList= await orderlistHandle()
        setOrderlistdata(OrderList)
      }
      orderitems();
    }, [])

    return (
        <SafeAreaView style={{ backgroundColor: "#F1F1F", height: "100%" }}>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={styles.subdivOne}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(18), flexDirection: "column" }}>
                    <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(20), width: "78%", textAlign: "center" }}>My Orders</Text>

            </View>
            <ScrollView style={{ height: "80%" ,padding:"4%"}}>
            {/* <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                        <View>
                            <Text> Hi hello people</Text>
                        </View>
                        </Modal>
            </View> */}
                <View style={{ flexDirection: "row",marginBottom:RFValue(10) }}>
                    <View style={{ flexDirection: "row",alignSelf:"center",width: "83%",height:"82%", borderRadius: 20, backgroundColor: "#FFFFFF", marginRight: "2%", }}>
                        {/* <View style={{  }}> */}
                            <View style={{ flexDirection: "column" }}>
                                <View style={{ flexDirection: "row",margin:RFValue(10)}}>
                                    <Image
                                        source={icons.search}
                                        resizeMode="contain"
                                        style={{ height:verticalScale(20), width:horizontalScale(20),marginLeft:RFValue(15),top:RFValue(4) }}
                                    />
                                    <Text style={{ color: COLORS.gray, fontSize: RFValue(16), ...FONTS.lexendregular, marginStart:RFValue(5) }}>Search in orders</Text>
                                </View>
                            </View>
                        {/* </View> */}

                    </View>
                    <View style={{ borderRadius: 10, backgroundColor: "#FFFFFF", marginVertical: "2%", flexDirection: "column" }}>
                        <View style={{ flexDirection: "row", marginHorizontal: "2%", borderRadius: 10 }}>
                            <TouchableOpacity style={{ flexDirection: "column" }} onPress={()=>setModalVisible(false)}>
                                <Image
                                    source={icons.filter}

                                    style={{ height: verticalScale(30), width: horizontalScale(24), margin: 8, left: 5 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View >
                    <OrderList  orderlist={Orderlistdata}/>
                </View>
            </ScrollView>
            {/* <View style={{ flexDirection: "row", height: "7%", backgroundColor: COLORS.white }}>
                <TouchableOpacity style={{ flexDirection: "column", width: "45%", marginHorizontal: "3%", marginVertical: "1%", borderRadius: 5, borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendregular }}>Continue to Shopping</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "column", width: "45%", marginHorizontal: "3%", marginVertical: "1%", backgroundColor: COLORS.element, borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: COLORS.white, fontSize: RFValue(14), ...FONTS.lexendregular }} >Process to Checkout </Text>
                </TouchableOpacity>
            </View> */}
           
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
        flexDirection: "row",


    },
    subdivTwo: {
        height: verticalScale(748),
        alignItems: "center",
        justifyContent: "center",
        // borderWidth:2
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },

})
export default MyOrders;