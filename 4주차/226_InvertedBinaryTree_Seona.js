var invertTree = function (root) {
  if (!root) return root;

  invertTree(root.left);
  invertTree(root.right);

  [root.left, root.right] = [root.right, root.left];

  return root;
};
