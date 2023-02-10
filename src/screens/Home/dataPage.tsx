
import React, { type PropsWithChildren, useEffect, useState } from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import Banner from '../../component/banner';
import Carsold from '../../component/Carsold';
import ClosingSoon from '../../component/closingdata';
import Product from '../../component/Products';
import { COLORS, FONTS } from '../../constants';
import icons from '../../constants/icons';
import image from '../../constants/image';
import { useNavigation } from '@react-navigation/native';

import { original, unwrapResult } from '@reduxjs/toolkit';
import { RFValue } from 'react-native-responsive-fontsize';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/metrices';
import { useDispatch ,useSelector } from 'react-redux';
import { bannerHandler } from '../../store/reducers/Banners';
import { userDetailsHandler } from '../../store/reducers/userDetails';


import { addressListHandler } from "../../store/reducers/addresslist";
import { drawgetHandler } from '../../store/reducers/Drawgetcall';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
const DataPage = () => {
  const navigation = useNavigation();
  const userData: any = useSelector<any>(state => state.userDetailsHandle.data.data);

  const dispatch = useDispatch();
  const [apiData, setApiData] = useState();
  // const [userData,setUserData]=useState();
  const [result, setResult] = useState();
  const [sold, setSold] = useState<any>();
  const [camp, setCamp] = useState<any>();
  const [close, setClose] = useState<any>();
  useEffect(() => {
    dispatch(bannerHandler())
      .then(unwrapResult).then((originalPromiseResult) => {
        // console.log("successfully returned to login with response ", originalPromiseResult);
        setApiData(originalPromiseResult);
      })
    dispatch(userDetailsHandler())
  }, [])


  const Addresslist = () => {
    dispatch(addressListHandler())
  }

  console.log("mmm", apiData)

  return (
    <ScrollView >
      <StatusBar
        animated={true}
        backgroundColor={"#0a0127"}
      />
      <View style={{ height: "100%" }}>
        <View
          style={{
            backgroundColor: "#0a0127",
            height: verticalScale(80),
            justifyContent: "center"
          }}>
          <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: "4%" }}>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={icons.userGrand}
                resizeMode="contain"
                style={{
                  width: horizontalScale(140),
                  height: verticalScale(35),
                  marginLeft: "8%"
                }}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
            <TouchableOpacity onPress={() => { navigation.navigate('User'), Addresslist() }}
                style={{borderRadius:moderateScale(40)}}
              >
                {(userData?.profile_pic) ?
                  <Image
                    source={{ uri: (userData?.profile_pic) }}
                    resizeMode="cover"
                    
                    style={{
                      width: horizontalScale(40),
                      height: verticalScale(40),
                      margin: "3%",
                      bottom: horizontalScale(7),
                      borderRadius:moderateScale(40)
                    }}
                  /> :
                  <Image
                    source={icons.user}
                    resizeMode="cover"
                    style={{
                      width: horizontalScale(40),
                      height: verticalScale(40),
                      margin: "3%",
                      bottom: horizontalScale(7),
                      borderRadius:moderateScale(40)
                    }}
                  />}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ padding: "3%",height:verticalScale(220)}}>
          <Banner data={apiData} />
        </View>

        <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(18), marginLeft: "4%", ...FONTS.lexendsemibold, color: "black" }}>Closing Soon</Text>
        <View style={{ marginLeft: "4.5%", width: horizontalScale(40), borderWidth: 1, backgroundColor: "#E70736", borderColor: "#E70736" }} />
        <View>
          {/* {console.log("user Details by sujith set in userData.............",userData.data )} */}
          <ClosingSoon />
        </View>

        <Product />

        <View style={{ paddingVertical: verticalScale(10), backgroundColor: "#D10359", height: 150, }}>
          <Text style={{ color: "white", marginLeft: 25, ...FONTS.lexendregular, fontWeight: "600", color: COLORS.white, fontSize: RFValue(15) }}>
            SOLD OUT
          </Text>
          <View style={{ marginLeft: "7%", width: "10%", height: "2%", borderColor: "white", backgroundColor: "black" }} />
          <Text style={{ color: "white", marginLeft: 25, ...FONTS.lexendregular, color: COLORS.white, marginTop: "1%" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
        </View>
        <Carsold />



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
    alignContent: "center",
    ...FONTS.lexendregular
  },

})
export default DataPage;