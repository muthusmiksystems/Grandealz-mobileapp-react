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
import { drawGetCall } from '../services/register';

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

    const [close, setClose] = useState<any>();
  //drawGetCall
  useEffect(() => {
    //console.log("data..............");
    const soon = async () => {
      let campaigns = await drawGetCall()
      
      let result = campaigns.data;
      
      var a: any[] = [];
      result.map((e: { total_no_of_sold_out_tickets: number; total_no_of_tickets: number; }) => {
        var data = (e.total_no_of_sold_out_tickets * 100 / e.total_no_of_tickets);
        //console.log("samuvel sham.......",data);
        if (data <80) {
          a.push(e)
        }
        //console.log(a, "data to maping")
        setClose(a)
      })
      
    }
    soon();
   
  }, [])

  const handleSearch = (value: any) => {
    navigation.navigate("PriceDetails", value)
  }

    return (
        <SafeAreaView >
            { close ?
            <View >
                <FlatList
                    data={close}
                    contentContainerStyle={{}}
                    onEndReached={drawGetCall}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{ padding: '5%' }}>
                            <TouchableOpacity style={{ borderRadius: 9, borderTopWidth: 4, borderTopColor: "red", backgroundColor: "white" }} onPress={() => /* navigation.navigate("PriceDetails") */ handleSearch(item)}>
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
                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(30), color: "#E70736" }}>Win</Text>
                                        <Text style={{ fontSize: RFValue(13), color: "black", ...FONTS.lexendsemibold, }}>{item.draw_title} </Text>
                                        <Text style={{ fontSize: RFValue(14), color: "black", ...FONTS.lexendregular, }}>Buy {item.draw_sub_title}  <Text style={{ color: "red" }}>₹ {item.product_price}</Text> </Text>
                                    </View>
                                    <View style={{ margin: "5%",alignSelf:"flex-end" }}>
                                        <Image
                                            source={{uri : item.product_image}}
                                            style={{
                                                height: verticalScale(60),
                                                width: horizontalScale(60),
                                                borderWidth: 1,
                                            }}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity  style={{ padding: "5%", borderWidth: 1, marginHorizontal: 20, borderRadius: 8 }} onPress={()=>navigation.navigate("Tabs",{screen:"Cart"},(item))}>
                                    <Text style={{ textAlign: "center", color: "black", fontSize: RFValue(15), ...FONTS.lexendsemibold }}>Add to Cart</Text>
                                </TouchableOpacity>
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
                                            Max Draw Date :{item.max_draw_date}
                                        </Text>
                                        <Text style={{ fontSize: RFValue(10), marginLeft: 6, ...FONTS.lexendregular, color:" #616161" }}>
                                            Or Earlier if the Campaign is Sold Out
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
