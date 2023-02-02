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
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../constants';
import { horizontalScale,verticalScale } from '../constants/metrices';
import { drawGetCall } from '../services/register';
import { useNavigation } from '@react-navigation/native';

const Carsold = () => {
    const navigation = useNavigation();
    const [close, setClose] = useState<any>();
    //drawGetCall
    useEffect(() => {
      const soon = async () => {
        let campaigns = await drawGetCall()
        let result = campaigns.data;
        
        var a: any[] = [];
        result.map((e: { total_no_of_sold_out_tickets: number; total_no_of_tickets: number; }) => {
          var data = (e.total_no_of_sold_out_tickets * 100 / e.total_no_of_tickets);
          //console.log("sold out page.......",e);
          if (data ===100) {
            a.push(e)
          }
          //console.log(a, "data to maping")
          setClose(a)
        })
      }
      soon();
  
    },[])
    return (
        <SafeAreaView >
            {close ?
            <View style={{bottom:80}} >
                <FlatList
                    data={close}
                    contentContainerStyle={{}}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{ paddingTop:"5%",paddingHorizontal:"6%" }}>
                            <TouchableOpacity style={{  borderRadius: 9,backgroundColor: "white" }}>
                                <View style={{ alignItems: 'center', borderTopEndRadius: 8, borderTopStartRadius: 8 ,flexDirection: 'column', padding: 10}}>
                                        <Image
                                            source={{uri : item.draw_image}}
                                            style={{
                                                height: verticalScale(150),
                                                width: horizontalScale(230),
                                                borderWidth: 1,
                                            }}
                                        />
                                </View>
                                <View style={{ marginLeft:horizontalScale(15), padding: 10 }}>
                                    <Text style={{  ...FONTS.lexendsemibold,fontSize: RFValue(13),fontWeight:"600", color: "black" }}>Campaign:- {item.draw_title}</Text>
                                    <Text style={{ ...FONTS.lexendregular,fontSize:RFValue(13),fontWeight:"300", color: "black" }}>{item.draw_sub_title}</Text>
                                    <Text style={{ ...FONTS.lexendregular,fontSize: RFValue(13),fontWeight:"400", color: "#E70736" }}>Draw date to be announced</Text>
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
export default Carsold;