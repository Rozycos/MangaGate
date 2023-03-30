import React, {useState, useReducer, useEffect } from 'react';
import { Timestamp, addDoc, collection, updateDoc, setDoc, doc, getFirestore } from "firebase/firestore"; 
//import {getDb} from '../../../../firebase_setup/db';
import { findOne } from "../../../../firebase_setup/GetArticles";
import { Link, useNavigate, useParams  } from 'react-router-dom';
//import { Categories } from '../context/Categories';
//import { useHistory } from 'react-router-dom';

const UpdateForm = () => {
    const { articleId } = useParams();
    const db = getFirestore();
    const docRef = doc(db, "articles", articleId)
    const [singleArticle, setSingleArticle] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true)

        const oneArticle = await findOne(articleId)
        
        setSingleArticle(oneArticle)
        setLoading(false)
        
    }

    console.log(articleId)
    useEffect(() => {
        fetchData()
    }, [])
    
    
    
   
    
    const navigate = useNavigate();
    const [isPublish, setIsPublish] = useState(false);
    const [action, setAction] = useState(false);
    const [comedy, setComedy] = useState(false);
    const [drama, setDrama] = useState(false);
    const [military, setMilitary] = useState(false);
    const [fantasy, setFantasy] = useState(false);
    const [other, setOther] = useState(false);

    
    
    
    const [inputsContent, setInputsContent] = useReducer(
     (state, newState) => ({ ...state, ...newState }),
        {
            imageURL: "",
            title: "",
            subtitle: "",
            postURL: "",
            postText: "",
            // //isPublish: false,
        //     imageURL: singleArticle.imageURL,
        //     title: singleArticle.title,
        //     subtitle: singleArticle.subtitle,
        //     postURL: singleArticle.postURL,
        //     postText: singleArticle.postText,
        // //   isPublish: false
    //     imageURL: inputsContent.imageURL,
    //     title: inputsContent.title,
    //     subtitle: inputsContent.subtitle,
    //     postURL: inputsContent.postURL,
    //     postText: inputsContent.postText,
    // //   isPublish: false
        }
);
const { imageURL, title, subtitle, postURL, postText} = inputsContent; 

    const handleInputChange = e => {
        // if({[e.target.name]: e.target.value} === ''){
        //     setInputsContent(singleArticle.imageURL)
        // } else
        // !inputsContent.title? e.preventDefault() :setInputsContent({
        //          [e.target.name]: e.target.value
        //      });

        setInputsContent({
            [e.target.name]: e.target.value
        });
    };

    const handleChange = () => {
        setIsPublish(!isPublish);
      };

    const handleChangeOnAction = () => {
        setAction(!action);
      };

    const handleChangeOnDrama = () => {
        setDrama(!drama);
      };

    const handleChangeOnComedy = () => {
        setComedy(!comedy);
      };

    const handleChangeOnMilitary = () => {
        setMilitary(!military);
      };

    const handleChangeOnFantasy = () => {
        setFantasy(!fantasy);
      };

    const handleChangeOnOther = () => {
        setOther(!other);
      };

    const handleSubmit = async (e) => {
        e.preventDefault()

console.log("single" + singleArticle)

        try {
          await updateDoc(docRef, {
            imageURL: imageURL,
            title: title,
            subtitle: subtitle,
            postURL: postURL,
            postText: postText,
            isPublish: isPublish,
            action: action,
            comedy: comedy,
            drama: drama,
            military: military,
            fantasy: fantasy,
            other: other,
            //created: Timestamp.now()
          })

          alert("Your data is updated!")
          navigate('/admin');
        } catch (err) {
          alert(err)
        }
    }

    const fillTextValue = () =>{
       const fillText = "";
        console.log("data not changed");
       return fillText = " ";
    }
    console.log(singleArticle.e)
    console.log(singleArticle.postURL + " " + articleId + "  " + `${singleArticle.imageURL}` + singleArticle.isPublish)
    return (
        <>
            <div className="login__form">
            <div className="login__column">
                <form className="form">
                    <div className="form__field">
                        <label className="form__label">Image URL</label>
                        <input className="form__input" type="text" name="imageURL" id="imageURL" placeholder="Enter image URL" onChange={handleInputChange} defaultValue={singleArticle.imageURL || ''}/> 
                        {/* <input className="form__input" type="text" name="imageURL" id="imageURL" placeholder="Enter image URL" onChange={handleInputChange}/> */}
                    </div>
                    <div className="form__field">
                        <label className="form__label">Title</label>
                        <input className="form__input" type="text" name="title" id="title" placeholder="Enter post title" onChange={handleInputChange} defaultValue={singleArticle.title || ''}/>
                    </div>
                    <div className="form__field">
                        <label className="form__label">Subtitle</label>
                        <input className="form__input" type="text" name="subtitle" id="subtitle" placeholder="Enter post subtitle" onChange={handleInputChange} defaultValue={singleArticle.subtitle || ''}/>
                    </div>
                    <div className="form__field">
                        <label className="form__label">Post URL</label>
                        <input className="form__input" type="text" name="postURL" id="postURL" placeholder="Enter post URL" onChange={handleInputChange} defaultValue={singleArticle.postURL || ''}/>
                    </div>
                    <div className="form__field--textarea">
                        <label className="form__label" >Post text</label>
                        <textarea className="form__input form__input--textarea" name="postText" id="postText" rows="5" cols="33" placeholder="Article" onChange={handleInputChange} defaultValue={singleArticle.postText || ''} />
                    </div>  
                    <div className="form__field--checkbox">
                        <label className="form__label" >Published</label>
                        <input type="checkbox" id="post__publish" name="post__publish" defaultChecked={singleArticle.isPublish} onClick={handleChange} />
                    </div>
                    <div className="form__field">
                        <label className="form__label" >Action</label>
                        <input type="checkbox" id="post__categories" name="post__categories" defaultChecked={singleArticle.action} onChange={handleChangeOnAction} />
                        <label className="form__label" >Comedy</label>
                        <input type="checkbox" id="post__categories" name="post__categories" defaultChecked={singleArticle.comedy} onChange={handleChangeOnComedy} />
                        <label className="form__label" >Drama</label>
                        <input type="checkbox" id="post__categories" name="post__categories" defaultChecked={singleArticle.drama} onChange={handleChangeOnDrama} />
                    </div>
                    <div className="form__field">
                        <label className="form__label" >Military</label>
                        <input type="checkbox" id="post__categories" name="post__categories" defaultChecked={singleArticle.military} onChange={handleChangeOnMilitary} />
                        <label className="form__label" >Fantasy</label>
                        <input type="checkbox" id="post__categories" name="post__categories" defaultChecked={singleArticle.fantasy} onChange={handleChangeOnFantasy} />
                        <label className="form__label" >Other</label>
                        <input type="checkbox" id="post__categories" name="post__categories" defaultChecked={singleArticle.other} onChange={handleChangeOnOther} />
                    </div>
                </form>
                <div>
                    <button className="btn btn__primary btn__form btn__form--log">
                    {/* </button><button className="btn btn__primary btn__form btn__form--log" onClick={handlePreview}> */}
                            Previev
                    </button>
                    <button className="btn btn__primary btn__form btn__form--log"  disabled={!inputsContent.title || !inputsContent.subtitle || !inputsContent.postURL} onClick={handleSubmit}>Update
                        {/* <Link className="admin__link" to="/admin">Submit</Link> */}
                    </button>
                </div>
            </div>
            </div>
        </>
    )
    
}


export default UpdateForm;

// disabled={!inputsContent.title || !inputsContent.subtitle || !inputsContent.postURL}