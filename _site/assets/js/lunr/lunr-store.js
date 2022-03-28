var store = [{
        "title": "jekyll 블로그 제작관련 기록",
        "excerpt":"추후 추가되는 글입니다. 로컬서버 구동 할 때! cmd에서 bundle exec jekyll serve 으로 로컬 서버에서 구동확인 구동했을시 관련 오류. -- cannot load such file -- webrick 오류가 나서 bundle add webrick을 설치한뒤 다시 bundle exec jekyll serve 실행. 참고 글 : https://junho85.pe.kr/1850 블로그 글 작성시 작성 방법! title: # 제목...","categories": ["Blog"],
        "tags": ["Blog"],
        "url": "/blog/Blog_log/",
        "teaser": null
      },{
        "title": "git 명령어 정리",
        "excerpt":"추후 추가되는 글입니다. 내가 만들던 프로젝트나 공부용 파일들을 백업하는김에 이것저것 뒤져보다 최근에서야 실무에서도 많이쓰이는 git을 알고 사용하기로 결정! 그런데… 팀 프로젝트를 했을적에는 git의 정체도 몰랐었다!(!!!!!) 서로 카톡으로 프로젝트의 파일을 수정하며 결합했다가 그럼에도 오류났을때 비명을 질렀던 기억이 난다.. 지금이라도 익숙해지자 싶어 공부를 시작하고야 말았는데! 나 자신을 위한 git 명령어를 노션에 정리해두었지만...","categories": ["Git"],
        "tags": [],
        "url": "/git/git-command/",
        "teaser": null
      },{
        "title": "JS 객체 관련 with , in 이해한것 정리",
        "excerpt":"JS 책을 보며 공부를 하다가 객체의 with과 in 관련해서 이해한것을 정리한 포스트이다. in in은 해당 키가 객체 안에 있는지 확인하고 있으면 true, 없으면 false를 반환한다. ex) ‘찾으려는 속성’ in 객체 with with은 객체안의 속성을 여러개 불러올때 복잡한 코드를 짧게 줄이는 방법으로, ex) with(객체){ 속성불러오기.. } 이런식으로, 객체.속성으로 불러올것을 그냥 속성으로...","categories": ["JS"],
        "tags": ["JS"],
        "url": "/js/JS-object-with,in/",
        "teaser": null
      },{
        "title": "2021.11 - 2022.01 개발 목표 관련",
        "excerpt":"올해 대학교를 졸업하고나서 10월 중 후반부터 본격적인 프론트엔드에 대한 공부를 시작했다! 왜냐면 나는 그림그리는 것을 굉장히 좋아한다. 오죽하면 중고딩때 매일 그림공책을 들고 건물을 따라 그리거나 크로키 하는 것도 좋아했고. 그때문인가 고등학교도 디자인학과에 들어가서 그때 웹디자인도 처음으로 해봤다. 근데 디자인만으로 만족 못하고 그 안의 기능도 내 스스로 개발하고 싶은걸 어떻게 하라는건지...","categories": ["일상"],
        "tags": ["일상","목표"],
        "url": "/%EC%9D%BC%EC%83%81/toyproject/",
        "teaser": null
      },{
        "title": "Cannot read properties of undefined (reading 'map')",
        "excerpt":"https://www.youtube.com/watch?v=DtLhiMxgsm0 의 코로나 리엑트 클론코딩중에 나온 오류 Cannot read properties of undefined (reading 'map') setDatasets C:경로/react_corona/src/utils.ts:46 43 | currentData: ChartData&lt;TType, TData, TLabel&gt;, 44 | nextDatasets: ChartDataset&lt;TType, TData&gt;[] 45 | ) { &gt; 46 | currentData.datasets = nextDatasets.map(nextDataset =&gt; { 47 | // given the new set, find it's current match...","categories": ["React"],
        "tags": ["React","오류","라이브러리"],
        "url": "/react/React-error-TypeError/",
        "teaser": null
      },{
        "title": "JS 전개 연산자를 통한 배열 복제와 복사 관련 정리",
        "excerpt":"JS 책을 보며 공부를 하다가 옵션객체와 연산자를 이용한 복제에 관해 이해한것을 정리한 포스트이다. 옵션 객체 함수의 매개변수로 들어가는 객체 , 값을 입력하지않으면 초기화 하는 과정이 필요. 값 복사 1. 기본 자료형 숫자, 문자열, 불값 복사시… 값을 완전히 복사해 두개의 변수가 완전한 독립성을 가지게 되는것을 값 볷사, 깊은 복사 -clone- 라고...","categories": ["JS"],
        "tags": ["JS"],
        "url": "/js/JS-object-copy/",
        "teaser": null
      },{
        "title": "JS 프로토타입",
        "excerpt":"JS 프로토타입 / 생성자 관련해서 이해한것을 정리한 포스트이다. 프로토타입 생성자함수, 생성된 객체가 공통으로 가지는 공간 메서드를 여기에 선언함 기존 객체에 추가적으로 메서드 제공 가능 생성자 함수 객체 생성시 사용하는 함수 생성시 new 키워드로 객체를 생성하고, 이렇게 생성된 객체를 인스턴스라고 부른다. 해당 객체가 어떤 생성자 함수로 만들어졌는지 알고싶다면 instranceof 키워드로 t/f...","categories": ["JS"],
        "tags": ["JS"],
        "url": "/js/JS-prototype/",
        "teaser": null
      },{
        "title": "css 줄바꿈 (\n) 변환방법",
        "excerpt":"white-space는 공백, 줄바꿈, 들여쓰기를 css에서 표현할때 유용하게 쓰고있다! 마치 html에서 엔터와 탭, 스페이스를 인식하는 pre요소 처럼 사용할수 있다. 적절히 사용해서 줄 바꿈을 하여 보기좋게 할수 있으며 white-space의 속성으로는 nomal nowrap pre pre-wrap pre-line 이 있다! 각각 특징이 있지만 normal은 여러개의 공백과 줄바꿈을 하나로 표시한다( 연속 공백이 하나로, 연속 줄바꿈이 하나로..)...","categories": ["CSS"],
        "tags": ["CSS"],
        "url": "/css/Css-white-space/",
        "teaser": null
      },{
        "title": "React 이미지 사용 관련 정리",
        "excerpt":"리엑트를 작업하면서 이미지를 넣는 과정에서 src폴더에 저장하고 css에서 backgroundImage 같은걸로 이미지를 따악 지정해서 보여주는 작업도 좋지만, 사진이 있는 경로만을 객체 배열에 넣어 그걸 다시 한꺼번에 뿌려주는 작업을 하고싶은 나머지 이것저것 뒤져보는데 1. public 폴더에 저장해서 곧장 절대경로로 불러오기 2. src 폴더에 저장해서 import로 하나씩 불러오기 이 두개밖에,,,,없다,,, (일단 내가 찾아본...","categories": ["React"],
        "tags": ["React","이미지"],
        "url": "/react/React-img/",
        "teaser": null
      },{
        "title": "React svg 사용 관련 정리",
        "excerpt":"React-icon 관련해서 어떻게 객체 배열에 넣나 생각하고있었다… 왜냐! 컴포넌트같이 react-icon은 이렇게 불러오니까,,, 객체 배열에 넣을수있나?! 싶었었다. 일단 icon 파일명인 svg 파일에 대해 조사를 해봤다. 스케일러블 벡터 그래픽스(Scalable Vector Graphics, SVG)는 2차원 벡터 그래픽을 표현하기 위한 XML 기반의 파일 형식으로, 1999년 W3C(World Wide Web Consortium)의 주도하에 개발된 오픈 표준의 벡터 그래픽...","categories": ["React"],
        "tags": ["React","이미지"],
        "url": "/react/React-svg/",
        "teaser": null
      },{
        "title": "React enum",
        "excerpt":"enum는 간단히 말하면 상태값에 따라 어떤 화면을 보여줄지 객체 자료형으로 지정해주는것이다. if문으로 다 처리를 해줄수도 있지만, 객체 자료형안에 JSX의 자료를 전부 지정해주어 편리하게 작성할수도 있다. 예시: function aaaa() { var state_a = 'A'; return ( &lt;div&gt; { { A : a의 구역, B : b의 구역, C : c의 구역...","categories": ["React"],
        "tags": ["React"],
        "url": "/react/React-enum/",
        "teaser": null
      },{
        "title": "React 이벤트 정리",
        "excerpt":"사용자가 웹 브라우저에서 dom요소들과 상호 작용하는것을 이벤트 라고 한다. 이벤트 사용시 주의 사항 이벤트이름은 카멜 표기법으로 작성 이벤트에 함수형태의 객체 전달 dom 요소에만 이벤트 설정 가능. 즉, 우리가 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할수 없으며 - div, input, button, form, span등의 dom 요소에는 이벤트 설정이 가능하다. 이벤트 종류 리엑트에서 지원하는...","categories": ["React"],
        "tags": ["React","event"],
        "url": "/react/React-event/",
        "teaser": null
      },{
        "title": "React map, concat, filter",
        "excerpt":"map 배열.map() 이거 react에서 활용도로 굉장히 중요하다고 생각한다. 그야 배열을 편하게 활용할 수 있으니까!! 배열.map (변수 =&gt; 배열마다 적용해서 리턴할 내용) 이나 배열.map (function (변수) { return 배열마다 적용해서 리턴할 값 }) 으로 많이 활용하는데 map에는 key가 중요하다! map으로 풀어줄 요소에 key 속성을 넣어주는데, 그 key값으로 주로 map의 파라미터인 index를...","categories": ["React"],
        "tags": ["React"],
        "url": "/react/React-data-add-delete/",
        "teaser": null
      },{
        "title": "React 라이프 사이클",
        "excerpt":"라이프사이클 메소드(수명주기)는 클래스형 컴포넌트에서 사용할 수 있다! 비슷한거로는, 함수 컴포넌트에서는 hooks를 사용하여 사용할 수 있다. will이 붙은 메서드는 작업 작동 전 실행되는 메소드 do는 작업 작동 후 실행되는 메소드. 라이프사이클은 마운트(dom 생성뒤 웹 브라우저에 나타나는것) 업데이트 ( props, state, 부모컴포넌트가 리렌더링할때) 언마운트 ( 컴포넌트를 dom에서 제거시. ) 로 나뉜다. mount는...","categories": ["React"],
        "tags": ["React"],
        "url": "/react/React-lifeCycle/",
        "teaser": null
      },{
        "title": "React hook",
        "excerpt":"react에는 useState useEffect useReducer useMemo useCallback useRef 같은 내장 hook들과 커스텀 hook들이 있다. useState useState는 기본적으로, 함수 컴포넌트에서도 가변적인 상태를 지니게해줄 수 있다. const [상태값, 상태값을 바꿔줄 함수] = useState(기본값); 이다. 하나의 useState는 하나의 상태값만 관리할수 있으므로, 관리할 상태값이 여러개라면 거기에 맞는 각각의 useState를 사용해야한다. useEffect useEffect는 렌더링될때마다 특정 작업을...","categories": ["React"],
        "tags": ["React","라이브러리"],
        "url": "/react/React-Hook/",
        "teaser": null
      },{
        "title": "css모듈, classNames, 스타일 컴포넌트 ",
        "excerpt":"Css Module 컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지해주는 기술. 클래스 이름을 지을때 고유성에 대해 고민하지 않아됨. =&gt; 직접 불러온 컴포넌트 내부에서만 작동하기 때문. ` 파일이름_클래스이름_해시값` 형태로 이름을 자동으로 만들어 줌. 파일명.module.css 파일을 저장하면 적용된다. 전역적으로 사용되는 경우에는 :global을 적용. // 일반 .css나 .scss에서도 :local을 사용하여 Css Module 사용가능. JSX에서...","categories": ["CSS"],
        "tags": ["CSS","Style-components"],
        "url": "/css/Css-Module,components/",
        "teaser": null
      },{
        "title": "일반 css와 sass",
        "excerpt":"일반 css 일반 Css를 작성할때, 클래스를 중복되지 않게 만드는것이 중요하다. 그 방법으로는 BEM네이밍, 즉 이름을 지을 때 규칙을 넣어 짓는것과, Css Selector를 활용하는 방법이 있다. Css Selector 같은 경우, 특정 클래스안에 css 클래스가 있는 경우만 활용가능. .Components .logo { -&gt; Components 클래스안에 logo라는 css 클래스가 있다는것. 태그 전체에 적용하고싶을시 ....","categories": ["CSS"],
        "tags": ["CSS"],
        "url": "/css/Css-css,sass/",
        "teaser": null
      },{
        "title": "컴포넌트 성능 최적화 하는법",
        "excerpt":"컴포넌트가 느려지는 원인의 대표적인 예시로 바뀐것들만 리렌더링할것을 전부 리렌더링하여 느려질때가 있다. 상황을 살펴보는방법! 크롬에서 f12를 눌러 components 말고도 Profiler라는 탭을 활용 한다. 특정한 기능을 녹화를 해 그 특정한 기능의 성능을 모니터링 할 수 있다. 이런식으로 분석 결과가 나오는데, Render duration은 렌더링에 소요된 시간(컴퓨터 성능에 따라 다름!) Rank chart라는 차트 아이콘을...","categories": ["React"],
        "tags": ["React","개발자 도구"],
        "url": "/react/React-devtool/",
        "teaser": null
      },{
        "title": "immer로 불변성 유지하기",
        "excerpt":"불변성은 리엑트에서 매우매우매우 중요하다! 불변성이 지켜지지 않으면 객체 내부의 값이 새로워져도 바뀐 것을 감지하지 못한다! =&gt; 즉,업데이트를 하지못한다!! 그러므로 immer라는 라이브러리를 사용하는데.. npm install immer 로 설치해보고, 사용해보기. import produce from 'immer' const next = produce (a1, a2 =&gt; { a2.바꾸고싶은값 ='바뀐값'; }) produce의 파라미터는 두개로, 순서대로 수정하고싶은 상태 상태를...","categories": ["React"],
        "tags": ["React"],
        "url": "/react/React-immer/",
        "teaser": null
      },{
        "title": "SPA(single page Application)",
        "excerpt":"SPA(single page Application)는 한개의 페이지로 이루어진 어플리케이션이다. 서버에서 사용자에게 제공하는 페이지는 하나지만, 해당 페이지에서 주소상태에 따라 다양한 화면을 보여줄 수 있다. (라우팅) 브라우저의 API를 사용하여 관리하거나 라이브러리를 사용하여 라우팅을 쉽게 구현할수있다. 단점으로는 앱의 규모가 커지면 JS파일이 너무 커진다는것 JS를 실행하지않는 크롤러가 페이지의 정보를 제대로 수집해가지 못한다. (검색유입이 어려워진다.) 1은 코드...","categories": ["React"],
        "tags": ["React","SPA"],
        "url": "/react/React-SPA/",
        "teaser": null
      },{
        "title": "비동기 작업 ajax와 api",
        "excerpt":"JS에서 비동기 처리를 할시, setTimeout 콜백함수 Promise (콜백지옥 해결방법) async / await 을 사용한다. 특히 Promise같은 경우, test(0).then(number =&gt; { console.log(number); return test(number); }).then(number =&gt; { console.log(number); return test(number); }).then(number =&gt; { console.log(number); return test(number); }); …같이. .then함수를 사용해 콜백지옥을 줄일수 있다. async/await async/await는 사용하려는 function 앞부분에 async를 추가하고, 함수내부에서...","categories": ["React"],
        "tags": ["React","AJAX"],
        "url": "/react/React-Ajax/",
        "teaser": null
      },{
        "title": "안드로이드 스튜디오 ",
        "excerpt":" ","categories": ["Android"],
        "tags": ["Android"],
        "url": "/android/Android-sns/",
        "teaser": null
      },{
        "title": "html  ",
        "excerpt":" ","categories": ["html"],
        "tags": ["html"],
        "url": "/html/html-script/",
        "teaser": null
      },{
        "title": "2022.02 - 04 개발 목표 관련",
        "excerpt":"내일배움카드로 신청한 KDC 구름 자바스크립트 풀스택 19기를 시작하였다! 2월 초~ 4월 초까지 수업을 하며, 수업을 들으면서 다른 강의들도 같이 들을생각이다. react로 프론트쪽을 공부하면서 생각한건데, js부분의 공부도 미흡하고, 백엔드도 더욱 알아가야겠다고 생각해서 선택했다. 물론 하면서 취직도 준비해야겠지만!!ㅜㅜ 구름의 강의를 들으며, 좀 더 실력을 갈고닦아야겠다. Android 관련 - 2022.02.09일 기준. firebase와 안드로이드...","categories": ["일상"],
        "tags": ["일상","목표"],
        "url": "/%EC%9D%BC%EC%83%81/KDC&toyproject2/",
        "teaser": null
      },{
        "title": "React - node.js 와 express",
        "excerpt":"node.js  JS를 서버사이드에서 쓸 수 있는 언어.   express  node.js로 기능을 쉽게 만들어줄수있는 프레임워크   프레임워크  일정하게 짜여진 규약으로 다양한 결과를 만드는것   라이브러리  개발하기 쉽게 기능을 제공하는 도구들의!! 모음  ","categories": ["React"],
        "tags": ["React","node.js"],
        "url": "/react/React-node_express/",
        "teaser": null
      },{
        "title": "JS의 기초적인 정보 1 ",
        "excerpt":"html은 정보구조, css는 스타일, JS는 상호작용 로직에 가깝다 JS는 각각 다른 웹 브라우저에서 동작하는, 객체기반 스크립트 프로그래밍 언어이기 때문에, 호환을 위해 표준이 꼭 필요하다. 그래서 나온 것이 ECMAscript이다. (es1, es6같은..) 크로스 브라우징 이슈 표준 웹기술(ECMAscrip)으로 구현되는기술을 비슷하게 만드는것과 동시에 한쪽에 최적화가 치우치지않도록 공통요소 사용! 개발자 도구 여러 탭들이 많으나 많이...","categories": ["JS"],
        "tags": ["JS"],
        "url": "/js/JS-base1/",
        "teaser": null
      },{
        "title": "JS의 기초적인 정보 2 ",
        "excerpt":"수업받았던 내용정리와 https://ko.javascript.info/types 홈페이지 참고. JS에서의 변수 선언은 var, let, const로 이루어진다. 더불어 JS의 변수에 저장되는 값을 언제든지 바꿀수있다. (동적타입언어.) 변수 종류 설명 var 전역변수이다. 함수가 아닌 블록에서 선언한 변수도 전역변수로 취급된다. 중복된 이름을 선언할 수 있고, 변수의 불변성도 보장하지않는다. let 중복선언을 못하며, 블록레벨 스코프이다. const let과 비슷하지만, 값 재선언도...","categories": ["JS"],
        "tags": ["JS"],
        "url": "/js/JS-base2-variables/",
        "teaser": null
      },{
        "title": "JS의 기초적인 정보 3 ",
        "excerpt":"JS의 배열은 배열을 흉내낸 객체이다. 배열 길이 메서드 메서드 이름 설명 .length() 배열의 길이를 알수 있다. 요소가 담기지않은 빈 배열에 있는것은 empty이다. 배열 요소 추가 메서드 메서드 이름 설명 .push() 원래 있는 배열을 직접건들여 추가하는 방식 .pop() 위치 상 부모(조상)요소를 기준으로 배치 .concat() 원래 있는 배열을 건들지 않고, 배열과 새로운...","categories": ["JS"],
        "tags": ["JS"],
        "url": "/js/JS-base3-this/",
        "teaser": null
      },{
        "title": "JS 콜백함수 & 구조분해 할당",
        "excerpt":"CALLBACK JS는 실행순서가 보장되지 않는다. (비동기) 그래서 콜백은 부르면 타이밍맞춰 오는 함수로, 실행순서를 보장한다. (동기) 단점으로는 가독성 저하 예외처리 불편 등등이 있으며, 해결방법으로는 3가지가 있다. 화살표 함수 (간결하게 보인다.) promise promise 이름 = new promise((resolve, reject) =&gt;{ resolve(); reject(); }); 여기서 resolve는 약속을 지켰을때의 호출이고 reject는 약속을 실패했을때의 호출이다. promise가...","categories": ["JS"],
        "tags": ["JS","콜백함수"],
        "url": "/js/JS-callback-hell/",
        "teaser": null
      },{
        "title": "JS - dom 관련2 ",
        "excerpt":"JS로 Style 값 수정하기. &lt;div id=\"hello\"&gt; Hi! &lt;/div&gt; 이라는 html이 있다면, JS로 style을 추가하고 싶을시 어떻게 할까? 먼저 getEelementById() 나 querySelector()로 id=”hello”인 div를 잡는다. 그리고 잡은 객체.style.sytle속성 = '값'; 으로 스타일을 지정해주는데, css style 속성은 대부분 background-color 나 font-weight같이 하이픈 표기법을 쓰지만, JS에서 css style을 다룰때는 카멜케이스(Camel Case)로 작성해야한다. CamelCase란?...","categories": ["JS"],
        "tags": ["JS","dom"],
        "url": "/js/JS-dom-style/",
        "teaser": null
      },{
        "title": "JS - dom 관련 ",
        "excerpt":"DOM (Document object model) , 문서객체모델 html코드를 해석하여 트리형태로 구조화 된, 객체가 된 문서. html문서와 자바스크립트를 연결하여 이용하는게 목적! html는 요소(태그)/텍스트 노드로 구분할수 있다. 요소노드 - html 텍스트 노드 - 요소노드 안에 들어가 있는 글자를 의미함 JS로 html제어시, 가장먼저 dom에 접근하려면 document를 사용해야한다. // document는 dom 트리의 최상위 객체이다! 문서객체와...","categories": ["JS"],
        "tags": ["JS","dom"],
        "url": "/js/JS-dom/",
        "teaser": null
      },{
        "title": "JS 애니메이션 구현방법",
        "excerpt":"CSS Transition 가장 쉽게, 간단히 쓸 수 있음 주로 :hover나 :active에 사용하며, 색, 크기 애니메이션시 사용 Transition과 transform을 사용함. 반드시 상호작용, 즉 트리거가 필요함 classList를 사용하여 애니메이션 추가 가능. add, contains, toggle, remove로 애니메이션을 넣을수 있다. 3D Transform의 translate3d() 메서드 현재 위치에서 해당 요소를 주어진 x축과 y축, z축의 거리만큼 이동...","categories": ["JS"],
        "tags": ["JS","animation"],
        "url": "/js/JS-animations/",
        "teaser": null
      },{
        "title": "JS - 이벤트 관련",
        "excerpt":"이벤트 (event) 프로그램에 의해 감지되고 처리 될 수 있는 동작이나 사건 브라우저에서 감지할 수 있는것들 대부분 모두가 이벤트와 같당! (키보드, 마우스, 문서, css….) 이벤트는 브라우저에서 발생하지만, 이벤트에 특정코드를 등록하지않으면 이벤트가 실행되지않는다. 그래서 등록하기위해 이벤트 핸들러를 사용한다. 필요한 목록 설명 event target 이벤트가 일어나는 객체/요소, 지정해둘 요소(엘리먼트) event listener 이벤트 핸들러로도...","categories": ["JS"],
        "tags": ["JS","event"],
        "url": "/js/JS-event/",
        "teaser": null
      },{
        "title": "JS for-in 과 for-of ",
        "excerpt":"for - in 객체의 속성을 반복하여 작업을 수행한다. 객체의 key 값에만 접근할수 있고, value값에는 접근하지 못한다. 객체의 모든 열거 가능한 속성에 대해 반복 for - of 사용하기 위해서는 컬렉션 객체가 [Symbol.iterator] 속성을 가지고 있어야 함. JS의 객체 속성은 내부적으로 숨겨진 속성이 있는데, 그중 하나가 Enumerable(열거자) 또는 NoEnumerable(비열거자)으로 정의할 수 있다....","categories": ["JS"],
        "tags": ["JS"],
        "url": "/js/JS-forin_forof/",
        "teaser": null
      },{
        "title": "JQuery - 기본적인 정리",
        "excerpt":"JQuery JS를 이용한 html조작, 애니메이션 효과, 네트워크등을 더 편하게 하기위한 거의 모든 웹브라우저에서 호환이 가능한 JS 라이브러리. 직접 JQuery 라이브러리를 다운, 또는 npm으로 설치를 함 script 태그에서 CDN(컨텐츠 델리버리 네트워크) 을 이용하여 웹 네트워크 상에서 로드하기. JQuery는 기본적으로 $기호로 표현된다! $(선택자).JQueryAPI(); 선택자에는 html 엘리먼트를 곧장 가져와도 좋고, id (#), class(.)를붙여서...","categories": ["JS"],
        "tags": ["JS"],
        "url": "/js/JS-JShtml/",
        "teaser": null
      }]
