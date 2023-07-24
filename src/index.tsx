import { StatusBar } from "expo-status-bar"
import React, { useEffect } from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import { userService } from "./core/features/user/user.factory"

export default function App() {
  const service = userService()
  useEffect(() => {
    	service.findOne('asbaba').then(console.log)
  }, [])
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/adaptive-icon.png")}
        style={styles.logo}
      />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    margin: 10,
  },
})
