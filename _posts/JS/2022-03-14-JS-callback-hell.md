---
title: "JS 콜백함수 & 구조분해 할당"
excerpt: "- 콜백 지옥관련 해결방법과 API 구조분해할당으로 값 빼기."
date: 2022-03-14
categories:
  - JS
tags:
  - JS
  - 콜백함수
last_modified_at: 2022-03-14
---

# CALLBACK

JS는 실행순서가 보장되지 않는다. (비동기)  
그래서 콜백은 부르면 타이밍맞춰 오는 함수로, 실행순서를 보장한다. (동기)

단점으로는

- 가독성 저하
- 예외처리 불편

등등이 있으며,

해결방법으로는 3가지가 있다.

1. 화살표 함수 (간결하게 보인다.)
2. promise  
    Promise 객체는

   - `pending` / Promise 객체에 결과값이 안채워진 상태
   - `fulfilled` / 채워진상태! (then이나 await 메소드를 사용해 실행!)
   - `rejected` / Promise 객체에 결과값 채우다가 오류난 상태

   의 상태를 가진다.

   `promise 이름 = new promise((resolve, reject) =>{ resolve(); reject(); });`

   여기서 resolve는 약속을 지켰을때의 호출이고  
    reject는 약속을 실패했을때의 호출이다.

   promise가 성공시,

   ```
   .then( ( ) => { }) 또는 .catch( ){ }
   ```

   로 처리한다(리엑트).  
    특히, `resolve()나 reject()` 안에 인자를 넣으면.  
   `.then()` 에 인자를 넣어 사용할수 있게되었다.

3. Asyne-await  
   외부정보를 가지고올때 많이 사용한다. 예외처리도 같이 사용하고 있다.

   ```
   asyne function 함수이름 (...) {
   const 객체이름 = await asyncfuntion()
   }
   ```

   이로써, 순차적, 동기적 실행처럼 보이는것이다.

<br>

# 구조분해할당 (비구조화, 파괴)

인덱스와 키를 기준으로 값을 빼내는 것  
구조분해할당은 api를 가져올시 위주로 사용하며,

<br>

```
const test = { a:'값', b:'값2', c:'값3'};
const { a, b, c } = test;
```

변수를 키 값으로 한번에 선언이 가능

<br>

위의 a, b, c를 새로운 이름으로 키를 지정하고 싶을시

```
const { a:aa, b:bb, c:cc } = test;
```

로 선언 가능.

<br>

---

<br>

또한 중첩된 객체로 가져올시...

<br>

```
const { a:aa, price:{won}, acount:{total : 새로운 이름} } = test;
```

위와같이 price같은경우 가져오는 객체 won대로 이름을 won으로 가져올 때이고  
total같은 경우 새로운 이름으로 지정시켜줄 시 적용가능.
