---
title: "React hook"
excerpt: "리엑트 내장 훅에 대하여"
date: 2022-01-12
categories: React
last_modified_at: 2022-01-12
---

react에는

- useState
- useEffect
- useReducer
- useMemo
- useCallback
- useRef

같은 내장 hook들과 커스텀 hook들이 있다.

---

## useState

useState는 기본적으로, 함수 컴포넌트에서도 가변적인 상태를 지니게해줄 수 있다.

```
const [상태값, 상태값을 바꿔줄 함수] = useState(기본값);
```

이다.

하나의 useState는 하나의 상태값만 관리할수 있으므로, 관리할 상태값이 여러개라면 거기에 맞는 각각의 useState를 사용해야한다.

---

## useEffect

useEffect는 렌더링될때마다 특정 작업을 실행하는것이다.  
( = componentDidUpdate와 componentDidMount를 섞은 느낌.)  
<br>

특히 두번째 파라미터 배열에 무엇을 넣느냐에 따라 실행되는 조건이 다르다.  
useEffect의 기본적인 사용방법은 화살표 함수로...

```
useEffect(()=>{
 실행할 특정작업;
});
```

이런식으로 넣어주면 된다.

<br>

- 맨 처음 렌더링 될 때, 업데이트때 실행하고 싶지 않을 때
  - 두번째 파라미터로 비어있는 배열을 넣어주면 된다.

```
useEffect(()=>{
 실행할 특정작업;
}, []);
```

<br>

- 특정 값이 업데이트되면 실행하고 싶을 때
  - 두번째 파라미터로 검사하고 싶은 값을 넣기

```
useEffect(()=>{
 실행할 특정작업;
}, [변경되는 특정값]);
```

---
