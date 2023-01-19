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
import { verticalScale } from '../../constants/metrices';

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
          <View style={{height:verticalScale(80),justifyContent:'center'}}>
            {/* <TouchableOpacity
              style={{ margin: "5.5%" }}
            >
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity> */}

            {/* <View style={{ marginTop: "4%", flexDirection: 'row', justifyContent: "center" }}> */}
              <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(20),textAlign:"center" }}>Notifications</Text>
            {/* </View> */}
          </View>
        </View>

        <View style={{ padding: "1%",height:verticalScale(690) }}>
          <FlatList
            data={data}
            contentContainerStyle={{}}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={{ padding: '3%' }}>
                <TouchableOpacity style={{ backgroundColor: "white",borderRadius:5,elevation:1, flexDirection: "row",padding:"1%" }}>
                  <View style={{ flexDirection: "column",marginTop:"2.5%" }}>
                    <Image
                      source={icons.rect}
                      resizeMode="contain"
                      style={{
                       borderWidth:1
                      }}
                    />
                  </View>
                  <View style={{ flexDirection: "column", width: "70%" }}>
                    <Text style={{fontSize:RFValue(13),...FONTS.lexendsemibold,margin:"2%",color:COLORS.black}}>{item.from}</Text>
                    <Text style={{fontSize:RFValue(11),margin:"2%",...FONTS.lexendregular,color:"#000"}}>{item.to}</Text>
                    <Text style={{fontSize:RFValue(13),...FONTS.lexendregular,color:COLORS.gray,marginHorizontal:"2%",paddingBottom:"2%"}}>{item.date}</Text>
                  </View>
                  <View style={{ flexDirection: "column", width: "15%" }}>
                    <Image
                      source={item.imag}
                      resizeMode="contain"
                      style={{
                        borderWidth: 1,
                        top:25,
                        // right:15,
                        // backgroundColor:"#F8F9F9"
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