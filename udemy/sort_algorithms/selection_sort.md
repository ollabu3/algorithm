# 선택 정렬 (Selection Sort)

버블정렬과 비슷하지만 큰 값을 배열 끝에 위치시키는 대신 최솟값을 한번에 하나씩 위치에 배치

```
[5, 3, 4, 1, 2]
5와 3 중 작은 값 찾음 -> 3
3과 4중 작은 값 찾음 -> 3
3과 1중 작은 값 찾음 -> 1
1과 2중 작은 값 찾음 -> 1

swap
[1, 3, 4, 5, 2]
5와 3 중 작은 값 찾음 -> 3
.
.
.

[1, 2, 3, 4, 5]
```

## 선택 정렬 시간복잡도

- 배열 속 모든 요소를 비교하기 때문에 **O(n^2)**
