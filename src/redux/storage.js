import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('orders-manager', jsonValue)
  } catch (e) {
    // saving error
  }
}

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('orders-manager')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}