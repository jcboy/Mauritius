import React, {useState} from "react";
import pagination from "../../pages/activities/ActivitiesConfig/paginate";

const Pagination = ({setPage, currentPage, pageMax}) => {

    const [btnPanel, paginate] = useState(pagination(currentPage, pageMax));

    const newPageIndex = (e) => {
        const value = Number(e.target.id);
        if (value === 0) {
            setPage(1);
        } else {
            setPage(value);
        }
        return paginate(pagination(value, pageMax));
    }

    return (<div>
            <div className="btn-toolbar justify-content-center" role="toolbar"
                 aria-label="Toolbar with button groups">
                <div className="btn-group" role="group" aria-label="First group">
                    <button type="button"
                            id="1"
                            className="btn btn-outline-secondary"
                            onClick={newPageIndex}
                    > &laquo; </button>
                    {
                        btnPanel.map((buttonIndex, i) => {
                            return <button type="button"
                                           key={i}
                                           id={buttonIndex}
                                           className="btn btn-outline-secondary"
                                           onClick={newPageIndex}
                            > {buttonIndex} </button>
                        })
                    }
                    <button type="button"
                            id={pageMax}
                            className="btn btn-outline-secondary"
                            onClick={newPageIndex}
                    > &raquo; </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination;