import {
  AccordionCompWrapper,
  AccordionHeader,
  AdditonalText,
  IconWrapper
} from './subcomponents'
import AddRoundedIcon from '@mui/icons-material/Add'
import RemoveRoundedIcon from '@mui/icons-material/Remove'
import { useEffect, useState } from 'react'

interface AccordionCompProps {
  title: string
  content: string
  id: string
  openAccordionId: string
  //isMultipleChecked:boolean
  handlingOpenAccordionId: (id: string) => void
}
const AccordionComp: React.FC<AccordionCompProps> = ({
  title,
  content,
  id,
  openAccordionId,
  handlingOpenAccordionId
}: AccordionCompProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  //const [closeAll,setIsCloseAll] = useState(false)

  // if(isMultipleChecked){
  // setIsCloseAll(!closeAll)
  // }

  const handleOnClick = () => {
    setIsExpanded((prev) => !prev)
    handlingOpenAccordionId(id)
  }

  useEffect(() => {
    if (openAccordionId) {
      setIsExpanded(openAccordionId === id)
    }
  }, [id, openAccordionId])

  return (
    <AccordionCompWrapper>
      <AccordionHeader>
        {title}
        <IconWrapper onClick={handleOnClick}>
          {!isExpanded ? (
            <AddRoundedIcon color="disabled" />
          ) : (
            <RemoveRoundedIcon color="disabled" />
          )}
        </IconWrapper>
      </AccordionHeader>
      <div
        style={{
          maxHeight: isExpanded ? '500px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.2s ease'
        }}
      >
        <AdditonalText>{content}</AdditonalText>
      </div>
    </AccordionCompWrapper>
  )
}

export default AccordionComp
