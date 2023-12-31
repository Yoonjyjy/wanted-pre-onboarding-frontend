# 원티드 프리온보딩 프론트엔드 - 선발 과제

## 지원자 성명

윤지영

## 프로젝트의 실행 방법

```sh
# npm

npm install
npm start

```

http://localhost:3000/ 에서 실행

## 과제 내용 및 데모 영상

- 과제 수행 과정에서 지원자분들의 자율성과 창의력을 발휘하는 것을 기대하고 존중합니다. 다만, 아래 과제 안내에 적힌 가이드라인들은 모두 정확히 준수해주시기를 바랍니다.
- 가이드라인에 명시된 `test-id` 속성이 제대로 부여되지 않은 경우 구현이 안된 것으로 판단됩니다.
- 가이드라인에 명시된 사항 외에는 자유롭게 진행해주셔도 됩니다.

### :: 1. 로그인 / 회원가입

- `/signup` 경로에 회원가입 기능을 개발해주세요
- `/signin` 경로에 로그인 기능을 개발해주세요
- 페이지 안에 이메일 input, 비밀번호 input, 제출 button이 포함된 형태로 구성해주세요

  - 이메일 input에 `data-testid="email-input"` 속성을 부여해주세요
  - 패스워드 input에 `data-testid="password-input"` 속성을 부여해주세요
  - 회원가입 페이지에는 회원가입 button에 `data-testid="signup-button"` 속성을 부여해주세요
  - 로그인 페이지에는 로그인 button에 `data-testid="signin-button"` 속성을 부여해주세요

  ```html
  <!-- 예시 -->
  <input data-testid="email-input" />
  <input data-testid="password-input" />
  <button data-testid="signup-button">회원가입</button>
  ```

- 두 페이지의 UI는 동일해도 무방합니다.
- 회원가입과 로그인 페이지의 버튼에 부여되는 test-id가 다른 것에 유의해주세요

#### Assignment 1

- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요

  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행해주세요 (e.g. 비밀번호 유효성 검사에 특수문자 포함 등의 새로운 조건을 추가하는 행위, 비밀번호 확인 조건을 추가하는 행위 등은 지양해주세요)

- 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요
- 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

#### Assignment 2

- 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요

#### Assignment 3

- 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요

  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - 응답받은 JWT는 로컬 스토리지에 저장해주세요

 <1, 3번 조건 - 유효성 검사, 로그인 후 todo로 이동>
 
 <video controls>
  <source src="https://github.com/Yoonjyjy/wanted-pre-onboarding-frontend/assets/41252790/b500081d-a510-403f-8ae0-15c33fecf1da" type="video/mp4">
 </video>
<video src="https://github.com/Yoonjyjy/wanted-pre-onboarding-frontend/assets/41252790/b500081d-a510-403f-8ae0-15c33fecf1da" type="video/mp4"></video>


 <2번 조건 - 회원가입 성공 시 /signin으로 이동>

 <video controls>
  <source src="https://github.com/Yoonjyjy/wanted-pre-onboarding-frontend/assets/41252790/59119839-c44c-4ad3-a6ee-798a82854b7a" type="video/mp4">
 </video>
<video src="https://github.com/Yoonjyjy/wanted-pre-onboarding-frontend/assets/41252790/59119839-c44c-4ad3-a6ee-798a82854b7a" type="video/mp4"></video>


#### Assignment 4

- 로그인 여부에 따른 리다이렉트 처리를 구현해주세요

  - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요

 <4번 조건 - 로그인 여부에 따른 리다이렉트 처리>
 
 <video controls>
  <source src="https://github.com/Yoonjyjy/wanted-pre-onboarding-frontend/assets/41252790/19e3f4ea-7885-4208-b4c2-b055d0f3ea9c" type="video/mp4">
 </video>
<video src="https://github.com/Yoonjyjy/wanted-pre-onboarding-frontend/assets/41252790/19e3f4ea-7885-4208-b4c2-b055d0f3ea9c" type="video/mp4"></video>

---

### :: 2. TODO LIST

#### Assignment 5

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요
- TODO는 `<li>` tag를 이용해 감싸주세요

```html
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 1</span>
  </label>
</li>
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 2</span>
  </label>
</li>
```
 
 <5번 조건 - 투두 목록 조회, 내용 및 완료 여부 표시>
 
 <video controls>
  <source src="https://github.com/Yoonjyjy/wanted-pre-onboarding-frontend/assets/41252790/8bd7f3d9-575f-47a6-b6f3-aa5f83a6b470" type="video/mp4">
 </video>
<video src="https://github.com/Yoonjyjy/wanted-pre-onboarding-frontend/assets/41252790/8bd7f3d9-575f-47a6-b6f3-aa5f83a6b470" type="video/mp4"></video>

#### Assignment 6

- 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요

  - TODO 입력 input에는 `data-testid="new-todo-input"` 속성을 부여해주세요
  - TODO 추가 button에는 `data-testid="new-todo-add-button"` 속성을 부여해주세요

    ```html
    <input data-testid="new-todo-input" />
    <button data-testid="new-todo-add-button">추가</button>
    ```

- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
- TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다.

#### Assignment 7

- TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.
 
 <6, 7번 조건 - 투두 추가 및 새로고침 시에도 유지, 완료 여부 수정>
 
 <video controls>
  <source src="https://github.com/Yoonjyjy/wanted-pre-onboarding-frontend/assets/41252790/a2969aa3-be79-4f08-a073-82f3133a2318" type="video/mp4">
 </video>
<video src="https://github.com/Yoonjyjy/wanted-pre-onboarding-frontend/assets/41252790/a2969aa3-be79-4f08-a073-82f3133a2318" type="video/mp4"></video>

#### Assignment 8

- TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요

  - 수정 버튼에는 `data-testid="modify-button"` 속성을 부여해주세요
  - 삭제 버튼에는 `data-testid="delete-button"` 속성을 부여해주세요

    ```html
    <li>
      <label>
        <input type="checkbox" />
        <span>TODO 1</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button">삭제</button>
    </li>
    ```

#### Assignment 9

- 투두 리스트의 삭제 기능을 구현해주세요

  - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요
 
 <8, 9번 조건 - 수정 및 삭제 버튼 구현, 삭제 기능 시연>
 
 <video controls>
  <source src="https://github.com/Yoonjyjy/wanted-pre-onboarding-frontend/assets/41252790/3b37dff5-dbcf-45ec-a546-508677445675" type="video/mp4">
 </video>
<video src="https://github.com/Yoonjyjy/wanted-pre-onboarding-frontend/assets/41252790/3b37dff5-dbcf-45ec-a546-508677445675" type="video/mp4"></video>

#### Assignment 10

- 투두 리스트의 수정 기능을 구현해주세요

  - TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
  - 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
  - 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
    - 수정 input창에는 `data-testid="modify-input"` 속성을 부여해주세요
  - 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
    - 제출버튼에는 `data-testid="submit-button"` 속성을 부여해주세요
    - 취소버튼에는 `data-testid="cancel-button"` 속성을 부여해주세요
  - 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
  - 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요

    ```html
    <input data-testid="modify-input" />
    <button data-testid="submit-button">제출</button>
    <button data-testid="cancel-button">취소</button>
    ```
 
 <10번 조건 - 수정 모드, 제출, 취소 기능 시연>
 
 <video controls>
  <source src="https://github.com/Yoonjyjy/wanted-pre-onboarding-frontend/assets/41252790/9e2b54c0-8d5b-4323-8a7c-28b443dbe302" type="video/mp4">
 </video>
<video src="https://github.com/Yoonjyjy/wanted-pre-onboarding-frontend/assets/41252790/9e2b54c0-8d5b-4323-8a7c-28b443dbe302" type="video/mp4"></video>

