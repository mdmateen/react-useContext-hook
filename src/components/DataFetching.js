import React,{useEffect,useState} from 'react'
import axios  from 'axios';
import DataFetchingById from './DataFetchingById';

function DataFetching() {

    const [posts,setPost]=useState([]);


    useEffect(()=>{

        axios.get('http://jsonplaceholder.typicode.com/posts').
        then(res=>{
            console.log(res);
            setPost(res.data)
        }).catch(err=>{
            console.log(err);
        })
    },[]);
  return (
    <div>  <h1 style={{color:"green"}}>Data fetching</h1>
        <DataFetchingById/> 
    
        {/* <ul>
            {
            posts.map(post=>(<li key={post.id} > title:  {post.title}  Body:  {post.body} </li>))
            }
        </ul> */}
    </div>
  )
}

export default DataFetching