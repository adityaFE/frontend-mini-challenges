import { useState } from 'react'
import {
  Button,
  ButtonWrapper,
  GameDetails,
  GuessCount,
  GuessValue,
  GusserWrapper,
  Input,
  Label,
  PreviousGuess
} from './subcomponents'

const random = Math.floor(Math.random() * 100)
const Gusser = () => {
  const [formData, setFormData] = useState<number>(1)

  const [text, setText] = useState<string>('Start Guessing')

  const [count, setCount] = useState<number>(0)

  const [previousGuess, setPreviousGuess] = useState<null | number>(null)

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = formData
    setPreviousGuess(data)
    if (data > random) {
      setText('Guess Lower')
      setCount(count + 1)
      setFormData(0)
    } else if (data < random) {
      setText('Guess Higher')
      setCount(count + 1)
      setFormData(0)
    } else {
      setText('Congratulations')
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(Number(event.target.value))
  }

  const handleReset = () => {
    setFormData(1)
    setText('Start Guessing')
    setCount(0)
    setPreviousGuess(null)
  }

  return (
    <GusserWrapper>
      <form onSubmit={submitHandler}>
        <Label htmlFor="random-text">Guess a number from 1 to 100</Label>
        <br></br>
        <Input
          type="number"
          onChange={handleChange}
          value={formData}
          defaultValue={formData}
          max="100"
        />
        <br></br>
        <ButtonWrapper>
          <Button>Check</Button>
        </ButtonWrapper>
      </form>
      <GameDetails>
        {previousGuess && (
          <PreviousGuess>The current guess is {previousGuess}</PreviousGuess>
        )}
        <GuessValue>
          {text === 'Congratulations' ? (
            <h3 style={{ color: 'green' }}>{text}</h3>
          ) : (
            <h4 style={{ color: 'black' }}>{text}</h4>
          )}
        </GuessValue>
        <GuessCount>The guess count is {count}</GuessCount>
        <ButtonWrapper>
          <Button onClick={handleReset}>Reset</Button>
        </ButtonWrapper>
      </GameDetails>
    </GusserWrapper>
  )
}

export default Gusser
