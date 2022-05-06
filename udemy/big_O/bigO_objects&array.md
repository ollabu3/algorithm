# 배열과 객체의 성능 평가

## 객체를 사용할 때

- 정렬이 필요 없을 때
- 빠른 접근, 입력과 제거를 원할 때

## 객체 시간복잡도

- insertion -> O(1)
- Removal -> O(1)
- Searching -> O(n) (선형시간)
- Access -> O(1)

## 객체 메서드에 따른 시간복잡도

- Object.keys -> O(n)
- Object.values -> O(n)
- Object.erntries -> O(n)
- hasOwnProperty -> O(1) -> 속성이 있는지 없는지만 전달

## 배열을 사용할 때

- 정렬이 사용할 때
- insert와 remove 시 시간 제약을 받음

## 배열 시간복잡도

- insertion -> 어디에 하는지에 따라 다름
  - 맨앞에, 맨뒤에, 중간에 등등...
- Removal -> 어디에 하는지에 따라 다름
- Searching -> O(n) (선형시간)
- Access -> O(1)

## 배열 메서드에 따른 시간복잡도

- push,pop -> O(1)
- shift, unshift, concat, slice, slice -> O(n)
- sort -> O(n \* log n) -> O(n)보다는 크다
- forEach/map/filter/reduce/etc -> O(n))
