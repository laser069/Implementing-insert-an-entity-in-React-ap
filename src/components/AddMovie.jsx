import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function AddMovie({setMovies,movlen}) {
    const [title,setTitle] = useState("");
    const [director,setDirector] = useState("");
    const [genre,setGerner] = useState("");
    const [release,setRelease] = useState("");
    const [synopsis,setSynopsis] = useState("");
    const [imgurl,setImgurl] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
            const newMovie = {
                id:movlen,
                title:title,
                director:director,
                genre:genre,
                releaseYear:release,
                synopsis:synopsis,
                posterUrl:imgurl

            }
            console.log(newMovie)
    }
  return (
    <div>
      <form action="/" onSubmit={handleSubmit}>
      <input type="text" onChange={(e)=>setTitle(e.target.value)} name="" id="" placeholder='Title'/>
      <input type="text" onChange={(e)=> setDirector(e.target.value)} name="" id="" placeholder='Director' />
      <input type="text" onChange={(e)=> setGerner(e.target.value)} name="" id="" placeholder='Genre'/>
      <input type="text" onChange={(e)=>setRelease(e.target.value)} name="" id="" placeholder='Release Year'/>
      <textarea name="" onChange={(e)=> setSynopsis(e.target.value)} id="" placeholder='Synopsis'></textarea>
      <input type="text" onChange={(e)=>setImgurl(e.target.value)} name="" id="" placeholder='Poster Image URL'/>
      <button type='sumbit'>Submit</button>
      </form>
    <Link to='/'><button> Cancel </button> </Link>
    </div>
  )
}

export default AddMovie
