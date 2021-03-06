---
title: "css Box model"
excerpt: "box model인 Content 와 padding, Border, margin /  Box-sizing  / box-shadow"
date: 2022-04-22
categories:
  - CSS
tags:
  - CSS
  - box-model
last_modified_at: 2022-05-06
---

## Box 모델

html의 레이아웃의 모든 요소는 상자(box)의 형태이다.  
그중에서도 box의 영역은 4종류로 나뉘어지는데,,

<br>

| box의 영역 |                 설명                  |
| ---------- | :-----------------------------------: |
| `content`  | 태그 내부에 위치해 실제 표시되는 내용 |
| `padding`  |            경계선 안 여백             |
| `border`   |               box의 선                |
| `margin`   |            경계선 밖 여백             |

<br>
<br>

![image](https://user-images.githubusercontent.com/91597005/164678118-6d167215-7523-4b39-a408-c7561a237286.png)

대충 그림판으로 삭삭 그리면 이렇게 된다.  
박스모델 값을 한 줄로 지정시, `상우하좌`로 지정해주는데  
적지않는경우 넓이는 `부모`만큼, 높이는 `자식`만큼을 차지한다.

<br>
<br>

# css 방향

<br>

한 번에 선언시 상 - 우(오른쪽) - 하 - 좌(왼쪽) 순서대로 지정.  
`border-color : red green blue yello `

<br>

![image](https://user-images.githubusercontent.com/91597005/164675311-bc6a9a8c-d79b-4c7b-83cf-0f77a125b790.png)

<br>

만약 두 개만 선언시.. 상하 / 좌우 로 적용된다.  
`border-color : red yello `

<br>

![image](https://user-images.githubusercontent.com/91597005/164675609-c4ed7a78-3769-410a-960e-212b24fb21f9.png)

<br>

세 개 선언시.. 상 / 좌우 / 하로 적용된다.  
`border-color : red yello blue`

<br>

![image](https://user-images.githubusercontent.com/91597005/164675868-01893cdb-4475-4f85-ac5b-dce3664642fa.png)

<br>
<br>

# content

height와 width로 content 내용을 조정가능.  
(즉 패딩, 보더, 마진은 height와 width에 포함되지않음.)

<br>
<br>

# border

border는 아래 속성들로 조정가능.

| border 속성     |                                                                                                                                                                                         설명                                                                                                                                                                                         |
| --------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `border-style`  |                                                                                선종류를 선택한다. <br> none (없음) / hidden (숨김) / solid(실선) / groove(3차원 입체적인 선)/ dashed(약간 긴 점선) / dotted(점선) /double (이중선) <br> `border-위치-style`로 각각 border의 위치에 따라 선 지정가능.                                                                                 |
| `border-width`  |                                                                                                                                                                               border의 선의 두께 지정                                                                                                                                                                                |
| `border-color`  |                                                                                                                                                                                   border의 색 지정                                                                                                                                                                                   |
| `border-radius` | 선의 경계선을 둥글게해준다. 값은 모서리의 반지름값. <br> `border- 위/아래 - 왼/오른쪽 - radius` 로 한쪽 면의 모서리를 지정해줄수 있다. <br> ![image](https://user-images.githubusercontent.com/91597005/164676343-9ba3da6a-c405-468c-ada9-27abe1aae7c5.png)<br> ex) border-top-left-radius = 맨 상단 왼쪽 모서리 radius <br> <Br> border-radius: 1개의 값일시 모든 모서리에 다 적용. |
| `border 숏컷`   |                                                                                                                                                  일일이 다 지정 안하고도 border : red soild 1px; 같이 <br> 한번에 지정도 가능하다.                                                                                                                                                   |

<br>
<br>

# padding

contents와 border 사이의 간격, 즉 경계선 안쪽의 여백을 말한다.  
background-color 속성으로 설정하는 배경색의 영향을 함께 받으며, 한줄 축약 표현도 가능하다. (순서는 css순서인 위-오른쪽-아래-왼)  
padding - top/bottom/right/left를 지정할 수 있다.

<br>
<br>

# margin

border와 밖의 요소사이의 간격  
background-color의 영향을 받지않으며 padding과 같게 한줄 축약도 가능.  
padding- top/bottom/right/left를 지정할 수 있다.

특히, margin에 auto값을 사용하면 왼쪽, 오른쪽 마진을 자동으로 설정하여 부모 요소의 정중앙에 위치하게 된다.  
auto - 그 영역에서 모두 취하겠다는 뜻. 마진, 패딩을 포함한채로 부모크기만큼 꽉찬다.

`margin : auto ` - 부모요소의 상하좌우 정중앙 위치.  
 `margin : 0 auto` - 부모요소의 가로 정가운데 위치. (많이 쓰인당~)

<br>

## 네거티브 마진

margin-left margin-top은 `시작점`, margin-right margint-bottom 은 `끝나는 지점` 이라는 개념으로 보는데  
네거티브 마진일 경우 그 지점이 빨리 오게된다.

<br>
<br>

## Box-sizing

박스의 크기를 어떤것을 기준으로 계산하는지 정하는 속성  
기본값 contents-box.

| Box-sizing     |                 설명                  |
| -------------- | :-----------------------------------: |
| `contents-box` | 컨텐츠 영역을 기준으로 크기를 정한다. |
| `border-box`   |      테두리를 기준으로 크기정함       |
| `initial`      |    속성의 초깃값으로 설정. 초기화     |
| `inherit`      |      부모 요소의 속성값 상속받기      |

contents-box는 width와 height가 컨텐츠너비, 높이의 영역까지만 포함한다.  
border-box는 width와 height가 안쪽 여백 - 컨텐츠, 패딩과 border가 포함된다.

`같은 350px의 넓이를 가진, 10px의 border를 가진 요소`가 있을때

<br>

Box-sizing : contents-box는 border를 350px안에 포함을 안하니 왼쪽, 오른쪽 border를 생각해 합하면 370px

<br>

하지만 Box-sizing : border-box는 border가 350px안에 포함을 한 상태로 취급해서 좌 우 10px씩 border가 들어가고  
 원래 가지고있던 내부요소는 330px, 좌 우 border 10px씩 해서 350px이 딱 맞는다.

<br>

<br>

---

<br>

# box-shadow

`box-shadow : 그림자 좌우 위치, 상하 위치, 흐려짐범위(px), 그림자크기(높이), 색상, inset(내부요소 표현)`

필요한 값이 많다. `,`을 써서 여러개를 중첩하게 할수도 있다.
