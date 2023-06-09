export type CardNumbers = {
  [key in 'first' | 'second' | 'third' | 'fourth']: string
}
export type CardNumber =
  | {
      first: string
    }
  | {
      second: string
    }
  | {
      third: string
    }
  | {
      // Todo : 왜 옵셔널로 해야 되는지 찾아봐야함
      fourth?: string
    }
export type CardName = string
export type CardNickname = string
export type CardExpiredYear = string
export type CardExpiredMonth = string
export type CardOwner = string
export type CardSecurityCode = string

export type CardPasswords = {
  [key in 'first' | 'second']: string
}
export type CardPassword = { first: string } | { second?: string }
export type CardColor = '#ffffff' | '#000000'
export type CardBackgoundColor =
  | '#F5F5F5'
  | '#162bb1'
  | '#932929'
  | '#54cb25'
  | '#20d0ad'
  | '#d320c7'
  | '#7c1ddb'
  | '#e1860f'
export type CardType = {
  name: string
  color: CardColor
  bg: CardBackgoundColor
}
export type CardTypes = {
  [key in keyof CardType]: CardType[key]
}

export type CardAction =
  | {
      type: 'SET_CARD_NUMBERS'
      payload: CardNumber
    }
  | {
      type: 'SET_NAME'
      payload: CardName
    }
  | {
      type: 'SET_NICKNAME'
      payload: CardNickname
    }
  | {
      type: 'SET_EXPIRED_YEAR'
      payload: CardExpiredYear
    }
  | {
      type: 'SET_EXPIRED_MONTH'
      payload: CardExpiredMonth
    }
  | {
      type: 'SET_OWNER'
      payload: CardOwner
    }
  | {
      type: 'SET_SECURITY_CODE'
      payload: CardSecurityCode
    }
  | {
      type: 'SET_PASSWORD'
      payload: CardPassword
    }
  | {
      type: 'SET_CARD_TYPE'
      payload: CardTypes
    }
  | {
      type: 'SET_ALL'
      payload: CardInfomation
    }
  | {
      type: 'RESET_ALL'
    }

export interface CardInfomation {
  id?: number
  cardNumbers: CardNumbers
  name: CardName
  nickname: CardNickname
  expiredYear: CardExpiredYear
  expiredMonth: CardExpiredMonth
  owner: CardOwner
  securityCode: CardSecurityCode
  passwords: CardPasswords
  cardType: CardType
}

export type CardListAction =
  | {
      type: 'ADD'
      payload: CardInfomation
    }
  | {
      type: 'UPDATE'
      payload: CardInfomation
    }
  | {
      type: 'DELETE'
      payload: CardInfomation
    }
