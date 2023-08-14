import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import Missing from './Missing'
import Footer from './Footer'
import EditPost from './EditPost'
import About from './About'
import {Routes, Route} from 'react-router-dom'
import useAxiosFetch from './hooks/useAxiosFetch'
import { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'

   
function App() {
  const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts')
  const setPosts = useStoreActions((actions) => actions.setPosts)

  useEffect (() => {
    setPosts(data)
  }, [data, setPosts])

  return (
   
     <div className='App'>
        <Header title={"React Js blog"} />
        <Nav />        
        <Routes>  
            <Route path='/' element={<Home fetchError={fetchError} isLoading={isLoading} />}/>

            <Route path='post' element={<NewPost/>}/> 

            <Route path='edit/:id' element={<EditPost />}/> 

            <Route path='post/:id' element={<PostPage />}/>    

            <Route path='about' element={<About />}/>
            <Route path='*' element={<Missing />} />                 
        </Routes>
        <Footer />
      </div> 
  
      
   
      
    
  );
}

export default App;
