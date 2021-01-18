function BinarySearchTree() {
  this._root = null;
}
var node = {
  value: value,
  left: null,
  right: null,
};
BinarySearchTree.prototype = {
  constructor: BinarySearchTree,

  insert: function (node, current) {
    if (node.value < current.value) {
      if (current.left === null) {
        current.left = node;
      } else {
        this.insert(node, current.left);
      }
    } else if (node.value > current.value) {
      if (current.right === null) {
        current.right = node;
      } else {
        this.insert(node, current.right);
      }
    }
  },
  add: function (value) {
    var node = {
      value: value,
      left: null,
      right: null,
    };
    if (this._root === null) {
      this._root = node;
    } else {
      this.insert(node, this._root);
    }
  },
};
