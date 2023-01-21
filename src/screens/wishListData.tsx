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

const data = [
    {
        id: '1',
        imag: image.pencil,
        name: "Pencil",
        desc: "Blanco Set",
        price: "₹100.00",
        count: "1 Ticket",
        delvery: "Closing in 15 : 54 : 48"

    },
    {
        id: '2',
        imag: image.pencil,
        name: "Pencil",
        desc: "Blanco Set",
        price: "₹100.00",
        count: "1 Ticket",
        delvery: "Closing in 15 : 54 : 48"

    },
    {
        id: '3',
        imag: image.pencil,
        name: "Pencil",
        desc: "Blanco Set",
        price: "₹100.00",
        count: "1 Ticket",
        delvery: "Closing in 15 : 54 : 48"

    },
    

];
const WishlistData = () => {
    const navigation = useNavigation();
    console.log("again......")
    return (
        <SafeAreaView >
            <View >
                <FlatList
                    data={data}
                    contentContainerStyle={{}}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{ padding: '5%' }}>
                            <TouchableOpacity style={{ elevation: 1, borderRadius: 9, backgroundColor: "white", width: "100%" }}>
                                <View style={{ flexDirection: "row", backgroundColor: "#fff",borderRadius:10 }} >
                                    <View style={{ alignItems: 'center', padding: 10, marginVertical: 5, width: "30%" }}>
                                        <View style={{ flexDirection: 'column', margin: 5 }}>
                                            <Image
                                                source={item.imag}
                                                style={{
                                                    borderWidth: 1,
                                                }}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ marginVertical: 5, paddingVertical: 10, }}>
                                        <Text style={{ fontSize: 16, ...FONTS.lexendsemibold, color: COLORS.black }}>{item.name} </Text>
                                        <Text style={{ fontSize: 14, ...FONTS.lexendregular, color: COLORS.black }}>{item.desc}  </Text>
                                        <Text style={{ fontSize: 14, ...FONTS.lexendregular, color: "red" }}>{item.price}</Text>

                                        <Text style={{ fontSize: 12, ...FONTS.lexendregular, color: COLORS.black }}>{`\n`}{item.delvery}  </Text>
                                    </View>
                                    <View style={{ flexDirection: "row", marginVertical: 5, }}>
                                        <View style={{ flexDirection: "column",justifyContent:"space-between"}}>
                                            <View style={{ flexDirection: "row",width:"35%",left:22,bottom:5, marginLeft: 45,backgroundColor:"#E70736",justifyContent:"flex-end",borderTopEndRadius:12,borderBottomLeftRadius:12 }}>
                                                <Text style={{marginRight:13,fontSize:RFValue(20),color:"white",bottom:7}}>_</Text>
                                            </View>
                                            <View style={{ flexDirection: "row",borderTopLeftRadius:12,borderBottomEndRadius:12,top:5,backgroundColor:"#E70736",padding:4 }}>
                                                <Text style={{...FONTS.lexendregular,color:COLORS.white,fontSize:RFValue(12),left:5}}>ADD TO CART</Text>
                                            </View>
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
export default WishlistData;