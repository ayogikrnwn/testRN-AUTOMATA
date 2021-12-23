import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AppLogo, FootSplash } from '../../assets/icons';

const SplashScreen = ({navigation}) => {
    useEffect(() => {

        setTimeout(() => {
        
            navigation.replace('HomePage');
  
        }, 3000);
     
  
      
    }, [navigation]);
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                <Image source={AppLogo} />
                </View>
            
            
           
            </View>
            <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
            <Image source={FootSplash} />
            </View>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3985AD'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        
        flex: 1

    }
})
