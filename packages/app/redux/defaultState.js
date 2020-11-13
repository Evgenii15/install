import {
    GENERIC_TITLE,
    GENERIC_SUBTITLE,
    GENERIC_LOGO_PATH,
    GENERIC_CURRENCY_UNIT,
    GENERIC_COPYRIGHT_TEXT,
    GENERIC_ABOUT_TEXT,
    GENERIC_STRIPE_PUBLISHABLE_KEY_TEXT,
    GENERIC_CURRENCY_ISO_CODE,
    GENERIC_PAYMENT_METHOD,
    GENERIC_THEME_COLOR_PRIMARY,
    GENERIC_THEME_COLOR_SECONDARY,
    GENERIC_CODE_INJECTION_HEAD,
} from "../config/strings.js";

export default {
    auth: {
      guest: true,
      token: null,
      userid: null,
      checked: false,
    },
    siteinfo: {
      title: GENERIC_TITLE,
      subtitle: GENERIC_SUBTITLE,
      logopath: GENERIC_LOGO_PATH,
      currencyUnit: GENERIC_CURRENCY_UNIT,
      currencyISOCode: GENERIC_CURRENCY_ISO_CODE,
      copyrightText: GENERIC_COPYRIGHT_TEXT,
      about: GENERIC_ABOUT_TEXT,
      paymentMethod: GENERIC_PAYMENT_METHOD,
      stripePublishableKey: GENERIC_STRIPE_PUBLISHABLE_KEY_TEXT,
      themePrimaryColor: GENERIC_THEME_COLOR_PRIMARY,
      themeSecondaryColor: GENERIC_THEME_COLOR_SECONDARY,
      codeInjectionHead: GENERIC_CODE_INJECTION_HEAD,
    },
    networkAction: false,
    profile: {
      isCreator: false,
      name: null,
      id: null,
      fetched: false,
      isAdmin: false,
      purchases: [],
      email: null,
    },
    message: {
      open: false,
      message: "",
      action: null,
    },
    theme: {},
    layout: {
      top: [],
      bottom: [],
      aside: [],
      footerLeft: [],
      footerRight: [],
    },
    navigation: [],
};