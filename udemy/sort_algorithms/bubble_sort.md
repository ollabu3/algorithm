# 버블 정렬 (Bubble Sort)

https://www.toptal.com/developers/sorting-algorithms
정렬 애니메이션 사이트

## 정렬 알고리즘이란?

- 컬렉션의 항목을 재배열하는 과정

## Array.prototype.sort

### 작동원리

- 내장 정렬 메소드는 선택적 비교 함수를 인자로 전달받는다
- 기본적으로 이 함수는 2개의 항목이 있는 구조로 작성된다(a와 b)
- 반환되는 값을 토대로 만들 정렬 순서를 자바스크립테에 알림
  - 만약 a,b의 항목이 있는 상태에서 음수를 반환하면 a가 b 앞에 온다고 결정한다 (양수면 그 반대 a가 b 뒤에)
  - 0 반환 시 a와 b를 동일하게 취급하고 한꺼번에 정렬

```javascript
function compare(a, b) {
  return b - a;
}

[6, 10, 15, 4].sort(compare);
```

## 버블 정렬

https://visualgo.net/en/sorting?slide=1 버블정렬 시뮬레이션

- 서로 인접한 두 원소를 검사하여 정렬하는 알고리즘
- 인접한 2개의 레코드를 비교하여 크기가 순서대로 되어 있지 않으면 서로 교환한다.

## 버블 정렬 시간 복잡도

- 일반적으로 **O(n^)**
- 최적 -> **O(2n)** (섞을게 없을 시)
