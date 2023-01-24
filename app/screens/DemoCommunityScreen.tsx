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
        <Text preset="heading" text="demoCommunityScreen.title" style={$title} />
        <Text text="demoCommunityScreen.tagLine" style={$tagline} />

        <Text preset="subheading" text="demoCommunityScreen.joinUsOnSlackTitle" />
        <Text text="demoCommunityScreen.joinUsOnSlack" style={$description} />
        <ListItem
          text="demoCommunityScreen.joinSlackLink"
          leftIcon="slack"
          rightIcon="caretRight"
          onPress={() => openLinkInBrowser("https://community.infinite.red/")}
        />
        <Text
          preset="subheading"
          text="demoCommunityScreen.makeIgniteEvenBetterTitle"
          style={$sectionTitle}
        />
        <Text text="demoCommunityScreen.makeIgniteEvenBetter" style={$description} />
        <ListItem
          text="demoCommunityScreen.contributeToIgniteLink"
          leftIcon="github"
          rightIcon="caretRight"
          onPress={() => openLinkInBrowser("https://github.com/infinitered/ignite")}
        />

        <Text
          preset="subheading"
          text="demoCommunityScreen.theLatestInReactNativeTitle"
          style={$sectionTitle}
        />
        <Text text="demoCommunityScreen.theLatestInReactNative" style={$description} />
        <ListItem
          text="demoCommunityScreen.reactNativeRadioLink"
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
          text="demoCommunityScreen.reactNativeNewsletterLink"
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
          text="demoCommunityScreen.reactNativeLiveLink"
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
          text="demoCommunityScreen.chainReactConferenceLink"
          rightIcon="caretRight"
          LeftComponent={
            <View style={$logoContainer}>
              <Image source={chainReactLogo} style={$logo} />
            </View>
          }
          onPress={() => openLinkInBrowser("https://cr.infinite.red/")}
        />
        <Text preset="subheading" text="demoCommunityScreen.hireUsTitle" style={$sectionTitle} />
        <Text text="demoCommunityScreen.hireUs" style={$description} />
        <ListItem
          text="demoCommunityScreen.hireUsLink"
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
