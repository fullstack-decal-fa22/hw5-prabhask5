import React, {useState, useEffect} from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import axios from 'axios';

const Feed = () => {
  const [data, setData] = useState();

  const getPostData = () => {
    axios.get('http://localhost:3002/posts')
    .then((data) => setData(data.data))
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data && data.map(d =>
          <Post title={d.title} body={d.body} comments={d.comments} id={d.id} key={d.id} />
        )
      }

      <NewPost getPostData={getPostData} />
    </div>
  )

}


export default Feed;
