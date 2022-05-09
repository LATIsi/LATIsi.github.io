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
| `fixed`       |                          요소가 아니라 브라우저 기준으로 적용되며, 스크롤을해도 고정으로 따라온다. <br> 기본적으로 왼, 위가 먼저이다.                          |

<Br>

<Br>

absolute같은 경우, 상하좌우가`전부 0이면` 부모의 크기에 맞게 `전부 채워지는` 효과가 있다.  
또한 absolute의 상하좌우 값 지정시 `+는 부모의 안쪽, -는 부모의 바깥쪽`으로 지정이 된다.

<Br>

정 가운데 정렬시, 2가지의 방법이 있다.

#### 1. margin 활용하기

#### 2. transform 사용하기

<br>

### 1. margin 활용하기

1. 네거티브 마진을 활용한 50% 활용  
   이런 경우, 네거티브 마진도 같이 사용하므로 꼭짓점에 맞춰지는것이므로 width를 바꿔야한다.  
   margin-left : `-(아이템의 width/2);`  
   margin-height : `-(아이템의 height/2); `

2. `수직정렬` - margin: 0 auto 사용하기  
   이 경우에는 display: block 이어야만 가능하다.  
   inline-block인 경우 `inline - text-align : center` 를 사용해야 수직정렬이 가능하다.

<br>

### 2. transform 사용하기

width를 안바꿔도 된다. position을 absolute으로 지정해주고  
`left: 50%; top:50%; transforom: translate(-50%, -50%);` 를 지정해두면 된다.

<Br>

<Br>

---

<br>

# z-index

`화면 레이아웃 출력`, 그림을 그릴시 레이아웃을 사용하듯 z-index를 사용하면 요소들이 수직으로 쌓아진다.  
z-index의 값의 숫자가 `높을수록` 위에 겹쳐서 쌓아진다. (`먼저 보여짐`)  
position이 `static만 아니라면` 다 사용할수 있다..
