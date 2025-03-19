import {Text, Animated, StyleSheet, View, Image} from 'react-native';
import {useEffect, useRef} from "react";
import {COLORS} from "@/constants/ColorPalette";
import appJson from '../../../app.json'

export default function SplashScreen({onFinished}:any) {

    const logo = require('../../../assets/images/logo/logo.png');
    const progress = useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        Animated.timing(progress, {
            toValue:100,
            duration:3000,
            useNativeDriver: false,
        }).start(()=>{
            onFinished();
        })
    },[onFinished]);
    return(

        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image style={styles.logo} source={logo}
                       resizeMode={'contain'}
                />
            </View>
            <Text>Shop Smarter & Faster...</Text>

            <View style={styles.progressContainer}>
                <Animated.View
                    style={[styles.progressbar,
                        {width:progress.interpolate({inputRange:[0, 100], outputRange:['0%', '100%']})}
                ]} />
            </View>
            <View style={styles.bottom}>
                <Text>Version : {appJson.expo.version}</Text>
                <Text>Developer Stack</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoWrapper:{
        borderRadius:5
    },
    logo:{
        height: 60,
        width:60,
        borderRadius:30
    },
    progressContainer:{
        width:'80%',
        height:5,
        backgroundColor:COLORS.darkGray,
        overflow: 'hidden',
        borderRadius:5,
        marginTop:10
    },
    progressbar:{
        backgroundColor:COLORS.orange,
        borderRadius:5,
        height:'100%'
    },
    bottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        position:'absolute',
        bottom:0,
        width:'100%',
        height:40,
        padding:10
    }
})