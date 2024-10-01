import { useState } from 'react'
import { ButtonWrapper, DivWrapper, H3 } from './subcomponents'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'

function Counter() {
  const counterVal = 1
  const [count, setCount] = useState<number>(0)
  const [counterValue, setCounterValue] = useState(counterVal)
  const handleIncrease = () => {
    setCount(count + counterValue)
  }

  const handleDecrease = () => {
    setCount(count - counterValue)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const parsedVal = parseFloat(value)
    setCounterValue(isNaN(parsedVal) ? 0 : parsedVal)
  }

  const handleReset = () => {
    //setCounterValue(0)
    //work on fixing the reset logic for the counter value
    setCount(0)
  }

  return (
    <>
      <H3>{count}</H3>
      <DivWrapper>
        <ButtonWrapper>
          <Button variant="contained" onClick={handleDecrease}>
            Decrease
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button variant="contained" onClick={handleIncrease}>
            Increase
          </Button>
        </ButtonWrapper>
      </DivWrapper>
      <TextField
        placeholder="counter value"
        defaultValue={counterVal}
        onChange={handleInputChange}
      />

      <ButtonWrapper>
        <Button variant="contained" onClick={handleReset}>
          Reset
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default Counter
