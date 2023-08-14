import { useStoreActions, useStoreState } from 'easy-peasy'
import React from 'react'
import { useParams, Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const PostPage = () => {
  const deletePost = useStoreState((state) => state.deletePost)
  const {id} = useParams()
  const getPostById = useStoreState((state) => state.getPostById)
  const post = getPostById(id)
  const navigate = useNavigate()

  const handleDelete = (id) => {
    try{
        deletePost(id);
        navigate('/');
      }
      catch(err) {
        console.log(`Error:${err.message}`)
      }
    }
  
  
  return (
    <main className='PostPage'>
      <article className='post'>
        {post && 
         <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}><button className='editButton'>Edit Post</button></Link>
            <button className='deleteButton' onClick = {() => handleDelete(post.id)} >
              Delete Post
            </button>            
         </> 
        }

        {!post && 
        <>
        <h2>Post not found</h2>
        <p>thats disapointing look below</p>
        <Link to='/'>Visit our page</Link>
        </>
        }
      </article>
          
        </main>
  )
}

export default PostPage