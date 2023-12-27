# react를 이용한 포트폴리오 사이트 만들기

##### React는 Facebook에서 개발한 JavaScript 라이브러리로, 사용자 인터페이스(UI)를 구축하는 데 사용되는 오픈 소스 라이브러리입니다.

- 컴포넌트 기반 구조

리액트 앱은 작고 재사용 가능한 컴포넌트로 구성됩니다. 이 컴포넌트들은 UI 요소를 표현하며, 각 컴포넌트는 독립적으로 상태(state)와 렌더링을 관리할 수 있습니다.

- 가상 DOM(Virtual DOM)

리액트는 가상 DOM을 사용하여 웹 페이지의 업데이트를 최적화합니다. 변경된 부분만 실제 DOM에 반영하여 성능을 향상시키고 빠른 렌더링을 지원합니다.

<details>
<sub>실제 DOM(Document Object Model)에 대한 가벼운 복사본을 유지하고 이를 사용하여 효율적인 UI 업데이트를 달성하는 방법을 가리킵니다.</sub>

<sub>실제 DOM은 웹 페이지의 구조를 나타내며, 웹 페이지의 요소와 컨텐츠에 대한 프로그래밍적인 조작을 제공합니다. 하지만 실제 DOM은 변경사항을 적용하고 다시 렌더링하는 데 많은 비용과 시간이 소요됩니다. 특히 대규모 또는 동적인 웹 앱에서 이로 인해 성능 문제가 발생할 수 있습니다.</sub>

<sub>가상 DOM은 이러한 문제를 완화하기 위해 사용됩니다. 리액트에서는 가상 DOM을 사용하여 웹 페이지의 현재 상태를 나타내는 가벼운 복사본을 유지합니다. 컴포넌트의 상태 변경이 발생하면 가상 DOM에서 변경된 부분을 계산하고, 이 변경사항을 실제 DOM에 적용하기 전에 최적화된 방식으로 업데이트합니다. 이를 통해 렌더링 업데이트의 비용과 시간을 최소화하고 웹 앱의 성능을 향상시킵니다.</sub>

<sub>가상 DOM은 리액트의 성능 최적화 및 빠른 렌더링을 가능하게 하는 핵심 메커니즘 중 하나이며, 개발자가 웹 앱을 효율적으로 구축하고 유지할 수 있도록 도와줍니다.</sub>

</details>

- 단방향 데이터 흐름

리액트는 데이터의 단방향 흐름을 채택하여 데이터가 어디서 왔는지와 어디로 가는지 예측 가능하게 만듭니다. 이로써 앱의 상태 관리가 더 쉬워집니다.

- 커뮤니티와 생태계

리액트는 큰 커뮤니티와 풍부한 생태계를 가지고 있어 다양한 라이브러리와 도구를 활용할 수 있습니다. Redux, React Router, Material-UI 등과 같은 라이브러리와 플러그인이 사용 가능합니다.

- 모바일 앱 개발

React Native라는 동생 프로젝트를 통해 리액트를 사용하여 iOS 및 Android 모바일 앱을 개발할 수 있습니다.

- 싱글 페이지라 단점있음 검색이 ㄴㄴ

##### React를 사용하면 동적이고 반응형인 웹 애플리케이션을 만들 수 있으며, 컴포넌트를 조합하여 간결하고 모듈식인 코드를 작성할 수 있습니다. 이러한 특징을 활용하여 포트폴리오 웹사이트 또한 효과적으로 구축할 수 있습니다.

## 작업 순서

1. 리액트 설치(리액트의 초기 구조와 파일이 생성)
2. git에 업로드
3. [lenis 사이트](https://github.com/studio-freight/lenis)
4. 리액트 웹 사이트 완성 후 Firebase Hosting 서비스를 사용하여 호스팅

## 설치

1. react 설치 `npx create-react-app .(또는 프로젝트 이름)`
2. gsap 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. lenis 설치 `npm i @studio-freight/lenis`
5. react-router-dom 설치 `npm i react-router-dom`

## 트러블 슈팅

<details>
<summary>Whitespace 에러</summary>
유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면,   
윈도우에서는 줄 하나가 CR(Carriage Return)과 LF, 즉 CRLF로 이루어지는데   
Git이 이 둘 중 어느 쪽으로 선택할지 혼란이 온 것이다.   
   
해결방법   
`git config --global core.autocrlf true` // 시스템 전체에 적용 
⠀  
`git config core.autocrlf true` // 해당 프로젝트에만 적용
</details>

## git 업로드

<details>
<summary>git 업로드</summary>

`git add .`

`git status`

`git commit -m "커밋제목"`

`git push -u origin main`

</details>


### GSAP

- GSAP(GreenSock Animation Platform)는 웹 애니메이션을 만들고 관리하기 위한 JavaScript 라이브러리로, 강력한 애니메이션 기능과 간단한 구문을 제공하여 웹사이트 및 웹 애플리케이션에 멋진 애니메이션 효과를 쉽게 추가할 수 있습니다. 애니메이션의 부드러움과 자연스러움을 유지하는 데 강점을 가지고 있습니다.

### lenis

- lenis.js는 JavaScript로 작성된 오픈 소스 웹 프레임워크입니다. 이 프레임워크는 웹 애플리케이션 및 API를 개발하기 위해 사용됩니다. lenis.js는 경량화되고 빠른 속도로 동작하며, 간단한 문법과 구조를 제공하여 개발자가 쉽게 웹 애플리케이션을 구축할 수 있도록 도와줍니다.

### Firebase

- Firebase는 Google의 클라우드 기반 개발 플랫폼으로, 앱 및 웹 애플리케이션을 빠르게 구축하고 호스팅, 데이터베이스 관리, 사용자 인증, 푸시 알림 등을 제공합니다. 개발자들은 Firebase를 사용하여 개발 생산성을 향상시키고, 실시간 데이터 동기화와 분석을 통해 사용자 경험을 개선할 수 있습니다. Firebase는 서버리스 아키텍처를 채용하여 백엔드 관리 부담을 줄여줍니다.
- Firebase를 사용하여 포트폴리오 사이트를 만들면 간단하고 안정적인 웹 호스팅을 활용할 수 있습니다. Firebase Hosting을 통해 웹 페이지를 호스팅하고 Firebase의 데이터베이스 기능을 사용하여 프로젝트, 작품 또는 경험을 관리하고 표시할 수 있습니다. Firebase의 사용자 인증과 보안 규칙을 활용하여 접근 제어를 설정하고, Firebase Analytics를 통해 방문자 동작을 추적하여 포트폴리오 사이트를 개선할 수 있습니다. Firebase는 개발자에게 강력한 도구를 제공하여 포트폴리오를 프로페셔널하게 관리하고 성공적으로 전시할 수 있도록 돕습니다.

  [Firebase 공식 사이트 바로가기](https://console.firebase.google.com/?hl=ko)

<details>
<summary>Firebase 연동 순서</summary>
   
1. Firebase에서 프로젝트 생성
   
2. 터미널 사용
   
   `firebase login` 후 `Y`
   
   `firebase init` 후 `Y`
   
   해당하는 옵션 선택
   
   `firebase deploy`
</details>
