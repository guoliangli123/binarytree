# Binary tree

a library of binary tree written by javascript


******

## Classes

- Queue
- Node
- BST (binary tree)

##methods
+   insert  

 insert node to binary tree

+   preOrder

  preorder traversal
+	midOrder  

 middel order traversal

+	postOrder  

 post order traversal

+	levelTraversal  

 level traversal

+	treeDepth  

 calulate the height of tree

+	findNode  
 
 find node in the tree

+	delNode  

 delete node of the tree



##Usage method


```javascript
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

var node = nums.findNode(45);

nums.delNode(45);
```
