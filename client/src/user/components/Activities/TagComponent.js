import React, {useState} from 'react';
import Select from "react-select";
import '../../styles/tagStyleActivities.css';

const TagComponent = ({setTags, setPage, data}) => {

    const [options, setOptions] = useState(data);
    const [selectedValues, setSelectedValues] = useState([]);

    const sendTags = () => {
        setTags(selectedValues);
        setPage(1);
    }

    const action = (option, action) => {
        if (action.action === 'select-option') {
            const newOptions = options.filter((val) => {
                return val.name !== option[option.length - 1].value;
            })
            setSelectedValues([...selectedValues, option[option.length - 1].value]);
            setOptions(newOptions);
            return undefined;
        } else {
            const newValues = selectedValues.filter((val) => {
                return val !== option;
            })
            setOptions([...options, {name: option}]);
            return setSelectedValues(newValues);
        }
    }

    return (<div className="row pb-3 filter-content flex-column">
            <div className="col-md-4 d-flex pl-5 no-wrap">
                <Select
                    name="options"
                    options={options.map((tag) => {
                        return {value: tag.name, label: tag.name}
                    })}
                    onChange={action}
                    className="basic-multi-select text-dark form-control"
                    classNamePrefix="select"
                    placeholder="Filtrer"
                    styles={{
                        menu: base => (
                            {...base, marginBottom: 76})
                    }}
                    value={() => []}
                    isMulti
                />
                <button type="button"
                        className="btn btn-outline-primary"
                        onClick={sendTags}
                > Valider
                </button>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col my-2 display-block">
                        {
                            (!!selectedValues[0]) && (selectedValues.map((tag) => {
                                return (
                                    <button className="wrapBtn"
                                            key={tag}
                                            id={tag}
                                            onClick={(event) => {
                                                action(event.target["id"], 'remove-value')
                                            }}>
                                        {tag} &nbsp; <span className="croix" id={tag}> x </span>
                                    </button>
                                )
                            }))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TagComponent;

