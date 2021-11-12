import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { MainForm } from './src/view/components/Form'
import store from './src/redux/store'
import { Provider } from 'react-redux'

export default function App() {
  
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainForm/>
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(245, 245, 245)',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
})
