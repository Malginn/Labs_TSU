class L:
    def __init__(self):
        self.data = []

    
    def get_item(self, idx):
        return self.data[idx]
    

    def push(self, elem, idx=None):
        if not idx:
            self.data.append(elem)
        elif idx == 0:
            self.data.insert(0, elem)
        else:
            #тут для двусвязного спика о(1), для односвязного о(n)
            self.data.insert(idx, elem)


    def pop(self, idx):
        if not idx:
            self.data.pop()
        else:
            self.data.pop(idx)


    def get_item(self, idx):
        #o(n) - более подробно расписали поиск
        for i in range(len(self.data)):
            if i == idx:
                return self.data[i]
            
    
    def show(self):
        print(self.data)




li = L()
li.show()

li.push(2)
li.show()

for i in range(10):
    li.push(i)
li.show()

for i in range(5):
    li.pop(i)
li.show()

print(li.get_item(4))