// import * as RNLocalize from "react-native-localize"
// import i18n from "i18n-js"
// import { I18nManager } from "react-native"
// import memoize from "memoize-one"

// // if English isn't your default language, move Translations to the appropriate language file.
// import en, { Translations } from "./en"
// import ar from "./ar"
// import ko from "./ko"

// // i18n.fallbacks = true
// /**
//  * we need always include "*-US" for some valid language codes because when you change the system language,
//  * the language code is the suffixed with "-US". i.e. if a device is set to English ("en"),
//  * if you change to another language and then return to English language code is now "en-US".
//  */
// const translations = { ar, en, "en-US": en, ko }
// i18n.translations = translations

// const translate = memoize(
//   (key, config) => i18n.t(key, config),
//   (key, config) => (config ? key + JSON.stringify(config) : key),
// )

// const setI18nConfig = () => {
//   const fallback = { languageTag: "en" }
//   const { languageTag } =
//     RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback
//   translate.clear()
//   // i18n.translations = { [languageTag]: translationGetters[languageTag]() }
//   i18n.locale = languageTag

//   // handle RTL changes
//   const isRTL = RNLocalize.getLocales().find((x) => x.languageTag === languageTag)?.isRTL || false
//   I18nManager.allowRTL(isRTL)
//   I18nManager.forceRTL(isRTL)
// }

// /**
//  * Builds up valid keypaths for translations.
//  */
// export type TxKeyPath = RecursiveKeyOf<Translations>

// // via: https://stackoverflow.com/a/65333050
// type RecursiveKeyOf<TObj extends object> = {
//   [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>
// }[keyof TObj & (string | number)]

// type RecursiveKeyOfInner<TObj extends object> = {
//   [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
//     TObj[TKey],
//     `['${TKey}']` | `.${TKey}`
//   >
// }[keyof TObj & (string | number)]

// type RecursiveKeyOfHandleValue<TValue, Text extends string> = TValue extends any[]
//   ? Text
//   : TValue extends object
//   ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
//   : Text
