---
title: "css 줄바꿈 (\n) 변환방법"
excerpt: "white-space 요소안의 공백 처리 지정"
date: 2021-12-08
categories:
  - CSS
tags:
  - CSS
last_modified_at: 2021-12-08
---

white-space는 공백, 줄바꿈, 들여쓰기를 css에서 표현할때 유용하게 쓰고있다!  
마치 html에서 엔터와 탭, 스페이스를 인식하는 pre요소 처럼 사용할수 있다.

적절히 사용해서 줄 바꿈을 하여 보기좋게 할수 있으며  
white-space의 속성으로는

- nomal
- nowrap
- pre
- pre-wrap
- pre-line

이 있다!
각각 특징이 있지만

- normal은 여러개의 공백과 줄바꿈을 하나로 표시한다( 연속 공백이 하나로, 연속 줄바꿈이 하나로..) 그리고 영역을 넘어서면 자동 줄바꿈도 가능하다.
- nowrap은 nomal에서 자동 줄바꿈이 안된다, 텍스트가 무조건 한줄에 나오게 지정하는 속성값이다.
- pre와 pre-warp은 **여러개의 공백, 줄바꿈을 다 보존하지만** pre는 자동 줄바꿈이 안되고, pre-warp은 가능하다.  
  또한 pre-line은 줄바꿈만을 보존한다.

이 중에서 내가 제일 많이 사용하는건 pre-wrap이다.  
자동 줄바꿈도 되고 **여러개의 스페이스와 탭, 줄바꿈을 1개로 표현하지 않고 입력된 그대로 출력**하기에 pre-wrap 을 많이 사용한다. (pre도 좋지만 영역을 벗어나도 줄바꿈이 안된다!)
