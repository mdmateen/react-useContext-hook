import React, { useEffect, useState } from 'react'
import axios from 'axios';

function DataFetchingById() {

    const [id, setId] = useState(1);
    const [posts, setPost] = useState({});
    const [idFromButtonClick, setButtonId] = useState(1);

    const fetchData = () => {
        setButtonId(id)
    }
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + idFromButtonClick)./* idFromButtonClick */
            then(res => {
                console.log(res);
                setPost(res.data)
            }).catch(err => {
                console.log(err);
            })
    }, [idFromButtonClick]);/* idFromButtonClick */
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={fetchData}> fetch data </button>
            {posts.title}

        </div>
    )
}

export default DataFetchingById