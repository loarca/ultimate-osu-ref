module.exports = {
  devServer: {
    // Set public ip + port of server if you're running on a vm / remote machine
    public: '192.168.56.101:8080'
  },
  pluginOptions: {
    // options placed here will be merged with default configuration and passed to electron-builder
    electronBuilder: {
      builderOptions: {
        appId: 'io.github.loarca.ultimate-osu-ref',
        productName: 'Ultimate osu!ref',
        win: {
          target: 'portable'
          // icon: 'build/icon.ico'
        }
      }
    }
  }
}
