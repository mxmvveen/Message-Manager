import React from 'react';
import { Link } from 'react-router-dom';
import './List.scss';
const List = (props) => {
    const listData = props.data.map((v, key) => (
        <li key={key} className={v.read ? 'read' : 'unread'}>
            <Link to={v.title !== undefined ? v.title : v}>
                {v.title !== undefined ? v.title : v}
            </Link>
        </li>
    ));
    return (<div className="list"> {listData} </div>);
}

export default List;