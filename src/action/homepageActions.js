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
import axios from "axios";

export const WazirxBtcAction = () => async (dispatch) => {
  try {
    dispatch({ type: WAZIRX_BTC_REQUEST });
    const { data } = await axios.get(
      " https://ct.bucle.dev/wazirx/api/v2/tickers"
    );
    dispatch({ type: WAZIRX_BTC_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: WAZIRX_BTC_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const ZebpayAction = () => async (dispatch) => {
  try {
    dispatch({ type: ZEBPAY_BTC_REQUEST });
    const { data } = await axios.get(
      " https://ct.bucle.dev/zebapi/pro/v1/market/"
    );
    dispatch({ type: ZEBPAY_BTC_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ZEBPAY_BTC_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const CrossTowerBtcAction = () => async (dispatch) => {
  try {
    dispatch({ type: CROSSTOWER_BTC_REQUEST });
    const { data } = await axios.get(
      " https://ct.bucle.dev/crosstower/api/3/public/ticker"
    );
    dispatch({ type: CROSSTOWER_BTC_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CROSSTOWER_BTC_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const CoindcxBtcAction = () => async (dispatch) => {
  try {
    dispatch({ type: COINDCX_BTC_REQUEST });
    const { data } = await axios.get(
      " https://ct.bucle.dev/coindcx/exchange/ticker"
    );
    dispatch({ type: COINDCX_BTC_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COINDCX_BTC_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const usdToInrAction = () => async (dispatch) => {
  try {
    dispatch({ type: USD_TO_INR_REQUEST });
    const { data } = await axios.get(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json"
    );
    dispatch({ type: USD_TO_INR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USD_TO_INR_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const mainCardApiAction = () => async (dispatch) => {
  try {
    dispatch({ type: MAIN_CARD_API_REQUEST });
    const { data } = await axios.get(
      "https://ct.bucle.dev/crosstower/product-master/ticker/list"
    );
    dispatch({ type: MAIN_CARD_API_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MAIN_CARD_API_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
