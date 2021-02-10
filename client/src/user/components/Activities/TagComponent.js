import React, {useEffect, useState} from 'react';
import TagPreview from "./TagPreview";
import Select from "react-select/async/dist/react-select.esm";
import axios from 'axios';

const TagComponent = ({setTags}) => {

    const [tagList, updateTagList] = useState([]);
    const [input, saveInput] = useState('')

    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8080/categories')
            .then((response) => {
                setData(response.data);
            })
    }, []);

    const [selectedValue, setSelectedValue] = useState([]);
    const handleSelectChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    const saveTag = () => {
        console.log(input)
        setTags(input.toLowerCase());
        return updateTagList([...tagList, input.toLowerCase()]);
    }

    const deleteTag = (event) => {
        const id = tagList.findIndex((tag) => {
            return tag === event;
        })
        console.log(event)
        const newTagList = [...tagList];
        newTagList.splice(id, 1);
        updateTagList(newTagList);
    }

    /*
        const filterColors = (tagName) => {
            return tagList.filter((tag) => {
                return tag.tagName.toLowerCase().includes(tagName.toLowerCase());
            });
        };
        const promiseOptions = (tagName) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(filterColors(tagName));
                }, 1000);
            });
        }
     */

    //loadOptions={promiseOptions}
    return (<div className="row pb-3 filter-content flex-column">
            <div className="col-5 d-flex pl-5 no-wrap">

                <Select
                    defaultValue={[]}
                    name="data"
                    // value={data.filter(obj => selectedValue.includes(obj.value))}
                    options={data.map((cat) => {
                        return {value: cat.name, label: cat.name}
                    })}
                    onChange={handleSelectChange}
                    className="basic-multi-select text-dark form-control"
                    classNamePrefix="select"
                    placeholder=""
                    isMulti
                />
                {selectedValue}
                {
                    /*
                    <Select cacheOptions
                            defaultValue={[]}
                            options={tagList.map((filter) => {
                                return {label: filter, value: filter}
                            })}
                            className="text-dark"
                            name="filters"
                            onInputChange={(value) => {
                                console.log(value)
                                saveInput(value)
                            }}
                            placeholder=""/>
                     */
                }


                <button type="button"
                        className="btn btn-outline-primary"
                        onClick={saveTag}
                > Valider
                </button>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col my-2 display-block">
                        {
                            (!!tagList[0]) && (tagList.map((tag, index) => {
                                return <TagPreview key={index}
                                                   tagName={tag}
                                                   noTag={deleteTag}/>
                            }))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TagComponent;

