import { AppRegistry } from "react-native"
import { name as appName } from "./app.json"
import App from "./app/app.tsx"

require("./assets/fonts/SpaceGrotesk-Bold.ttf")
require("./assets/fonts/SpaceGrotesk-Light.ttf")
require("./assets/fonts/SpaceGrotesk-Medium.ttf")
require("./assets/fonts/SpaceGrotesk-Regular.ttf")
require("./assets/fonts/SpaceGrotesk-SemiBold.ttf")

if (module.hot) {
  module.hot.accept()
}

AppRegistry.registerComponent(appName, () => App)
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById("app-root"),
})
