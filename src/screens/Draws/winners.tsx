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
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONTS } from '../../constants';
import { horizontalScale, verticalScale } from '../../constants/metrices';
import { drawWinnerGet } from '../../services/register';


const data = [
    {
        id: '1',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"

    },
    {
        id: '2',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },
    {
        id: '3',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },
    {
        id: '4',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },
    {
        id: '5',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },
    {
        id: '6',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },

];
const Winners = () => {
    const [close, setClose] = useState<any>();
    //drawGetCall
    useEffect(() => {
      //console.log("data..............");
      const data="winners"
      const soon = async () => {
        let closingData = await drawWinnerGet(data)
        let result = closingData.data;
        //console.log("im inside the winner page ",result);
        setClose(result)
      }
      soon();
  
    }, [])
    return (

        <FlatList
            data={close}
            contentContainerStyle={{ width: "91%", alignSelf: "center", marginTop: "5%" }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View style={{ borderRadius: 9, backgroundColor: "white", alignItems: "center", paddingVertical: verticalScale(20), marginBottom: "5%" }}>
                    <TouchableOpacity >
                        <View>
                            <Image
                                source={{uri: item.draw_image}}
                                resizeMode="contain"
                                style={{ height: verticalScale(160), width: horizontalScale(320) }}

                            />
                        </View>
                        <View style={{ left: 10 }}>

                            <Text style={{ fontSize: RFValue(15), color: COLORS.topBackground, ...FONTS.lexendsemibold, paddingTop: "3%", paddingHorizontal: "3.5%" }}>CONGRATULATIONS </Text>
                            <Text style={{ fontSize: RFValue(13), color: COLORS.textHeader, marginHorizontal: "1%", ...FONTS.lexendregular, paddingHorizontal: "3%" }}>
                                <Text style={{ fontSize: RFValue(16), color: COLORS.textHeader,...FONTS.lexendsemibold, paddingHorizontal: "3%" }}>{item.winner.user.first_name} </Text>
                                on Winning</Text>
                            <Text style={{ fontSize: RFValue(13), color: COLORS.textHeader, ...FONTS.lexendsemibold, marginHorizontal: "1%", paddingBottom: "1%", paddingHorizontal: "3%" }}>1 entry our {item.draw_title}</Text>
                            <Text style={{ fontSize: RFValue(13), color: COLORS.black, marginHorizontal: "1%", ...FONTS.lexendregular, paddingHorizontal: "3%" }}>Coupon no. {item.winner.draw_ticket}</Text>
                            <Text style={{ fontSize: RFValue(10), color: COLORS.gray, paddingTop: "5%", ...FONTS.lexendregular, marginHorizontal: "1%",paddingHorizontal: "3.5%" }}>Announced on</Text>
                            <Text style={{ fontSize: RFValue(10), color: COLORS.gray, ...FONTS.lexendregular, marginHorizontal: "1%",paddingHorizontal: "3.5%" }}>August 07.2022 8:05 PM</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        />


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
export default Winners;