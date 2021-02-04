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


    const sendTag = props.onSave;

    const saveTag = (event) => {
        sendTag(event.target["previousSibling"].value)
        event.target["previousSibling"].value = '';
    }

    const promiseOptions = (tagName) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(filterColors(tagName));
            }, 1000);
        });
    }
    const filterColors = (tagName) => {
        console.log(tagName);
        return tagList.filter((i) => {
            console.log(i);
            i.tagName.toLowerCase().includes(tagName.toLowerCase())
        });
    };

    return <div className="col-8 d-flex pl-5 no-wrap">
        <AsyncSelect cacheOptions loadOptions={promiseOptions}/>
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