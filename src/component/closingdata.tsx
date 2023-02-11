import React, { type PropsWithChildren, useEffect, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { horizontalScale, verticalScale } from '../constants/metrices';
import { drawGetCall } from '../services/register';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { productDrawHandler } from '../store/reducers/productdraw';

const data = [
  {
    id: '1',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet, consectetur",
    to: "1689 sold out 1985"

  },
  {
    id: '2',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet, consectetur",
    to: "1689 sold out 1985"
  },
  {
    id: '3',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet, consectetur",
    to: "1689 sold out 1985"
  },
  {
    id: '4',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet, consectetur",
    to: "1689 sold out 1985"
  },

];
const ClosingSoon = () => {
  const navigation = useNavigation();
  const [close, setClose] = useState<any>();
  const dispatch=useDispatch();
  const DataInfo = useSelector((state)=>(state.productDrawHandle.data))
  console.log(DataInfo,"data......")
  //drawGetCall
  useEffect(() => {
    dispatch(productDrawHandler())
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        console.log("success samuvel you did itdone", originalPromiseResult);
      })
  }, [])

  const handleSearch = (value: any) => {
    navigation.navigate("PriceDetails", value)
  }
<<<<<<< Updated upstream
  const handleProgressActive=(event:any)=>{
    const val=(event.total_no_of_sold_out_tickets)/(event.total_no_of_tickets)*100
    // console.log(`${val}%`);
    return `${val}%`
  }
=======
>>>>>>> Stashed changes

  return (
    <SafeAreaView >
      {DataInfo ?
        <View style={{ paddingVertical: "2%" }}>
          <FlatList
            horizontal={true}
            data={DataInfo}
            // ItemSeparatorComponent={() => (
            //   <View style={{ width: 5 }} />
            // )}
<<<<<<< Updated upstream
            contentContainerStyle={{ marginHorizontal:"4%" }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={{ paddingHorizontal:horizontalScale(8) }}>
                <TouchableOpacity style={{ borderRadius: 9, borderTopWidth: 4, borderTopColor: "#E70736", backgroundColor: "white", height: RFValue(145), width: RFValue(110) }} onPress={() => /* navigation.navigate("PriceDetails") */ handleSearch(item)}>
=======
            contentContainerStyle={{ margin: 10 }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={{ padding: '1%' }}>
                <TouchableOpacity style={{ borderRadius: 9, borderTopWidth: 4, borderTopColor: "#E70736", backgroundColor: "white", height: RFValue(145), width: RFValue(128) }} onPress={() => /* navigation.navigate("PriceDetails") */ handleSearch(item)}>
>>>>>>> Stashed changes
                  <View style={{ alignItems: 'center', borderTopEndRadius: 8, borderTopStartRadius: 8 }}>
                    <View style={{ flexDirection: 'column', marginTop: RFValue(15) }}>
                      <Image
                        source={{ uri: item.product_image }}
                        style={{
                          height: verticalScale(50),
                          width: horizontalScale(86),
                          borderWidth: 1,
                        }}
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "center", marginTop: RFValue(20), padding: 5 }}>
                    <Text style={{ fontSize: RFValue(10), color: COLORS.black, ...FONTS.lexendregular, lineHeight: 11.25, }}>{item.product_title}</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: RFValue(9), textAlign: "center", color: COLORS.black, ...FONTS.lexendregular }}>{item.total_no_of_sold_out_tickets} sold out of {item.total_no_of_tickets}</Text>
                  </View>
                  <View style={{ marginLeft: "15%", width: "70%", height: "4%", borderColor: "#F1F1F1", borderWidth: 1, margin: 2, borderRadius: 12, backgroundColor: "#F1F1F1" }}>
<<<<<<< Updated upstream
                    <Text style={{ backgroundColor: "#EC092D", width: handleProgressActive(item), borderRadius: 12 }}></Text>
=======
                    <Text style={{ backgroundColor: "#EC092D", width: "80%", borderRadius: 12 }}></Text>
>>>>>>> Stashed changes
                  </View>

                </TouchableOpacity>
              </View>
            )}
          />
        </View>
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
export default ClosingSoon;
