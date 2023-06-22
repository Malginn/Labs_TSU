class Stack:
    def __init__(self):
        self.data = []


    def push(self, elem):
        self.data.append(elem)


    def pop(self):
        self.data.pop()


    def top(self):
        if len(self.data) > 0:
            return self.data[-1]
        else:
            return []
    

    def is_empty(self):
        if self.data:
            return True
        return False
    



stack = Stack()
print(stack.top())
stack.push(3)
print(stack.top())
for i in range(10):
    stack.push(i)

print(stack.top())
stack.pop()
print(stack.top())