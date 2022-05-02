const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
	let node = new Node(data);

	!this.head
		?this.head = node
    :this.addNew(this.head, node);
}

addNew(node, next)
{
	if(next.data < node.data)
	{
		!node.left
		?node.left = next
		: this.addNew(node.left, next);
	} 
  else 
  {
	!node.right
	?node.right = next
	:this.addNew(node.right,next);
	}
}



  has(data, el) {
    let node = el === undefined? this.head : el;
    if(!node)
      return false;
    else if(data < node.data)
      return this.has(data, node.left);
    else if(data > node.data)
      return this.has(data, node.right);
    else
      return true;
  }

  find(data, el) {
  let node = el === undefined? this.head : el;
	if(!node)
		return null;
	else if(data < node.data)
		return this.find(data, node.left);
	else if(data > node.data)
		return this.find(data, node.right);
	else
		return node;
}


remove(data)
{
	this.head = this.removeNode(this.head, data);
}

removeNode(node, val)
{
	if(!node)
		return null;
	else if(val < node.data)
	{
		node.left = this.removeNode(node.left, val);
		return node;
	}
	else if(val > node.data)
	{
		node.right = this.removeNode(node.right, val);
		return node;
	}
	else
	{
		if(!node.left && !node.right)
		{
			node = null;
			return node;
		}
		if(!node.left)
		{
			node = node.right;
			return node;
		}
		else if(!node.right)
		{
			node = node.left;
			return node;
		}
		let el = this.minNode(node.right);
		node.data = el.data;
		node.right = this.removeNode(node.right, el.data);
		return node;
	}

}

minNode(arg) {
  let node = arg || this.head;
  return !node.left
      ?node
      :this.min(node.left);
}

  min(arg) {
    let node = arg || this.head;
    return !node.left
        ?node.data
        :this.min(node.left);
  }

  max(arg) {
    let node = arg || this.head;
    return !node.right
        ?node.data
        :this.max(node.right);
  }
}

module.exports = {
  BinarySearchTree
};