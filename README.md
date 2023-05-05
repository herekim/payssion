# payssion

Payment💳 + Mission🎯 = Payssion🔥

# 목표

1. CDD(Component Driven Development)에 따라 UI를 구성하고 재사용 가능 컴포넌트를 작성한다.
2. 컴포넌트를 스토리북에 올려 컴포넌트 별로 테스트 가능하게 한다.
3. Context API + 비제어 컴포넌트를 사용해 Form을 핸들링한다.
4. NPM 배포를 통해 타 앱에서 페이먼츠 라이브러리로 활용한다.
5.

# 고민한 흔적들 (꾸준히 업데이트 예정)

## 1. CDD에 따라 UI구성 및 컴포넌트 작성

## 2. 꼭 필요한 상태인가?

- e.g. 가상 키보드

## 3. 스토리북 상호작용 테스트

- 스토리북에 넣을 컴포넌트 기준
  1. Props에 따라서 UI가 달라지는 컴포넌트
     1. Card
        - PreviewCard ✅
        - BigCard ✅
        - SmallCard ✅
     2. Button
        - CardTypeButton ✅
        - NavigationButton ✅
     3. Modal
        - CardTypeSelectionModal ✅
        - VitualKeyboard ✅
     4. Toast ✅
     5. Tooltip ✅
  2. 유저와의 상호작용을 통해 UI가 달라지는 컴포넌트
     1. Input ✅
     2. CardForm ✅
        - CardNumbers ✅
        - CardExpiredDate ✅
        - CardOwner ✅
        - CardPassword ✅
        - CardSecurityCode ✅
  3. 컴포넌트의 조합으로 생성된 페이지
     1. /cart-add ✅
     2. /card-completed ✅
     3. /card-list ✅
     4. /card-update ✅
- Context API를 테스트 하려면?
- Router를 테스트 하려면?
- 인터렉션을 테스트 하려면?
- 스토리북 내에서 Jest, Cypress 등을 테스트 하려면?
- 참고
  - https://ui.toast.com/posts/ko_20220111

## 4. 재사용 가능한 컴포넌트

## 5. 제어 & 비제어 컴포넌트

## 6. Context API를 활용한 전역 상태 관리와 계층 재구성

## 7. 테스트에 대한 고찰

## 8. 기타

- ref를 이용한 Context + 비제어 컴포넌트로 만든 폼의 가상 키보드 붙이기
- NPM 배포하기
