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
import image from '../../constants/image';
import icons from '../../constants/icons';
import { COLORS, FONTS } from '../../constants';
import { horizontalScale, verticalScale } from '../../constants/metrices';
import { RFValue } from 'react-native-responsive-fontsize';
import { drawCommingGet } from '../../services/register';
import { ActivityIndicator } from 'react-native';
import DrawEmpty from '../ExceptionScreens/DrawEmpty';

const UpcomingDraws = (filter) => {
    console.log("filter",filter.son)
    const [close, setClose] = useState<any>();

    useEffect(()=>{
        setClose(filter.son)
    },[filter])
    return (
        <>
            {(filter.son).length > 0 ?
                <FlatList
                    data={close}
                    contentContainerStyle={{ width: "91%", alignSelf: "center", marginTop: "2%" }}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{ borderRadius: 9, backgroundColor: "white", alignItems: "center", paddingVertical: verticalScale(20), marginBottom: "5%" }}>
                            <TouchableOpacity>
                                <View>
                                    <Image
                                        source={{ uri: item.draw_image }}
                                resizeMode={"cover"}
                                style={{ height:verticalScale(150), width: horizontalScale(250),borderRadius:5}}
                                    />
                                </View>
                        <View style={{ marginLeft: "1%",marginTop:5 }}>
                                    <Text style={{ fontSize: RFValue(16), color: COLORS.textHeader, ...FONTS.lexendsemibold, padding: "1%" }}>{item.product_title}</Text>
                                    <Text style={{ fontSize: RFValue(16), color: COLORS.textHeader, ...FONTS.lexendregular, marginHorizontal: "1%", paddingBottom: "1%" }}>{item.product_description}</Text>
                                    <Text style={{ fontSize: RFValue(14), color: COLORS.element2, marginHorizontal: "1%", ...FONTS.lexendregular }}>₹{item.product_price}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
                : <DrawEmpty value={"There are no Upcoming Draws at the moment. Please try again later."}/>}
        </>
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
export default UpcomingDraws;