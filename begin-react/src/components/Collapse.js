import React from 'react';

const Collapse = (props) => {
    return (
        <div>
            <a className="btn btn-primary" data-bs-toggle="collapse" href={"#".concat(props.collapseID)}>
                Collapse Button
            </a>
            <div className="collapse" id={props.collapseID}>
                <div className="card card-body">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Collapse;