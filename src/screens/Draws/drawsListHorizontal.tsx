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
import moment from 'moment';
import image from '../../constants/image';
import icons from '../../constants/icons';
import { COLORS, FONTS } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { horizontalScale, verticalScale } from '../../constants/metrices';
import { drawGetCall } from '../../services/register';

const data = [
  {
    id: '1',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
    to: "1689 sold out 1985"

  },
  {
    id: '2',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
    to: "1689 sold out 1985"
  },
  {
    id: '3',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
    to: "1689 sold out 1985"
  },
  {
    id: '4',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
    to: "1689 sold out 1985"
  },
  {
    id: '5',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
    to: "1689 sold out 1985"
  },
  {
    id: '6',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
    to: "1689 sold out 1985"
  },
  {
    id: '7',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
    to: "1689 sold out 1985"
  },
];
const DrawsHeader = () => {
  const navigation = useNavigation();
  const [close, setClose] = useState<any>();
  //drawGetCall
  useEffect(() => {
    //console.log("data..............");
    const soon = async () => {
      let closingData = await drawGetCall()
      let result = closingData.data;
      var a: any[] = [];
      result.map((e: { total_no_of_sold_out_tickets: number; total_no_of_tickets: number; }) => {
        var data = (e.total_no_of_sold_out_tickets * 100 / e.total_no_of_tickets);
        //console.log("samuvel sham.......",data);
        if (data < 100) {
          a.push(e)
        }
        //console.log(a, "data to maping")
        setClose(a)
      })

    }
    soon();

  }, [])

  return (
    <SafeAreaView >
      <View style={{}}>
        <FlatList
          horizontal={true}
          data={close}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ margin: "3.5%", paddingRight: 500 }}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity style={{ backgroundColor: "white", marginHorizontal: "1%", borderRadius: 5 }} onPress={() => navigation.navigate("PriceDetails", item)}>
                <View style={{ height: RFValue(85), width: RFValue(85), padding: "4%" }}>
                  <Image
                    source={{ uri: item.draw_image }}
                    resizeMode="contain"
                    style={{
                      width: "100%",
                      height: "100%"
                    }}
                  />
                </View>
              </TouchableOpacity>
              <View style={{ justifyContent: "center", alignItems: "center", padding: "2%" }}>
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(10), ...FONTS.lexendregular, }}>{moment(item.draw_date).format('Do MMM,YYYY')}</Text>
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(10), ...FONTS.lexendregular, }}>06:00 PM</Text>
              </View>
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
export default DrawsHeader;