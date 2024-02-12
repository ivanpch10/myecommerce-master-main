import { StyleSheet, Text, View,Button,TextInput, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice'

const Counter = () => {
    const count = useSelector(state=> state.counterReducer.value)
    const dispatch = useDispatch()

const confirmAdd = () => {
  dispatch(incrementByAmount(inputToAdd))
}
  return (
        <View style={styles.container}>
          <View style={styles.buttonsContainer}>
            <Pressable style={styles.button}
              onPress={()=> dispatch(decrement())}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.span}>{count}</Text>
            <Pressable style={styles.button}
              onPress={()=> dispatch(increment())}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
          <View style={styles.buttonsContainer}>
            <TextInput 
                placeholder='Cantidad a aumentar'
                value={inputToAdd}
                onChangeText={ text => setInputToAdd(Number(text))}
                style={styles.spanInput}
                />
            <Pressable style={styles.button}
                        onPress={confirmAdd}>
              <Text style={buttonText}>Agregar</Text>
            </Pressable>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Resetear</Text>
          </Pressable>
          </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        margin:15
      },
      inputContainer:{
        gap:10
      },
      input:{
        borderWidth:2
      }
})