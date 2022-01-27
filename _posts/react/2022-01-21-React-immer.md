---
title: "immer로 불변성 유지하기"
excerpt: "리엑트는 이렇게나 불변성이 중요하다아악"
date: 2022-01-21
categories: React
last_modified_at: 2022-01-24
---

불변성은 리엑트에서 매우매우매우 중요하다!  
불변성이 지켜지지 않으면 객체 내부의 값이 새로워져도 바뀐 것을 감지하지 못한다!  
=> 즉,업데이트를 하지못한다!!

그러므로 `immer라는 라이브러리`를 사용하는데..

`npm install immer`  
로 설치해보고, 사용해보기.

```
import produce from 'immer'

const next = produce (a1, a2 => {
    a2.바꾸고싶은값 ='바뀐값';
})
```

produce의 파라미터는 두개로, 순서대로

1. 수정하고싶은 상태
2. 상태를 어떻게 업데이트 하는지

가 있다.

immer로 컴포너트의 상태를 작성시, 객체 안에 있는 값을 직접 수정하거나 배열에 직접적으로 변화를 주는 push나 splice등을 사용할 수 있다.
