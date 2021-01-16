import React from 'react';
// import Select from 'react-select';

export const AddCategory = () => {
    return (
        <div>

            <label htmlFor="exampleDataList" className="form-label">Filtre example</label>
            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                <datalist id="datalistOptions">
                    { }
                </datalist>

            <button type="button" className="btn btn-outline-primary ">Valider</button>
        </div>
    )
}