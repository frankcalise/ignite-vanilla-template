import { AppRegistry } from "react-native"
import { name as appName } from "./app.json"
import App from "./app/app.tsx"
import "./index.css"

if (module.hot) {
  module.hot.accept()
}

AppRegistry.registerComponent(appName, () => App)
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById("app-root"),
})
