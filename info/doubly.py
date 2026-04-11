class Doubly:
    def __init__(self, value, prev = None, n = None):
        self.value = value
        self.prev = prev
        self.next = n
        
    def __repr__(self):
        if self.prev is None and self.next is None:
            return self.value.__repr__()
        else:
            if self.next is not None:
                return self.value.__repr__() + " <-> " + self.next.__repr__()
            else:
                return self.value.__repr__()

a = Doubly(5)
b = Doubly(10)
c = Doubly(15)
d = Doubly(20)
a.next = b
b.prev = a
b.next = c
c.prev = b

print(a)

def insertion(D: Doubly, value, index : int) -> Doubly:
    print("insertion doubly", D, "index", index)
    
    # Base case: insert at head or into empty list
    if index <= 0 or D is None:
        new = Doubly(value)
        new.next = D
        if D is not None:
            D.prev = new
        return new

    # Recursive case: insert into the rest of the list
    else:
        D.next = insertion(D.next, value, index - 1)
        if D.next is not None:
            D.next.prev = D
        return D
    
insertion(a, 12, 1)
print(a)