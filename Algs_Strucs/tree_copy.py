from random import randint
import random

class Node:
    def __init__(self, val):
        self.l = None
        self.r = None
        self.v = val

    
class Tree:
    def __init__(self):
        """
        изначально узлов нет
        """
        self.root = None

    
    def get_root(self):
        return self.root
    

    def add(self, val):
        if self.root is None:
            self.root = Node(val)
        else:
            self._add(val, self.root)


    def _add(self, val, node):
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
        return None
    

    def _find(self, val, node):
        if val == node.v:
            return node
        elif (val < node.v and node.l is not None):
            return self._find(val, node.v)
        elif (val > node.v and node.r is not None):
            return self._find(val, node.r)
        

    def del_tree(self):
        self.root = None


    def helper_print_tree(self, current, level):
        if current is not None:
            self.helper_print_tree(current.r, level + 1)
            print("   " * level + "->", current.v)
            self.helper_print_tree(current.l, level + 1)

    def print_tree(self):
        self.helper_print_tree(self.root, 0)


tree = Tree()
random.seed(10)
for i in range(15):
    tree.add(randint(0, 100))

tree.add(73)
tree.add(73)
tree.add(73)

tree.print_tree()
print(tree.find(val=66))
# print(tree.get_root().v)
