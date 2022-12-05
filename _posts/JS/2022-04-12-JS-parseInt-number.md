---
title: "JS 문자열과 숫자의 형변환 캐스팅"
excerpt: "그리고 ParseInt와 Number의 차이와 형 변환"
date: 2022-04-10
categories:
  - JS
tags:
  - JS
  - 형 변환
last_modified_at: 2022-11-22
---

# JS에서도 형변환이 있다!

<br>

parseInt() 문자열 인자를 받아 정수로 반환시켜준다.

<br>

Number() 숫자인자를 작업할수 있게해주는 객체.  
parseInt와는 다르게 음수도 그대로 표현할수 있지만.  
만약 문자형 0이거나 빈 공백란이 있을 시 true로 변환해준다. 주의.

<br>

`Number(''), Number(0) - false`  
`Number(' '), Number('0') - true`

<br>

## 만약 숫자, 텍스트 혼합 변수가 있다면....

parseInt() - 숫자만 출력 / but, 텍스트가 먼저 혼합되어있으면 NaN이 저장된다.

<br>

```
var a = parseInt('100일'); -> 100
var b = parseInt('날짜 : 100일' ); -> NaN
```

<br>

Number() - NaN 오류 출력

<br>

## 만약 0이 먼저 있는 변수가 있다면....

parseInt(), Number() - 둘다 앞의 0을 제외하고 출력

<br>

## 만약 소수가 있다면....

parseInt() - 정수로만 나온다. / 그래서 parseFloat()가 있다!
Number() - 소수가 전부 나온다.

<br>

---

<br>

# 다른 형변환들

| 형변환 이름  |                                                       설명                                                        |
| ------------ | :---------------------------------------------------------------------------------------------------------------: |
| `String() `  |                                          문자형으로 형 변환을 시켜준다.                                           |
| `Number()`   | 위에서 나온듯 문자형 숫자를 숫자로, true는 1, false는 0 <br> undefined는 Nan으로 나오고 null은 0으로 나오니 주의. |
| `Boolean() ` |              `빈 문자열, null, undefined, NAN, 숫자 0`는 false를 반환하고 나머지는 true를 반환한다.               |

<br>

---

<br>

### 참고한 홈페이지 목록

#### [자바스크립트 기초 강좌 : 100분 완성](https://www.youtube.com/watch?v=KF6t61yuPCY)

<br>
