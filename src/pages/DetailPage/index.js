import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RumaBenda } from '../../assets/illustration'
import { Card, Header } from '../../components'

const DetailPage = () => {
    return (
        <View style={{flex: 1}}>
            <Header />
          <View>
              <ImageBackground source={RumaBenda}  resizeMode="cover" style={{height:317}}>
              
                <View style={styles.content}>
                  <Card type="card-detail" />
                  </View>
               
                 
                  
              
              </ImageBackground>
          </View>
        </View>
    )
}

export default DetailPage

const styles = StyleSheet.create({
    content: {
        paddingTop: 245,
        
    }
})
