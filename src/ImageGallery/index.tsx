import { useState } from 'react'
import { ImageWrapper, Img } from './subcomponents'
import SelectedImage from './imageSelected'
import { Button } from '@mui/material'

function Gallery() {

    const [currentId,setCurrentId] = useState(0)

    const handleImageClick= (event:React.MouseEvent<HTMLImageElement>) =>{
        const url= event.currentTarget.src
        const id = Number((url.slice(25,url.length)).slice(0,3))
        setCurrentId(id)
    }

    const handleReset= () =>{
        setCurrentId(0)
    }
  return (
    <>
        <ImageWrapper>
        <Img src="https://picsum.photos/id/237/200/200" alt='random-omage-1' onClick={handleImageClick} />
        <Img src="https://picsum.photos/id/238/200/200" alt='random-omage-1' onClick={handleImageClick}/>
        <Img src="https://picsum.photos/id/239/200/200" alt='random-omage-1' onClick={handleImageClick}/>
        <Img src="https://picsum.photos/id/236/200/200" alt='random-omage-1' onClick={handleImageClick}/>
        <Img src="https://picsum.photos/id/235/200/200" alt='random-omage-1' onClick={handleImageClick}/>
    </ImageWrapper>

    {currentId!==0? <SelectedImage id={currentId} />: <h3>No image selected</h3>}
    <Button variant='contained' onClick={handleReset}>Reset</Button>
    </>
   
  )
}

export default Gallery