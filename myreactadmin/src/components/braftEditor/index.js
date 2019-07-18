import React, { Component } from 'react';
import * as qiniu from 'qiniu-js'
import axios from 'axios'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorState: BraftEditor.createEditorState(null)
        };
    }
    async componentDidMount() {
        // 假设此处从服务端获取html格式的编辑器内容
        const htmlContent = 'await fetchEditorContent()'
        // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
        this.setState({
            editorState: BraftEditor.createEditorState(htmlContent)
        })
    }
    submitContent = async () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML()
        console.log(htmlContent)
        // const result = await saveEditorContent(htmlContent)
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }
    /**
     * 获取 七牛云token
     */
     getToken = async () => {
        const res = await axios({
        header: { 'content-type': 'application/json' },
        method: 'put',
        url: 'http://10.0.1.26:20292/qiniu/getSimpleToken',
        data: { data: {} },
        });
        return res.data.status === 0 ? res.data.data.uploadToken : ''
    }

    uploadFn = async (param) => {
        const token = await this.getToken()
        const putExtra = {
        }
        const config = {
        }
        const observer = {
            next(res) {
                param.progress(res.total.percent)
            },
            error(err) {
                param.error({
                    msg: err.message
                })
            },
            complete(res) {
                param.success({
                    url: 'http://weiapp.singworld.cn/' + res.key
                })
            }
        }
        qiniu.upload(param.file, param.name, token, putExtra, config).subscribe(observer)
    }

    render() {

        const { editorState } = this.state

        return (
            <BraftEditor
                value={editorState}
                onChange={this.handleEditorChange}
                onSave={this.submitContent}
                stripPastedStyles
                media={{ uploadFn: this.uploadFn }}
            />
            // <pre>{editorState.toHTML()}</pre>
        )


    }
}

export default Index;
