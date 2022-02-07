---
title: "비동기 작업 ajax와 api"
excerpt: "데이터 받아오기!"
date: 2022-02-07
categories: React
last_modified_at: 2022-02-07
---

JS에서 비동기 처리를 할시,

- setTimeout
- 콜백함수
- Promise (콜백지옥 해결방법)
- async / await

을 사용한다.

특히 Promise같은 경우,

```
test(0).then(number => {
            console.log(number);
            return test(number);
        }).then(number => {
            console.log(number);
            return test(number);
        }).then(number => {
            console.log(number);
            return test(number);
        });
```

...같이. .then함수를 사용해 콜백지옥을 줄일수 있다.

## async/await

async/await는 사용하려는 function 앞부분에 async를 추가하고,  
함수내부에서 Promise 앞에 await를 호출하여 Promise가 끝날때까지 기다리며, 결과값을 변수에 담을수 있다.

```
async function Task(){
    try{
        let result = await Promise(1);
        console.log(result);
        result = await Promise(result);
        console.log(result);
        result = await Promise(result);
        console.log(result);
        result = await Promise(result);
        console.log(result);
    }catch(e){
        console.log(e);
    }
}
```

## axios API 호출

axios는 HTTP요청을 Promise기법으로 처리하는 라이브러리다!

`npm install axios`

으로 설치한뒤, import해오면 된다.

```
import axios from 'axios'

.....

axios.get('링크').then(response=>{
    setData(response.data);
});

```

이런식으로 사용이 가능하다.  
또는 async를 사용시, try/catch문을 사용해 가져올수 있다.

```
import axios from 'axios'

.....

const onClick = async () =>{
    try{
        const response = await axios.get('링크',);
        setData(response.data);
    }catch(e){
        console.log(e);
    }
};
```

이런식으로 async () => { } 와 같은 형식으로 적용할 수 있다.

---

**useEffect에 등록하는 함수에 async를 붙이지 말자!**  
(useEffet에서 반환해야하는 것은 뒷정리 함수이기 때문!!)
