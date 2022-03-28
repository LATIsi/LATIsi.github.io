---
title: "Cannot read properties of undefined (reading 'map')"
excerpt: " react-chartjs-2, chart.js 관련 라이브러리 오류 관련"
date: 2021-11-25
categories:
  - React
tags:
  - React
  - 오류
  - 라이브러리
last_modified_at: 2021-11-25
---

https://www.youtube.com/watch?v=DtLhiMxgsm0 의 코로나 리엑트 클론코딩중에 나온 오류

```

Cannot read properties of undefined (reading 'map')
setDatasets

C:경로/react_corona/src/utils.ts:46

  43 |   currentData: ChartData<TType, TData, TLabel>,
  44 |   nextDatasets: ChartDataset<TType, TData>[]
  45 | ) {
> 46 |   currentData.datasets = nextDatasets.map(nextDataset => {
  47 |     // given the new set, find it's current match
  48 |     const currentDataset = currentData.datasets.find(
  49 |       dataset =>
View compiled
```

,,,, 어떻게 이런오류가?  
내가 만든 파일중에 수정하라는게 없는데 만지지도 않은 utils에서 오류가 나면 어떻게 해결해야하는건데ㅜㅜ??  
하지만 오류들을 쫒아가보니

```
(anonymous function)
C:경로/react_corona/src/chart.tsx:91

  88 | }, [redraw, options, data.labels, data.datasets]);
  89 |
  90 | useEffect(() => {
> 91 |   renderChart();
     | ^  92 |
  93 |   return () => destroyChart();
  94 | }, []);
View compiled
```

에서, chart 문서가 오류인걸 발견하고  
아예 react-chartjs-2 와 chart.js 의 메뉴얼을 살펴보았다.

그러던중  
**npm install --save chart.js@^2.9.4 react-chartjs-2@^2.11.2**  
으로 서로 버전을 맞춰주라는것을 발견!  
알고보니 react-chartjs-2 는 벌써 4v 까지 업데이트를 했더라..

수정하니 react-chartjs-2, chart.js의 map관련 오류는 수정완료!
