import React, {Fragment} from 'react';


export const GifGridItem = ({id, title, url}) => {

    return (
        <Fragment>
            <div className="card animate__animated animate__fadeInDown">
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
        </Fragment>
    )
}
