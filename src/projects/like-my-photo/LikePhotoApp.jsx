import React, { useState } from 'react'
import Title from '../01-e-signature/components/Title';
import { FaCamera, FaRegHeart, FaHeart } from "react-icons/fa";


export default function LikePhotoApp() {

    
    const UploadAndDisplayImage = () => {
        const [selectedImage, setSelectedImage] = useState(null)
    
        const handleImageChange = (e) => {
          setSelectedImage(URL.createObjectURL(e.target.files[0]))
        }
        const [like,setLike]=useState(false);
        const [count, setCount] = useState(0);
        const toggleLike=()=> {
            if(!like){
                setLike(true);
                setCount(count +1);
                }else{
                    setLike(false);
                    setCount(count - 1);
                }
            }
  return ( <div className='container text-center'>
    
    <Title text={"Like Photo App"}/>
    <Title classes={"subtitle"} text={`Likes ${count}`}/>
    <div className="card card-dark m-auto" style= {{width: 350, cursor: "pointer"}} onDoubleClick={toggleLike}>
    <div className='card-header fs-xl'>
    <FaCamera className='mr-1' />
        <small>Image</small>
        <input type='file' accept='image/*' onChange={handleImageChange} style={{ display: 'none' }} id='imageInput' />
            <label htmlFor='imageInput' className='btn btn-primary ms-2'>Upload Image</label>
    </div>
    <img src={selectedImage} alt='img' style={{ height: 'fit',width: 'fit', objectFit: 'fit' }} />
          <div className="card-footer fs-xl d-flex" style={{ justifyContent: "space-between" }} >
            {like ? <FaHeart className='text-danger' onClick={toggleLike}/> : <FaRegHeart onClick={toggleLike}/>}
          </div>
    </div>
    </div>
  )
    }
    return <UploadAndDisplayImage />
}
