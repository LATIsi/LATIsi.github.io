---
title: "JS for-in 과 for-of "
excerpt: "그리고 객체속성 Enumerable에 대하여 "
date: 2022-03-15
categories: JS
last_modified_at: 2022-03-15
---

## for - in

- 객체의 속성을 반복하여 작업을 수행한다.
- 객체의 key 값에만 접근할수 있고, value값에는 접근하지 못한다.
- 객체의 모든 열거 가능한 속성에 대해 반복

## for - of

- 사용하기 위해서는 컬렉션 객체가 [Symbol.iterator] 속성을 가지고 있어야 함.

JS의 객체 속성은 내부적으로 숨겨진 속성이 있는데, 그중 하나가 `Enumerable(열거자)` 또는 `NoEnumerable(비열거자)`으로 정의할 수 있다.
for in 구문은 Enumerable이 true로 되어 속성만 반복. (열거형 속성, false인 것들은 반복하지않음.)
