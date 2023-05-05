# payssion

NEXTSTEP 파이널 미션인 페이먼츠 앱 라이브러리, Payssion입니다.  
Payment💳 + Mission🎯 = Payssion🔥

# 사용법

# 프로젝트 요약

1. CDD에 따라 UI를 구성하고 재사용 가능한 컴포넌트를 작성하였습니다.
2. 스토리북을 통해 컴포넌트 별 상호작용 테스트를 했습니다.
3. Context API를 이용해 전역 상태 관리와 계층을 재구성했습니다.
4. 비제어 컴포넌트를 이용해 Form을 제어했습니다.
5. NPM 배포를 통해 타 앱에서 페이먼츠 라이브러리로 사용했습니다.

# 고민의 흔적들

## 1. 컴포넌트와 CDD

### 더 깊게 알아본 재사용 가능한 컴포넌트

- '재사용 가능한 컴포넌트' 라는 당연시해서 사용되는 문장을 키워드로 분리하고, 곱씹어보면서 함의를 고민했습니다. [문서 링크](https://bush-quarter-3e6.notion.site/3d115a51b3a94a1789c11453d3d3b642)(노션 업로드 이슈로 인해 블로그 링크로 수정할 예정)
- (예시 코드)

### UI와 로직의 관심사 분리

- 거의 모든 컴포넌트에 대한 로직을 훅으로 분리해 Headless UI 하게 구성했습니다.

  ```tsx
  const CardAdd = () => {
    const {
      numbersRef,
      passwordRef,
      expiredDateRef,
      ownerRef,
      securityCodeRef,
      openValidToast,
      setOpenValidToast,
      onBeforeNavigate,
      isValidCardInfo,
    } = useCardAdd()

    return (
      //...
    )
  }
  ```

- 커스텀 훅은 재사용성을 고려해 가능한 가까운 곳에 위치시키고자 했습니다.
  CardAdd  
  ┣ components  
  ┃ ┣ CardForm  
  ┃ ┃ ┣ components  
  ┃ ┃ ┣ hooks --> CardForm 내부 컴포넌트에 대한 커스텀 훅  
  ┃ ┃ ┣ CardForm.tsx  
  ┃ ┗ index.ts  
  ┣ hooks --> CardAdd 컴포넌트에 대한 커스텀 훅  
  ┣ CardAdd.tsx

### 꼭 필요한 상태인가?

- 상태가 많아진다는 것은 관리 포인트가 늘어나는 것이라는 생각을 바탕으로 기능이 동작하는 '최소한의 상태'로 만들고자 했습니다.

  - 예를들어 아래 가상 키보드의 경우 모달 종료를 위한 ref 상태를 제외하고, 어떤 상태도 가지고 있지 않습니다.
  - 대신 props로 전달받는 onKeyPress, 도메인 함수인 getRandomVirtualDigits 등의 값을 이용해 상태는 최소화하면서 기능이 동작하도록 작성했습니다.
  - 이를 통해 컴포넌트의 재사용성이 증가라는 추가 장점을 얻을 수 있었습니다.

  ```tsx
  const VirtualKeyboard = ({ onKeyPress }: VirtualKeyboardProps) => {
    const { modalRef } = useVirtualKeyboard()

    return (
      <div ref={modalRef}>
        <BottomSheetContainer>
          <DigitButtonContainer>
            {getRandomVirtualDigits().map((digit) => (
              <DigitButton key={digit} onClick={() => onKeyPress(String(digit))}>
                {digit}
              </DigitButton>
            ))}
          </DigitButtonContainer>
        </BottomSheetContainer>
      </div>
    )
  }
  ```

### CDD란 무엇일까?

- [React로 사고하기](https://ko.legacy.reactjs.org/docs/thinking-in-react.html)문서를 바탕으로 1단계: UI를 컴포넌트 계층으로 나누기, 2단계: React로 정적인 버전 만들기, 3단계: UI state에 대한 최소한의 (하지만 완전한) 표현 찾아내기, 4단계: State가 어디에 있어야 할 지 찾기 이렇게 4가지 단계로 컴포넌트를 설계하도록 했습니다.
- Form을 1단계 컴포넌트 계층으로 나눈다면?

  <img src="public/컴포넌트분리.png" width="400">

- 이를 코드로 구현한다면?

  ```tsx
  // InputTitle
  const InputTitle = ({ children }: PropsWithChildren) => {
    return <StyledInputTitme>{children}</StyledInputTitme>
  }

  // Input.tsx
  const Input = forwardRef(({ type = 'text', css, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <InputBasic ref={ref} type={type} css={{ ...css }} {...props} />
  })

  // InputBox.tsx
  const InputBox = ({ children, css }: PropsWithChildren<InputBoxProps>) => {
    return <StyledInputBox css={{ ...css }}>{children}</StyledInputBox>
  }

  // CardExpiredDate.tsx
  const CardExpiredDate = ({ expiredDateRef }: CardExpiredDateProps) => {
    const { handleInputChange } = useCardExpiredDate()

    return (
      <InputContainer>
        <InputTitle>만료일</InputTitle>
        <InputBox css={{ width: '50%' }}>
          <Input ref={expiredDateRef.first} placeholder="MM" data-name="MM" onInput={handleInputChange} maxLength={2} />
          <Input
            ref={expiredDateRef.second}
            placeholder="YY"
            data-name="YY"
            onInput={handleInputChange}
            maxLength={2}
          />
        </InputBox>
      </InputContainer>
    )
  }

  // CardAdd.tsx (CardForm 역할)
  const CardAdd = () => {
    const {
      //...
    } = useCardAdd()

    return (
      <PayssionApp>
        //...
        <CardForm>
          <CardForm.CardNumbers />
          <CardForm.CardExpiredDate />
          <CardForm.CardOwner />
          <CardForm.CardSecurityCode />
          <CardForm.CardPassword />
        </CardForm>
        //...
      </PayssionApp>
    )
  }
  ```

## 2. 스토리북 상호작용 테스트

### 스토리북에 넣을 컴포넌트 기준

1. Props에 따라서 UI가 달라지는 컴포넌트
   1. Card
      - PreviewCard
      - BigCard
      - SmallCard
   2. Button
      - CardTypeButton
      - NavigationButton
   3. Modal
      - CardTypeSelectionModal
      - VitualKeyboard
   4. Toast
   5. Tooltip
2. 유저와의 상호작용을 통해 UI가 달라지는 컴포넌트
   1. Input
   2. CardForm
      - CardNumbers
      - CardExpiredDate
      - CardOwner
      - CardPassword
      - CardSecurityCode
3. 컴포넌트의 조합으로 생성된 페이지
   1. /cart-add
   2. /card-completed
   3. /card-list
   4. /card-update

- Context API를 테스트 하려면? (채울 예정)
- Router를 테스트 하려면? (채울 예정)
- 인터렉션을 테스트 하려면? (채울 예정)
- 스토리북 내에서 Jest, Cypress 등을 테스트 하려면? (채울 예정)
- [레퍼런스](https://ui.toast.com/posts/ko_20220111)

## 3. Context API를 활용한 전역 상태 관리와 계층 재구성

## 4. 제어 & 비제어 컴포넌트

## 5. NPM에 라이브러리 배포
