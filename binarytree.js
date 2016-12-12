/**Queue**/

function Queue(Maxlength){
	this.Maxlength = Maxlength;
	this.length = 0;
	this.data = [];
	this.enter = enter;
	this.del = del;
}
//enter queue
function enter(queueNode){ 
	if(this.length == this.Maxlength){
		console.log('the queue is full');
	}
	else{
		this.data[this.length++] = queueNode;
	}
}
// out
function del(){
	this.length--;
	return this.data.shift();
}
/**Binary Tree**/

function Node(data, left, right){
	this.data = data;
	this.left = left;
	this.right = right;
}
Node.prototype = {
	show:function(){
		console.log(this.data);
	}
}

//binary trees constructor
function BST(){
	this.root= null;
}

BST.prototype = {
	insert : insert,
	preOrder : preOrder,
	midOrder : midOrder,
	postOrder : postOrder,
	levelTraversal : levelTraversal,
	treeDepth:treeDepth,
	findNode:findNode,
	delNode:delNode
}

//insert node
function insert(data){
	var n = new Node(data, null, null);
	if(this.root == null){
		this.root = n;
	}
	else{
		var current = this.root;
		var parent;
		while(true){
			parent = current;
			if(data < current.data){
				current = current.left;
				if(current == null){
					parent.left = n;
					break;
				}

			}
			else{
				current = current.right;
				if(current == null){
					parent.right = n;
					break;
				}
			}
		}
	}
}


//preorder traversal 
function preOrder(){
	var rootNode = this.root;
	return (function a(rootNode){
		if(rootNode){
			rootNode.show();
			a(rootNode.left);
			a(rootNode.right)
		}
	})(rootNode)
}

//middel order traversal
function midOrder(){
	var rootNode = this.root;
	return (function a(node){
		if(node){
			a(node.left);
			node.show();
			a(node.right);
		}
	})(rootNode)
}

//post order traversal
function postOrder(){
	var rootNode = this.root;
	return (function a(node){
		if(node){
			a(node.left);
			a(node.right);
			node.show();
		}
	})(rootNode)
}

//level traversal
function levelTraversal(){
	var rootNode = this.root;
	return (function a(node){
		var queue = new Queue(100);
		var temp;
		if(!node){
			console.log('the tree is empty');
		}
		queue.enter(node);
		while(queue.length>0){
			t = queue.del();
			t.show();
			if(t.left){
				queue.enter(t.left);
			}
			if(t.right){
				queue.enter(t.right);
			}
		}
	})(rootNode) 
}

//calculate height of tree
function treeDepth(root){
	var rootNode = this.root;
	return (function a(node){
		var ld,rd;
		if(!node){
			return 0;
		}
		ld = a(node.left);
		rd = a(node.right);
		return(ld>rd?ld:rd)+1;
	})(rootNode)
}

//find node
function findNode(val){
	var rootNode = this.root;
	return (function a(node){
		var find = false;
	while(node && !find){
		if(val == node.data){
			find = true;
		}
		else if(val<node.data){
			node = node.left;
		}
		else{
			node = node.right;
		}
	}
	if(node == null){
		console.log('can\'t find'+val);
	}
	return node;
	})(rootNode)
	
}

function delNode(val){
	var find = false;
	var q = {};
	var rootNode = this.root;
	while(rootNode && !find){
		if(rootNode.data == val){
			find = true;
		}
		else if(val<rootNode.data){
			q = rootNode;
			rootNode = rootNode.left;
		}
		else{
			q = rootNode;
			rootNode = rootNode.right;
		}
	}
	if(rootNode == null){
		console.log('can\'t find'+val);
	}
	if(rootNode.left == null && rootNode.right == null){
		if(rootNode == this.root){
			this.root = null;
		}
		else if(q.left == rootNode){
			q.left = null;
		}
		else{
			q.right = null;
		}
	}
	else if(rootNode.left == null || rootNode.right == null){
		if(rootNode == this.root){
			if(rootNode.left == null){
				this.root = rootNode.right;
			}
			else{
				this.root = rootNode.left;
			}
		}
		else{
			if(q.left == rootNode && rootNode.left){    
				q.left = rootNode.left;
			}
			else if(q.left == rootNode && rootNode.right){
				q.left = rootNode.right;
			}
			else if(q.right == rootNode && rootNode.left){
				q.right = rootNode.left;
			}
			else{
				q.right = p.right;
			}
		}
	}
	else{              //left and right are not null
		var t = rootNode;
		var s = rootNode.left;
		while(s.right){
			t=s;
			s=s.right;
		}
		rootNode.data = s.data;
		if(t == rootNode){
			rootNode.left = s.left;
		}
		else{
			t.right = s.left;
		}
	}
	return find;
}
exports.BST = BST;

