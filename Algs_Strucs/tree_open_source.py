

class Node:
    """
    узел с указанием данных, левого и правого дочернего узла
    """
    def __init__(self, val):
        self.l = None
        self.r = None
        self.v = val


class Tree:
    """
    Реализация дерева
    """
    def __init__(self):
        """
        изначально узлов нет
        """
        self.root = None


    def getRoot(self):
        """
        получение узла
        """
        return self.root
    

    def add(self, val):
        """
        добавление узла, по приципу чем меньше - тем ниже -> _add слева меньшее чсило справа большее
        """
        if self.root is None:
            self.root = Node(val)
        else:
            self._add(val, self.root)


    def _add(self, val, node):
        """
        если l or right свободны - добавляем сначала в левое, если меньше иначе в правое РЕКУРСИВНО
        """
        if val < node.v:
            if node.l is not None:
                self._add(val, node.l)
            else:
                node.l = Node(val)
        else:
            if node.r is not None:
                self._add(val, node.r)
            else:
                node.r = Node(val)


    def find(self, val):
        if self.root is not None:
            return self._find(val, self.root)
        else:
            return None
        

    def _find(self, val, node):
        if val == node.v:
            return node
        elif (val < node.v and node.l is not None):
            return self._find(val, node.l)
        elif (val > node.v and node.r is not None):
            return self._find(val, node.r)
        

    def deleteTree(self):
        # garbage collector will do this for us.
        self.root = None


    def printTree(self):
        if self.root is not None:
            self._printTree(self.root)


    def _printTree(self, node):
        if node is not None:
            self._printTree(node.l)
            print(str(node.v) + ' ')
            self._printTree(node.r)
#     3
# 0     4
#   2      8
tree = Tree()
tree.add(3)
tree.add(4)
tree.add(0)
tree.add(8)
tree.add(2)
tree.printTree()
print(tree.find(3).v)
print(tree.find(10))
tree.deleteTree()
tree.printTree()