// import React, { useState, useEffect } from "react";
// import { firestore } from "../../../firebase_setup";
// import ArticleForm from "../AppMain/ArticleForm";

// const AddArticle = () => {
//     const [creators, setCreators] = useState([]);
//     const creatorsCollection = firestore.collection("articles");
  
//     const documentsCollection = doc => {
//       return { id: doc.id, ...doc.data() };
//     };
  
//     useEffect(() => {
//       const subscribe = creatorsCollection
//         .orderBy("title", "subtitle")
//         .onSnapshot(snapshot => {
//           const dataFromCollection = snapshot.docs.map(documentsCollection);
//           setCreators(dataFromCollection);
//         });
//       return () => subscribe;
//     }, []);
  
//     const handleCreate = creatorToAdd => {
//       creatorsCollection.add(creatorToAdd);
//       setCreators([creatorToAdd, ...creators]);
//     };
  
//     return (
//       <StyledContainer>
//         <StyledWrapper>
//           <StyledHeading>Twórcy</StyledHeading>
//           {/* {creators.map(({ id, name, photo, website }) => (
//             <CreatorCard key={id} name={name} photo={photo} website={website} />
//           ))} */}
//         </StyledWrapper>
//         <ArticleForm handleCreate={handleCreate} />
//       </StyledContainer>
//     );
//   };
  
//   export default AddArticle;

// import { useState, useEffect } from 'react'
// import ArticleForm from '../AppMain/ArticleForm.js'
// import { findAll } from '../../../firebase_setup/GetArticles'
// //import AddTodoBar from './add-todo-bar.js'
// //import TodoListItem from './todo-list-item.js'

// function AddArticle() {
//     const [loading, setLoading] = useState(false)
//     const [articles, setArticles] = useState([])

//     const fetchData = async () => {
//         setLoading(true)

//         const res = await findAll()

//         setArticles([...res])
//         setLoading(false)
//     }

//     const createArticle = async args => {
//         const res = await create(args)

//         setArticles([...articles, {
//             id: res.id,
//             ...args
//         }])
//     }

//     useEffect(() => {
//         fetchData()
//     }, [])

//     return 
// }

// export default AddArticle;