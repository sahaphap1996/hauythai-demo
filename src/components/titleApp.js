import React from 'react'

export default function titleApp(props) {
    return (
        <div className='title-app'>
            <div className='t-name'>
                หวยรัฐบาล
            </div>
            <div className="t-date">
                {props.round}
            </div>
        </div>
    )
}
