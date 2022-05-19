# 재귀함수 (Recursion)

자기자신을 호출하는 함수

## 재귀 함수를 사용하는 이유

### 재귀함수로 작용되는 것들

- `JSON.parse` / `JSON.stringy` (자바스크립트 엔진으로 돌아감)
- `document.getElementById`
- `DOM traversal algorithm` (DOM 순회 알고리즘)
- `Object traversal` (객체 순환)은 재귀와 비슷함
- 복잡한 데이터 structure에서는 재귀가 많이 사용 됨
- 단순 반복보다 재귀가 더 깔끔할 수 있음

## call stack 호출

- 재귀함수를 이용할 시 stack 호출을 많이 쓰게 된다
- 콜스택의 경우 함수가 완료되면 호출 스택 아래려 밀려나서 제거됨
- 재귀의 경우 동일함 함수를 계속 스택에 추가하고, 추가한 함수는 호출을 기다림

ex) 팩토리얼

```javascript
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(5));
```

```javascript
return 5 + sumRange(4);
           return 4 + sumRange(3);
                      return 3 + sumRange(2);
                                 return 2 + sumRange(1);
                                            return 1;
                                            스택 쌓임
```

## 재귀힘수의 문제점

- 종료 조건을 꼭 잡아야 한다 (아님 스택 터짐)

## helper method recursion 설계 패턴

- 호출하는 함수 내부에 helper 함수를 만드는 방법
- 배열과 같은 데이터 목록에서 반복 작업을 해야할 때 사용

ex) 짝수만 넣기

```javascript
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
```

## 순수 재귀함수

```javascript
function collectOddValues(arr) {
  debugger;
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);
```

```javascript
/*
[1].collectOddValues([2, 3, 4, 5]);
    [].collectOddValues([3, 4, 5]);
        [3].collectOddValues([4, 5]);
            [].collectOddValues([5]);
                [5].collectOddValues([]);
                    [];
                    스택쌓음
*/
```
