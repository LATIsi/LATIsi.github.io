---
title: "JS 문자열과 숫자의 형변환 캐스팅"
excerpt: "그리고 ParseInt와 Number의 차이"
date: 2022-04-10
categories:
  - JS
tags:
  - JS
  - 형 변환
last_modified_at: 2022-04-12
---

JS에서도 형변환이 있다!

parseInt() 문자열 인자를 받아 정수로 반환시켜준다.

Number() 숫자인자를 작업할수 있게해주는 객체. parseInt와는 다르게 음수도 그대로 표현할수 있지만.  
만약 공백이 있다면 0으로 출력한다.

<br>

## 만약 숫자, 텍스트 혼합 변수가 있다면....

parseInt() - 숫자만 출력 / but, 텍스트가 먼저 혼합되어있으면 NaN이 저장된다.

```
var a = parseInt('100일'); -> 100
var b = parseInt('날짜 : 100일' ); -> NaN
```

Number() - NaN 오류 출력

<br>

## 만약 0이 먼저 있는 변수가 있다면....

parseInt(), Number() - 둘다 앞의 0을 제외하고 출력

<br>

## 만약 소수가 있다면....

parseInt() - 정수로만 나온다. / 그래서 parseFloat()가 있다!
Number() - 소수가 전부 나온다.
