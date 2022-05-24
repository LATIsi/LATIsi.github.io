---
title: "Css와 JS 애니메이션 구현방법"
excerpt: " & CSS Transition, CSS Transform, CSS Animations, JS Animations & Timer Function"
date: 2022-03-15
categories:
  - JS
tags:
  - JS
  - animation
  - css
  - Transform
  - Transition
last_modified_at: 2022-05-24
---

# CSS Transition 애니메이션

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

    버튼을 누르면 네비게이션바가 나타나는걸 add로 표현하고  
    네비게이션의 메뉴를 누르면 사라지는것을 remove로 사용할수있는데,

    이걸 classList의 contains로 해당 클래스가 있는지 t/f로 반환된 값으로

    <Br>

    ```
        transform: translate3d(0, 0, 0);
    ```

    이 담긴 css class가 있는지 검사를 하고 if문으로 없으면 add, 있으면 remove로 네비게이션바 액션 클래스를 생성/삭제를 해줍니다

    더 쉽게하는 방법으로는 toggle 메서드를 사용하는것!

    ```
      function toggleMenu() {
          return sideBar.classList.toggle('active');
      };
    ```

    리턴은 꼬옥 해주기

<Br>

<Br>

---

<Br>

# transition

css 속성값이 변할때 값의 변화가 일정 시간에 걸쳐 일어나는 것.

<br>

| transition 이벤트 이름 |                                                     설명                                                     |
| ---------------------- | :----------------------------------------------------------------------------------------------------------: |
| `transitionrun`        |                                transition 이 처음 생성될때 발생. (delay전에)                                 |
| `transitionstart`      |                         transition이 실제로 변화가 생겨 움직일경우, (delay 종료 후)                          |
| `transitioncancel`     | transition 이 취소된 상황에 발생 <br> 원래로 돌아가는것 역시 스타일의 변화이기에 transition이 적용되니 조심! |
| `transitionend`        |                                         transition 이 완료하면 발생                                          |

<br>

<br>

| transition 관련 속성         |                                                                                                                          설명                                                                                                                           |
| ---------------------------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `transition-delay`           |                                 `시간 속성, 지연` <br> 지정한 시간이 지나면 곧장 변한다. 초(s)또는 밀리초(ms)로 나타낸다. 음수값으로도 사용할수 있다. (음수값일시, 지정한 음수값의 절대값 시간만큼 건너뛰고 시작한다.)                                  |
| `transition-durtion`         |                                          `지속` <br> a에서부터 모양을 바꾸며 b로 바뀌는 동안, 즉 바뀌는 시간을 조정한다. 초(s)또는 밀리초(ms)로 나타낸다 <br> transition이 발생하는 지속시간을 지정 가능하다.                                           |
| `transition-property`        | `속성` <br> transition 효과를 어느 속성에 지정하거나 변경하고 싶은 스타일의 속성을 지정해주는것. <br> all은 전체, none은 모든속성에 적용하지 않음.<br> 또는 color나 background-color같은 속성을 지정하는것. ....여러개의 속성을 지정시, `,`을 사용한다. |
| `transition-timing-function` |                               `타이밍` <br> transition의 진행속도를 설정한다. (인터넷 익스플로러 10에서부터 사용가능) <br> 4개의 컨트롤 포인트로 transition의 시작, 끝, 효과를 제어한다. 여러가지가 있으니 밑에 서술한다.                               |
| `transition 숏컷코딩`        |                                                                    transition으로 위의 4속성을 한줄에 적용가능. 순서는 ` property, durtion, timing-function, delay` 순으로 작성한다.                                                                    |

<br>

<br>

## transition-timing-function의 값

<br>

| transition-timing-function의 값 |                                                                              설명                                                                              |
| ------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `initial`                       |                                                                        기본값을 받는다.                                                                        |
| `inherit`                       |                                                                      부모에게 상속받는다.                                                                      |
| `linear`                        |                                                                      일정속도를 유지한다.                                                                      |
| `ease`                          |                                                                끝 지점만 천천히, 그외는 빠르게                                                                 |
| `ease-in`                       |                                                                  느리게 시작하고 빠르게 끝남                                                                   |
| `ease-out`                      |                                                             빠르게 시작뒤 느리게 끝남. 천천히 종결                                                             |
| `ease-in-out`                   |                                                                  천천히 시작해서 천천히 종결                                                                   |
| `step-start`                    |                                                    시작지점 스텝 끊기, 즉, 시작하자마자 순간적으로 바뀐다.                                                     |
| `step-end`                      |                                                     끝나는 시점 스텝 끊기, 즉, 끝날즈음 순간적으로 바뀐다.                                                     |
| `cubic-bezier`                  | 부드러운 곡선 모델링을 위한 곡선그리기. transition-timing-function에서 사용시, <br> `cubic-bezier(<number>,<number>,<number>,<number>);` 식으로 사용할수 있다. |

<br>

---

<Br>

# Css transform

`변형.`  
모든 transform 속성값은 뒤에 x와 y를 붙여 따로 지정이 가능하다.  
요소상태 변경이 있어야지만 실행이 된다.

  <br>

| transform 속성                        |                                                                                                                                                                                      설명                                                                                                                                                                                      |
| ------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `Scale(x,y의 확대 비율)`              |                                                           `확대`. <br> 가로와 세로가 중심점을 기준으로 늘어난다. 즉, `가운데를 중시므로 늘어나는 효과`를 볼수있다. <br> `1`은 100%, `1.5`는 150%, `2`는 200%로 확대한다는 뜻이다. <br> 인자가 하나시, x,y 축 둘다 같은 값으로 친다. `Scale, ScaleX, ScaleY`가 있다.                                                            |
| `rotate(x,y의 회전 각의 크기)`        |                                                                                                               `회전`.<br> 단위는 deg / (degree), turn, rad, grad 등이며 <br> 1회전이 deg는 360deg이고, 1turn은 1회전이다.<br> `rotate, rotateX, rotateY`가 있다.                                                                                                               |
| `translate( x,y의 평면으로 옮길 값 )` |                                                                                                        `평면 이동`. <br> 각각 개체를 x,y축으로 옮기고 싶을떄 사용하는 속성. 기준점은 가운데이며, 음수적용도 가능하다. <br> `translate, translateX, translateY`가 있다.                                                                                                         |
| `skew( x,y을 비틀 각도 )`             |                                  `왜곡`.<br> 기본 형태를 왜곡시켜준다. rotate과 같은 단위를 지닌다. <br> 객체의 기준점을 기준으로 설정한 각도만큼 당기는 모양새이다. <Br> `skew, skewX(x축을 기준으로 비틈), skewY(y축을 기준으로 비틈)`이 있다. <br> x축은 +일시 왼쪽, -는 오른쪽으로 비틀어지고 y축은 +는 아래로, -는 위쪽으로 비틀어진다.                                   |
| `transform-origin`                    | `기준점 변경하는 속성`. <br> 값으로 left, right, center도 가능하며 왼쪽, 오른쪽, 위, 아래로 지정시 그 지정한 선을 기준으로 기준점을 가진다. <br> 즉 직사각형의 transform-origin을 오른쪽으로 두고, 회전 한바퀴를 할시 `오른쪽 선을 기준으로` 한바퀴를 회전한다. <br> 또한 직사각형을 기준으로 한다면 `left top, right top...같이` 두개의 값을 넣어 꼭짓점을 지정해 줄 수 있다. |

---

<br>

<br>

# CSS keyframe

`어떤 변화가 일어나는 지점`을 정한뒤, `특정 시간동안 각 지점마다 설정한 속성값`으로 `변화`하는것.

애니메이션 이름, 스테이지 -(from, to / 0~100%) , css 스타일이 필요하다.

<br>

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
- Animations은 keyframes 속성이 꼭 필요하다!

  <br>

<br>

| Animations 관련 속성        |                                                                                                                                           설명                                                                                                                                           |
| --------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `animation-iteration-count` |                                                          `애니메이션 반복.` <br> `1`이 기본값이며. 적용하는 값은 0을 제외한 `양수, 실수, 무한반복, 음수`. 음수는 1과 같이 처리한다. 1.5같은 유리수는 재생도중에 다시 돌아간다.                                                           |
| `animation-duration`        |                                                                                  `애니메이션 시작/종료까지의 총 지속시간`을 설정해준다.<br> 적용하는값은 양수만 가능하며, 0이나 음수시 실행하지 않는다.                                                                                  |
| `animation-direction`       |                      `애니메이션 재생 방향.` <br> 기본값은 정방향인 `nomal`이며 정방향, 역방향, 번갈아 반복하기가 있다. <br> 역방향인 `reverse`, 매 사이클(짝수, 홀수)마다 각 주기의 방향을 뒤집어주는 `alternate`, alternate의 반대인 `alternate- reverse`가 있다.                      |
| `animation-delay`           |                                            `재생 지연` <br> 기본값은 지연이 안되는 `0(now)`이고, 유리수와 양수는 자연적으로 지정된 시간이 지나고 나서야 재생하며 <br> 음수는 애니메이션이 시작되지만, 애니메이션 도중의 프레임부터 재생한다.                                             |
| `animation-timing-function` | `키프레임들 사이의 속도 조절`<br> 즉 애니메이션 효과의 프레임당 속도를 조절하는 속성. <br> 기본값으로 천천히 시작되어 빨라지고 다시 느려지는 `ease`이며 사용자 지정의 `cubic-bezier(n,n,n,n)`, 일정한 속도의 `linear`,<br> 천천히 시작되는 `ease-in`, 천천히 끝나는 `ease-out`등이 있다. |
| `animation-play-state`      |                                                                                   `재생여부` <br> 속성이 running일시, 애니메이션 재생을 하고 paused는 정지한다. ..... 자바스크립트에서 자주 사용된다.                                                                                    |

<br>

<Br>

| Animations 이벤트 리스너 |                                                                설명                                                                |
| ------------------------ | :--------------------------------------------------------------------------------------------------------------------------------: |
| `animationstart`         | Animations이 처음 시작될때 발생, Animations-delay가 있다면 해당초만큼 기다리고<br> Animations이 시작되면서 Animationsstart가 발생. |
| `animationiteration`     |                       animationiteration에는 animation-iteration-count가 있다 <br> 애니메이션 반복횟수 지정!                       |
| `animationend`           |                                                     애니메이션 이 끝나면 발생                                                      |
| `animationcancel`        |                                                  애니메이션 시작이후 중단시 발생                                                   |

<br>

<br>

### `animation 숏컷코딩`

animation으로 위의 속성들을 한줄에 적용가능.  
 순서는 `animation: name, duration, timing-function, delay, iteration-count, direction, fill-mode(애니메이션 시작 전,후 상태값), play-state ` 순으로 작성한다.

 <br>

또한 `크로스 브라우징` 이슈를 해결하기위해서 `animation 앞에` 크롬/사파리의 -webkit-이나 `-moz- 파이어폭스, -o- 오페라, -ms- ie`를 붙인다.

 <br>

 <br>

 <br>

---

<br>

<br>

### 애니메이션 호출(재생)시, 이름 정의는 필수이다.

- 이름 첫글자로 영문, 소문자, 숫자, 문자열, -, `_`는 사용할수 있지만 영어 대문자, 특수기호, 숫자는 사용할수 없다.
- 여러개의 이름 나열은 `,` 을 사용해서 나열한다.

<br>

위에서 말했듯, Animations은 keyframes 속성이 꼭 필요한데,

<br>

```
@keyframes 애니메이션 이름{
  from {
    / 0% 일때의 css
  }

  to {
    / 100% 일때의 css
  }
}

또는

@keyframes 애니메이션 이름{
  0% {
    / 0% 일때의 css
  }

  35% {
    / 35% 일때의 css
  }

  50% {
    / 50% 일때의 css
  }

  100% {
    / 100% 일때의 css
  }
}
도 가능하다.
```

<br>

같이, from, to를 사용하기도 한다.

<br>

<br>

---

<br>

<br>

# Timer Function (JS)

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

setTimeout과 비슷하면서 프레임 시작지점에 맞춰 브라우저에게 명령을 내리고 실행하기에, `최대 1ms, 1초에 60번 동작하여` 굉장히 부드럽게 움직인다.

<br>

자세한 내용은

### [ RequestAnimationFrame()을 사용하는 방법 및 예제 - WEBISFREE ](<https://webisfree.com/2020-03-19/[%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8]-requestanimationframe()%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EB%B0%8F-%EC%98%88%EC%A0%9C>)

페이지를 참고해보자.

<Br>

---

<br>

## 참고한 홈페이지

<br>

### [ developer.mozilla.org - animation ](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)

<br>

### [tcpschool - animation ](http://www.tcpschool.com/css/css3_transform_animation)
