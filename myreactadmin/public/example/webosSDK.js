class Msg {
  id = window.location.host
  constructor() {
    this.messageMap = new Map();
    window.addEventListener('message', (e) => {
      try {
        let msg = e.data ? (typeof e.data === 'string' ? JSON.parse(e.data) : {}) : {};
        if (this.messageMap.has(msg.key)) {
          this.messageMap.get(msg.key)(msg.value);
          // console.warn('sub msg:', msg);
        }
      } catch (err) {
        console.warn(err);
      }
    });
  }
  /**
   *
   * @param {*} msgType
   * @param {*} msg
   */
  sendMsg(msgType, msg) {
    let ancestorOrigins = window.location.ancestorOrigins
    if (ancestorOrigins.length != 0) {
      let msgData = {
          key: msgType,
          value: msg
        },
        url = ancestorOrigins[0]
      parent.window.postMessage(JSON.stringify(msgData), url);
    }
  }
  /**
   *
   * @param {*} msgType
   * @param {*} callback
   */
  listenMsg(msgType, callback) {
    this.messageMap.set(msgType, callback);
  }
  /**
    * 清除监听消息
    */
  clearMsg(key) {
    if(key) this.messageMap.delete(key)
    this.messageMap.clear()
  }
  /**
   * 获取数据
   * @param { String } api
   * @param { Object } obj
   */
  async get(api, obj={}) {
    return new Promise((resolve, reject) => {
      this.listenMsg(api, e => {
        this.clearMsg(api)
        resolve(e)
      })
      this.sendMsg(this.id, {...obj, api})
    })
  }

}

// export default new Msg();
