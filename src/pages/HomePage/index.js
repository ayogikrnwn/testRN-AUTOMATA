import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { ICFilter } from '../../assets/icons';
import { Card, Input } from '../../components/molecules';


const HomePage = ({navigation}) => {
    return (
        <View style={styles.container}>

         <Input />
         <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.content}>
         <Card onPress={()=> navigation.navigate('DetailPage')}/>
         <Card />
         </View>
         </ScrollView>
         
       
          
            
        </View>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingVertical: 25
    },
    content: {
        marginTop: 25
    }
})
