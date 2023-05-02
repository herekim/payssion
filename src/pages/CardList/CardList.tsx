import { styled } from '@stitches/react'

import { EmptyCard, SmallCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { Slick } from '@/components/slider'
import { getCardNumbersDisplay, getCardExpiredDateDisplay } from '@/domain'
import { usePage } from '@/hooks'
import { useCardList } from '@/pages/CardList/hooks'
import { CardNickname } from '@/styles/card.stitches'
import { PayssionApp, PageTitle as InfoTitle } from '@/styles/layout.stitches'

function CardList() {
  const { cardList, onClickCard } = useCardList()
  const { changeCurrentPage } = usePage()

  return (
    <>
      <PayssionApp>
        <PageTitle title="보유 카드" />
        <CardListContainer>
          <Slick>
            {cardList?.map((card) => {
              const { cardNumbers, owner, name, nickname, expiredMonth, expiredYear, cardType } = card
              return (
                <div key={card.nickname} onClick={() => onClickCard(card)}>
                  <SmallCard
                    cardName={name}
                    cardNumbers={getCardNumbersDisplay(cardNumbers)}
                    cardOwner={owner}
                    cardExpiredDate={getCardExpiredDateDisplay({ expiredMonth, expiredYear })}
                    cardType={cardType}
                  />
                  <CardNickname>{nickname}</CardNickname>
                </div>
              )
            })}
            <button onClick={() => changeCurrentPage('CardAdd')}>
              <EmptyCard backgroundColor="#e2e2e2" color="#ffffff">
                <span>+</span>
              </EmptyCard>
            </button>
          </Slick>
        </CardListContainer>
        <InfoMessage>
          결제정보 변경은&nbsp;
          <Strong>설정&gt;계좌정보</Strong>에서 하실 수 있습니다.
        </InfoMessage>
        <PaymentAmount>
          <StyledInfoTitle>결제금액</StyledInfoTitle>
          <TotalPayment>
            <UnderLineText>총 결제금액</UnderLineText>
            <UnderLineText>0원</UnderLineText>
          </TotalPayment>
        </PaymentAmount>
        <Agreement>
          <StyledInfoTitle>약관 이용 및 동의</StyledInfoTitle>
          <CheckBoxContainer>
            <TransactionAgreement>
              <p>거래제공 정보 동의: NEXTSTEP</p>
              <Detail>상세보기</Detail>
            </TransactionAgreement>
            <Label>
              주문 내용을 확인하였으며, 정보 제공 등에 확인합니다. <input type="checkbox" />
            </Label>
          </CheckBoxContainer>
        </Agreement>
      </PayssionApp>
      <ButtonContainer>
        <Button onClick={() => {}}>취소하기</Button>
        <Button backgroundColor="main" color="white" onClick={() => {}}>
          결제하기
        </Button>
      </ButtonContainer>
    </>
  )
}

export default CardList

const CardListContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '2rem',
})

const InfoMessage = styled('div', {
  display: 'flex',
  justifyContent: 'end',
  fontSize: '0.7rem',
  marginBottom: '2rem',
})

const Strong = styled('span', {
  fontWeight: 'bold',
})

const PaymentAmount = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '2rem',
})

const TotalPayment = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1rem',
  fontWeight: 'bold',
  padding: '1rem 0',
})

const CheckBoxContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  gap: '0.5rem',
  padding: '1rem 0',
  fontSize: '0.8rem',
})

const TransactionAgreement = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

const StyledInfoTitle = styled(InfoTitle, {
  borderBottom: '1px solid #e2e2e2',
  paddingBottom: '0.5rem',
})

const Label = styled('label', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

const Agreement = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

const Detail = styled('button', {
  fontSize: '0.7rem',
  textDecoration: 'underline',
})

const ButtonContainer = styled('div', {
  position: 'sticky',
  bottom: 0,
  left: 0,
  height: '2rem',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
})

const Button = styled('button', {
  width: '100%',
  padding: '0.7rem 0',
  borderRadius: '0.5rem',
  backgroundColor: '#e2e2e2',
  color: 'white',
  variants: {
    disabled: {
      true: {
        opacity: 0.3,
      },
      false: {
        opacity: 1,
      },
    },
    color: {
      white: {
        color: '#ffffff',
      },
    },
    backgroundColor: {
      main: {
        backgroundColor: '$main',
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

const UnderLineText = styled('p', {
  position: 'relative',

  '&::after': {
    content: '',
    display: 'block',
    position: 'absolute',
    left: '-0.2rem',
    right: '-0.2rem',
    bottom: '0',
    height: '0.5rem',
    backgroundColor: '$main',
    opacity: 0.4,
    zIndex: -1,
    borderRadius: '0.2rem',
  },
})
