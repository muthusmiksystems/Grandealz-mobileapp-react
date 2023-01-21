import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import Banner from '../../component/banner';
import Carsold from '../../component/Carsold';
import ClosingSoon from '../../component/closingdata';
import Product from '../../component/Products';
import icons from '../../constants/icons';
import image from '../../constants/image';
import { COLORS, FONTS } from '../../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/metrices';

const data = [
  {
    id: '1',
    imag: image.cash,
    from: "Lorem Ipsum is simply dummy ",
    to: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "20 october, 08:20PM"
  },
  {
    id: '2',
    imag: image.cash,
    from: "Lorem Ipsum is simply dummy ",
    to: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "20 october, 08:20PM"
  },
  {
    id: '3',
    imag: image.cash,
    from: "Lorem Ipsum is simply dummy ",
    to: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "20 october, 08:20PM"
  },
  {
    id: '4',
    imag: image.cash,
    from: "Lorem Ipsum is simply dummy ",
    to: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "20 october, 08:20PM"
  },
  {
    id: '5',
    imag: image.cash,
    from: "Lorem Ipsum is simply dummy ",
    to: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "20 october, 08:20PM"
  },
  {
    id: '6',
    imag: image.cash,
    from: "Lorem Ipsum is simply dummy ",
    to: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "20 october, 08:20PM"
  },
  {
    id: '7',
    imag: image.cash,
    from: "Lorem Ipsum is simply dummy ",
    to: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "20 october, 08:20PM"
  },
  {
    id: '8',
    imag: image.cash,
    from: "Lorem Ipsum is simply dummy ",
    to: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "20 october, 08:20PM"
  },
  {
    id: '9',
    imag: image.cash,
    from: "Lorem Ipsum is simply dummy ",
    to: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "20 october, 08:20PM"
  },
  {
    id: '10',
    imag: image.cash,
    from: "Lorem Ipsum is simply dummy ",
    to: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "20 october, 08:20PM"
  },


];
const NotificationList = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} >

      <View style={{ flex: 0.8 }}>
        <StatusBar
          animated={true}
          backgroundColor={"#0a0127"}
        />
        <View
          style={{
            backgroundColor: "#0a0127",
          }}>

          <View style={{ height: verticalScale(80), justifyContent: 'center' }}>
            <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(24), textAlign: "center" }}>Notifications</Text>
          </View>
        </View>

        <View style={{ padding: "1%", height: verticalScale(700) }}>
          <FlatList
            data={data}
            contentContainerStyle={{ paddingBottom: verticalScale(40) }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={{ paddingHorizontal: "3%", paddingTop: "3%" }}>
                <TouchableOpacity style={{ backgroundColor: "white", borderRadius: 8, elevation: 1, flexDirection: "row", padding: "2%" }}>
                  <View style={{ flexDirection: "column", marginTop: verticalScale(9) }}>
                    <Image
                      source={icons.rect}
                      resizeMode="contain"
                      style={{
                        borderWidth: 1
                      }}
                    />
                  </View>
                  <View style={{ flexDirection: "column", width: horizontalScale(240) }}>
                    <Text style={{ fontSize: RFValue(14), ...FONTS.lexendsemibold, margin: "2%", color: COLORS.black }}>{item.from}</Text>
                    <Text style={{ fontSize: RFValue(12), margin: "2%", ...FONTS.lexendregular, color: "#000" }}>{item.to}</Text>
                    <Text style={{ fontSize: RFValue(14), ...FONTS.lexendregular, color: COLORS.gray, marginHorizontal: "2%", paddingBottom: "2%" }}>{item.date}</Text>
                  </View>
                  <View style={{ flexDirection: "column", width: horizontalScale(70), backgroundColor: COLORS.lightGray, height: verticalScale(85), alignSelf: "center",borderRadius:10 }}>
                    <Image
                      source={item.imag}
                      resizeMode="contain"
                      style={{
                        width: 65,
                        top:9,
                        left:4
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
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
export default NotificationList;