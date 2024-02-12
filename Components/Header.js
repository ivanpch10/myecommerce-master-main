import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import React from 'react'

const Header = ({title = "Categories (Header)"}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green3,
        height: 80,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
        },
        text: {
            fontSize:20,
            textAlign: "center",
            color: "#fff"
        }
})

export default Header