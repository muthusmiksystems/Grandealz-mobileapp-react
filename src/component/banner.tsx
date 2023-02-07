import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import Swiper from 'react-native-swiper'
import { useDispatch } from 'react-redux';
import { FONTS } from '../constants';
import icons from '../constants/icons';
import image from '../constants/image';
import { horizontalScale, moderateScale } from '../constants/metrices';
import { bannerHandler } from '../store/reducers/Banners';
import { unwrapResult } from '@reduxjs/toolkit';

const Banner = (data) => {
  const detail = data?.data;
  const banner = detail?.data

  return (
<View>
      {banner ?
    <Swiper style={{ height: 210 }} loop={false}
      dot={
        <View
          style={{
            backgroundColor: '#D10359',
            width: 5,
            height: 5,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 100,
            marginBottom: 3,
            top: 15
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: '#D10359',
            width: 25,
            height: 5,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 100,
            marginBottom: 3,
            top: 15
          }}
        />
      }
    >
      <View style={{}}>
      <View style={{ backgroundColor: "#070022", borderRadius: 8,marginHorizontal:"1%"  }}>
          <View style={{ marginVertical: "11.5%",marginHorizontal:"5%", flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "column", width: "65%" }}>
              <Text style={{ color: "white", fontSize: moderateScale(6), ...FONTS.lexendregular }}>{banner[0].title}</Text>
              <Text style={{ color: "white", fontSize: moderateScale(13), ...FONTS.lexendregular }}>{banner[0].title} </Text>
              <Text style={{ color: "white", fontSize: moderateScale(4), marginTop: "9%", ...FONTS.lexendregular,width:RFValue(170) }}>{banner[0].description}</Text>
              <TouchableOpacity style={{ borderWidth: 1, borderRadius: 8, borderColor: "white", marginTop: "6%", width: "50%", height: "20%" }} onPress={() => { banner[0].btn_url }}>
                <Text style={{ color: "white", fontSize: moderateScale(12), ...FONTS.lexendregular, textAlign: "center", padding: "3%" }}>See Details</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "35%", flexDirection: "column", borderWidth: 2 }}>
              <Image
               source={{ uri: banner[0].image }}
                resizeMode="contain"
                style={{
                  width: 170,
                  height: 100,
                  right:40
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{}}>
      <View style={{ backgroundColor: "#070022", borderRadius: 8,marginHorizontal:"1%"  }}>
          <View style={{ marginVertical: "11.5%",marginHorizontal:"5%", flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "column", width: "65%" }}>
              <Text style={{ color: "white", fontSize: moderateScale(6), ...FONTS.lexendregular }}>{banner[1].title}</Text>
              <Text style={{ color: "white", fontSize: moderateScale(13), ...FONTS.lexendregular }}> </Text>
              <Text style={{ color: "white", fontSize: moderateScale(5), marginTop: "9%", ...FONTS.lexendregular,width:RFValue(170) }}>{banner[1].description}</Text>
              <TouchableOpacity style={{ borderWidth: 1, borderRadius: 8, borderColor: "white", marginTop: "6%", width: "50%", height: "20%" }} onPress={() => { banner[1].btn_url }}>
                <Text style={{ color: "white", fontSize: moderateScale(12), ...FONTS.lexendregular, textAlign: "center", padding: "3%" }}>See Details</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "35%", flexDirection: "column", borderWidth: 2 }}>
              <Image
                source={{ uri: banner[1].image }}
                resizeMode="contain"
                style={{
                  width: 180,
                  height: 120,
                  right:40
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{}}>
      <View style={{ backgroundColor: "#070022", borderRadius: 8,marginHorizontal:"1%"  }}>
          <View style={{ marginVertical: "11.5%",marginHorizontal:"5%", flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "column", width: "65%" }}>
              <Text style={{ color: "white", fontSize: moderateScale(6), ...FONTS.lexendregular }}>Lorem Ipsum is simply dummy text of the printing.</Text>
              <Text style={{ color: "white", fontSize: moderateScale(13), ...FONTS.lexendregular }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
              <Text style={{ color: "white", fontSize: moderateScale(5), marginTop: "9%", ...FONTS.lexendregular,width:RFValue(170) }}>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.</Text>
              <TouchableOpacity style={{ borderWidth: 1, borderRadius: 8, borderColor: "white", marginTop: "6%", width: "50%", height: "20%" }}>
                <Text style={{ color: "white", fontSize: moderateScale(12), ...FONTS.lexendregular, textAlign: "center", padding: "3%" }}>See Details</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "35%", flexDirection: "column", borderWidth: 2 }}>
              <Image
                source={image.group}
                resizeMode="contain"
                style={{
                  width: 180,
                  height: 120,
                  right:40
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Swiper>
     : null}
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    height: "27%"
  },
  slide1: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
export default Banner;
