---
title: "css flexbox"
excerpt: "부모요소인 flex container, 자식요소의 flex item과 baseline"
date: 2022-05-01
categories:
  - CSS
tags:
  - CSS
  - flexbox
last_modified_at: 2022-05-01
---

# Css flexbox

정렬하려는 요소 부모의 display가 `flex`여야지 작동되고 크기가 불분명한 요소들에 대해 효율적으로 동작한다.  
가로 세로로 한방향으로 지정뒤 요소들을 정렬한다.

1. 부모요소에게 지정하는 flexbox
2. 자식요소에게 지정하는 flexbox

<br>

<br>

# 부모요소 flex container

1. flex-direction
2. flex-wrap
3. flex-flow
4. justify-content
5. align-item
6. align-content

# 자식요소들 flex item

1. flex
2. flex-grow
3. flex-shrink
4. order
5. flex-basis

<br>

---

<br>

# display가 flex인 부모요소. ( flex container )

<br>

## flex-direction

flex-item(자식요소) 들이 배치될 기본방향을 지정한다.

<br>

`row - 기본값 / column / row-reverse / column-reverse`

<br>

## flex-wrap

width가 너무 작을때, 다음줄로 자동으로 넘기고 싶을시 사용.

<br>

`nowrap - 모든 item들을 한줄에 출력. 기본값`  
`wrap (자동으로 다음줄)`

<br>

## flex-flow

flex-flow는 flex-direction 값과 flex-wrap의 값을 한번에 지정가능.  
처음값은 flex-direction, 두번째 값은 flex-wrap이다.

<br>

예시로 `flex-flow : column(flex-direction) wrap(flex-wrap)`

<br>

## justify-content

flex의 item들을 (자식) 어떻게 정렬하여 배치할지 지정하는 속성

<br>

`flex-start(왼쪽, 위 끝) / center(중앙) / flex-end(오른쪽, 아래 끝) `  
`space-between - 시작, 끝에 item을 두고 남은공간을 동일하게 배치 `  
`space-around - 시작, 끝을 기준으로 동일한 간격으로 모든 item 배치 / 요소 앞뒤로 공백이 있는 느낌 `

<br>

## align-items

자식요소를 flex-direction의 방향의 수직으로 정렬.

<br>

`stretch (기본값) - 별 다른 크기로 지정하지 않을시, flex 아이템들을 늘려 맞춰줌. item의 높이가 부모요소만큼 늘려짐 `  
`flex-start 수직이 시작되는 부분(맨 왼쪽, 위)부터 정렬 `  
`center 수직의 가운데로 정렬 `  
`flex-end 수직의 끝부분(맨 오른쪽, 아래)에 정렬 `

<br>

`flex-start , center, end는 justify-content와 비슷하게 행동되며 세개 다 전부 item의 높이가 컨텐츠 크기만큼 늘려짐.`

<br>

## align-content

flex-item이 여러줄일시,-flex-wrap 필요- flex-direction 방향을 기준으로 수직 정렬(즉, 여러줄이 세로로 어떻게 정렬되느냐) 방법을 결정한다.  
align-items과의 다른점은, align-items은 각줄 따로 나뉘어 정렬한다면 align-content는 덩어리로 잡혀 정렬.

<br>

`stretch(기본값) 높이를 꽉 채워준다. `  
`flex-start, center , flex-end (align-item)`  
`space-between(세로간격 동일), space-around(세로 아이템의 위아래간격 동일) (justify-content)`

<Br>

<br>

---

<br>

# display가 flex인 자식요소. ( flex - item )

부모가 꼭 flex container이어야지 실행되는 요소.

<br>

<br>

## flex-grow (팽창)

flex-item의 확장에 관련있다. 기본값 `1`
비율로 늘어난다!  
속성값이 0인경우, 아이템의 넓이가 부모 넓이보다 작으면 여백이 생긴다.

<br>

ex ) 1 이상인 경우 container을 채우기 위해 커짐

![image](https://user-images.githubusercontent.com/91597005/166619626-f1381885-9416-4cf5-9e86-2ef4801830ca.png)

여러개의 경우 이런식으로 컨테이너를 나눠가진다.

<br>

## flex-shrink (수축)

축소와 관련되어있다. 기본값은 1이며 0과 정수(비율로 줄어들음 - 1,2,3...)을 사용한다.  
`flex-wrap: wrap;` 속성 부여시 적용되지 않음!  
기본값이 1이니, 자동으로 아이템 넓이가 줄어들지 않게 하기위해서 라면
`flex-shrink:0;`을 선언해야한다.

<br>

- 0일시, flex-item의 크기 유지
- 1일시 (정수) flex-item의 크기에 맞춰 줄어든다.

<br>

## flex-basis (기준 크기)

flex-item의 기본 크기를 결정한다. 기본값은 `auto` , 즉 원래 컨텐츠 크기 할당이다.

<br>

- auto / 남은크기 공백을 flex-grow 비율에 따라 나눠 가진다. 여백:컨텐츠
- 0 / 단위 지정을 안하면 flex container를 기준으로 여백+컨텐츠로 동일하게 크기가 나뉜다.
- 100px / 수치를 값으로 지정, 컨텐츠를 수치로 가지고 남은 여백은 flex-grow 비율로...

<Br>

모든 크기단위 ok이며 값을 `0으로 선언시 조심하며 단위도 꼬옥 지정`해줘야한다!! (0 px, 0% ... )

# flex 한줄로 선언하기 (숏코딩)

```
flex : flex-grow flex-shrink flex-basis;
```

| flex 속성     |      기본값       |
| ------------- | :---------------: |
| `flex-grow`   |         0         |
| `flex-shrink` |         1         |
| `flex-basis`  | auto (축약형은 0) |

를 잘 생각해보면, 숏코딩도 쉽다.

`flex : auto ;` 일시, `flex : 1 1 auto`와 같다.

<Br>

<br>

---

<br>

## baseline

글꼴의 기준선인 베이스라인을 기준으로 정렬  
서로 다른 크기 글자에 적용시 아래 베이스라인을 기준으로 정렬한다.  
align-item은 baseline 속성이 적용될수 없다. (수직 정렬이기에)

<br>
