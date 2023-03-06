
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
  ImageBackground,
} from 'react-native';
import Banner from '../../component/banner';
import Carsold from '../../component/Carsold';
import ClosingSoon from '../../component/closingdata';
import Product from '../../component/Products';
import { COLORS, FONTS } from '../../constants';
import icons from '../../constants/icons';
import image from '../../constants/image';
import { useNavigation } from '@react-navigation/native';
import LoaderKit from 'react-native-loader-kit';
import { original, unwrapResult } from '@reduxjs/toolkit';
import { RFValue } from 'react-native-responsive-fontsize';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/metrices';
import { useDispatch, useSelector } from 'react-redux';
import { bannerHandler } from '../../store/reducers/Banners';
import { userDetailsHandler } from '../../store/reducers/userDetails';
import { ourCartPage } from '../../services/ourCart';
import { addressListHandler } from "../../store/reducers/addresslist";
import { drawgetHandler } from '../../store/reducers/Drawgetcall';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import NetInfo from "@react-native-community/netinfo";
import { useIsFocused } from '@react-navigation/native';
import LoadingView from '../../component/imageLoader';

const DataPage = () => {


  const dispatch = useDispatch();
  const navigation = useNavigation();
  const IsFocused = useIsFocused();
  const userData: any = useSelector<any>(state => state.userDetailsHandle?.data?.data);


  const [apiData, setApiData] = useState();
  const [change, setChange] = useState();
  const [prodata, setProdata] = useState<any>();
  const [cartList, setCartList] = useState([]);
  const [loader, setLoader] = useState(false);
  const DataInfo = useSelector(state => state?.productDrawHandle?.data)
  const [imageLoader, setImageLoader] = useState(false)

  useEffect(() => {
    NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        navigation.navigate("NetworkError")
      }
    })
    cartStock();
    Addresslist();
    dispatch(bannerHandler())
      .then(unwrapResult).then((originalPromiseResult) => {
        // console.log("successfully returned to login with response ", originalPromiseResult);
        setApiData(originalPromiseResult);
      })
    dispatch(userDetailsHandler())
  }, [])

  useEffect(() => {
    if (IsFocused) {
      setLoader(true)
      cartStock()
    }
  }, [IsFocused])

  const cartStock = async () => {
    setLoader(true)
    let ourCartStock = await ourCartPage()
    console.log("CartData List on cart", ourCartStock)
    var AlreadyInCart: any = [];
    let data = ourCartStock?.draws;
    if (data) {
      (data).forEach((element: any) => {
        var Data = (element.draw._id);
        AlreadyInCart.push(Data);
      })
    }
    setCartList(AlreadyInCart);
    console.log("dtaaaa..kumari...................", AlreadyInCart)
    setLoader(false)
  }
  console.log("rummer", cartList)
  const Addresslist = () => {
    dispatch(addressListHandler())
  }

  useEffect(() => {
    setLoader(true),
      cartStock()
  }, [change])

  useEffect(() => {
    setProdata(DataInfo)
    console.log("mmm", prodata)
  }, [DataInfo])

  return (
    <SafeAreaView>
      {!loader && prodata && prodata.length > 0 ?
        <>
          <StatusBar
            animated={true}
            backgroundColor={"#0a0127"}
          />
          <View style={{ backgroundColor: "#0a0127", height: verticalScale(80), justifyContent: "center" }}>
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
              <View style={{ flexDirection: "column", }}>
                <TouchableOpacity onPress={() => { navigation.navigate('User'), Addresslist() }}
                  style={{ borderRadius: moderateScale(40), }}
                >
                  <View style={{
                    width: horizontalScale(40), height: verticalScale(40), margin: "3%", bottom: horizontalScale(7), borderRadius: moderateScale(40), borderWidth: 1, borderColor: COLORS.element
                  }}>
                    {(userData?.profile_pic) ?
                      <Image
                        source={{ uri: (userData?.profile_pic) }}
                        resizeMode="cover"
                        onLoadStart={() => setImageLoader(true)}
                        onLoadEnd={() => setImageLoader(false)}
                        style={{ width: "100%", height: "100%", borderRadius: moderateScale(40) }}
                      />
                      // {(imageLoader) ? <LoadingView /> : null}
                      :
                      <Image
                        source={icons.user}
                        resizeMode="cover"
                        style={{
                          width: "100%", height: "100%", borderRadius: moderateScale(40)
                        }}
                      />}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ScrollView >

            <View style={{ height: "100%" }}>
              <View style={{ padding: "3%", height: verticalScale(220) }}>
                <Banner data={apiData} />
              </View>
              <ClosingSoon />
              <View style={{padding:"3%"}}>
                <Product addedCart={cartList} changer={setChange} change={change} />
              </View>
              <Carsold />
            </View>


          </ScrollView>
        </>
        : <View style={{ width: "100%", alignItems: "center", paddingBottom: "5%", height: "100%", justifyContent: "center" }}>
          <LoaderKit
            style={{ width: 100, height: 105 }}
            name={'BallClipRotatePulse'} // Optional: see list of animations below
            size={50} // Required on iOS
            color={COLORS.element} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',
          />
        </View>
      }
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
    alignContent: "center",
    ...FONTS.lexendregular
  },

})
export default DataPage;