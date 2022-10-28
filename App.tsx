import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import Header from "./src/components/Header";
import { Counter } from "./src/features/counter/Counter";

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
