---
title: "React map, concat, filter"
excerpt: " 기본적인 데이터 추가, 데이터 삭제"
date: 2022-01-10
categories: React
last_modified_at: 2022-01-10
---

## map

배열.map()
이거 react에서 활용도로 굉장히 중요하다고 생각한다. 그야 배열을 편하게 활용할 수 있으니까!!  
배열.map (변수 => 배열마다 적용해서 리턴할 내용) 이나  
배열.map (function (변수) {
return 배열마다 적용해서 리턴할 값
})
으로 많이 활용하는데 map에는 key가 중요하다! map으로 풀어줄 요소에 key 속성을 넣어주는데, 그 key값으로 주로 map의 파라미터인 index를 사용한다.  
index값은 중복되는 값도 없으니 좋기 때문이다.

**map의 파라미터 3개**

- currentValue (현재 처리하고 있는 요소)
- index (현재 처리하고 있는 요소의 index 값, 순서)
- array (처리 하고있는 원본 배열)

---

## concat

데이터 추가같은 경우, 원래 있던 배열에서 데이터를 추가하는데 보통 push를 사용한다.  
하지만 react를 배우면서 push보다는 concat을 쓰는데, 원본 배열 자체를 변경해주는것과는 달리 새로운 배열을 만들어 준다.

왜 concat을 쓰냐면... **불변성** 이 중요하기 때문!
React에서는 state안에 있는 내용을 직접적으로 바꾸면 X! 그러므로 push보다는 원본을 보호해주는 concat을 쓰는것이 좋다! (또는 ... 인 스프레드 기법을 활용하자!ㄴ)

---

## filter

데이터를 삭제하고 싶을시, 삭제하려는 데이터의 id나 key값을 filter로 분류하여 삭제하면 된다.  
즉 원하는 데이터를 고르려면 filter로 먼저 삭제할 데이터의 id나 key값을 가져와 filter로 그 값을 제외한 새로운 배열을 만들어 내면 ok!

... 이런방식으로 굳이 삭제가 아니라 무언가를 찾고 싶을 때도 filter로 받아서 수정도 가능이다.

---
