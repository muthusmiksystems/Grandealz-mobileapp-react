import React, { type PropsWithChildren,useState,useEffect } from 'react';
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
} from 'react-native';
import image from '../constants/image';
import icons from '../constants/icons';
import { COLORS, FONTS } from '../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { horizontalScale, verticalScale } from '../constants/metrices';
import { ToastAndroid } from 'react-native';
import { AddtoCartHandle } from "../services/addtocart";
import {useSelector} from 'react-redux';
import moment from 'moment';
const data = [
    {
        id: '1',
        imag: image.inputcash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"

    },
    {
        id: '2',
        imag: image.inputcash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },
    {
        id: '3',
        imag: image.inputcash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },
    {
        id: '4',
        imag: image.inputcash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },

];
const Product = ({addedCart}) => {
    const navigation = useNavigation();

    const [close, setClose] = useState<any>();
    const [drawid, setDrawid] = useState(null);


    const DataInfo = useSelector(state=>state.productDrawHandle.data)

    console.log("datavvv..of....",addedCart)
  

  useEffect(() =>{
    if(drawid){
    const AddtoCartitems = async () => {
        const payload={"draw": drawid,"qty":1}
        let AddItemtoCart = await AddtoCartHandle(payload)
        if (AddItemtoCart.status === "200") {
            ToastAndroid.showWithGravity(
                AddItemtoCart.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
            navigation.navigate("Tabs", { screen: "Cart" })
        }
        else {
            ToastAndroid.showWithGravity(
                AddItemtoCart.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        }
    }
    AddtoCartitems()
}
}, [drawid])

  const handleSearch = (value: any) => {
    navigation.navigate("PriceDetails", value)
  }

    return (
        <SafeAreaView >
            { DataInfo ?
            <View >
                <FlatList
                    data={DataInfo}
                    contentContainerStyle={{}}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{ padding: '4%' }}>
                            <TouchableOpacity style={{ borderRadius: 9, borderTopWidth: 2, borderTopColor: "red", backgroundColor: "white" }} onPress={() =>handleSearch(item)}>
                                <View style={{ alignItems: 'center', borderTopEndRadius: 8, borderTopStartRadius: 8 }}>
                                    <View style={{alignSelf:"flex-end",marginRight:"5%",borderRightColor:"#7F7E76",borderTopEndRadius:30,borderTopStartRadius:30,borderBottomEndRadius:30,borderBottomStartRadius:30,borderWidth:3,marginTop:"2%",height:verticalScale(55),width:horizontalScale(115),borderColor:"#D8000D",flexDirection:"row"}}>
                                        <View style={{flexDirection:"column",padding:4,marginLeft:"10%"}}>
                                            <Text style={{color:"#E70736",...FONTS.lexendregular,fontSize:RFValue(13),textAlign:"center"}}> {item.total_no_of_sold_out_tickets}</Text>
                                            <Text  style={{...FONTS.lexendsemibold,alignSelf:"center",color:"black",fontSize:RFValue(10),}}> Sold</Text>
                                        </View>
                                        <View style={{backgroundColor:"#7F7E76B2",height:verticalScale(23),marginTop:verticalScale(15),borderWidth:1,borderColor:"#7F7E76B2"}}/>
                                        <View style={{flexDirection:"column",padding:4}}>
                                            <Text style={{...FONTS.lexendregular,color:" rgba(127, 126, 118, 0.7)",fontSize:RFValue(9)}}> OUT OF</Text>
                                            <Text  style={{color:"#E70736",...FONTS.lexendregular,fontSize:RFValue(13),textAlign:"center"}}> {item.total_no_of_tickets}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'column', paddingVertical: 20,bottom:"1%" }}>
                                        <Image
                                            source={{ uri: item.draw_image}}
                                            style={{
                                                height: verticalScale(150),
                                                width: horizontalScale(230),
                                                borderWidth: 1,
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={{ margin: 3, padding: 10, flexDirection: "row" }}>
                                    <View style={{ flexDirection: "column",width:"65%",height:"100%"}}>
                                        <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(30), color: "#E70736" }}>Win</Text>
                                        <Text style={{ fontSize: RFValue(15), color: "black", ...FONTS.lexendsemibold, }}>{item.draw_title} </Text>
                                        <Text style={{ fontSize: RFValue(14), color: "black", ...FONTS.lexendregular, }}>Buy {item.draw_sub_title} : <Text style={{ color: "red" }}>₹{item.product_price}</Text> </Text>
                                    </View>
                                    <View style={{ marginLeft: "5%",alignSelf:"flex-end" }}>
                                        <Image
                                            source={{uri : item.product_image}}
                                            style={{
                                                height: verticalScale(80),
                                                width: horizontalScale(80),
                                                borderWidth: 1,
                                            }}
                                        />
                                    </View>
                                </View>
                                {
                                 !(addedCart.includes(`${item._id}`)) ?
                                <TouchableOpacity  style={{ padding: "5%", borderWidth: 1, marginHorizontal: 20, borderRadius: 8 }} onPress={()=>setDrawid(item._id)}>
                                    <Text style={{ textAlign: "center", color: "black", fontSize: RFValue(15), ...FONTS.lexendsemibold }}>Add to Cart</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity  style={{ padding: "5%", borderWidth: 1, marginHorizontal: 20, borderRadius: 8,backgroundColor:"black" }} onPressIn={() => {navigation.navigate("Tabs",{screen:"Cart"})}}>
                                <Text style={{ textAlign: "center", color: "white", fontSize: RFValue(15), ...FONTS.lexendsemibold }}>Go To Cart</Text>
                                </TouchableOpacity>
                                }
                                <View style={{ flexDirection: "row", paddingVertical: "5%" }}>
                                    <View style={{ flexDirection: "column", marginLeft: 15 }}>
                                        <Image
                                            source={image.calander}
                                            style={{
                                                borderWidth: 1,
                                            }}  />
                                    </View>
                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={{ ...FONTS.lexendsemibold, fontWeight:"400",fontSize: RFValue(11.5), marginLeft: 6, ...FONTS.lexendsemibold, color: COLORS.black }}>
                                            Max Draw Date :{moment(item.max_draw_date).format('MMMM DD YYYY')}
                                        </Text>
                                        <Text style={{ fontSize: RFValue(10),marginLeft: 6, ...FONTS.lexendregular, color:"gray",width:horizontalScale(280) }}>
                                           {(item.max_draw_date_description).substring(0,100)}
                                        </Text>
                                    </View>
                                </View>


                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            :null }
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

})
export default Product;
