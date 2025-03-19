import {createStackNavigator} from '@react-navigation/stack';
import HomeBottomTabNavigation from "@/app/navigation/tab-navigation/HomeBottomTabNavigation";
import SettingsScreen from "@/components/ui/screen/other/SettingsScreen";
import CustomerCareScreen from "@/components/ui/screen/other/CustomerCareScreen";
import DailyDealScreen from "@/components/ui/screen/other/DailyDealScreen";
import LatestProductsScreen from "@/components/ui/screen/other/LatestProductsScreen";
import MyOrderScreen from "@/components/ui/screen/other/MyOrderScreen";
import NotificationsScreen from "@/components/ui/screen/other/NotificationsScreen";
import ProfileScreen from "@/components/ui/screen/other/ProfileScreen";
import VouchersScreen from "@/components/ui/screen/other/VouchersScreen";
import LoginScreen from "@/components/ui/screen/security/LoginScreen";
import SighUpScreen from "@/components/ui/screen/security/SighUpScreen";
import RegisteredEmailVerifyScreen from "@/components/ui/screen/security/RegisteredEmailVerifyScreen";
import OrderTopTabNavigation from "@/app/navigation/tab-navigation/OrderTopTabNavigation";
const Stack = createStackNavigator();

const config = {
    config: {
        stiffness: 1000,
        damping: 1000,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};
export default function StackNavigator(){

    return (
        //@ts-ignore
        <Stack.Navigator options={{
            transitionSpec:{
                open:config,
                close:config
            }
        }}>
            <Stack.Screen name={'Process'} options={{headerLeft:()=>null, headerShown:false}} component={HomeBottomTabNavigation}/>
            <Stack.Screen name={'Settings'} options={{title:"Settings"}} component={SettingsScreen}/>
            <Stack.Screen name={'CustomerCare'} options={{title:"Customer Care"}} component={CustomerCareScreen}/>
            <Stack.Screen name={'DailyDeals'} options={{title:"Daily Deals"}} component={DailyDealScreen}/>
            <Stack.Screen name={'LatestProducts'} options={{title:"Latest Products"}} component={LatestProductsScreen}/>
            <Stack.Screen name={'MyOrders'} options={{title:"My Orders"}} component={OrderTopTabNavigation}/>
            <Stack.Screen name={'Notifications'} options={{title:"Notifications"}} component={NotificationsScreen}/>
            <Stack.Screen name={'Profile'} options={{title:"Profile"}} component={ProfileScreen}/>
            <Stack.Screen name={'Vouchers'} options={{title:"Vouchers"}} component={VouchersScreen}/>

            <Stack.Screen name={'Login'} options={{title:"Login Here"}} component={LoginScreen}/>
            <Stack.Screen name={'SignUp'} options={{title:"Sign Up here"}} component={SighUpScreen}/>
            <Stack.Screen name={'RegisteredEmailVerify'} options={{title:"Verify your Email"}} component={RegisteredEmailVerifyScreen}/>

        </Stack.Navigator>
    )
}