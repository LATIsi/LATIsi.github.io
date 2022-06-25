---
title: "JS geolocation"
excerpt: "웹브라우저의 정보를 가져오는 api"
date: 2022-06-25
categories:
  - JS
tags:
  - JS
  - geolocation
last_modified_at: 2022-06-25
---

# geolocation API

간단히 말하자면, `사용자의 현재 위치정보를 가져오는` 자바스크립트 API

<br>

`navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);`  
이런식으로 쓰인다. onGeoOK는 정보를 받아오기를 성공했을때의 메서드와 onGeoError는 실패했을때의 메서드.

<br>

onGeoOK(position) 메서드의 인자값인 position으로 여러가지를 해낼 수 있다.  
예를 들어 `fetch`로 url의 정보를 받아와 데이터를 활용한다던지...

### `fetch` 란?

브라우저에서 내장된 원격 API를 불러올때 사용하는 함수  
인자가 두개 필요하며, 첫번째는 URL 두번째 인자는 옵션객체를 받는다.(반환값은 promise타입)  
디폴트로 get방식으로 작동. 옵션중 method: post로 지정하면 post로도 쓸 수 있다...

<br>

자세한건

#### [DaleSeo - [자바스크립트] fetch() 함수로 원격 API 호출하기](https://www.daleseo.com/js-window-fetch/)

에서 확인해보기.

<br>

<br>

아무튼 돌아와서...

<br>

## geolocation API 메서드 종류

<br>

- getCurrentPosition()
- watchPosition()
- clearWatch()

<br>

## 메서드들의 자세한 내용

| geolocation 메서드 이름 |                               설명                                |
| ----------------------- | :---------------------------------------------------------------: |
| `getCurrentPosition()`  |            사용자의 현재 위치의 위도, 경도를 가져온다             |
| `watchPosition()`       | 현재위치를 가져오고 사용자가 움직이면 지속적으로 정보를 갱신한다. |
| `clearWatch()`          |                 watchPosition()의 실행중지 메서드                 |

<br>

## getCurrentPosition() 의 자세한 내용

| getCurrentPosition()의 반환값        |                       설명                       |
| ------------------------------------ | :----------------------------------------------: |
| `timestamp`                          |          정보를 가져온 시간을 나타낸다.          |
| `coords.latitude , coords.longitude` | 소수로 된 `위도(latitude)`와 `경도(longitude)`값 |
| `coords.speed`                       |     초당 이동한 미터수를 나타내는 값, (초속)     |

<br>

---

<br>

### 참고한 홈페이지 목록

#### [tcpschool - Geolocation](http://tcpschool.com/html/html5_api_geolocation)

#### [DaleSeo - [자바스크립트] fetch() 함수로 원격 API 호출하기](https://www.daleseo.com/js-window-fetch/)
