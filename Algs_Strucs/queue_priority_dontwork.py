class Node:
    def __init__(self, val, priority, right=None, left=None):
        self.r = right
        self.l = left
        self.v = val
        self.p = priority

    def copy(self):
        return Node(self.v, self.p, self.r, self.l)


class HeapQ:
    """
    Реализация двоичной кучи(с приоритетом)
    """
    def __init__(self):
        self.root = None
        self.max_node = Node('not usable', -1000)

    
    def get_root(self):
        return self.root
    

    def add(self, val: str = None, priority: int = 0):
        if self.root is None:
            self.root = Node(val, priority)
        else:
            if self.root.v < val:
                temp = self.root.copy()
                self.root.v, self.root.p = val, priority
                val, priority = temp.v, temp.p

            self._add(self.root, val, priority)



    def _add(self, node, val, priority):
        if val < node.v:
            if node.l is not None:
                self._add(node.l, val, priority)
            else:
                node.l = Node(val, priority)
        else:
            temp = node.copy()
            node.v, node.p = val, priority
            val, priority = temp.v, temp.p
            if node.r is not None:
                self._add(node.r, val, priority)
            else:
                node.r = Node(val, priority)

    
    def extract_max(self):
        max_node = Node('Do not usable', -1000)
        if self.root is None:
            return None
        else:
            return self._extract_max(self.root, max_node)


    def _extract_max(self, node, max_node):
        if (node.l is None and node.r is None):
            return max_node
        
        if node.l is not None:
            if max_node.p < node.l.p:
                max_node = node.l
                temp1 = self._extract_max(node.l, max_node)
            else:
                temp1 = self._extract_max(node.l, max_node)
        
        if node.r is not None:
            if max_node.p < node.r.p:
                max_node = node.r
                temp2 = self._extract_max(node.r, max_node)
            else:
                temp2 = self._extract_max(node.r, max_node)

        return max_node


    def helper_print_tree(self, current, level):
        if current is not None:
            self.helper_print_tree(current.r, level + 1)
            print("   " * level + "->", F'({current.v}, {current.p})')
            self.helper_print_tree(current.l, level + 1)

    def print_tree(self):
        self.helper_print_tree(self.root, 0)



        
q = HeapQ()
q.add(30, 100)
q.add(30, 10)
q.add(70, 1001)
q.add(43, 5)
q.add(18, 6)
q.print_tree()
print(q.extract_max().p)