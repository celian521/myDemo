import React, { Component } from 'react';
import { Upload, Icon, message, Button } from 'antd';

class UploadQiniu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    /**
     * 获取 七牛云token
     */
    async getToken() {
        // const res = await Taro.request({
        // header: { 'content-type': 'application/json' },
        // method: 'put',
        // url: 'http://10.0.1.26:20292/qiniu/getSimpleToken',
        // data: { data: {} },
        // });
        // return res.data.status === 0 ? res.data.data.uploadToken : ''
    }
    beforeUpload(file, fileList) {
        console.log(file, fileList)
    }
    handleChange() {
        console.log('handleChange')
    }

    render() {
        const props = {
            action: 'https://upload-z2.qiniup.com',
            listType: 'picture',
        };
        return (
            <div>
                <Upload  {...props} >
                    <Button>
                        <Icon type="upload" /> Upload
                    </Button>
                </Upload>
            </div>
        );
    }
}

export default UploadQiniu;
