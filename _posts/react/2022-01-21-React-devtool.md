---
title: "컴포넌트 성능 최적화 하는법"
excerpt: "크롬 개발자 도구와 함께!"
date: 2022-01-21
categories: React
last_modified_at: 2022-01-21
---

컴포넌트가 느려지는 원인의 대표적인 예시로  
바뀐것 들만 리렌더링할것을 전부 리렌더링하여 느려질때가 있다.

상황을 살펴보는방법!  
크롬에서 f12를 눌러 components 말고도 Profiler라는 탭을 활용 한다.  
특정한 기능을 녹화를 해 그 특정한 기능의 성능을 모니터링 할 수 있다.

![image](https://user-images.githubusercontent.com/91597005/150476957-f810bd71-bcea-4525-8b6a-e16c4025406a.png)

이런식으로 분석 결과가 나오는데,

![image](https://user-images.githubusercontent.com/91597005/150477047-2d9768a0-9329-4421-99af-185efea08105.png)

Render duration은 렌더링에 소요된 시간(컴퓨터 성능에 따라 다름!)

<img width="414" alt="image" src="https://user-images.githubusercontent.com/91597005/150479545-0d002010-1e1f-42c4-b841-889c9f968598.png">

Rank chart라는 차트 아이콘을 클릭하면 이렇게 리렌더링된 컴포넌트를 정렬해 오래걸린것 부터 먼저 보여준다.

---

# 최적화 시키는 방법

1. React.memo 사용
2. useState의 함수형 업데이트 기능 or useReducer (불변성 매우 중요!!)
3. windowing을 사용한 렌더링 최적화

---

## `React.memo`

컴포넌트를 만들고 export default 뒤에 `React.memo(컴포넌트 이름);` 을 넣어주면 된다!

---

## `useState의 함수형 업데이트 기능 or useReducer`

이러한 경우에는 또 다른것이 있다.  
앞서 React.memo를 지정해둔것은 좋지만 최신상태의 값이나 배열을 참조하는 함수는 리렌더링시 계속 새로 만들어지는데, 이럴때 useState와 useReducer를 사용하기!

1. useState

참고한 책에서는 **함수형 업데이트**라는것을 활용하는데,
함수형 업데이트라는것은 처음들어보기에 조사해보니,

- setState에 값이 아니라 어떻게 업데이트를 할것인지 정의하는 함수를 넣는것!!!!

```
const [name1 , setName] = useState(값들이 들어있는 배열함수);
    ....
setName(name1 => name1.concat(수정된배열));
```

이런식으로 넣어준다.

---

2. useReducer

useState보다 좀 많이 고쳐야하지만 상태를 업데이트하는 로직을 모아 따로 보관 할수있다는점이 장점이다.

```
const [배열, dispatch] = useReducer(Reducer, undefined, 값들이 들어있는 초기배열함수)
```

두번째에 undefined를 넣어주고 초기상태를 세번째로 지정해주면 컴포넌트 맨 처음 렌더링때만 초기상태함수가 호출된다.

---

## `windowing을 사용한 렌더링 최적화`

windowing중에선 react - virtualized 와 react - window 라이브러리가 있다.  
후반의 링크의 글처럼, 무한스크롤에서 렌더링이 너무 오래걸리면 사용하는게좋다.

라이브러리에서 제공하는 List 컴포넌트를 사용해 최적화하기!

알아야할것은 작업하기전, 각 항목의 실제 크기를 알아야한다.

```
import [List] from 'react-virtualized'

.....

<List
    width ={찾은 전체가로길이}
    height={찾은 전체 세로길이}
    roewCount={배열.length}
    rowHeight={리스트의 각각 항목의 높이}
    rowRenderer={렌더링시 쓰는 함수} list= {배열}/>

```

사용방법으로는 https://yoon-dumbo.tistory.com/21를 참고하였습니다.

무한 스크롤 관련으로 https://velog.io/@kimjh96/react-virtualized-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94 를 참고하였습니다.

---

또한 리스트에 관련된 컴포넌트를 최적화시 react.meno를 활용하여 리턴가능. 그렇지만 꼭 최적화작업을 반드시 해줄 필요는 없다!  
데이터가 아주많고 처리하기에 버벅거리면 그때 해보자.

리엑트를 다루는 기술과 공식문서의 https://ko.reactjs.org/docs/optimizing-performance.html 이 링크를 공부하고, 정리/참조하였습니다.
