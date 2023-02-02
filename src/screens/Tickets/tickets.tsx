import React,{useEffect,useState} from "react";
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { verticalScale,horizontalScale } from "../../constants/metrices";
import { shoppingCart } from "../../constants/icons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import TicketDetails from "../../component/ticketDetails";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "../../constants";
import { activeTicketGet } from "../../services/ticket";

const Tickets = () => {

    const navigation=useNavigation();

    
        const [Ticketlistdata, setTicketlistdata] = useState<any>();
        //drawGetCall
        useEffect(() => {
          //console.log("data..............");
          const soon = async () => {
            let TicketList= await activeTicketGet()
            setTicketlistdata(TicketList)
            //let result = closingData.data;
            // var a: any[] = [];
            // result.map((e: { total_no_of_sold_out_tickets: number; total_no_of_tickets: number; }) => {
            //   var data = (e.total_no_of_sold_out_tickets * 100 / e.total_no_of_tickets);
            //   console.log("samuvel sham.......",data);
            //   if (data >=10 && data < 100) {
            //     a.push(e)
            //   }
            //   console.log(a, "data to maping")
            //   setClose(a)
            // })
          }
          soon();
        }, [])

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={styles.subdivOne}>
                {/* <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginLeft:horizontalScale(14)}}>
                    <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
                </TouchableOpacity> */}
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(24),textAlign:"center" }}>Active Tickets</Text>
            </View>
            <View style={styles.subdivTwo}>
                <TicketDetails Ticketdata={Ticketlistdata}/>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    subdivOne: {
        width: horizontalScale(375),
        height: verticalScale(80),
        backgroundColor: "#0a0127",
        // alignItems: "center",
        justifyContent: 'center',
        // flexDirection: "row"
    },
    subdivTwo: {
        // height: verticalScale(748),
        backgroundColor:COLORS.lightGray    
    }

})
export default Tickets;