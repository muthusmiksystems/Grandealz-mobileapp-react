<<<<<<< Updated upstream
import React, { useEffect, useState } from "react";
=======
import React,{useEffect,useState}from "react";
>>>>>>> Stashed changes
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
<<<<<<< Updated upstream
    TouchableOpacity, Modal,
    Alert,
    Pressable,
=======
    TouchableOpacity,Modal,
>>>>>>> Stashed changes
} from 'react-native';
import { horizontalScale, verticalScale } from "../../constants/metrices";
import icons, { close, shoppingCart } from "../../constants/icons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { FONTS, COLORS } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import image from "../../constants/image";
import OrderList from "./orderList";
import { orderlistHandle } from "../../services/orderlist";
<<<<<<< Updated upstream
import { Provider } from "react-redux";
import CheckBox from "@react-native-community/checkbox";
import { RadioButton } from "react-native-paper";
import OrderEmpty from "../ExceptionScreens/orderEmpty";

=======
>>>>>>> Stashed changes

const MyOrders = () => {

    const navigation = useNavigation();

<<<<<<< Updated upstream
    const [value, setValue] =useState();
    const [timevalue,setTimevalue]=useState();

    const [Orderlistdata, setOrderlistdata] = useState<any>([]);

    const [modalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        const orderitems = async () => {
            let OrderList = await orderlistHandle()
            setOrderlistdata(OrderList)
        }
        orderitems();
=======
    const [Orderlistdata, setOrderlistdata] = useState<any>();
    const [modalVisible, setModalVisible] = useState(false);
    
    useEffect(() => {
      const  orderitems= async () => {
        let OrderList= await orderlistHandle()
        setOrderlistdata(OrderList)
      }
      orderitems();
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            {Orderlistdata.length > 0 ?
            <ScrollView style={{ height: "80%", padding: "4%" ,}}>
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
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ height: 50, width: "90%", }}>
                                        <Text style={{ marginTop: 10, textAlign: "center", fontSize: RFValue(24), fontFamily: "Lexend-Regular", color: "#000000" }}>Filter orders</Text>
                                    </View>
                                    <View style={{ height: 40, width: "10%", marginTop: 10 }}>
                                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                            <View>
                                                <Image
                                                    source={close}
                                                    resizeMode='contain'
                                                    style={{
                                                        width: 15,
                                                        height: 15,
                                                        marginTop: 9
                                                    }}
                                                />
                                            </View>
                                        </Pressable>
                                    </View>
=======
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
>>>>>>> Stashed changes
                                </View>
                                <View style={{ width: "100%", height: 500 }}>
                                    <SafeAreaView>
                                        <View style={{marginLeft:20,marginBottom:10}}>
                                        <Text style={{fontFamily: "Lexend-Regular",color:"#000000",fontSize:RFValue(20)}}>Status</Text>
                                        </View>                                        
                                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                                            <View style={{flexDirection:"row",marginLeft:10}}>                                                
                                                <View><RadioButton value="first" color="#E70736" /></View>
                                                <View><Text style={{textAlign:"center",marginTop:7,fontSize:RFValue(16),fontFamily: "Lexend-Regular",color:"#000000"}}>All</Text></View>
                                            </View>
                                            <View style={{flexDirection:"row",marginLeft:10}}>                                                
                                                <View><RadioButton value="On the Way" color="#E70736" /></View>
                                                <View><Text style={{textAlign:"center",marginTop:7,fontSize:RFValue(16),fontFamily: "Lexend-Regular",color:"#000000"}}>On the Way</Text></View>
                                            </View>
                                            <View style={{flexDirection:"row",marginLeft:10}}>                                                
                                                <View><RadioButton value="Delivered" color="#E70736" /></View>
                                                <View><Text style={{textAlign:"center",marginTop:7,fontSize:RFValue(16),fontFamily: "Lexend-Regular",color:"#000000"}}>Delivered</Text></View>
                                            </View>
                                            <View style={{flexDirection:"row",marginLeft:10}}>                                                
                                                <View><RadioButton value="Cancelled" color="#E70736" /></View>
                                                <View><Text style={{textAlign:"center",marginTop:7,fontSize:RFValue(16),fontFamily: "Lexend-Regular",color:"#000000"}}>Cancelled</Text></View>
                                            </View>
                                            <View style={{flexDirection:"row",marginLeft:10}}>                                                
                                                <View><RadioButton value="Returned" color="#E70736" /></View>
                                                <View><Text style={{textAlign:"center",marginTop:7,fontSize:RFValue(16),fontFamily: "Lexend-Regular",color:"#000000"}}>Returned</Text></View>
                                            </View>
                                            
                                        </RadioButton.Group>
                                    </SafeAreaView>
                                    <SafeAreaView style={{marginTop:10}}>
                                        <View style={{marginLeft:20,marginBottom:10}}>
                                        <Text style={{fontFamily: "Lexend-Regular",color:"#000000",fontSize:RFValue(20)}}>Time</Text>
                                        </View>                                        
                                        <RadioButton.Group  onValueChange={newValue => setTimevalue(newValue)} value={timevalue}>
                                            <View style={{flexDirection:"row",marginLeft:10}}>                                                
                                                <View><RadioButton value="first" color="#E70736" /></View>
                                                <View><Text style={{textAlign:"center",marginTop:7,fontSize:RFValue(16),fontFamily: "Lexend-Regular",color:"#000000"}}>Anytime</Text></View>
                                            </View>
                                            <View style={{flexDirection:"row",marginLeft:10}}>                                                
                                                <View><RadioButton value="On the Way" color="#E70736"/></View>
                                                <View><Text style={{textAlign:"center",marginTop:7,fontSize:RFValue(16),fontFamily: "Lexend-Regular",color:"#000000"}}>Last 30 days</Text></View>
                                            </View>
                                            <View style={{flexDirection:"row",marginLeft:10}}>                                                
                                                <View><RadioButton value="Delivered" color="#E70736" /></View>
                                                <View><Text style={{textAlign:"center",marginTop:7,fontSize:RFValue(16),fontFamily: "Lexend-Regular",color:"#000000"}}>Last 6 Months</Text></View>
                                            </View>
                                            <View style={{flexDirection:"row",marginLeft:10}}>                                                
                                                <View><RadioButton value="Cancelled" color="#E70736"/></View>
                                                <View><Text style={{textAlign:"center",marginTop:7,fontSize:RFValue(16),fontFamily: "Lexend-Regular",color:"#000000"}}>Last Year</Text></View>
                                            </View>
                                            
                                        </RadioButton.Group>
                                    </SafeAreaView>

                                    <View style={{flexDirection:"row",width:"100%",height:70,alignItems:'center',justifyContent:"space-around"}}>
                                        <TouchableOpacity>
                                            <View style={{borderWidth:1,width:135,height:50,borderRadius:8}}>
                                                <Text style={{marginTop:8,textAlign:"center",color:"#000000",fontSize:RFValue(15),fontFamily: "Lexend-Regular",padding:5}}>Clear Filters</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{width:135,height:50,borderRadius:8,backgroundColor:"#E70736"}}>
                                                <Text style={{marginTop:8,textAlign:"center",color:"#FFFFFF",fontSize:RFValue(15),fontFamily: "Lexend-Regular",padding:5}}>Apply</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>

                        </View>
                    </Modal>
                </View>
                <View style={{ flexDirection: "row", marginBottom: RFValue(10) }}>
                    <View style={{ flexDirection: "row", alignSelf: "center", width: "83%", height: "82%", borderRadius: 20, backgroundColor: "#FFFFFF", marginRight: "2%", }}>
                        {/* <View style={{  }}> */}
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row", margin: RFValue(10) }}>
                                <Image
                                    source={icons.search}
                                    resizeMode="contain"
                                    style={{ height: verticalScale(20), width: horizontalScale(20), marginLeft: RFValue(15), top: RFValue(4) }}
                                />
                                <Text style={{ color: COLORS.gray, fontSize: RFValue(16), ...FONTS.lexendregular, marginStart: RFValue(5) }}>Search in orders</Text>
                            </View>
<<<<<<< Updated upstream
                        </View>
=======
>>>>>>> Stashed changes
                        {/* </View> */}

                    </View>
                    <View style={{ borderRadius: 10, backgroundColor: "#FFFFFF", marginVertical: "2%", flexDirection: "column" }}>
                        <View style={{ flexDirection: "row", marginHorizontal: "2%", borderRadius: 10 }}>
<<<<<<< Updated upstream

                            <TouchableOpacity style={{ flexDirection: "column" }} onPress={() => setModalVisible(!modalVisible)}>
=======
                            <TouchableOpacity style={{ flexDirection: "column" }} onPress={()=>setModalVisible(false)}>
>>>>>>> Stashed changes
                                <Image
                                    source={icons.filter}

                                    style={{ height: verticalScale(30), width: horizontalScale(24), margin: 8, left: 5 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View >
<<<<<<< Updated upstream
                    <OrderList orderlist={Orderlistdata} />
=======
                    <OrderList  orderlist={Orderlistdata}/>
>>>>>>> Stashed changes
                </View>
            </ScrollView>
            :<OrderEmpty/>}
            {/* <View style={{ flexDirection: "row", height: "7%", backgroundColor: COLORS.white }}>
                <TouchableOpacity style={{ flexDirection: "column", width: "45%", marginHorizontal: "3%", marginVertical: "1%", borderRadius: 5, borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendregular }}>Continue to Shopping</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "column", width: "45%", marginHorizontal: "3%", marginVertical: "1%", backgroundColor: COLORS.element, borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: COLORS.white, fontSize: RFValue(14), ...FONTS.lexendregular }} >Process to Checkout </Text>
                </TouchableOpacity>
            </View> */}
<<<<<<< Updated upstream

=======
           
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    },
    modalView: {
        width: 300,
        height: 550,
        marginTop: 0,
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
  

=======
        marginTop: 22,
      },
>>>>>>> Stashed changes

})
export default MyOrders;