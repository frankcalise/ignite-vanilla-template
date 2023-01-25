import { format, parseISO } from "date-fns"

type Options = Parameters<typeof format>[2]

// const getLocale = (): Locale => {
//   const locale = I18n.currentLocale().split("-")[0]
//   return locale === "ar" ? ar : locale === "ko" ? ko : en
// }

export const formatDate = (date: string, dateFormat?: string, options?: Options) => {
  const locale = "en"
  const dateOptions = {
    ...options,
    locale,
  }
  return format(parseISO(date), dateFormat ?? "MMM dd, yyyy", dateOptions)
}
