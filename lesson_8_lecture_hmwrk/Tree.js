function Node(value) {
    this.value = value;
    this.parent = null;
    this.children = [];
}

function Tree(value) {
    this.$root = new Node(value);
}

Tree.prototype.traverse = function(callback) {
    (function recurse(currentNode) {
        for(var i = 0, length = currentNode.children.length; i < length; i++) {
            recurse(currentNode.children[i]);
        }
        callback(currentNode);
    }(this.root));
};

Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this,callback);
};

Tree.prototype.add = function(data, toParentData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function(node) {
            if(node.data === toParentData) {
                parent = node;
            }
        };
    this.contains(callback, traversal);
    if(parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add a node to a non-exisng parent.');
    }
};


// function Tree() {
//     root = new Node();
// }

// function Node(value) {
//     if(value !== undefined && value!== null) {
//         this.value = value;
//         this.leftNode = null;
//         this.rightNode = null;
//     }
// }

// Tree.prototype = {
//     insert: function(insertValue) {
//         if(insertValue < this.value) {
//             if (leftNode === null) {
//                 leftNode = new Node(insertValue);
//             } else {
//                 // continue traversing left subtree
//                 leftNode.insert(insertValue);
//             }
//         } else if (insertValue > this.value) {
//             if (rightNode === null) {
//                 rightNode = new Node(insertValue);
//             } else {
//                 // continue traversing left subtree
//                 rightNode.insert(insertValue);
//             }
//         }
//     },

//     search: function(searchValue) {},

//     toString: function() {}
// };

// Node.prototype.insertNode = function(insertValue) {
//     {
//         if (root === null || root === undefined) {
//             root = new Node(insertValue);
//         } else {
//             root.insertNode(insertValue);
//         }
//     }
// };

// Node.prototype.toString = function() {};
// Node.prototype.instanceof = function() {
//     if(this !== null && this !== undefined) {
//         this.prototype = Node;
//     } else {
//         this.prototpye = undefined;
//     }
// }; 

// Tree.prototype.insert = function(node) {};
// Tree.prototype.toString = function() {};