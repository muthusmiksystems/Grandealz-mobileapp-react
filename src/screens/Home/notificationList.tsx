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
import { FONTS } from '../../constants';

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
    <ScrollView style={{ flex: 1 }} >

      <View style={{ flex: 0.8 }}>
        <StatusBar
          animated={true}
          backgroundColor={"#0a0127"}
        />
        <View
          style={{
            backgroundColor: "#0a0127",

          }}>
          <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <TouchableOpacity
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
            </TouchableOpacity>

            <View style={{ marginTop: "4%", flexDirection: 'row', justifyContent: "center" }}>
              <Text style={{ color: "white", fontSize: 20, marginLeft: "25%", bottom: 8, ...FONTS.lexendregular}}>Notifications</Text>
            </View>
          </View>
        </View>

        <View style={{ padding: "2%" }}>
          <FlatList
            data={data}
            contentContainerStyle={{}}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={{ padding: '3%' }}>
                <TouchableOpacity style={{ backgroundColor: "white",borderRadius:5,elevation:1, flexDirection: "row",padding:"1%" }}>
                  <View style={{ flexDirection: "column",marginTop:"2%" }}>
                    <Image
                      source={icons.rect}
                      resizeMode="contain"
                      style={{
                       borderWidth:1

                      }}
                    />
                  </View>
                  <View style={{ flexDirection: "column", width: "70%" }}>

                    <Text style={{fontSize:16,fontWeight:"bold",margin:"2%",...FONTS.lexendregular,color:"#000"}}>{item.from}</Text>
                    <Text style={{fontSize:14,fontWeight:"200",margin:"2%",...FONTS.lexendregular,color:"#000"}}>{item.to}</Text>
                    <Text style={{fontSize:14,fontWeight:"200",marginTop:"3%",...FONTS.lexendregular,color:"#000"}}>{item.date}</Text>

                  </View>
                  <View style={{ flexDirection: "column", width: "20%" }}>
                    <Image
                      source={item.imag}
                      resizeMode="contain"
                      style={{
                        borderWidth: 1,
                        top:25,
                        right:15,
                        backgroundColor:"#F8F9F9"
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />


        </View>


      </View>
    </ScrollView>
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