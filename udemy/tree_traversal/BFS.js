/*
                10
            6       15
          3   8        20
*/
/*
queue : [];
visited : [];

1. 
첫번째 깊이의 값이 좌우에 있다
queue : [10];
visited : [];

queue : [];
visited : [10];

10이 자식이 있다

queue : [6, 15];
visited : [10];

선입선출
queue : [15];
visited : [10, 6];

6이 자식을 가지고 있다

queue : [15, 3, 8];
visited : [10, 6];

너비 우선 탐색임으로 같은 너비 레벨에 대한 작업이 먼저 끝날때까지 기다림

queue : [3, 8];
visited : [10, 6, 15];

같은 너비 레벨들이 위에것 반복
queue : [3, 8, 20];
visited : [10, 6, 15];

queue : [8, 20];
visited : [10, 6, 15, 3];

queue : [20];
visited : [10, 6, 15, 3, 8];

queue : [];
visited : [10, 6, 15, 3, 8, 20];

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift(); // 선입선출
      //  node 를 우리가 출력할  data에 넣어주
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.BFS());

//  node udemy/tree_traversal/BFS.js
