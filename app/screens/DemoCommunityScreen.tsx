import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { ListItem, Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { spacing } from "../theme"
import { openLinkInBrowser } from "../utils/openLinkInBrowser"

const chainReactLogo = require("../../assets/images/cr-logo.png")
const reactNativeLiveLogo = require("../../assets/images/rnl-logo.png")
const reactNativeRadioLogo = require("../../assets/images/rnr-logo.png")
const reactNativeNewsletterLogo = require("../../assets/images/rnn-logo.png")

export const DemoCommunityScreen: FC<DemoTabScreenProps<"DemoCommunity">> =
  function DemoCommunityScreen(_props) {
    return (
      <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
        <Text preset="heading" text="Connect with the community" style={$title} />
        <Text
          text="Plug in to Infinite Red's community of React Native engineers and level up your app development with us!"
          style={$tagline}
        />

        <Text preset="subheading" text="Join us on Slack" />
        <Text
          text="Wish there was a place to connect with React Native engineers around the world? Join the conversation in the Infinite Red Community Slack! Our growing community is a safe space to ask questions, learn from others, and grow your network."
          style={$description}
        />
        <ListItem
          text="Join the Slack Community"
          leftIcon="slack"
          rightIcon="caretRight"
          onPress={() => openLinkInBrowser("https://community.infinite.red/")}
        />
        <Text preset="subheading" text="Make Ignite even better" style={$sectionTitle} />
        <Text
          text="Have an idea to make Ignite even better? We're happy to hear that! We're always looking for others who want to help us build the best React Native tooling out there. Join us over on GitHub to join us in building the future of Ignite."
          style={$description}
        />
        <ListItem
          text="Contribute to Ignite"
          leftIcon="github"
          rightIcon="caretRight"
          onPress={() => openLinkInBrowser("https://github.com/infinitered/ignite")}
        />

        <Text preset="subheading" text="The latest in React Native" style={$sectionTitle} />
        <Text
          text="We're here to keep you current on all React Native has to offer."
          style={$description}
        />
        <ListItem
          text="React Native Radio"
          bottomSeparator
          rightIcon="caretRight"
          LeftComponent={
            <View style={$logoContainer}>
              <Image source={reactNativeRadioLogo} style={$logo} />
            </View>
          }
          onPress={() => openLinkInBrowser("https://reactnativeradio.com/")}
        />
        <ListItem
          text="React Native Newsletter"
          bottomSeparator
          rightIcon="caretRight"
          LeftComponent={
            <View style={$logoContainer}>
              <Image source={reactNativeNewsletterLogo} style={$logo} />
            </View>
          }
          onPress={() => openLinkInBrowser("https://reactnativenewsletter.com/")}
        />
        <ListItem
          text="React Native Live"
          bottomSeparator
          rightIcon="caretRight"
          LeftComponent={
            <View style={$logoContainer}>
              <Image source={reactNativeLiveLogo} style={$logo} />
            </View>
          }
          onPress={() => openLinkInBrowser("https://rn.live/")}
        />
        <ListItem
          text="Chain React Conference"
          rightIcon="caretRight"
          LeftComponent={
            <View style={$logoContainer}>
              <Image source={chainReactLogo} style={$logo} />
            </View>
          }
          onPress={() => openLinkInBrowser("https://cr.infinite.red/")}
        />
        <Text
          preset="subheading"
          text="Hire Infinite Red for your next project"
          style={$sectionTitle}
        />
        <Text
          text="Whether it's running a full project or getting teams up to speed with our hands-on training, Infinite Red can help with just about any React Native project."
          style={$description}
        />
        <ListItem
          text="Send us a message"
          leftIcon="clap"
          rightIcon="caretRight"
          onPress={() => openLinkInBrowser("https://infinite.red/contact")}
        />
      </Screen>
    )
  }

const $container: ViewStyle = {
  paddingTop: spacing.large + spacing.extraLarge,
  paddingHorizontal: spacing.large,
}

const $title: TextStyle = {
  marginBottom: spacing.small,
}

const $tagline: TextStyle = {
  marginBottom: spacing.huge,
}

const $description: TextStyle = {
  marginBottom: spacing.large,
}

const $sectionTitle: TextStyle = {
  marginTop: spacing.huge,
}

const $logoContainer: ViewStyle = {
  marginEnd: spacing.medium,
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center",
}

const $logo: ImageStyle = {
  height: 38,
  width: 38,
}

// @demo remove-file
