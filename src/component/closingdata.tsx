import React, { type PropsWithChildren } from 'react';
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


const data = [
    {
        id: '1',
        imag:image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
       
    },
    {
        id: '2',
        imag:image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },
    {
        id: '3',
        imag:image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },
    {
        id: '4',
        imag:image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },

];
const ClosingSoon = () => {
  return (
    <SafeAreaView >
      <View style={{paddingVertical:"5%"}}>
            <FlatList
                horizontal={true}
                data={data}
                contentContainerStyle={{ margin: 10,width:800 }}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={{ padding: '1%' }}>
                        <TouchableOpacity style={{ borderWidth: 1, borderRadius:9,borderTopWidth:4,borderTopColor:"red", backgroundColor:"white" ,height:182,width:180}}>
                            <View style={{  alignItems: 'center',borderTopEndRadius:8,borderTopStartRadius:8 }}>
                            <View style={{ flexDirection: 'column', padding: 10}}>
                                    <Image
                                        source={item.imag}
                                        style={{
                                            borderWidth: 1,
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent:"center", marginTop: 5, padding: 10 }}>
                                <Text style={{fontSize:14}}>{item.from}</Text>
                            </View>
                            <View>
                            <Text style={{ fontSize: 10,textAlign:"center" }}>{item.to}</Text>
                           </View>
                            
                        </TouchableOpacity>
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
export default ClosingSoon;