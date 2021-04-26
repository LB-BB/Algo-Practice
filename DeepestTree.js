// Given a binary tree, write a function that will return the node in the tree with greatest depth. You may assume there is a unique deepest node.

//take a node to start
//initiate a queue
//save depth

function node(val) {
  return {
    val,
    left: null,
    right: null,
  };
}
let a = node("a");
let b = node("b");
let c = node("c");
let d = node("d");
let e = node("e");
let f = node("f");

a.left = b;
a.right = c;
b.right = d;
d.left = f;
c.left = e;

const deepTree = (node) => {
  let queue = [node];
  let depth = 0;
  while (queue.length > 0) {
    currentNode = queue.shift;
    depth += 1;
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return currentNode;
};

console.log(deepTree(a));
