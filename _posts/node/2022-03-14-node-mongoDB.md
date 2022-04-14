---
title: "MongoDB와 mongoose에 대하여 "
excerpt: " 관계형 DB와 nosql "
date: 2022-03-13
categories:
  - node.js
tags:
  - node.js
last_modified_at: 2022-04-13
---

# NoSql (not only sql)

sql질의문에 의해 DB를 update, select, 저장 하도록 구성된 관계형 데이터를 사용하지 않고 sql을 사용하지 않는 그외의 모든 데이터베이스 시스템 / 데이터 스토어.

## 장점

- 유연성 / 스키마 선언x, 필드 추가 삭제 자유로운 스키마구조
- 확장성 / 스케일 아웃의 서버확장
- 기용성 / 대용량 데이터 처리 뛰어남
- 높은성능 / 장애발생시 무중단 서비스 가능
- 다양한 데이터 형태 수용.

## 단점

- 데이터 일관성에 약함.
- key값에 대한 입출력만 지원
- 스키마가 자유로워 데이터 규격이 되어있지않음
- update시.... 모든 컬렉션에 수행하는 형식이라 느림
- 데이터 중복!!!!

## 특징

- 관계형 DB의 트래픽 감당이 어려워 탄생
- 단순히 키와 값의 쌍으로 이루어져 있다.
- 분산형 구조
- 예시로, HBase, Redis, CouchDB, MongoDB...등이 있다.

# 그중에서 MongoDB란

문서지향 저장소를 제공하는 NoSql DB 시스템.

- 데이터가 document로 불린다!
- 데이터의 집합 - 원래는 관계형 DB(RDMS)에서의 table은 collection이라고 부른다.
- BSON으로 각 문서 저장.(2진법으로 인코딩된 JSON - 이진표현이라 빠르고 탐색에 좋으며 json보다 더욱 다양한 표현방법도 가능하지만 추가 필드를 생성하기 위해 약간의 오버헤드가 필요하기에 메모리 효율성과 관련해 약간 단점이 있음. )

  [BSON 참고페이지](https://iq.opengenus.org/binary-json/)

- 다양한 종류의 쿼리문을 지원해준다. (필터링, 수집, 정렬, 정규표현식)
- 스키마 선언x, 필드를 추가 or 제거 쉬움
- 인덱스 제공

등이 있다.

mongoDB 문법.

## Collection(Table) crate문

```
db.createCollection("mycoll");
```

<br>

## Insert 문

```
db.users.insert({a:3,b:5})
```

<br>

## Select 문

```
db.users.find()
```

<br>

## Select + Where 문

```
db.users.find({age:20},{a:1,b:1})
```

<br>

## Select +where + order by문

```
db.users.find({age:20}).sort({name:1})
```

<br>

# mongoose

mongoDB는 JS로 만들지 않았기에, node.js를 연결시켜주는 어댑터가 필요해서 나온것이 바로 mongoose 드라이버 라이브러리이다.  
기존의 관계형 데이터베이스가 익숙한 사람들이 쓰기 편하다.

- OMD(Object Data Mapping), 객체와 문서(데이터)를 1대 1로 매칭해준다! (MongoDB의 데이터를 node.js에서 JS객체로 사용가능.)
- JOIN문에 해당하는 populate 기능 제공과 함께 DB연결, Collection 관리가 수월해진다.
- 스키마 정의 가능(필수), 스키마로 mongoose의 모델(mongoDB의 데이터 저장 기본단위)을 생성할수 있다.
- 프로미스, 콜백 사용가능
- 단점으로는 속도가 느림

<br>

---

<br>

<br>

<br>

# 1. MongoDB 연결

- require() 함수로 확장모듈을 mongoose 객체에 로드
- mongoose 객체에는 기본적으로 DB로 연결하는, mongodb로 시작하는 URL값이나  
  host, db, port, 옵션을 인자로 받는 connect() 메소드를 사용
- 연결할 시, mongoose.connection 인스턴트가 생성되어 open이벤트 발생!
- connect()는 하나의 DB에 연결시에만 유효. 여러개 DB 사용시  
  connection인자를 받으면서 connection 인스턴트를 반환하는 createConnection() 메소드를 사용하면 된다.
- connect()에는 useNewUrlParser 옵션을 넣어야한다.

```
let mongoose = require('mongoose');

// 하나의 DB에 연결시 - string으로 된 DB요청
mongoose.connect('mongodb://localhost/db',{useNewUrlParser});

// 여러개의 DB에 연결시...
let connection1 = mongoose.createConnection('mongodb://localhost/mydb1');
let connection2 = mongoose.createConnection('mongodb://localhost/mydb2');

// 다른연결 방법은..
const db = mongoose.connection;
//mongoose로 연결한 첫번째 연결, mongoose.connections[0]으로도 접근 가능
// mongoose.connection[] 으로 커넥션 여러개 접속 가능.


// .on, .onde는 connection이 상속받는 EventEmitter계열의 이벤트를 읽고 처리하기위해 사용
// on은 여러번 발생 가능
db.on("error", console.log("DB Error"));
// once는 한 번만 발생
db.once("open", console.log("connected to DB!"));



```

<Br>

# 2. 모델 정의하기

schema 인터페이스를 통해 모델을 정의 할 수 있다!

먼저 스키마를 다 선언하고 모델을 사용해야한다 (스키마의 인스턴스화가 모델)  
스키마로 모델을 만들면 \_id(2진데이터) 가 들어가진다. 관계형 DB의 table 생성시 꼭 필요한 기본키 같다.  
언더바가 없니 id는 \_id를 문자열로 가져와주는 getter같은 느낌이다.  
\_id를 검색시 find() 함수인 Model.findById()를 사용하면된다.

```
// 스키마 선언
let Schema = mongoose.Schema, objectID = Schema.ObjectId;
let ArticleSchema = new Schema({
  author : ObjectId,
  title : String,
  body : String,
  date : Date,
  validate(value) {
      if (value < 0) {
        throw new Error("Age must be a postive number");
      }
    }
  // 원래는 title : {type:String, required : true} ...이런식으로 작성해야하는데 간단히 type(스키마타입)만 지정하면 {} 생략.
  //required는 반드시 존재해야하는 여부를 나타낸다. 유효성 검사시 필요
  //validate는 범위값 확인
  // 그외에도 minlength & maxlength, publishedDate, trim, price.... 기타 등등이 있다.
  //
});

// 모델 정의 ( 위의 스키마 선언 활용.)
// mongoose.model ('mongoose와 mongoDB에 쓰일 DB이름', 스키마)를 선언해 모델 생성하기


var ArticleModel = mongoose.model('Article', ArticleScheme);
// DB이름인 첫번째 인수로 mongoose는 앞글자를 소문자로 바꾸고, 해당이름뒤에 s를 붙여 복수형으로 만든 뒤 콜렉션을 찾고 없을시 생성. Articles라는 콜렉션이 생성된셈



// 모델 사용하기
//사용시 생성한 모델의 인스턴스를 또 한번 생성해야함.
// 그 인스턴스로 실제 DB작업 실행.

var instance = new ArticleModel();
instance.title = 'hello';
instance.save(function (err){
            // save 실행 후 콜백 함수의 내용
});
instance.find({'검색할 속성':속성값}, function(err, docs){
            // 검색하기의 find 실행 후 콜백 함수의 내용
});
```

# 3. model에서 검색하기, 저장하기, 삭제하기, 업데이트

model 인스턴스에서 실행되는것들

### 검색하기

1. find()
2. findOne()
3. findByld()

`Model.find(query, fields, options, callback)`  
`Model.find({'some.value':5}, function(err,docs){ 콜백 함수의 내용 });`
`Model.find({},['first','last'], function(err,docs){ 콜백 함수의 내용 });`

특정 필드를 찾을때 참/거짓인가를 찾는 in문 사용시...  
SELECT _ FROM User WHERE name IN ("kim_", "lee*")  
->  
User.find({name:{$in: ["kim*" "lee\*"]}});

AND조건 사용시 조건들을 쭈욱 이어주고, or 사용시 $or 연산자 사용.

- find() 는 기본적인 검색 메서드.
- 콜백함수의 docs는 배열로서 검색된 모든 문서를 담고있음.

`Model.findOne({age: 5}, function(err, doc){ 콜백 함수의 내용 });`

- findOne()은 단 하나의 문서(객체)만 콜백함수의 doc으로 전달됨. (find처럼 모든 문서를 담고있지 않음!!)

`Model.findById(obj._id, function(err, doc) { 콜백 함수의 내용 });`

- findOne( ) 메소드와 비슷하게 하나의 문서만 반환하지만 \_id 키 값으로 검색.

<Br>

---

<Br>

### 추가하기

생성된 데이터를 DB에 저장.

1. new를 활용한 모델 인스턴스를 생성하여 컬렉션에 저장하는 article.save()
2. 모델을 이용하여 바로 추가하는 model.create()

```
// 1. article.save()
var article = new ArticleModel({title: "Title", body: "Contents"});
article.date = new Date();
article.save(function (err) {
    if(err) {
        return handleError(err);
    }
            // save() 성공 후 수행할 내용
});

//2. model.create()
ArticleModel.create({title: "Title", body: "Contents", date: new Date()}, function(err) {
    if(err) {
        return handleError(err);
    }
            // save() 성공 후 수행할 내용
});

//둘다 비동기 함수라 then, async등을 사용해야 한다.

```

<Br>

---

<Br>

### 삭제하기

1. 기본적으로는 `remove()` 호출해 특정 조건에 맞는 데이터를 지운다.
2. findOneAndDelete() - 매칭되는 첫번째 데이터를 지우고 return함.
3. deleteOne() - 매칭되는 첫번째 데이터만 지움 (return값 X)
4. deleteMany() - 매칭되는 모든 데이터를 지움

```
ArticleModel.remove({title: "Title"}, function(err){
    if(err){
        return handleError(err);
    }
            // remove() 성공후 수행할 내용
})
```

---

<Br>

### 업데이트

1. Model.findOneAndUpdate() - 바꿀 데이터 검색뒤 업데이트
2. Model.findByIdAndUpdate() - 바꿀\_id를 조회해 업데이트

```
user.findByIdAndUpdate(id, {
  name,
  age
});
```

<Br>
<Br>
<Br>
<Br>

---

[공부 참고 사이트 - kasterra's Archive ](https://kasterra.github.io/mongoose-basics/)

[공부 참고 사이트2 - ckstn0777.log](https://velog.io/@ckstn0777/Mongoose-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)

## 좀 더 공부해야하는것...

- 미들웨어 부분.  
  [공부 참고 사이트3 - Runebook.dev](https://runebook.dev/ko/docs/mongoose/middleware)

  [공부 참고 사이트4 - gorae.log](https://velog.io/@kgorae/TIL-10-MongoDB-mongoose)
