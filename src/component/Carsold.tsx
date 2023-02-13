import React, { type PropsWithChildren, useState, useEffect } from 'react';
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
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS ,COLORS} from '../constants';
import { horizontalScale, verticalScale } from '../constants/metrices';
import { useNavigation } from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Carsold = () => {
    const navigation = useNavigation();
    const [soldoutdata, setSoldoutdata] = useState<any>();
    //drawGetCall

    const DataInfo = useSelector(state=>state?.productDrawHandle?.data)

    useEffect(() => {
      var  Alreadysoldout:any=[];
        (DataInfo).forEach((element:any) => {
            if(element.total_no_of_sold_out_tickets/element.total_no_of_tickets ==1){
            Alreadysoldout.push(element);
            }
        })
        setSoldoutdata(Alreadysoldout)
        console.log("ermmm",Alreadysoldout)
    }, [DataInfo])

    return (
        <SafeAreaView >
            {soldoutdata ?
                <>
                    <View style={{ paddingVertical: verticalScale(10), backgroundColor: "#D10359", height: 150, }}>
                        <Text style={{ color: "white", marginLeft: 25, ...FONTS.lexendregular, fontWeight: "600", color: COLORS.white, fontSize: RFValue(15) }}>
                            SOLD OUT
                        </Text>
                        <View style={{ marginLeft: "6.5%", width: "10%", height: "2%", borderColor: "white", backgroundColor: "black" }} />
                        <Text style={{ marginLeft: 25, ...FONTS.lexendregular, color: COLORS.white, marginTop: "1%" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                    <View style={{ bottom: 80 }} >
                        <FlatList
                            data={soldoutdata}
                            contentContainerStyle={{}}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <View style={{ paddingTop: "5%", paddingHorizontal: "6%" }}>
                                    <TouchableOpacity style={{ borderRadius: 9, backgroundColor: "white" }}>
                                        <View style={{ alignItems: 'center', borderTopEndRadius: 8, borderTopStartRadius: 8, flexDirection: 'column', padding: 10 }}>
                                            <Image
                                                source={{ uri: item.draw_image }}
                                                style={{
                                                    height: verticalScale(150),
                                                    width: horizontalScale(230),
                                                    borderWidth: 1,
                                                margin:"3%",
                                                borderRadius:5
                                                }}
                                            />
                                        </View>
                                <View style={{ marginLeft:horizontalScale(15), padding:13 }}>
                                            <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(13), fontWeight: "600", color: "black" }}>Campaign:- {item.draw_title}</Text>
                                            <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(13), fontWeight: "300", color: "black" }}>{item.draw_sub_title}</Text>
                                            <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(13), fontWeight: "400", color: "#E70736" }}>Draw date to be announced</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    </View>
                </>
                : null}
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
export default Carsold;
