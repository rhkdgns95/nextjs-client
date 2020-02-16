# NextJS
- Let check SSR

## Todo
- [x] nextjs-client init
- [x] NextJS + GraphQL/Apollo + SSR, Link, Head
- [x] Dynamic Link + Dynamic Routes
- [x] NextJS Server Migrate

## Install
> yarn create next-app . with-apollo-app with-typescript-app
> yarn add --dev typescript @types/react @types/node
> yarn add @apollo/react-hooks apollo-client apollo-cache-inmemory apollo-link-http isomorphic-unfetch @apollo/react-ssr graphql apollo-boost react-apollo
> yarn add next-with-apollo
> yarn add express

## Study
> 1. NextJS + GraphQL-Server/Apollo의 SSR적용 방법.
: HOC방식의 withApollo를 _app.js에 적용과 함께 아래 2가지 중 하나를 선택
: (1) <Query>컴포넌트 사용
: (2) getInitialProps에서 ApolloClient의 Promise비동기로 쿼리 Fetch이후, 컴포넌트의 호출이후 적용
> 2. getInitialProps
: Render될때, 한번 실행되며, 이 한번은  Container + Presenter방식에서 한번 호출되는데, 모듈에 적용되는 하나의 컴포넌트안에서만 실행 된다. 
: 예를들어, Container와 Presenter와 index.tsx의 3가지 컴포넌트에서 index.tsx에서 Container컴포넌트를 호출한다면, 바로 Container의 getInitialProps만 실행되는 점을 주의!
> 3. Login
: NextJS의 Login후 토큰 관리방법은 2가지를 사용할 수 있다.
: 첫째, localState값을 바탕으로 Apollo의 cache에서 token값 유지시키기.
: 둘째, NextJS의 server의 accessToken값을 바탕으로 token값 유지시키기.
: 이전의 React Hooks예제들 에서는 자동로그인기능이 필요하였으므로 첫번째 방법을 사용하였으나, 그렇지 않은경우나 다른 라이브러리를 사용하게 될 경우도 생각해서 NextJS의 Server에 저장시키기로 하였다.