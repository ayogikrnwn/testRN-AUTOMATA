import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { ICBath, ICBed, ICLine, ICLuas } from '../../../assets/icons';
import { Gap } from '../../atoms';

const CardDetail = ({onPress}) => {
    return (
     
        <View style={styles.container} onPress={onPress}>
           <ScrollView>
           <View style={styles.content}>
             <Gap height={38} />
             <Text style={styles.title}>Ruma Benda</Text>
             <Text style={styles.desc}>Jl. Sailin, Rempoa, Jakarta Selatan, DKI Jakarta</Text>
             <Gap height={32} />
             <Image source={ICLine} />  
             <Gap height={17} />
             <Text style={styles.title}>Price</Text>
             <Text style={styles.title}>IDR 3,149,480,000</Text>
             <Gap height={14} />
             <View style={styles.specification}>
                 <Image source={ICLuas} />
                 <Text style={styles.descspec}>92m2</Text>
                 <Image source={ICBed} />
                 <Text style={styles.descspec}>92m2</Text>
                 <Image source={ICBath} />
                 <Text style={styles.descspec}>92m2</Text>
             </View>
             <Gap height={40} />
             <Image source={ICLine} />
             <Gap height={17} />
             <Text style={styles.title}>Details</Text>
             <Gap height={22} />
             <Text style={styles.descspec}>Type</Text>
             <Text style={styles.descspec}>Buy</Text>
             <Gap height={18} />
             <Text style={styles.descspec}>Luas Bangunan</Text>
             <Text style={styles.descspec}>125 m2</Text>
             <Gap height={18} />
             <Text style={styles.descspec}>Luas Tanah</Text>
             <Text style={styles.descspec}>72 m2</Text>
             <Gap height={18} />
         </View>
   
           </ScrollView>
          
            
         
     </View>
   
 )
}

export default CardDetail;

const styles = StyleSheet.create({
 container: {
  height: 400,
  borderRadius: 20
 
   
 },
 content: {
     paddingLeft:22,
   
    
    
    
    paddingRight: 20,
     backgroundColor: 'white',
     marginTop: -20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    
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
