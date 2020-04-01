module.exports.isBinarySearchTree = (tree) => {
  const checkTree = (v, min, max) => {
    if (v === undefined)
      return true;
    if (v.value <= min || max <= v.value)
      return false;
    return (checkTree(v.left, min, v.value) && checkTree(v.right, v.value, max));
  };
  return checkTree(tree, 0, 10000);
};
