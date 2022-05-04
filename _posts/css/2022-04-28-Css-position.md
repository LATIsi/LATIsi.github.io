---
title: "css position 요소배치"
excerpt: "position의 static, fixed, relative, absolute, static, @+ z-index.."
date: 2022-04-28
categories:
  - CSS
tags:
  - CSS
  - position
last_modified_at: 2022-04-28
---

# CSS position

요소를 배치할때, 어떤식으로 배치할지 지정하는 속성  
position이 무슨 속성이냐에 따라, 상하좌우(left, top, right, bottom)의 적용값이 다르다.

| position 속성 |                                                                              설명                                                                              |
| ------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `static`      |                                              `기본값`, 좌표 상하좌우(left, top, right, bottom) 속성 사용 못한다.                                               |
| `relative`    |                        `상대위치`. 기본위치(원래 static이 있는 자리)를 기준으로 <Br> 좌표 상하좌우(left, top, right, bottom) 이동 가능.                        |
| `absolute`    | `절대위치`. 부모/조상요소가 `relative,absolute,fixed`로 선언된 position을 기준으로 <Br> 부모나 조상이 없다면 body가 기준. 상하좌우값이 `안쪽`으로 적용이 된다. |
| `fixed`       |                                           요소가 아니라 브라우저 기준으로 적용되며, 스크롤을해도 고정으로 따라온다.                                            |

<Br>

<Br>

absolute같은 경우, 상하좌우가 전부 0이면 부모의 크기에 맞게 전부 채워지는 효과가 있다.

<Br>

# z-index

`화면 레이아웃 출력`, 그림을 그릴시 레이아웃을 사용하듯 z-index
을 사용하면 요소들이 수직으로 쌓아진다.  
z-index의 값의 숫자가 `높을수록` 위에 겹쳐서 쌓아진다. (`먼저 보여짐`)  
position이 `static만 아니라면` 다 사용할수 있다..
