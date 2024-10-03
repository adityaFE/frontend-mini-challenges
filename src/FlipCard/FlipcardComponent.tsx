import {useState} from 'react'
import { BackFace, Card, FrontFace, MainCard } from './subcomponents'

interface FlipcardComponentProps {
 id?: string
 question: string
 answer: string
}
const FlipcardComponent: React.FC<FlipcardComponentProps> = ({
 question,
 answer
}) => {
 const [isFlipped,setIsFlipped] = useState(false)
 const handleFlip = () =>{
 setIsFlipped(!isFlipped)
 }
 return (
 <MainCard onClick={handleFlip}>
 <Card flipped={+isFlipped}>
 <FrontFace>{question}</FrontFace>
 <BackFace>{answer}</BackFace> 
 </Card>
 </MainCard>
 )
}

export default FlipcardComponent
