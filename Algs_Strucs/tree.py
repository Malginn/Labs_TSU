class Tree:
    """
    Пронумеровали вершины от 1 до n=9 и написали список родителей
    """
    def __init__(self, tree: list):
        self.data = tree
    

    def push(self, parent):
        """
        Добавляем элемент в дерево, где parent - значение массива, т.е. имя родителя
        index = n + 1 - навзание самого элемента
        """
        self.data.append(parent)

    def is_have_child(self, elem):
        if elem in self.data:
            return True
        return False


    def remove(self, elem):
        new_data = []
        for i in self.data:
            if i != elem:
                new_data.append(i)
            elif self.is_have_child(i):
                self.remove(i)
        self.data = new_data


    def print_tree(self, head: int):
        print(head)
        for idx, item in enumerate(self.data):
            if item == head:
                self.print_tree(idx)


tree = Tree([6, 7, 3, 6, 6, 3, 1, 7, 3])
tree.print_tree(3)
tree.push(4)


####Не доделано, но примерно так