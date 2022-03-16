---
title: "JS 애니메이션 구현방법"
excerpt: "CSS Transition, CSS Animations, JS Animations"
date: 2022-03-15
categories: JS
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

## transitionrun

transition 이 처음 생성될때 발생. (delay전에)

<br>

## transitionstart

transition이 실제로 변화가 생겨 움직일경우, (delay 종료 후)

<br>

## transitioncancel

transition 이 취소된 상황에 발생
원래로 돌아가는것 역시 스타일의 변화이기에 transition이 적용되니 조심!

<br>

## transitionend

transition 이 완료하면 발생

<br>
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

---
