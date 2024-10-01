import React from 'react'
import { Img } from './subcomponents'

interface SelectedImageProps {
  id: number
}

const SelectedImage: React.FC<SelectedImageProps> = ({
  id
}: SelectedImageProps) => {
  //"https://picsum.photos/id/237/200/200"
  const newUrl = `https://picsum.photos/id/${id}/200/200`
  return <Img src={newUrl} alt="random-image" />
}

export default SelectedImage
