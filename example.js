var a = require('./binarytree');
var nums = new a.BST();

nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)

nums.preOrder();

nums.midOrder();

nums.postOrder();

nums.levelTraversal();

height = nums.treeDepth()
console.log(height);

var node = nums.findNode(45);
console.log(node);

nums.delNode(45);
console.log(nums);