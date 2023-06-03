# 프로젝트 소개

NEXTSTEP 파이널 미션인 페이먼츠 앱 라이브러리, Payssion입니다.  
Payment💳 + Mission🎯 = Payssion🔥    

NEXTSTEP <TDD, 클린 코드 with React> 2기에 참여해 진행한 미션형 프로젝트입니다. 미션의 최종 목표는 페이먼츠 라이브러리를 NPM에 배포하는 것이었으며, 그 과정에서 사용자에게 편리한 UI/UX 제공, 함께 개발하는 동료를 위한 클린한 코드 작성, 라이브러리를 사용하는 개발자를 위한 DX 제공을 고려했습니다. 해당 프로젝트는 배포에 성공해 함께 미션에 참여한 동료 분들이 사용중이며, 실제 사용에 대한 피드백을 바탕으로 꾸준히 개선하고 있습니다.

# 사용법

1. 설치하기

   ```js
   // npm
   npm i payssion

   // yarn
   yarn add payssion
   ```

2. 준비하기 (PayssionProvider)

   ```js
   import { PayssionProvider } from 'payssion'

   function App() {
     return (
       <BrowserRouter>
         <PayssionProvider>
           <Routes>
             {routes.map((route) => (
               <Route key={route.path} path={route.path} element={route.element} />
             ))}
           </Routes>
         </PayssionProvider>
       </BrowserRouter>
     )
   }
   ```

3. 결제 시작하기 (initiatePayment)

- amount, onSuccessAction는 필수입니다.

- initiatePayment 타입

  ```ts
  type InitiatePaymentParams = {
    amount: number
    onSuccessAction: () => void
  }
  ```

- 예시 코드

  ```js
  import { usePayssion } from 'payssion'

  const PaymentComponent = () => {
    const [amount, setAmount] = useState(0)
    const onSuccessAction = () => {
      // 성공 시 동작할 코드
    }
    const { initiatePayment } = usePayssion()
    return (
      <>
        <SomeComponent />
        <PaymentButton onClick={() => initiatePayment({ amount, onSuccessAction })} />
      </>
    )
  }
  ```

4. 결제 모듈 열기

   ```tsx
   import { Payssion, isOpen } from 'payssion'

   const SomeComponent = () => {
     const { isOpen } = usePayssion()

     return (
       <>
         <Header />
         <Description />
         {isOpen && <Payssion />}
       </>
     )
   }
   ```
# 사용 예시
   https://user-images.githubusercontent.com/76519867/236610713-583ae107-90b6-4387-ba38-99ac2f8e9215.mov

# 고민의 흔적들

## [컴포넌트 재사용성](https://alwayshere.vercel.app/blog/20230505)을 높이기 위한 고민
기존 개발 방식은 페이지를 기준으로 Top-Down 방식으로 작업을 했다면, 이 프로젝트에서는 개발을 시작하기 전에 반복 사용 가능한 컴포넌트를 파악하고 작은 컴포넌트부터 재사용 가능하게 쌓아 올리면서 Bottom-Up 방식으로 개발을 진행했습니다. [Thinking in react](https://ko.legacy.reactjs.org/docs/thinking-in-react.html)문서를 바탕으로 1단계: UI를 컴포넌트 계층으로 나누기, 2단계: React로 정적인 버전 만들기, 3단계: UI state에 대한 최소한의 (하지만 완전한) 표현 찾아내기, 4단계: State가 어디에 있어야 할 지 찾기 이렇게 4가지 단계로 컴포넌트를 설계하도록 했습니다.

특히 페이먼츠 앱 특성상 폼 제어를 해야하는 상황이 많았는데, CDD(Component Driven Development)에 기반해 UI를 구성하면서 Input 컴포넌트를 모든 폼에서 재사용할 수 있었습니다. CDD 기반 접근법은 초기에 시간이 소요되는 것처럼 느껴졌지만 시간이 지날수록 컴포넌트의 재사용성을 바탕으로 확장성이 높아진다고 느꼈습니다. 특정 컴포넌트에서는 하위 컴포넌트를 종속하지 않으면서 독립적으로 동작하는 합성 컴포넌트를 도입할 수도 있었습니다. 이를 통해 각 컴포넌트는 재사용이 가능한 독립적인 모듈로 동작했으며 추후에 테스트를 도입할 때에도 이점이 있을 것이라 판단했습니다.

### 컴포넌트 계층 분리 예시

  <img src="public/컴포넌트분리.png" width="400">

### 예시 코드

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

## 꼭 필요한 상태인가?
상태가 많아진다는 것은 관리 포인트가 늘어나는 것이라는 생각을 바탕으로 기능이 동작하는 '최소한의 상태'로 만들고자 했습니다. 예를들어 아래 가상 키보드의 경우 모달 종료를 위한 ref 상태를 제외하고, 어떤 상태도 가지고 있지 않습니다. 대신 props로 전달받는 onKeyPress, 도메인 함수인 getRandomVirtualDigits 등의 값을 이용해 상태는 최소화하면서 기능이 동작하도록 작성했습니다. 이를 통해 컴포넌트의 재사용성 증가라는 추가 장점을 얻을 수 있었습니다.

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

## 효율적인 UI 테스트를 위한 스토리북 사용
컴포넌트 기반의 개발 방식을 적용하며, 스토리북을 사용하여 컴포넌트의 독립성을 확보하고, 시각적으로 테스트하고 문서화할 수 있었습니다. 이를 통해, 각 컴포넌트가 개별적으로 기대한대로 동작하는지 확인할 수 있었으며, 디버깅 과정도 단순화되었습니다. 또한 각 컴포넌트의 다양한 상태를 손쉽게 시뮬레이션할 수 있어, UI의 각 요소가 상호작용하는 방식을 명확하게 이해할 수 있었습니다.

개별적인 컴포넌트 뿐만 아니라 컴포넌트를 조합한 페이지 섹션을 제공하여, 페이지 단위에서 어떻게 UI가 동작하는지 확인할 수 있도록 했습니다. 이를 크로마틱을 사용해서 배포함으로써 사용자가 라이브러리를 사용하기 전에 미리 동작 방식을 쉽게 확인할 수 있었습니다.

## 확장성을 고려한 컴포넌트 패턴 도입
Form 컴포넌트는 여러곳에서 재사용될 수 있으며, 언제든 요구 사항에 따라 변화할 수 있는 컴포넌트입니다. 하지만 Prop으로 데이터를 넘겨주는 방식으로 구현하게 된다면, 요구 사항이 변화할 때마다 컴포넌트 내부 코드를 변경하고, Prop에 넘겨주는 데이터도 추가되는 등의 불편함이 있을 수 있습니다. 그래서 합성 컴포넌트를 사용해 Form 내부에 들어가는 코드를 컴포넌트 사용 부분에서 관리할 수 있도록 했습니다. 이를 통해 Form의 요구 사항이 변경되더라도, 컴포넌트의 내부 구현이 아니라 사용 부분에서 수정을 해서 사용할 수 있습니다.

### 예시 코드
```tsx
// 사용 부분
    <CardDetailsForm>
      <CardDetailsForm.PageTitle buttonElement={<BackButton />} title="카드 목록으로 돌아가기" />
      <CardDetailsForm.BigCard
        onClickDeleteButton={onClickDeleteButton}
        cardNumbers={cardNumbers}
        cardName={cardName}
        cardOwner={cardOwner}
        cardExpiredDate={cardExpiredDate}
        cardType={cardType}
      />
      <CardDetailsForm.CardAliasInput inputRef={nicknameRef} defaultValue={cardNickname} />
      <CardDetailsForm.NavigationButton
        additionalClassNames="mt-50"
        onBeforeNavigate={handlePreNavigation}
        to="CardList"
        text="다음"
      />
    </CardDetailsForm>
    
// 내부 구현
const CardDetailsForm = ({ children }: PropsWithChildren) => {
  const bigCard = getCardDetailsFormSubElement(children, BigCard)
  const pageTitle = getCardDetailsFormSubElement(children, PageTitle)
  const NavigationButton = getCardDetailsFormSubElement(children, NavigationTextButton)
  const cardAliasInput = getCardDetailsFormSubElement(children, CardAliasInput)
  
  return (
    <CustomPayssionApp>
      <Title>{pageTitle}</Title>
      {bigCard}
      <InputContainer
        css={{
          flexCenter: 'center',
          width: '100%',
        }}
      >
        {cardAliasInput}
      </InputContainer>
      {NavigationButton}
    </CustomPayssionApp>
  )
}

CardDetailsForm.PageTitle = PageTitle
CardDetailsForm.BigCard = BigCard
CardDetailsForm.NavigationButton = NavigationTextButton
CardDetailsForm.CardAliasInput = CardAliasInput
```

## Context API 사용 시 불필요한 리렌더링 최적화
페이지 간의 공유되어야 하는 몇 가지 상태들이 존재했습니다. 해당 프로젝트에서는 모달, 카드, 카드 리스트 상태가 여러 페이지에서 공유되어야 하는 상황이었습니다. 그래서 전역 상태 관리 도구가 필요했습니다. 서드파티 라이브러리라는 선택지도 존재했지만, Context API + useReducer를 활용하기로 결정했습니다. 그 이유는 관리되어야 하는 상태의 수와 복잡도가 높지 않았기 때문입니다. 무분별하게 서드파티 라이브러리를 사용하게될 경우 추후에 마이그레이션이 필요한 상황이나 유지보수를 하는 상황에서 더욱 어려움이 있을 것이라고 판단하고 리액트만을 사용해서 해결하는 것으로 결정했습니다.

Context API를 이용해 전역에서 관리하는 카드 상태에 대해 불필요한 리렌더링의 최적화를 했습니다. 카드 상태를 이용하는 카드 프리뷰 컴포넌트와 카드 상태를 변경하는 폼 컴포넌트가 분리되어 있었습니다. 그래서 카드의 상태를 변경할 때마다 폼 컴포넌트에서는 불필요한 리렌더링이 발생하는 상황이었습니다. 이를 해결하기 위해 상태 컨텍스트와 변경 컨텍스트로 분리해 Provider를 통해 각각 제공하는 방식으로 아키텍처를 재구성했습니다. 이렇게 분리했을 경우, 상태가 변경될 때는 프리뷰 컴포넌트만 리렌더링이 발생하고, 폼 컴포넌트는 Reducer 함수를 참조하기 때문에 컨텍스트의 Value가 변경되지 않았다고 판단해 리렌더링이 발생하지 않습니다. 이를 통해, 컴포넌트 간의 상태 공유와 불필요한 리렌더링 문제를 해결했습니다. 이 과정에서 상태 관리 전략의 개선을 통해 컴포넌트 간의 의존성을 줄이고, 효율적인 컴포넌트 구조를 설계하는 것에 더 깊은 이해를 얻을 수 있었습니다.

## 커스텀 훅을 활용한 코드의 관심사 분리
코드의 관심사를 분리하고 재사용성을 높이기 위해 커스텀 훅을 적극적으로 활용했습니다. 특히 폼, 모달, API 호출 등 반복적으로 사용되는 로직에 대해 커스텀 훅을 적용했습니다. 이를 통해 컴포넌트가 UI라는 단일 책임에 집중할 수 있도록 했으며, 비즈니스 로직을 숨김으로써 코드의 가독성이 증가했습니다. 또한 hook 폴더를 컴포넌트와 Co-Location 되도록 위치시켰습니다. 이를 통해 유지보수에 필요한 코드를 쉽게 찾을 수 있도록 했습니다.

### 커스텀 훅 예시 코드
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
### Co-Location 예시
  CardAdd  
  ┣ components  
  ┃ ┣ CardForm  
  ┃ ┃ ┣ components  
  ┃ ┃ ┣ hooks --> CardForm 내부 컴포넌트에 대한 커스텀 훅  
  ┃ ┃ ┣ CardForm.tsx  
  ┃ ┗ index.ts  
  ┣ hooks --> CardAdd 컴포넌트에 대한 커스텀 훅  
  ┣ CardAdd.tsx
  
## 비제어 컴포넌트를 활용한 복잡한 Form 관리
카드 추가 페이지에서 전체 제어 컴포넌트 -> 부분 비제어 컴포넌트 -> 전체 비제어 컴포넌트로 리팩토링했습니다. 초기에는 가장 편하게 접했던 제어 컴포넌트를 사용했으나, 코드를 분석하면서 보안코드와 카드 비밀번호 입력에 대해서는 카드 컴포넌트에 즉각적으로 반영이 되지 않아도 되는 것을 파악했습니다. 그래서 해당 입력에 대해서는 비제어 컴포넌트로 동작하도록 수정했습니다. 

이후 카드의 상태가 보여지는 카드 컴포넌트와 카드의 상태를 변경하는 폼 컴포넌트가 분리되어있고, 폼 컴포넌트에서 즉각적인 유효성 검사가 필요하지 않다는 것을 파악했습니다. Context API와의 조합으로 전체 입력에 대해서 비제어 컴포넌트를 활용할 수 있도록 수정했습니다. 이를 통해 제어 컴포넌트와 비제어 컴포넌트에 대해서 깊게 이해할 수 있었으며 추후 폼 제어의 방향성을 잡는 데에 기준점을 가질 수 있게 되었습니다. 해당 경험을 블로그로 정리해서 공유 했습니다. [자세히](https://velog.io/@keem/이-값은-이제-제껍니다)

### All 제어 컴포넌트

- 폼 제어가 필요한 Input은 카드 번호, 만료일, 카드 소유자, 보안코드, 비밀번호 다섯가지입니다.
- 처음에는 익숙했던 제어 컴포넌트로 모든 폼 제어를 완료했습니다.

### 부분적 비제어 컴포넌트

- 리팩토링을 진행하며 보안 코드, 비밀번호 상태값은 다음 버튼을 누를 때에만 필요하다는 것을 인지했습니다.
- 보안 코드, 비밀번호에 대해서는 비제어 컴포넌트로 관리했습니다.

### All 제어 컴포넌트

- 카드 번호, 만료일, 카드 소유자 정보 또한 상태값이 폼 내부에서 필요한 것이 아니라 외부 컴포넌트(카드)에서 필요하나는 것을 인지했습니다.
- 모든 폼 제어를 비제어로 시도하기 위해 Context API와 결합해 구현했습니다.
- 아래 코드는 CardExpiredDate에서 Context API와 비제어를 사용한 예시입니다.

  - CardExpiredDate 컴포넌트에서 사용되는 handleInputChange는 결국 useCardInfo에서 제공하는 handleExpiredDate 함수이며, 이 함수는 cardDispatch를 수행합니다.
  - 이를 통해 전역 Context에 만료일 상태값을 저장하며, Dispatch 컨텍스트만 소비하기 때문에 리렌더링은 발생하지 않습니다.

  ```tsx
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

  // useCardExpiredDate.ts
  const useCardExpiredDate = () => {
    const { handleExpiredDate } = useCardInfo()
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const {
        dataset: { name },
        value,
      } = event.target

      switch (name) {
        case 'YY':
          if (value.length === 2 && !isYearValid(Number(value))) {
            alert('유효기간이 만료되었습니다.')
            event.target.value = ''
            return
          }
          handleExpiredDate({ value, yymm: name })
          break
        case 'MM':
          if (Number(value) > 12 || Number(value) < 0) {
            alert('월은 1이상 12이하여야 합니다.')
            event.target.value = ''
            return
          }
          handleExpiredDate({ value, yymm: name })
          break
      }
    }

    return { handleInputChange }
  }

  // useCardInfo.ts
  const useCardInfo = () => {
    const cardDispatch = useContext(CardDispatchContext)

    const handleExpiredDate = ({ value, yymm }: HandleExpiredDateProps) => {
      if (!isNumber(value)) return
      switch (yymm) {
        case 'YY':
          cardDispatch({
            type: 'SET_EXPIRED_YEAR',
            payload: value,
          })
          break
        case 'MM':
          cardDispatch({
            type: 'SET_EXPIRED_MONTH',
            payload: value,
          })
          break
      }
    }

    // ...

    return {
      handleExpiredDate,
      // ...
    }
  }
  ```

## NPM 배포 시 발생한 문제 해결
NPM 배포를 위한 빌드 파일 생성 과정에서 Rollup을 활용하여 ESM, CJS 모듈 환경을 고려했습니다. 또한 TypeScript를 지원했습니다. Create React App(CRA)를 사용하며 절대 경로를 사용하기 위해 Craco를 통해 오버라이드하는 등의 설정을 추가했기 때문에, 초기에 라이브러리용 빌드 파일 생성 과정에 어려움이 있었습니다. 하지만 Rollup을 사용해 절대 경로를 Craco의 설정과 맞춰주고, 여러 모듈 환경을 대응하는 빌드 파일을 만들어 해결했습니다. 이를 통해 라이브러리 사용자의 환경에 따라 알맞은 모듈 환경을 제공할 수 있었으며, 정적 타입 제공을 통해 타입스크립트를 사용하는 경우에도 라이브러리를 사용할 수 있게 되었습니다. 라이브러리 배포를 위한 다양한 설정에 대해 배우고 이를 실제 프로젝트에 적용하는 경험을 할 수 있었습니다.

CSS 클래스 이름 중복 문제로 인해 사용자가 라이브러리 사용 시 UI가 깨지는 문제가 발생했습니다. 처음에는 CSS 모듈을 사용해서 해결하고자 했으나 모듈 환경 설정, 각 컴포넌트 코드 수정 등이 필요하다는 것을 파악해서 CSS-In-JS를 사용하는 것과 도입 비용이 크게 다르지 않다고 판단했습니다. 그래서 Near Zero Runtime 라이브러리인 Stitches를 이용해 해시된 클래스 이름을 사용함으로써 문제를 해결할 수 있었습니다.

## 사용자에게 어떤 값을 제공할지에 대한 고민

[issues-1](https://github.com/herekim/payssion/issues/1)

- PayssionProvider, Payssion, usePayssion 세 가지로 분리해서 각각을 유저에게 전달하도록 했습니다.
- PayssionProvider는 페이먼츠 앱을 사용할 컴포넌트를 감싸는 Provider 함수입니다.
- Payssion은 실제 사용 컴포넌트입니다.
- usePayssion은 PayssionProvider에서 제공하는 값 중에 유저가 실제 필요한 값만 제공하는 커스텀 훅입니다. initiatePayment, isOpen, closePayment 세 가지의 값을 제공합니다.
