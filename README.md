# NextJS
- Let check SSR

## Todo
- [x] nextjs-client init
- [x] NextJS + GraphQL/Apollo + SSR, Link, Head

## Install
> yarn create next-app . with-apollo-app with-typescript-app
> yarn add --dev typescript @types/react @types/node
> yarn add @apollo/react-hooks apollo-client apollo-cache-inmemory apollo-link-http isomorphic-unfetch @apollo/react-ssr graphql apollo-boost react-apollo
> yarn add next-with-apollo

## Study
> 1. NextJS + GraphQL-Server/Apollo의 SSR적용 방법.
: HOC방식의 withApollo를 _app.js에 적용과 함께 아래 2가지 중 하나를 선택
: (1) <Query>컴포넌트 사용
: (2) getInitialProps에서 ApolloClient의 Promise비동기로 쿼리 Fetch이후, 컴포넌트의 호출이후 적용
> 2. getInitialProps
: Render될때, 한번 실행되며, 이 한번은  Container + Presenter방식에서 한번 호출되는데, 모듈에 적용되는 하나의 컴포넌트안에서만 실행 된다. 
: 예를들어, Container와 Presenter와 index.tsx의 3가지 컴포넌트에서 index.tsx에서 Container컴포넌트를 호출한다면, 바로 Container의 getInitialProps만 실행되는 점을 주의!
