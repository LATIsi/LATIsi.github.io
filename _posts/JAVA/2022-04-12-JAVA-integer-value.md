---
title: "JAVA String과 Number의 형변환 (Casting)"
excerpt: "parseInt, toString, valueof..."
date: 2022-04-12
categories:
  - JAVA
tags:
  - JAVA
  - 형 변환
last_modified_at: 2022-04-12
---

# 숫자와 문자열의 변환

JAVA에서는 필요로 자료형을 변경해주는것을 <b>형변환</b>, 즉 `Casting`이라고 한다!

숫자 -> 문자로 형 변환하는 것은

```
toString(숫자);
```

숫자(더블), 즉 소수도 문자로 변환 가능하다.  
인자는 숫자로만 들어간다!

<Br>

---

<Br>

숫자를 문자로 변환하는 것과는 다르게 문자를 숫자로 변환하는 방법은 여러가지가 있다!

### 문자 -> 숫자로 형 변환하는 방법 1

```
parseInt("문자열");
```

<br>

반환값을 항상 객체가 아닌 기본자료형인 int형으로 리턴.

<br>
<br>

### 문자 -> 숫자로 형 변환하는 방법 2

```
valueOf ("문자열");
```

<br>

문자열을 정수형으로 변환뒤 Integer 객체로 반환. 자동으로 형변환  
 (자동으로 wrapper class와 primitive data type사이로 형 변환 시켜주는 Autoboxing and Unboxing 기능을 사용한다.)

<br>
<br>

### 문자 -> 숫자로 형 변환하는 방법 3 (Double)

```
parseDouble("문자열");
```

<Br>

이런식으로 변환해도 좋지만 곧장 변환하는 방법도 있다.

```
자료형 변수이름 = (자료형) 변환할 값
```

예시로, `int a = (int)10.5` 같은게 있다.

---

<Br>

[참고링크 - sayit! IT-story를 말하다 ](https://sayit.tistory.com/entry/Java-int)

[참고링크 - 경제적자유스터디 ](https://soft.plusblog.co.kr/165)
<Br>

---

<Br>

그 외의 업캐스팅, 다운캐스팅에 대하여..

[참고링크 - 여니의 개발 다반사](https://developer-yeony.tistory.com/102?category=942554)

```

```
