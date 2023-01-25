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
import image from '../../constants/image';
import icons from '../../constants/icons';
import { COLORS, FONTS } from '../../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { horizontalScale, verticalScale } from '../../constants/metrices';

const data = [
    {
        id: '1',
        imag: image.pencil,
        name: "Pencil",
        desc: "Blanco Set",
        price: "₹100.00",
        count: "1 Ticket",
        delvery: "Delivered on fab 20"

    },
    {
        id: '2',
        imag: image.pencil,
        name: "Pencil",
        desc: "Blanco Set",
        price: "₹100.00",
        count: "1 Ticket",
        delvery: "Delivered on fab 20"

    },
    {
        id: '3',
        imag: image.pencil,
        name: "Pencil",
        desc: "Blanco Set",
        price: "₹100.00",
        count: "1 Ticket",
        delvery: "Delivered on fab 20"

    },
    {
        id: '4',
        imag: image.pencil,
        name: "Pencil",
        desc: "Blanco Set",
        price: "₹100.00",
        count: "1 Ticket",
        delvery: "Delivered on fab 20"

    },

];
const OrderList = () => {
    const navigation = useNavigation();
    console.log("again......")
    return (
        <SafeAreaView >
            <View >
                <FlatList
                    data={data}
                    contentContainerStyle={{paddingBottom:"5%" }}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{marginBottom:"4%"}}>
                            <TouchableOpacity  onPress={()=>navigation.navigate("OrderDetails")}>
                                <View style={{flexDirection:"row",backgroundColor:"#fff",borderRadius:10}} >
                                    <View style={{ alignItems: 'center',width:"30%" }}>
                                        <View style={{ flexDirection: 'column', padding: 10,margin:5 }}>
                                            <Image
                                                source={item.imag}
                                                style={{
                                                    borderWidth: 1,
                                                }}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ margin: 5, padding: 10 }}>
                                        <Text style={{ fontSize:RFValue(16), ...FONTS.lexendsemibold, color: COLORS.black }}>{item.name} </Text>
                                        <Text style={{ fontSize:RFValue(14),...FONTS.lexendregular, color:"#616161" }}>{item.desc}  </Text>
                                        <Text style={{  fontSize:RFValue(14),...FONTS.lexendregular,color: "red" }}>{item.price}</Text>
                                        <Text style={{ fontSize:RFValue(14),...FONTS.lexendregular,color:"#616161",marginTop:RFValue(7) }}>{item.count}  </Text>
                                        <Text style={{ fontSize:RFValue(12),...FONTS.lexendregular, color:"#0B002A" }}>{item.delvery}  </Text>                                        
                                    </View>
                                    <View style={{ flexDirection: "row", marginVertical: "2%",marginStart:"3%" }}>
                                        <View style={{ flexDirection: "column", marginLeft: 15,justifyContent:"center",marginStart:horizontalScale(30) }}>
                                            <Image
                                                source={icons.next}
                                                style={{
                                                    borderWidth: 1,
                                                    width:verticalScale(30),
                                                    height:verticalScale(25)
                                                }}
                                            />
                                        </View>
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
export default OrderList;