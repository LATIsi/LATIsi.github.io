---
title: "git - .gitignore 파일 만들기"
excerpt: "node_modules을 제외하고 프로젝트 올리는법"
date: 2022-04-14
categories: Git
last_modified_at: 2022-04-14
---

github에 글을 올릴때마다 add와 커밋을 하는도중 프로젝트의 내용만 올리고싶은데 node_modules의 많은 파일들이 같이 올라가는것이 마음에 걸렸다.  
그래서 혹시몰라 검색해보니 .gitignore라는 파일을 만들어 내용에 무시할 파일이나 폴더명을 적어두면 그 폴더들만 커밋되지않는다.

![image](https://user-images.githubusercontent.com/91597005/163377482-8831445f-feb3-4df0-8a50-db15f078eaff.png)

미리 원격 저장소에 올린 node_modules를 삭제하고  
앞서 올린 프로젝트들의 node_modules 폴더도 올리지 않게 수정해야겠다.

git 원격 폴더 삭제  
->

```
git add .gitignore
git rm -r --cached .
// . (현재 디렉토리에서)
// -r : recursive removal 폴더안의 내용을 지우고 (내용이 있으면 폴더 못지움)
// --cached : only remove from the index - git에 있는 인덱스 파일만 삭제, 실제 파일은 삭제되지 않음.
git commit -m "delete git_in_node_modules"
git push origin master
//요즘에는 master보다 main을 많이쓴다.
```

[참고 페이지 - coding-groot ](https://coding-groot.tistory.com/59)
