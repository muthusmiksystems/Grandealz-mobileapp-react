import React from "react";
import { Image, View, Text, Button, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import DataPage from "../Home/dataPage";
import Draws from "../Draws/draws";
import NotificationList from "../Home/notificationList";
import Tickets from "../Tickets/tickets";
import Cart from "../Cart/cart";
import { icons, COLORS, FONTS } from "../../constants";
import Icon from 'react-native-vector-icons/FontAwesome'
import BrandIcons from "react-native-vector-icons/Ionicons"
import EntypoIcons from "react-native-vector-icons/Entypo";

import { RFValue } from "react-native-responsive-fontsize";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import SLIcon from 'react-native-vector-icons/SimpleLineIcons'
const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,

    tabStyle:
        [{ backgroundColor: COLORS.white }],
    style: {
        height: 95,
        shadowColor: COLORS.white,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
    },
};

const Tabs = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            initialRouteName={'DataPage'}
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarStyle:{height:56},
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.element : COLORS.gray;

                    switch (route.name) {
                        case "Notification":
                            return (
                                <View style={{ alignItems: "center",bottom:"6%" }}>
                                    <View>{focused? <Image source={icons.tabTopSlide}
                                        resizeMode="contain"
                                        style={{width:30,height:20}}
                                    />: <View style={{width:30,height:20}}/>}</View>
                                    <View>
                                        {focused ? <Image
                                            source={icons.tabBellColor}
                                            resizeMode="contain"
                                            style={{
                                                width: 60,
                                                height: 30
                                            }}
                                        /> :
                                            <Image
                                                source={icons.tabBellNoColor}
                                                resizeMode="contain"
                                                style={{
                                                    width: 60,
                                                    height: 30
                                                }}
                                            />}
                                    </View>
                                    <Text style={{ color: tintColor, ...FONTS.lexendregular, fontSize: RFValue(10) }}>Notifications</Text>
                                </View>
                            );
                        case "Draws":
                            return (
                                <View style={{ alignItems: "center",bottom:"6%" }}>
                                    <View>{focused? <Image source={icons.tabTopSlide}
                                        resizeMode="contain"
                                        style={{width:30,height:20}}
                                    />: <View style={{width:30,height:20}}/>}</View>
                                    <View>
                                        {focused ? <Image
                                            source={icons.tabDrawColor}
                                            resizeMode="contain"
                                            style={{
                                                width: 60,
                                                height: 30
                                            }}
                                        /> :
                                            <Image
                                                source={icons.tabDrawNoColor}
                                                resizeMode="contain"
                                                style={{
                                                    width: 60,
                                                    height: 30
                                                }}
                                            />}
                                    </View>
                                    <Text style={{ color: tintColor, ...FONTS.lexendregular, fontSize: RFValue(10) }}>Draws</Text>
                                </View>
                            );
                        case "DataPage":
                            return (
                                <View style={{ alignItems: "center",bottom:"6%" }}>
                                    <View>{focused? <Image source={icons.tabTopSlide}
                                        resizeMode="contain"
                                        style={{width:30,height:20}}
                                    />: <View style={{width:30,height:20}}/>}</View>
                                    <View>
                                        {focused ? <Image
                                            source={icons.tabHomeColor}
                                            resizeMode="contain"
                                            style={{
                                                width: 60,
                                                height: 30
                                            }}
                                        /> :
                                            <Image
                                                source={icons.tabHomeNoColor}
                                                resizeMode="contain"
                                                style={{
                                                    width: 60,
                                                    height: 30
                                                }}
                                            />}
                                    </View>
                                    <Text style={{ color: tintColor, ...FONTS.lexendregular, fontSize: RFValue(10) }}>Home</Text>
                                </View>
                            );
                        case "Tickets":
                            return (
                                <View style={{ alignItems: "center",bottom:"6%" }}>
                                    <View>{focused? <Image source={icons.tabTopSlide}
                                        resizeMode="contain"
                                        style={{width:30,height:20}}
                                    />: <View style={{width:30,height:20}}/>}</View>
                                    <View>
                                        {focused ? <Image
                                            source={icons.tabTicketColor}
                                            resizeMode="contain"
                                            style={{
                                                width: 60,
                                                height: 30,
                                            }}
                                        /> :
                                            <Image
                                                source={icons.tabTicketNoColor}
                                                resizeMode="contain"
                                                style={{
                                                    width: 60,
                                                    height: 30
                                                }}
                                            />}
                                    </View>
                                    <Text style={{ color: tintColor, ...FONTS.lexendregular, fontSize: RFValue(10) }}>Tickets</Text>
                                </View>
                            );
                        case "Cart":
                            return (
                                <View style={{ alignItems: "center",bottom:"6%" }}>
                                    <View>{focused? <Image source={icons.tabTopSlide}
                                        resizeMode="contain"
                                        style={{width:30,height:20}}
                                    />: <View style={{width:30,height:20}}/>}</View>
                                    <View>
                                        {focused ? <Image
                                            source={icons.tabTrolleyColor}
                                            resizeMode="contain"
                                            style={{
                                                width: 60,
                                                height: 30
                                            }}
                                        /> :
                                            <Image
                                                source={icons.tabTrolleyNoColor}
                                                resizeMode="contain"
                                                style={{
                                                    width: 60,
                                                    height: 30
                                                }}
                                            />}
                                    </View>
                                    <Text style={{ color: tintColor, ...FONTS.lexendregular, fontSize: RFValue(10) }}>Cart</Text>
                                </View>

                            );

                    }
                }
            })}
        >
            <Tab.Screen
                name="Notification"
                component={NotificationList}
                options={{ headerShown: false }}
            // title: "Dashboard",
            // headerStyle: {
            //     backgroundColor: COLORS.primary,

            // },
            // headerTitleStyle:{
            //     color:COLORS.white,
            //     marginLeft:"25%",
            //     fontSize:RFValue(16,580)

            // }
            // headerLeft: null,
            // headerRight: () => (
            //     <TouchableOpacity
            //         style={{ marginRight: SIZES.padding }}
            //         onPress={() => console.log("Pressed")}
            //     >

            //     </TouchableOpacity>
            // ),
            //}}
            />
            <Tab.Screen
                name="Draws"
                component={Draws}
                options={{
                    headerShown: false
                    // title: "Draws",
                    // headerLeft: () => (
                    //     <TouchableOpacity style={{ marginLeft: "20%",borderWidth:0 }} onPress={() => navigation.navigate('Home',{screen:'Search'})}>
                    //         <MCIcon name="keyboard-backspace" size={RFValue(25)} color={COLORS.white} />
                    //     </TouchableOpacity>
                    // ),
                    // headerStyle: {
                    //     backgroundColor: COLORS.primary,
                    //     // borderBottomStartRadius: 30, 
                    //     // borderBottomEndRadius: 30
                    // },
                    // headerTitleStyle: {
                    //     color: COLORS.white,
                    //     ...FONTS.lexendregular,
                    //     right:"115%",
                    //     fontSize: RFValue(16, 580)
                    // }
                }}
            />
            <Tab.Screen
                name="DataPage"
                component={DataPage}
                options={{ headerShown: false }}
            // {{title: "Search Your Courses",
            // headerStyle: {
            //     backgroundColor: COLORS.primary,
            // },
            // headerTitleStyle:{
            //     color:COLORS.white,
            //     marginLeft:"15%",
            //     marginTop:"5%",
            //     fontSize:RFValue(14,580)
            // }}}
            />
            <Tab.Screen
                name="Tickets"
                component={Tickets}
                options={{
                    headerShown: false
                    // title: "Tickets",
                    // headerLeft: () => (
                    //     <TouchableOpacity style={{ marginLeft: "20%",borderWidth:0 }} onPress={() => navigation.navigate('Home',{screen:'Search'})}>
                    //         <MCIcon name="keyboard-backspace" size={RFValue(25)} color={COLORS.white} />
                    //     </TouchableOpacity>
                    // ),
                    // headerStyle: {
                    //     backgroundColor: COLORS.primary,
                    //     // borderBottomStartRadius: 30, 
                    //     // borderBottomEndRadius: 30
                    // },
                    // headerTitleStyle: {
                    //     color: COLORS.white,
                    //     ...FONTS.lexendregular,
                    //     right:"115%",
                    //     fontSize: RFValue(16, 580)
                    // }
                }}
            />

            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false
                    // title: <Text>MyCourses <Text style={{fontSize:8}}>and</Text> WishLists</Text>,
                    // headerLeft: () => (
                    //     <TouchableOpacity style={{ marginLeft: "20%",borderWidth:0}} onPress={() => navigation.navigate('Home',{screen:'Search'})}>
                    //         <MCIcon name="keyboard-backspace" size={RFValue(25)} color={COLORS.white} />
                    //     </TouchableOpacity>
                    // ),
                    // headerStyle: {
                    //     backgroundColor: COLORS.primary,
                    //     // borderBottomStartRadius: 30, 
                    //     // borderBottomEndRadius: 30
                    // },
                    // headerTitleStyle: {
                    //     color: COLORS.white,
                    //     // marginRight: "25%",
                    //     right:"30%",
                    //     ...FONTS.robotoregular,
                    //     borderWidth:0,
                    //     fontSize: RFValue(16, 580)
                    // }
                }}

            />


        </Tab.Navigator>
    );
};

export default Tabs;
