import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICBath, ICBed, ICLuas } from '../../../assets/icons';
import { RumaRompoa } from '../../../assets/illustration';
import CardDetail from './CardDetail';

const Card = ({onPress, type}) => {
    if (type == 'card-detail') {
        return <CardDetail />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
           <Image source={RumaRompoa} style={{width:300, height:190, paddingTop: -10, borderRadius: 20}} />
            <View style={styles.content}>
                <Text style={styles.title}>Ruma Rempoa</Text>
                <Text style={styles.desc}>Jl. Sailin, Rempoa, Jakarta Selatan, DKI Jakarta</Text>
                <View style={styles.specification}>
                    <Image source={ICLuas} />
                    <Text style={styles.descspec}>92m2</Text>
                    <Image source={ICBed} />
                    <Text style={styles.descspec}>92m2</Text>
                    <Image source={ICBath} />
                    <Text style={styles.descspec}>92m2</Text>
                </View>
            </View>
      
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        height: 378,
        width: 300,
      
    },
    content: {
        paddingLeft:22,
       marginLeft: 3,
       marginRight: 10,
       
        height:190,
        width: 295,
       paddingRight: 20,
        backgroundColor: 'white',
        marginTop: -20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 12,
    },
    specification: {
        flexDirection: 'row',
        marginTop: 35,
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize:25,
        color: '#200E32'
    },
    desc: {
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        color: '#200E32',
    
    },
    descspec: {
        fontFamily: 'Poppins-Medium',
        fontSize: 17,
        color: '#200E32',
    
    }
})
