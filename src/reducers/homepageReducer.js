import {
  WAZIRX_BTC_FAIL,
  WAZIRX_BTC_REQUEST,
  WAZIRX_BTC_SUCCESS,
  ZEBPAY_BTC_FAIL,
  ZEBPAY_BTC_REQUEST,
  ZEBPAY_BTC_SUCCESS,
  COINDCX_BTC_FAIL,
  COINDCX_BTC_REQUEST,
  COINDCX_BTC_SUCCESS,
  CROSSTOWER_BTC_FAIL,
  CROSSTOWER_BTC_REQUEST,
  CROSSTOWER_BTC_SUCCESS,
  USD_TO_INR_REQUEST,
  USD_TO_INR_SUCCESS,
  USD_TO_INR_FAIL,
  MAIN_CARD_API_REQUEST,
  MAIN_CARD_API_SUCCESS,
  MAIN_CARD_API_FAIL,
} from "../constants/homepageConstants";

export const wazirxReducers = (state = { wazirxBtc: [] }, action) => {
  switch (action.type) {
    case WAZIRX_BTC_REQUEST:
      return { loading: true, wazirxBtc: [] };
    case WAZIRX_BTC_SUCCESS:
      return { loading: false, wazirxBtc: action.payload };
    case WAZIRX_BTC_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const zebPayReducers = (state = { zebPayBtc: [] }, action) => {
  switch (action.type) {
    case ZEBPAY_BTC_REQUEST:
      return { loading: true, zebPayBtc: [] };
    case ZEBPAY_BTC_SUCCESS:
      return { loading: false, zebPayBtc: action.payload };
    case ZEBPAY_BTC_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const coinDcxReducers = (state = { coinDcxBtc: [] }, action) => {
  switch (action.type) {
    case COINDCX_BTC_REQUEST:
      return { loading: true, coinDcxBtc: [] };
    case COINDCX_BTC_SUCCESS:
      return { loading: false, coinDcxBtc: action.payload };
    case COINDCX_BTC_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const crossTowerReducers = (state = { crossTowerBtc: [] }, action) => {
  switch (action.type) {
    case CROSSTOWER_BTC_REQUEST:
      return { loading: true, crossTowerBtc: [] };
    case CROSSTOWER_BTC_SUCCESS:
      return { loading: false, crossTowerBtc: action.payload };
    case CROSSTOWER_BTC_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const usdToInrReducers = (state = { usdToInr: [] }, action) => {
  switch (action.type) {
    case USD_TO_INR_REQUEST:
      return { loading: true, usdToInr: [] };
    case USD_TO_INR_SUCCESS:
      return { loading: false, usdToInr: action.payload };
    case USD_TO_INR_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const mainCardApiReducers = (state = { cardApiMain: [] }, action) => {
  switch (action.type) {
    case MAIN_CARD_API_REQUEST:
      return { loading: true, cardApiMain: [] };
    case MAIN_CARD_API_SUCCESS:
      return { loading: false, cardApiMain: action.payload };
    case MAIN_CARD_API_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
