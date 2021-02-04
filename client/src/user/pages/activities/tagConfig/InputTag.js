import React from "react";
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import {useState, useEffect} from 'react';

const InputTag = (props) => {

    const [tagList, setTagList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/categories').then((response) => {
            setTagList(response.data)
            console.log(response.data)
        }).catch((err) => {
            console.log('An error has occurred : ', err.message)
        });
    }, [])

    const filterColors = (tagName) => {
        return tagList.filter(i =>
            i.label.toLowerCase().includes(tagName.toLowerCase())
        );
    };

    const promiseOptions = tagName =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve(filterColors(tagName));
            }, 1000);
        });

    const sendTag = props.onSave;

    const saveTag = (event) => {
        sendTag(event.target["previousSibling"].value)
        event.target["previousSibling"].value = '';
    }

    return <div className="col-5 d-flex pl-5 no-wrap">
        <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions}/>
        <input className="form-control"
               id="exampleDataList"
               style={{width: '50%'}}
               placeholder="Type to search..."
        />
        <button type="button"
                className="btn btn-outline-primary"
                onClick={saveTag}
        > Valider
        </button>
    </div>

}

export default InputTag;