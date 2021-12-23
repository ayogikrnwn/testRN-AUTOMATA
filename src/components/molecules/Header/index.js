import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ICBack } from '../../../assets/icons';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={ICBack} style={{width: 6, height: 12}} />
            <Text style={styles.text}>Ruma Benda</Text>
            </View>
           
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 70,

    },
    content: {
        paddingLeft: 27,
        paddingVertical: 30,
        flexDirection: 'row'
    },
    text: {
        fontFamily: 'Poppins-SemiBold',
        color: '#200E32',
        fontSize: 18,
        marginLeft:31,
        marginTop: -8
    }
})
