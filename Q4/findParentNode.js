function findParent(treeNode, labelToFind){
    const middle = (treeNode%2==0 ? (treeNode.length / 2) + 1 : Math.floor(treeNode.length / 2) )
    if(treeNode[middle] === labelToFind){
        return true;
    }
};

module.exports = findParent;
