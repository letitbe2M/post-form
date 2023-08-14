// import { createContext, useEffect, useState } from "react";
// import api from '../api/posts'
// import useAxiosFetch from '../hooks/useAxiosFetch'


// const DataContex = createContext({})
// export const DataProvider = ({children}) =>
// {
//   const [posts, setPosts] = useState([])
//   const [search, setSearch] = useState('')
//   const [searchResults, setSearchResults] = useState([])
//   const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts')



//   useEffect (() => {
//     setPosts(data)
//   }, [data])

//   useEffect(() => {
//     const filteredResults = posts.filter(post => 
//       ((post.body).toLowerCase().includes(search.toLowerCase()))
//       || (post.title).toLowerCase().includes(search.toLowerCase())
//       )

//       setSearchResults(filteredResults.reverse())
//   }, [posts, search])

//   useEffect(() => {
//     const fetchPosts = async () => {
//     try{
//         const response = await api.get('/posts')
//         setPosts(response.data)
//       }
//       catch (err) {
//         if (err.response) {
//         console.log(err.response.message)
//         }
//         else {
//           console.log(`Error: ${err.message}`)
//         }
//       }
//     }

//     fetchPosts(); 

//   }, [])


//   return (
//     <DataContex.Provider value={{
//       search, setSearch, searchResults, fetchError, isLoading,
//       posts, setPosts

//     }} >
    
//       {children}
//       </DataContex.Provider >
//     )
// }


// export default DataContex