class Q:
    def __init__(self, size: int, data: list = None):
        self.size = size

        if data:
            self.data = data
        else:
            self.data = []


    def push_back(self, elem):
        if len(self.data) < self.size:
            self.data.append(elem)
        else:
            print('Превышен размер массива')
        

    def pop_front(self):
        self.data.pop(0)


    def bool_empty(self):
        if self.data:
            return False
        else:
            return True
        

    def show(self):
        print(self.data)
            

q = Q(10, [1, 0])
q.show()

for i in range(5):
    q.push_back(i)
q.show()

while not q.bool_empty():
    q.pop_front()
q.show()