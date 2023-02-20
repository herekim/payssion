import { ChangeEvent } from 'react'

interface CardPasswordProps {
  password: { first: string; second: string }
  handleChange(event: ChangeEvent<HTMLInputElement>): void
}

// Todo: focus 관리하는 커스텀 훅 만들기 (재사용 가능하게)
const CardPassword = ({ password, handleChange }: CardPasswordProps) => {
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <div className="input-password-container">
        <input
          className="input-basic w-15"
          type="password"
          value={password.first}
          data-name="first"
          onChange={handleChange}
        />
        <input
          className="input-basic w-15"
          type="password"
          value={password.second}
          data-name="second"
          onChange={handleChange}
        />
        <input
          className="input-basic w-15 bg-white"
          type="password"
          value="x"
          readOnly
        />
        <input
          className="input-basic w-15 bg-white"
          type="password"
          value="x"
          readOnly
        />
      </div>
    </div>
  )
}

export default CardPassword
export const CardPasswordType = (
  <CardPassword
    password={{ first: '', second: '' }}
    handleChange={(event: ChangeEvent<HTMLInputElement>) => {
      console.log(event)
    }}
  />
).type
