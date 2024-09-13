import React from 'react'
import { AccordionWrapper, TextWrapper } from './subcomponents'
import AccordionComp from './AccordionComp'

const Accordion = () => {
  return (
    <>
        <TextWrapper>
            Is Multiple Accordion Allowed
        </TextWrapper>
        <AccordionWrapper>
            <AccordionComp />
            <AccordionComp />
            <AccordionComp />
            <AccordionComp />
            <AccordionComp />
        </AccordionWrapper>
        
    </>
  )
}

export default Accordion