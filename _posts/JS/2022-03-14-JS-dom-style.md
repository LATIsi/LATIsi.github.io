---
title: "JS - dom 관련2 "
excerpt: "dom에 관련된 요소스타일 수정방법"
date: 2022-03-14
categories: JS
last_modified_at: 2022-03-15
---

# JS로 Style 값 수정하기.

```

<div id="hello"> Hi! </div>

```

이라는 html이 있다면, JS로 style을 추가하고 싶을시 어떻게 할까?

먼저 <u>getEelementById() 나 querySelector()</u>로 id="hello"인 div를 잡는다.

그리고  
`잡은 객체.style.sytle속성 = '값';`  
으로 스타일을 지정해주는데, css style 속성은 대부분 background-color 나 font-weight같이  
하이픈 표기법을 쓰지만, JS에서 css style을 다룰때는 카멜케이스(Camel Case)로 작성해야한다.

## CamelCase란?

각 단어의 앞문자는 대분자로 작성하지만 처음 문자는 소문자로 작성하는 방법.

ex) apple-pie = applePie  
 Bananasnack = bananaSnack

<br>

## Pascalcase

모든 단어들의 첫문자는 대문자로...  
 ex ) apapa sense = ApapaSense  
silk therapy = SilkTherapy

<br>

---

<br>

또한, 추가 뿐만이 아니라 원래 css에 있는 클래스를 추가하고 싶을때

1. 클래스를 css에 미리 만들고 JS로 추가하기
2. 아예 JS에서 <u>새로</u> , 또는 직접 수정

`document.getElementById('객체선택').className={css클래스 이름}` 으로 추가를 해준다.

또 추가 해주고 싶을때,
`.classList.add('css클래스 이름')`을 추가해준다.

## classList

| 메서드 이름                       |                                                                    설명                                                                     |
| --------------------------------- | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| `.add(class 이름)`                | 기존에 클래스가 <u>있는</u> 상태에서 <br> 지정한 class를 추가한다 (이미 있으면 무시)<br> 또한 , 를 사용하여 여러개의 class를 추가할수 있다. |
| `.remove(class 이름)`             |                                                           지정한 class를 삭제한다                                                           |
| `.length(class 이름)`             |                                                 지정한 class를 가진 요소의 개수를 보여준다.                                                 |
| `.contains(class 이름)`           |                                               지정한 class가 존재하는지 확인. t/f 값을 반환.                                                |
| `.replace(존재class,새로운class)` |                                                    존재하는 class를 새로운 class로 대체                                                     |
| `.item(번호)`                     |                                                     지정한 번호의 클래스 값을 보여준다.                                                     |
| `.toggle(class 이름, 조건문);`    |                  class가 있으면 삭제, 없으면 add하는 토글기능 메서드<br> 2번째 파라미터가 있다면 조건문에 맞춰 toggle된다.                  |

<br>

## 그럼 className과 classList의 차이점은 무엇일까?

// 참고 https://ko.javascript.info/styles-and-classes

className은 <b>클래스 속성값 전체</b>, 즉 문자열 전체가 바뀐다.  
그에비해 classList는 <b>개별 클래스를 조작 하고싶을때</b> 사용하면 된다.

즉, style 관련해서 JS로 수정하려면 style과 class 프로퍼티로 수정을 하면 된다.
