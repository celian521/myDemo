 /**
  *  @Title   发送消息/监听消息
  *  @Auther  Stephen WU
  *  @Des     描述
  *  @Time    2019
  */
 class Msg {
   id = null
   url = null
   constructor(obj={}) {
     this.messageMap = new Map();
     this.url = obj.url;
     this.id = obj.id;
     window.addEventListener('message', (e) => {
       try {
         let msg = e.data ? (typeof e.data === 'string' ? JSON.parse(e.data) : {}) : {};
         if (this.messageMap.has(msg.key)) {
           this.messageMap.get(msg.key)(msg.value);
          //  console.warn('parent msg:', msg);
         }
       } catch (err) {
         console.warn(err);
       }
     });
   }
   /**
    * 发送消息
    * @param {*} msgType
    * @param {*} msg
    */
   sendMsg(msgType, msg) {
     let appframe = window.document.getElementById(this.id),
       msgData = {
         key: msgType,
         value: msg
       }
     if (appframe) {
       appframe.contentWindow.postMessage(JSON.stringify(msgData), this.url);
     }
   }
   /**
    * 监听消息
    * @param {*} msgType
    * @param {*} callback
    */
   listenMsg(msgType, callback) {
     this.messageMap.set(msgType, callback);
   }
   /**
    * 清除监听消息
    */
   clearMsg() {
     this.messageMap.clear()
   }
 }

 export default Msg;