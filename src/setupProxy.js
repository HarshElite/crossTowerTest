const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/api/v2/tickers", {
      target: "http://cors-anywhere.herokuapp.com/https://api.wazirx.com",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    proxy("/pro/v1/market", {
      target: "http://cors-anywhere.herokuapp.com/https://www.zebapi.com",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    proxy("/api/3/public/ticker", {
      target: "http://cors-anywhere.herokuapp.com/https://api.crosstower.com",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    proxy("/exchange/ticker", {
      target: "http://cors-anywhere.herokuapp.com/https://api.coindcx.com",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    proxy("/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json", {
      target: "http://cors-anywhere.herokuapp.com/https://cdn.jsdelivr.net",
      secure: false,
      changeOrigin: true,
    })
  );
};
