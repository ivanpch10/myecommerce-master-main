import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from "../Data/categories.json"
import CategoryItem from './CategoryItem'

const Categories = () => {

  return (
    <View style = {styles.container}>
      <FlatList
      styles={styles.container}
      renderItem={({item}) => <CategoryItem
      setCategorySelected={setCategorySelected}
      category={item}
      />}
      data = {categories}
      keyExtractor={category => category}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    }
})