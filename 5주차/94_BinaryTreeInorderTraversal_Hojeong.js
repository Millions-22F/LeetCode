const inorder = (root, result) => {
  if (!root) return result;

  if (root.left) inorder(root.left, result);
  result.push(root.val) || 0;
  if (root.right) inorder(root.right, result);

  return result;
};

var inorderTraversal = function (root) {
  if (!root || !root.val) return [];

  return inorder(root, []);
};
