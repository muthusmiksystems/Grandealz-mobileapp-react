import React, { type PropsWithChildren } from 'react';
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
const Product = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView >
            <View >
                <FlatList
                    data={data}
                    contentContainerStyle={{}}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{ padding: '5%' }}>
                            <TouchableOpacity style={{ borderRadius: 9, borderTopWidth: 4, borderTopColor: "red", backgroundColor: "white" }}>

                                <View style={{ alignItems: 'center', borderTopEndRadius: 8, borderTopStartRadius: 8 }}>
                                    <View style={{alignSelf:"flex-end",marginRight:"4%",borderRightColor:"#7F7E76",borderTopEndRadius:40,borderTopStartRadius:40,borderBottomEndRadius:40,borderBottomStartRadius:40,borderWidth:3,marginTop:"2%",height:verticalScale(55),width:horizontalScale(120),borderColor:"#D8000D",flexDirection:"row"}}>
                                        <View style={{flexDirection:"column",padding:4,marginLeft:"7%"}}>
                                            <Text style={{color:"#E70736",...FONTS.lexendregular,fontSize:RFValue(13)}}> 1100</Text>
                                            <Text  style={{...FONTS.lexendsemibold,alignSelf:"center",color:"black",fontSize:RFValue(10),}}> Sold</Text>
                                        </View>
                                        <View style={{backgroundColor:"#7F7E76B2",height:verticalScale(23),marginTop:verticalScale(15),borderWidth:1,borderColor:"#7F7E76B2"}}/>
                                        <View style={{flexDirection:"column",padding:4}}>
                                            <Text style={{...FONTS.lexendregular,color:" rgba(127, 126, 118, 0.7)",fontSize:RFValue(9)}}> OUT OF</Text>
                                            <Text  style={{color:"#E70736",...FONTS.lexendregular,fontSize:RFValue(13)}}> 18500</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'column', paddingVertical: 20,bottom:"1%" }}>
                                        <Image
                                            source={item.imag}
                                            style={{
                                                height: verticalScale(150),
                                                width: horizontalScale(230),
                                                borderWidth: 1,
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={{ margin: 3, padding: 10, flexDirection: "row" }}>
                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(30), color: "#E70736" }}>Win</Text>
                                        <Text style={{ fontSize: RFValue(13), color: "black", ...FONTS.lexendsemibold, }}>One Campaign ,Two Winners </Text>
                                        <Text style={{ fontSize: RFValue(14), color: "black", ...FONTS.lexendregular, }}>Buy Resso set for : <Text style={{ color: "red" }}>₹1500</Text> </Text>
                                    </View>
                                    <View style={{ margin: "5%",alignSelf:"flex-end" }}>
                                        <Image
                                            source={image.pencil}
                                            style={{
                                                height: verticalScale(60),
                                                width: horizontalScale(60),
                                                borderWidth: 1,
                                            }}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate("MyOrders")} style={{ padding: "5%", borderWidth: 1, marginHorizontal: 20, borderRadius: 8 }}>
                                    <Text style={{ textAlign: "center", color: "black", fontSize: RFValue(15), ...FONTS.lexendsemibold }}>Add to Cart</Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: "row", paddingVertical: "5%" }}>
                                    <View style={{ flexDirection: "column", marginLeft: 15 }}>
                                        <Image
                                            source={image.calander}
                                            style={{
                                                borderWidth: 1,
                                            }}
                                        />
                                    </View>

                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={{ ...FONTS.lexendsemibold, fontWeight:"400",fontSize: RFValue(13), marginLeft: 6, ...FONTS.lexendsemibold, color: COLORS.black }}>
                                            Max Draw Date :September 05,2023
                                        </Text>
                                        <Text style={{ fontSize: RFValue(10), marginLeft: 6, ...FONTS.lexendregular, color:"#616161" }}>
                                            Or Earlier if the Campaign is Sold Out
                                        </Text>
                                    </View>
                                </View>


                            </TouchableOpacity>
                        </View>
                    )}
                />
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

})
export default Product;