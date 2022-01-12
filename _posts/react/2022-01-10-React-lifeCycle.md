---
title: "React 라이프 사이클"
excerpt: "라이플사이클에 대해서 공부하기"
date: 2022-01-10
categories: React
last_modified_at: 2022-01-12
---

라이프사이클 메소드(수명주기)는 클래스형 컴포넌트에서 사용할 수 있다!  
비슷한거로는, 함수 컴포넌트에서는 hooks를 사용하여 사용할 수 있다.

## will이 붙은 메서드는 작업 작동 전 실행되는 메소드

## do는 작업 작동 후 실행되는 메소드.

라이프사이클은

- 마운트(dom 생성뒤 웹 브라우저에 나타나는것)
- 업데이트 ( props, state, 부모컴포넌트가 리렌더링할때)
- 언마운트 ( 컴포넌트를 dom에서 제거시. )  
  로 나뉜다.

  mount는 차례로  
  constructor - 컴포넌트를 새로 만들때마다 호출되는 메소드  
  getDerivedStateFromProps - props에 있는 값을 state에 넣을때 사용 메소드  
  render - UI 렌더링 메소드  
  componentDidMount - 컴포넌트가 웹브라우저 상에 나타난뒤 호출 메소드

---

**마운트시 중요한 메소드들.**

## render

생명주기 메소드중 유일한 필수 메소드.  
props와 state에 접근할수 있고. 리엑트 요소 반환.

그러나 이벤트 설정이 아닌곳에서 setState이나 dom에 접근해서도 안됨.
-> dom 정보를 가져오거나 state에 변화를 줄때는 componentDidMount에서 처리

## constructor

컴포넌트의 생성자 메소드. 처음으로 실행되며 초기 state를 설정할 수 있다.  
클래스형 컴포넌트에서 사용한다.

## getDerivedStateFromProps

props로 받아온 값을 state에 조건에 따라 특정값을 동기화 시키는 용도로 사용.  
마운트, 업데이트시 호출하며 state를 변경할 필요가 없다면 null을 반환한다.

## componentDidMount

컴포넌트를 다 만들고 첫 렌더링 다 마친뒤 실행.  
이곳에서 setTimeout이나 네트워크 요청같은 비동기 작업 처리하면 된다.

---

그 외에도 **업데이트 관련 생명주기메소드**가 있다.

## shouldcomponentUpdate

props나 state가 업데이트 됐을때, 리렌더링을 시작할지의 여부를 지정하는 메소드
true, false값만 반환해야함.  
(따로 생성하지않는다면 언제나 true값 반환, false값 반환시 업데이트 과정은 거기서 중지.)

기본 props나 state는 this.props나 this.state로 접근가능하며, 다음의 state나 props에 접근시, nextProps와 nextState로 접근 가능.

## getSnapshotBeforeUpdate

render에서 만들어진 결과물을 브라우저에 실제로 반영되기 직전에 호출.  
업데이트하기 직전의 값을 참고할 일 있을 때 활용함.  
(주로 스크롤의 위치같은..... 크롬은 무언가가 추가 되면 스크롤도 내려오지만 다른 웹브라우저는 아닌경우도 있음.)  
또한, componentDidUpdate의 snapshot 값을 전달받을 수 있음.

## componentDidUpdate

리렌더링 완료후 실행 - 즉, 업데이트가 끝난 직후이므로 dom처리를 해도 ok  
prevProps나 prevState로 전에 가졌던 데이터에 접근가능.

---

마지막으로 **삭제 관련 생명주기메소드**.

## componentWillUnMount

컴포넌트 dom에서 제거시 실행.  
componentDidMount에서 만든 이벤트나 dom이 있다면 여기서 제거작업을 해야한다.

## componentDidCatch

잘못된 컴포넌트 렌더링이라도 애플리케이션이 먹통되지않고 오류가 난 화면을 보여주는 메소드  
보통 console.log로 어디서 오류가 났는지를 확인할수도 있지만, 이 메소드는 **this.props.chlieren**으로 전달되는 컴포넌트에서 발생한 에러만 발견할 수 있다  
매개변수인 error는 어떤 에러인지 알려주고 다른 매개변수인 info는 어느 코드에서 오류가 발생했는지 알려준다.

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/  
사이트에서 확인할수 있다.
