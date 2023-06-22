class Array:
    """
    - константный о(1) доступ по индексу
    - непрерывный кусок памяти
    - фиксированный размер
    - однородный
    """
    def __init__(self, data):
        self.data = []  #элементы массива
        self.size = None    #фиксированный
        self.type = None    #однородный

        if type(data) is list:
            self.data = data
            self.size = len(data)
            self.type = type(data[0])

        elif type(data) is int:
            self.size = data


    def get_elem_by_index(self, idx):
        """
        константный доступ по индеку
        """
        return self.data[idx]
    

    def insert_into(self, elem, idx=None):
        """
        По умолчанию добавление в конец, иначе по позиции idx
        заполнение пустых ячеек памяти
        """
        if self.size > len(self.data):
            if idx:
                self.data = []
                self.data.insert(idx, elem)
            else:
                self.data.append(elem)
        else:
            print('Превышен размер массива')


    def pop(self, idx):
        """
        удаление элементов массива
        """
        self.data.pop(idx)


    def show(self):
        try:
            print(self.data)
        except:
            print([])


arr = Array(10)
arr.show()

for i in range(12):
    arr.insert_into(i)
arr.show()

arr.pop(1)
arr.pop(1)
arr.show()
print(arr.get_elem_by_index(2))
