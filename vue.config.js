module.exports = {
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      definitions[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = JSON.stringify(false);
      return definitions;
    });
  },
  devServer: {
    disableHostCheck: true,
    allowedHosts: ['frontend-cargoo.onrender.com'], 
    port: 8080 
  }
}
