const recursion = (root, result) => {
  if (!root) return;
  recursion(root.left, result);
  result.push(root.val);
  recursion(root.right, result);
};

var inorderTraversal = function (root) {
  const result = [];
  recursion(root, result);
  return result;
};
