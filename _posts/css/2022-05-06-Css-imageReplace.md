---
title: "css 이미지 IR(Image Replacement) 기법에 대하여"
excerpt: "웹 접근성과 관련된 Image Replacement 에 대하여..."
date: 2022-05-06
categories:
  - CSS
tags:
  - CSS
  - IR(Image Replacement)
last_modified_at: 2022-05-09
---

# IR(Image Replacement) 기법이란?

이미지를 볼 수 없는 사용자에게 대체 텍스트를 제공하는 것  
대표적으로 시각에 불편을 가진 사용자가 스마트리더기를 사용하여 웹문서에 접근하거나 검색엔진에 노출시 필요하다.

<br>

가장 간단한 바로는 img에 alt 속성으로 대체 텍스트를 넣어주는 것인데..

<br>

요즈음은 `이미지를 백그라운드 속성`으로 다수 이미지 하나의 이미지에 포함뒤 추출하여 사용하는 방식인 `(이미지 스프라이트 기법)`으로 표현하는 것이 많다.  
`웹 접근성`이 필요하니 `대체문자`를 만들어준다.

<br>

## IR의 방법으로 안좋은것. (스크린 리더기가 인식 못함)

정말, 정말 추천하지 않는다!

1.  display: none;
2.  visibility: hidden;

<br>

## IR으로 할수는 있지만 (기기 인식가능) 레이아웃, 성능 이슈

1.  opacity: 0;
2.  text-indent: -9999px;
3.  z-index: -1;

<br>

---

<Br>

IR의 방법으로는 총 4가지가 있다.

### 1. phark Method

### 2. WA IR

### 3. Screen out

### 4. a11y - hidden

<br>

<br>

---

<br>

### 1. phark Method

의미있는 이미지 대체 텍스트. `옛날방식`이며  
이미지로 대체할 요소에 배경을 설정하고, 글자는 text-indent:-9999px 같이 `들여쓰기로 화면 바깥에 배치해` 보이지않게 두는것.

<br>

### 2. WA IR

phark Method의 최신 버전. 의미있는 이미지의 대체 텍스트이며, 이미지가 없어도 대체 텍스트를 보여준다.  
보이지 않게 할 글자를 `span으로 감싼뒤` z-index:-1 로 이미지 뒤에 배치하여 안보이게 처리하는것.  
또한 h1~h6같은 컨텐츠에 `제목을 달아주어` 보조기기 사용자가 이해할 수 있도록 `보조해주는 것`이 좋다.

<br>

### 3. Screen out

대체 텍스트가 아닌 접근성을 위한 숨긴 텍스트이다.  
`line-height, width, height를 0`으로 지정해두고, `overflow: hidden;` 을 준 뒤 `text-indent:-9999px` 같이 들여쓰기를 준다.

<br>

### 4. a11y - hidden

`접근을 고려한 텍스트 감춤 클래스`이다.  
black hat을 피할수 있는 제일 좋은 방법이라고 한다!  
텍스트와 디자인을 고려한다. 쉽게말하자면, `클립패치로 요소를 클리핑`하여 요소를 숨기는 것이다.  
예시로...

`form에 label 요소가 들어가기 어려울때.... span요소로 감싸고 a11y - hidden 기법을 사용하기.` 등등이 있다.

기본 조건으로

1. position은 fixed나 absoulte로 지정해주고
2. 0 size를 피하기 위해 width, height 최소 크기 1px 지정
3. overflow: hidden 설정.
4. 마진 -1px 을 지정해 화면에 안나오게 처리를 먼저 해주고, `clip-path`로 숨기는것이다.

<br>

또는 여기서 마진과 position을 사용하지 않기위해 `clip-path:inset(가장 자리에서 삽입되는 사용자 지정거리)` 을 넣어주기도 한다.

## clip-path란?

좌표로 지정한 직사각형 모양대로 요소의 일부분을 잘라내는(클리핑) 속성이다.  
그 중 clip 속성의 ::rect 는 이미지의 일정부분만 나오게 하는 코드이다.

`clip::rect (top, right, bottom, left);`

<br>

---

<br>

### 참고한 홈페이지 목록

#### [SNUPI 블로그 - IR 기법 / 요소 숨김 처리](https://snupi.tistory.com/109)

#### [jsg_ko - 웹 접근성 이미지 표현, IR기법](https://velog.io/@wltnrms0629/HTMLCSS-%EC%9B%B9-%EC%A0%91%EA%B7%BC%EC%84%B1%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%91%9C%ED%98%84-IR%EA%B8%B0%EB%B2%95)

#### [B.log - IR(Image Replacement) 기법](https://haneunbi.github.io/2020/06/01/css-ir/)

#### [The Tracks of mulder21c - 접근 가능한 숨김 텍스트](https://mulder21c.github.io/2019/03/22/screen-hide-text/)

#### [인터애드 - 피해야할 검색 최적화(SEO): 블랙 햇(Black Hat)](https://www.interad.com/category/insights/black-hat-seo.html)
