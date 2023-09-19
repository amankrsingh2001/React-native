import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [display,setDisplay]=useState(false)
  const resetFormData =()=>{
    setDisplay(false)
    setName('')
    setEmail("")
    setPassword("")
  }
  return (
    <View>
      <Text style={{fontSize:30}}>simple form in React Native</Text>
      <TextInput
      style={styles.textInput}
      placeholder='Enter User name'
      onChangeText = {(text)=>setName(text)}
      value={name}
      />
      <TextInput
      style={styles.textInput}
      placeholder='Enter User email'
      onChangeText = {(text)=>setEmail(text)}
      value={email}
      />
      <TextInput
      style={styles.textInput}
      placeholder='Enter User password'
      onChangeText = {(text)=>setPassword(text)}
      secureTextEntry={true}
      value={password}
      />
      <View style={{marginBottom:10}}>
     <Button title = 'print Details'
     onPress={()=>setDisplay(true)}/>
     
     </View>
     <Button title = 'clear Details' onPress={resetFormData}/>
     <View>
      {
        display ?
        <View>
          <Text style={{fontSize:20}}>User name is :{name}</Text>
          <Text style={{fontSize:20}}>User password is :{password}</Text>
          <Text style={{fontSize:20}}>User email is :{email}</Text>
        </View>:null
      }
     </View>
      
     
    </View>
  )
}

const styles = StyleSheet.create({
  textInput:{
    fontSize:18,
    color:'blue',
    borderWidth:2,
    borderColor:'blue',
    margin:10


  }
})
