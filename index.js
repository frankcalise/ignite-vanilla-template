import { AppRegistry, Text, View } from "react-native"
import { name as appName } from "./app.json"

import App from "./app/app.tsx"
import React from "react"
// import RNBootSplash from 'react-native-bootsplash';

function IgniteApp() {
  // return <App hideSplashScreen={RNBootSplash.hide} />;
  return <App />
  return (
    <View>
      <Text>Ignite MacOS</Text>
    </View>
  )
}

AppRegistry.registerComponent(appName, () => IgniteApp)
