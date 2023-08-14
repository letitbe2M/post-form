import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useEffect } from 'react'



const EditPost = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const editTitle = useStoreState((state) => state.editTitle)
  const editBody = useStoreState((state) => state.editBody)

  const editPost = useStoreActions((actions) => actions.editPost)
  const setEditBody = useStoreActions((actions) => actions.setEditBody)
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle)
  const getPostById = useStoreState((state) => state.getPostById)
  const post = getPostById(id)
  
  useEffect(() => {
    if (post) {
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  },[post, setEditTitle, setEditBody])

  
  const handleEdit = (id) => {
    
    const datetime = format(new Date(), 'MMMM dd, yyyy pp' )
    const updatedPost = {id, title: editTitle, datetime, body: editBody };
    editPost(updatedPost);
    navigate(`/post/${id}`);

}

  return (
    <main className='NewPost'>
      {editTitle &&
        <> 
          <h2>Edit Post</h2>
          <form className='newPostForm' onSubmit={ (e) => e.preventDefault() }>
            <label htmlFor="postTitle">Title</label>
            <input 
            id='postTitle'
            type='text'
            required
            value={editTitle}
            onChange={(e)=> setEditTitle(e.target.value) }
            />
            <label htmlFor='postBody'>Post</label>
            <textarea
            id='postBody'
            type='text'
            required
            value={editBody}
            onChange={(e)=> setEditBody(e.target.value) }
            />

            <button onClick={() => handleEdit(post.id)} type='button'>Edit Post</button>   
          </form>
       </> 
       }

       {!editTitle && 
       <>
       <h2>Post not found</h2>
       <p>thats disapointing look below</p>
       <Link to='/'>Visit our page</Link>
       </>
       }
   </main>
      
  )
}

export default EditPost