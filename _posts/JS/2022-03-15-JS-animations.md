---
title: "JS 애니메이션 구현방법"
excerpt: "CSS Transition, CSS Animations, JS Animations & Timer Function"
date: 2022-03-15
categories:
  - JS
tags:
  - JS
  - animation
last_modified_at: 2022-03-15
---

# CSS Transition

- 가장 쉽게, 간단히 쓸 수 있음
- 주로 :hover나 :active에 사용하며, 색, 크기 애니메이션시 사용
- Transition과 transform을 사용함.
- 반드시 상호작용, 즉 트리거가 필요함
- classList를 사용하여 애니메이션 추가 가능.

  - add, contains, toggle, remove로 애니메이션을 넣을수 있다.
  - 3D Transform의 translate3d() 메서드  
     현재 위치에서 해당 요소를 주어진 x축과 y축, z축의 거리만큼 이동
    <a>http://www.tcpschool.com/css/css3_transform_3Dtransform</a> 참고

    <Br>

  ```
    버튼을 누르면 네비게이션바가 나타나는걸 add로 표현하고

    네비게이션의 메뉴를 누르면 사라지는것을 remove로 사용할수있는데,

    이걸 classList의 contains로 해당 클래스가 있는지 t/f로 반환된 값으로

    	transform: translate3d(0, 0, 0);

    이 담긴 css class가 있는지 검사를 하고 if문으로 없으면 add, 있으면 remove로 네비게이션바 액션 클래스를 생성/삭제를 해줍니다

     더 쉽게하는 방법으로는 toggle 메서드를 사용하는것!

    function toggleMenu() {
        return sideBar.classList.toggle('active');
    };

    리턴은 꼬옥 해주기
  ```

<Br>

# transition 이벤트 4가지

<br>

| transition 이벤트 이름 |                                                     설명                                                     |
| ---------------------- | :----------------------------------------------------------------------------------------------------------: |
| `transitionrun`        |                                transition 이 처음 생성될때 발생. (delay전에)                                 |
| `transitionstart`      |                         transition이 실제로 변화가 생겨 움직일경우, (delay 종료 후)                          |
| `transitioncancel`     | transition 이 취소된 상황에 발생 <br> 원래로 돌아가는것 역시 스타일의 변화이기에 transition이 적용되니 조심! |
| `transitionend`        |                                         transition 이 완료하면 발생                                          |

<br>

---

<br>

# CSS Animations

- 0%~ 100% 사이에 keyframe 별로 중단점 브레이크 포인트를 넣어 스타일을 지정해 변화
- Transition과는 달리 트리거가 필요없음
- 무한 반복 가능.

<Br>

# JS Animations

- 가장 변칙적인 변화를 줄 수 있음
- 애니메이션 중간에 중지, 일시정지, 감속, 되감기 가능
- Animations은 transition과 다르게 run이 없고 iteration이 있다.
  <br>

| Animations 이벤트 리스너 |                                                                설명                                                                |
| ------------------------ | :--------------------------------------------------------------------------------------------------------------------------------: |
| `animationstart`         | Animations이 처음 시작될때 발생, Animations-delay가 있다면 해당초만큼 기다리고<br> Animations이 시작되면서 Animationsstart가 발생. |
| `animationiteration`     |                       animationiteration에는 animation-iteration-count가 있다 <br> 애니메이션 반복횟수 지정!                       |
| `animationend`           |                                                     애니메이션 이 끝나면 발생                                                      |
| `animationcancel`        |                                                  애니메이션 시작이후 중단시 발생                                                   |

---

<br>
<br>

# Timer Function

JS의 timer 함수를 사용해 특정패턴을 반복하는 코드를 짤수있다!

## setTimeout

- 일정시간<u>뒤에</u> 함수, 코드를 실행하는 타이머 설정
- `setTimeout(콜백함수, 초(1000단위 1000= 1초) )`
- 두번째 인자 초 후에 콜백함수 실행.
- 실행되고 나면 ID값인 숫자를 반환함.

## clearTimeout

- setTimeout 함수의 실행 취소
- `clearTimeout(setTimeout이 반환한 숫자를 담은 변수)`
- 두번째 인자 초 후에 콜백함수 실행.

## setInterval

- 일정시간의 <u>간격을 두고</u> (즉, 일정시간의 간격을 두고 계속 반복되는 .... ) 함수와 코드를 실행하는 타이머 설정
- 반환되는 값도 setTimeout과 같게 ID값 숫자를 반환.
- 사용법은 setTimeout와 같다.

## clearInterval

- setInterval 함수를 취소하는 함수.
- 사용법은 clearTimeout과 같다.

<br>

...그런데. setInterval 과 setTimeout은 사용자가 페이지를 안봐도 계속 실행되어 성능을 하락시키고<br> 주어진 시간내에 함수를 실행하기에 요즘의 프레임 사용과는 다르게 부드럽지가 않다.  
그래서 나온것이...
<br>
<br>

## requestAnimationFrame

이 메소드!

setTimeout과 비슷하면서 프레임 시작지점에 맞춰 브라우저에게 명령을 내리고 실행하기에, 굉장히 부드럽게 움직인다.
