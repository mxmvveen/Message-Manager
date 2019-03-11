import React from 'react';
import { Link } from 'react-router-dom';
import './List.scss';
const List = (props) => {
    const listData = props.data.map((v, key) => {
    let content;
    if (v.title !== undefined) {
        content = (<Link to={v.title}>
            {v.title}
        </Link>)
    } else {
        content = <div>{v}</div>;
    }
    return (
    <li key={key} className={v.read ? 'read' : 'unread'}>
        {content}
    </li>
    )
    });
    return (<div className="list"> {listData} </div>);
}

export default List;