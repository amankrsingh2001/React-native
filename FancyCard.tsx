import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style= {styles.headingText}>Trending Places</Text>
      <View style= {[styles.card,styles.cardElevated]}>
    <Image
    source={{
        uri:'data:image/png;base64,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'
    }}
    style = {styles.cardImage}
    />
    <View style = {styles.cardBody}></View>
    <Text style = {styles.cardTitle}>Google Baba</Text>
    <Text style = {styles.cardLable}>By Sir, Googly</Text>
    <Text style = {styles.cardDescription}>An Internet that oversmarted all the human begins</Text>
    <Text style = {styles.cardFooter}>Internet</Text>
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
        marginHorizontal:16,
    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        color:'#32a852',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:26
    },
    
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'#32a852',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4,
    },
    cardLable:{
        color:'#000000',
        fontSize:14,
        marginBottom:6
    },
    cardDescription:{
        color:'#fff',
        backgroundColor:'#32a852',
       
        fontSize:14,
        marginTop:6,
        marginBottom:12,
        marginLeft:4,
        marginRight:8,

        flexShrink:1
    },
    cardFooter:{
        color:'#000000'
    },
})