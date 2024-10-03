import styled from 'styled-components'

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainCard = styled.div`
  width: 20%;
  height: 400px;
  cursor: pointer;
`
export const Card = styled.div<{
  flipped: number
}>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ flipped }) =>
    flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
`

export const FrontFace = styled(CardFace)`
  display: flex;
  background-color: #f6e0b5;
`

export const BackFace = styled(CardFace)`
  background-color: #c4ad9d;
  transform: rotateY(180deg);
`

export const ButtonField = styled.div`
  margin: 24px;
`

export const Button = styled.button<{ disabled: boolean }>`
  background-color: ${({ disabled }) => (disabled ? 'gray' : 'green')};
  border: none;
  border-radius: 6%;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0 24px;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    color: ${({ disabled }) => !disabled && 'black'};
    box-shadow: ${({ disabled }) =>
      !disabled && '0 0 10px rgba(0, 255, 0, 0.7)'};

    transform: ${({ disabled }) => !disabled && 'scale(1.05);'};
  }
`
