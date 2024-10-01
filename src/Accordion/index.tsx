import { useState } from 'react'
import { AccordionWrapper, TextWrapper } from './subcomponents'
import AccordionComp from './AccordionComp'
import { data } from './const'

const Accordion = () => {
  const [isMultipleChecked, setIsMultipleChecked] = useState(true)
  const [openAccordionId, setOpenAccordionId] = useState<string>('')

  const handleCheckboxChange = () => {
    if (isMultipleChecked) {
      setOpenAccordionId('')
    }
    setIsMultipleChecked(!isMultipleChecked)
  }

  const handlingOpenAccordionId = (id: string) => {
    setOpenAccordionId(isMultipleChecked ? '' : id)
  }

  return (
    <>
      <TextWrapper>
        <p>Is Multiple Accordion Allowed?</p>
        <input
          id="accordion-checkbox"
          type="checkbox"
          checked={isMultipleChecked}
          onChange={handleCheckboxChange}
        />
      </TextWrapper>
      <AccordionWrapper>
        {data.map((item) => (
          <AccordionComp
            key={item.id}
            openAccordionId={openAccordionId}
            handlingOpenAccordionId={handlingOpenAccordionId}
            //isMultipleChecked={isMultipleChecked}
            {...item}
          />
        ))}
      </AccordionWrapper>
    </>
  )
}

export default Accordion
