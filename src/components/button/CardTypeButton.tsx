import { CardBackgoundColor, CardColor } from '@/domain'
import { CardColor as StyledCardColor } from '@/styles/card.stitches'
import { styled } from '@/styles/stitches.config'
export interface CardTypeButtonProps {
  name: string
  backgroundColor: CardBackgoundColor
  color: CardColor
  selectCardType: (name: string, bg: CardBackgoundColor, color: CardColor) => void
}

const CardTypeButton = ({ name, backgroundColor, color, selectCardType }: CardTypeButtonProps) => {
  return (
    <StyledCardTypeButton key={name} onClick={() => selectCardType(name, backgroundColor, color)}>
      <StyledCardColor style={{ backgroundColor }} />
      <p>{name}</p>
    </StyledCardTypeButton>
  )
}

const StyledCardTypeButton = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2px',
  fontSize: '0.8rem',
})

export default CardTypeButton
