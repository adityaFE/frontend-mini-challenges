import { useState } from 'react'
import FlipcardComponent from './FlipcardComponent'
import { data } from './const'
import { Button, ButtonField, MainWrapper } from './subcomponents'

const Flipcard = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
  }

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length)
  }

  return (
    <MainWrapper>
      <FlipcardComponent key={data[currentIndex].id} {...data[currentIndex]} />
      <ButtonField>
        <Button onClick={prevCard} disabled={currentIndex === 0}>
          Previous
        </Button>
        <Button onClick={nextCard} disabled={currentIndex === data.length}>
          Next
        </Button>
      </ButtonField>
    </MainWrapper>
  )
}

export default Flipcard
