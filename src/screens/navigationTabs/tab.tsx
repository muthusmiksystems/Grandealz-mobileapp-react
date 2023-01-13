import React from "react";
import { Image, Text, Button, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import DataPage from "../Home/dataPage";
import Draws from "../Tickets/tickets";
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
        height: 90,
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
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.element: COLORS.gray;

                    switch (route.name) {
                        case "Notification":
                            return (
                                <>
                                <BrandIcons name="notifications-outline" size={30} color={tintColor} />
                                <Text>Notification</Text>
                                </>
                            );
                        case "Draws":
                            return (
                                <>
                                <SLIcon name="drawer" size={30} color={tintColor} />
                                <Text>Draws</Text>
                                </>
                            );
                        case "DataPage":
                            return (
                              <>
                                <EntypoIcons name="home" size={30} color={tintColor} />
                                <Text>Home</Text>
                            </>
                            );
                        case "Tickets":
                            return (
                                <>
                                <MCIcon name="ticket-percent-outline" size={30} color={tintColor} />
                                <Text>Tickets</Text>
                                </>
                            );
                            case "Cart":
                                return (
                                    <>
                                    <BrandIcons name="cart-outline" size={30} color={tintColor} />
                                    <Text>Cart</Text>
                                    </>

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
                    title: "Draws",
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: "20%",borderWidth:0 }} onPress={() => navigation.navigate('Home',{screen:'Search'})}>
                            <MCIcon name="keyboard-backspace" size={RFValue(25)} color={COLORS.white} />
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                        // borderBottomStartRadius: 30, 
                        // borderBottomEndRadius: 30
                    },
                    headerTitleStyle: {
                        color: COLORS.white,
                        ...FONTS.lexendregular,
                        right:"115%",
                        fontSize: RFValue(16, 580)
                    }
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
                    title: "Tickets",
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: "20%",borderWidth:0 }} onPress={() => navigation.navigate('Home',{screen:'Search'})}>
                            <MCIcon name="keyboard-backspace" size={RFValue(25)} color={COLORS.white} />
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                        // borderBottomStartRadius: 30, 
                        // borderBottomEndRadius: 30
                    },
                    headerTitleStyle: {
                        color: COLORS.white,
                        ...FONTS.robotoregular,
                        right:"115%",
                        fontSize: RFValue(16, 580)
                    }
                }}
            />
           
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: <Text>MyCourses <Text style={{fontSize:8}}>and</Text> WishLists</Text>,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: "20%",borderWidth:0}} onPress={() => navigation.navigate('Home',{screen:'Search'})}>
                            <MCIcon name="keyboard-backspace" size={RFValue(25)} color={COLORS.white} />
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                        // borderBottomStartRadius: 30, 
                        // borderBottomEndRadius: 30
                    },
                    headerTitleStyle: {
                        color: COLORS.white,
                        // marginRight: "25%",
                        right:"30%",
                        ...FONTS.robotoregular,
                        borderWidth:0,
                        fontSize: RFValue(16, 580)
                    }
                }}

            />
          

        </Tab.Navigator>
    );
};

export default Tabs;
