class ArrayChangingSize:
    def __init__(self, data: list = [], max_size: int = None):
        self.data = data
        self.size = max_size

    
    def push(self, elem):
        if self.size >= len(self.data):
            self.data.append(elem)
        else:
            self.size *= 2
            self.data.append(elem)
    
    def show(self):
        print(self.data)

    
    def pop(self, idx: int = None):
        self.data.pop(idx)

    def is_empty(self):
        if self.data:
            return False
        return True

arr = ArrayChangingSize([1, 2, 3], 10)
arr.show()
print(arr.size)

for i in range(10):
    arr.push(i)
arr.show()
print(arr.size)

for i in range(20):
    arr.push(i)
arr.show()
print(arr.size)

while not arr.is_empty():
    arr.pop(0)
arr.show()
print(arr.size)