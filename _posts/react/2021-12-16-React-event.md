---
title: "React 이벤트 정리"
excerpt: " "
date: 2021-12-16
categories:
  - React
tags:
  - React
  - event
last_modified_at: 2021-12-16
---

사용자가 웹 브라우저에서 dom요소들과 상호 작용하는것을 **이벤트** 라고 한다.

---

## 이벤트 사용시 주의 사항

1. 이벤트이름은 카멜 표기법으로 작성
2. 이벤트에 함수형태의 객체 전달
3. dom 요소에만 이벤트 설정 가능.  
   즉, 우리가 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할수 없으며 - div, input, button, form, span등의 dom 요소에는 이벤트 설정이 가능하다.

---

## 이벤트 종류

리엑트에서 지원하는 이벤트 종류는

- 클립보드, 키보드, 마우스, 터치
- composition, UI, wheel,
- 포커스, 폼, 셀렉션, 미디어, 이미지, 애니메이션, 트랜지션

그외에도 다양하게 있다.

---

## 이벤트 객체

e.target.value -> 해당 이벤트 객체가 가진 값  
e.target.name -> 해당 이벤트 객체의 name  
e.key -> 키보드 키

onClick  
클릭하면 발생하는 이벤트 처리

onChange  
값이 바뀔때마다 발생하는 이벤트 처리

onKeyPress
키를 눌렀을때 발생하는 이벤트 처리
