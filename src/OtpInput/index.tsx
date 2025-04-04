import { useState, useRef, useEffect } from 'react'

const OtpInput = () => {
  const OTP_LENGTH = 5
  const [inputArr, setInputArr] = useState<string[]>(new Array(OTP_LENGTH).fill(''))
  const refArr = useRef<Array<HTMLInputElement | null>>([])

  useEffect(() => {
    refArr.current[0]?.focus()
  }, [])

  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return

    const newVal = value.trim()
    const newArr = [...inputArr]
    newArr[index] = newVal.slice(-1)
    setInputArr(newArr)

    const next = refArr.current[index + 1]
    if (newVal && next) {
      next.focus()
      setTimeout(() => {
        next.setSelectionRange(next.value.length, next.value.length)
      }, 0)
    }
  }

  const handleKeyDownEvent = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (!e.currentTarget.value && e.key === 'Backspace') {
      refArr.current[index - 1]?.focus()
    }

    if (e.key === 'ArrowLeft') {
      const prev = refArr.current[index - 1]
      if (prev) {
        prev.focus()
        setTimeout(() => {
          prev.setSelectionRange(prev.value.length, prev.value.length)
        }, 0)
      }
    }

    if (e.key === 'ArrowRight') {
      refArr.current[index + 1]?.focus()
    }
  }

  return (
    <>
      <h1>OTP Validator</h1>
      {inputArr.map((value, index) => (
        <input
          key={index}
          value={value}
          type="text"
          maxLength={1}
          style={{
            height: '60px',
            width: '60px',
            textAlign: 'center',
            margin: '8px',
            fontSize: '32px',
          }}
          ref={(input) => (refArr.current[index] = input)}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDownEvent(e, index)}
        />
      ))}
    </>
  )
}

export default OtpInput