import AsyncStorage from "@react-native-community/async-storage";

export const saveFav = async id => {
  try {
    return await AsyncStorage.setItem(
      `${id}`,
      JSON.stringify({ id, favedOn: new Date() })
    );
  } catch (e) {
    return false;
  }
};

export const queryFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return await AsyncStorage.multiGet(keys);
  } catch (e) {
    return false;
  }
};

export const removeFav = async id => {
  try {
    await AsyncStorage.removeItem(`${id}`);
  } catch (e) {
    return false;
  }
};
