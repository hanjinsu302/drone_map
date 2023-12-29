module.exports = {
    devServer: {
      port: 3000,
      liveReload: true,
      // host 지정
      host: '0.0.0.0',
      allowedHosts: 'all',
      open: true,
      client: {
        overlay: true,
        // 웹소켓용 url 지정
        // webSocketURL: 'ws://127.0.0.1:53126/',
        webSocketURL: 'ws://api.dromii.com:8080/ws/',
      },
      compress: true,
      proxy: {
        '/api': {
          target: 'http://api.dromii.com:8080',
          changeOrigin: true,
        },
        '/media': {
          target: 'http://api.dromii.com:8080',
          changeOrigin: true,
        },
      },
    },
  };
  