// Code trouvé sur https://gist.github.com/AshikNesin/e44b1950f6a24cfcd85330ffc1713513
//Pour uploader un fichier en React


import React from 'react';
import {Component} from 'react';
import  axios  from 'axios';


class FileUploadAddContentOtherImages extends Component {

    constructor(props) {
        super(props);
        this.state ={
            file:null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
            console.log(response.data);
        })
    }
    onChange(e) {
        this.setState({file:e.target.files[0]})
    }


    fileUpload(file){
        const url = 'http://example.com/file-upload';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  axios.post(url, formData,config)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="file" multiple="true" onChange={this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}



export default FileUploadAddContentOtherImages;
