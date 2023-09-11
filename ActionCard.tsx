import { StyleSheet, Text, View ,Linking, Image,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style = {styles.headingText}>BlogCard</Text>
      <View style={[styles.card,styles.elevatedCard]}>
     <View style = {styles.headercontainer}>
            <Text style = {styles.headertext}>
                what's new in java script
            </Text>
    </View>
            <Image
            source ={{
                uri:'https://images.nationalgeographic.org/image/upload/v1638882947/EducationHub/photos/tourists-at-victoria-falls.jpg',
            }}
            style = {styles.cardImage}
            />
            <View style={styles.bodycontainer}>
                <Text numberOfLines={4}>
                Just liek every year,javascript brings in new features.This year javascript is bringing 4 new features,which are almost in porduction roll out.I won't be wasting much more time and directly jump to code with easy to understand examples.
                </Text>
            </View>
            <View style={styles.FooterContainer}>
                <TouchableOpacity onPress={() =>{openWebsite('https://www.youtube.com/watch?v=eL5qYJ7y68k&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=16&ab_channel=HiteshChoudhary')}}>
                    <Text style={styles.readMore}>Read More</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity onPress = {() =>{openWebsite('https://www.google.com/')}}>

                <Text style={styles.socialLink}>Social Link</Text>
                </TouchableOpacity>
            </View>
             
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,

    },
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:15

    },

    elevatedCard:{
        backgroundColor:'#E07C24',
        elevation:3,
        shadowoffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
    headercontainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headertext:{
        color:'#000',
        fontSize:16,
        fontWeight:'600',

    },
    cardImage:{
        height:100,

    },
    bodycontainer:{
        padding:10,

    },
    FooterContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
      

    
    },
    readMore:{
        fontSize:16,
        color:'#000',
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:10,
    },

    socialLink:{
        fontSize:16,
        color:'#000',
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:10,

    }
})