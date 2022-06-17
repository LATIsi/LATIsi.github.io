---
title: "JS 신기술 optional chaining, nullish coalescing operator 에 대하여"
excerpt: "?. 와 ??"
date: 2022-06-16
categories:
  - JS
tags:
  - JS
  - optional chaining
last_modified_at: 2022-06-17
---

## optional chaining(옵셔널 체이닝)

중첩객체를 에러없이 안전하게 접근해 참조할 수 있는 기능.  
최소한 .(접근)하는것이 `두 번` 이상일 시 편리하고, 객체 존재 여부가 확실하지 않은경우에 안전하게 사용할 수 있는것이 장점이다.

## ?.

연산자가 아닌 함수/대괄호와 함께 동작하는 문법 구조체.

<br>

`?.` 은 앞의 대상이 `underfined`나 `null`이면 `underfined`를 출력해준다.  
또는 앞의대상에서 ?. 뒤의 대상이 비어있거나 없을시 안해주겠다도 가능.

<br >

ex...

`user.id?.name;` = 이런경우에는 user안에 id가 존재시 id.name;을 반환.  
존재하지않으면 `undefined`

<br>

또한 ?.는 변수말고도 객체나 메서드를 넣을수있다. `user?.[props] , user?.method()` 같이..

<br>

주의할점은 남용하지 말 것! 값을 할당할때 꼭 있어야하는 값에는 ?.를 안넣는게 좋다. 잘못하면 디버깅도 안나오기 때문.
또한 ?. `앞의 변수는 무조건 선행으로 선언되어 있어야한다!`

---

<Br>

## nullish coalescing operator(nullish 병합 연산자)

optional chaining의 ?.과 비슷하게 최근 추가된 연산자.  
사용예시로는 데이터가 n초뒤에 도착시, 그 로딩중에 보여줄 텍스트같은걸 보여줄때 좋음

<br>

### ??

값이 확정되어있는 변수를 찾을수 있음!
ex) `a ?? b`일시. a가 null이거나 undefined일시 b, 그 둘이 아닐시 a를 출력한다.

<br>

또한, 변수에 기본값을 할당하는 용도로 사용 가능.  
ex) `name = name ?? honggildong` // 이름이 null이나 undefined일시 honggildong을 할당한다.

<br>

### ??와 ||의 구분점

??는 null이나 undefined으로 정의된 값을 반환  
||는 true로 평가되는 값을 반환

예시를 들어보자.

<br>

0 || 100 = 0 or 100이므로 100을 출력  
0 ?? 100 = 0 이 null이나 undefined값이 아니니 0을 출력

<br>

??는 &&와 ||를 같이 사용하지못함. 왜냐하면 안정성문제로 문법에러가 생김!  
정 같이 사용하고싶다면 괄호를 사용하기.

<br>

---

<br>

## 참고한 링크

<br>

#### - [https://ko.javascript.info/optional-chaining](https://ko.javascript.info/optional-chaining)

#### - [https://ko.javascript.info/nullish-coalescing-operator](https://ko.javascript.info/nullish-coalescing-operator)
