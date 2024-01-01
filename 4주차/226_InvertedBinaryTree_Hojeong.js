const invertedTraversal = (root, invertedTreeRoot) => {
  if (!root) return;

  invertedTreeRoot.val = root.val;

  if (root.left) {
    invertedTreeRoot.right = new TreeNode();
    invertedTraversal(root.left, invertedTreeRoot.right);
  }

  if (root.right) {
    invertedTreeRoot.left = new TreeNode();
    invertedTraversal(root.right, invertedTreeRoot.left);
  }
};

var invertTree = function (root) {
  if (!root) return root;

  const invertedTreeRoot = new TreeNode();

  invertedTraversal(root, invertedTreeRoot);

  return invertedTreeRoot;
};
