---
title: "css Display에 대하여"
excerpt: "Display속성의 Block/inline/inline-block/none/flex과 일반적인 수직/수평 정렬(vertical-align)"
date: 2022-04-25
categories:
  - CSS
tags:
  - CSS
  - display
  - vertical-align
last_modified_at: 2022-04-25
---

# display 속성이란?

display속성이란 화면에 요소가 보여지는 방식을 결정하는 속성.

| display 속성   |                                                                                     설명                                                                                     |
| -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `none`         |                                   해당요소를 출력하지 않게 하기. `해당 요소 자체가 사라진것처럼 보이지만` <br>개발자 도구에서는 발견된다.                                    |
| `hidden`       |                                                               none과 비슷하게 해당요소를 보이지않게 숨기는 값.                                                               |
| `block`        | 블록적용. 화면 전체의 가로폭을 전부 차지한다. (100%) 마진과 패딩을 사용할 수 있으며 <br> 큰 맥락등에 쓰이는데 예시로 `div, h1~h6, p, header, li, footer, section...`가 있다. |
| `inLine`       |   인라인적용, `해당 범위만 감싸므로` 가로세로 지정을 못하며 마진,패딩의 top/bottom도 적용할수 없다. <br> 단어, 링크, 이미지등에 사용되며 예시로 `span, a, img` 등이 있다.    |
| `inLine-block` |                                   인라인과 블록의 장점만을 포함! inLine의 높이를 조절할수있으며 마진과 패딩의 top/ bottom을 조절 할수있다.                                   |
| `flex`         |                                                                           플렉스 컨테이너로 표시 -                                                                           |

<br>

<Br>

여기에서, display 속성중 inline,inline-block, inline-table 같이 한줄을 전부 차지하지않는 요소를 `inline-level`라고도 말한다.  
이 inline-level들을 감싸는 div를 `line-box`라고 하는데, line-box의 높낮이는 inline-level중 제일 큰 높이를 가진것에 자동으로 맞춰서 감싸진다.  
또한 특정한 수치의 값을 주고싶다면, `line-height` 을 사용하여 높이를 부여할수도 있다.
<Br>

<Br>

수평정렬을 할시,  
`inline - text-align : center`  
`block - margin : 0 auto`

으로 적용해주지만, 수직정렬시 `vertical-align : middle;`을 사용해준다.  
vertical-align 에서의 최상단과 하단은 line box을 참고한다!

또는 부모요소에서 자식요소를 수직 정렬시 `align-items: center;`을 사용.

<br>

또는 수직, 수평으로 정 가운데에 정렬을 하고싶을시...

`position: absolute;`  
`left: 50%; top: 50%; transforom: translate(-50%, -50%);`  
을 지정해둔다.

<br>

### [ vertical-align 관련 참고하면 좋은 홈페이지 - hivelab 블로그](http://blog.hivelab.co.kr/%EA%B3%B5%EC%9C%A0-vertical-align-%ED%8C%8C%ED%97%A4%EC%B9%98%EA%B8%B0-1%EB%B6%80/)

<br>

### [참고한 홈페이지 - kakaostyle 블로그](https://devblog.croquis.com/ko/2019-04-29-1-vertical-align-line-box/)
