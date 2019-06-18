import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

class Quill extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleChange(value) {
        this.setState({ text: value })
    }

    modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }

    render() {
        let formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
        ]
        return (
            <div>
                <ReactQuill value={ this.state.text } formats={ formats } modules={ this.modules } onChange={ this.handleChange.bind(this) } />
            </div>
        );
    }
}

export default Quill;
