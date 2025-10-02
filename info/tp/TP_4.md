---
title: 💻 TP n°3
tags:
  - info
  - tp
---

# TP n°4

## Exercice 1

```python
def search(elt:int, tab:list)->list:
    response = []
    for i in range(len(tab)):
        if tab[i] == elt:
            response.append(i)
    return response
```

## Exercice 2

```python
def print_matrix(m:list)->None:
    for tab in m:
        for el in tab:
            print(el, end="")
        print()
```

## Exercice 3

```python
def average1(tab:list)->int:
    assert len(tab) > 0
    acc = 0
    for e in tab:
        acc += e
    return int(acc/len(tab))

def weightedAverage1(tab:list, weights:list)->int:
    assert len(tab) > 0
    assert len(tab) < len(weights)
    acc = 0
    total = 0
    for i in range(len(tab)):
        acc += tab[i] * weights[i]
        total += weights[i]
    return int(acc/total)

def averageLine(m: list, line:int)->int:
    assert len(m) > 0
    return average1(m[line])

def averageCol(m: list, col:int)->int:
    assert len(m) > 0
    acc = 0
    for i in range(len(m)):
        acc += m[i][col]
    return int(acc/len(m))

# All of theses functions supports empty vectors/matrices.
```

## Exercice 4

```python
def print_matrix(m:list)->None:
    for tab in m:
        for el in tab:
            if el == 1: 
                print('*', end="")
            else:
                print('  ', end="")
        print()

def zoomList(startList:list, k:int) -> list:
    endList = []
    for e in startList:
        for _ in range(k):
            endList.append(e)
    return endList

def zoomPicture(startMatrix:list, k:int) -> list:
    endMatrix = []
    for e in startMatrix:
        for _ in range(k):
            endMatrix.append(zoomList(e, k))
    return endMatrix
```

## Exercice Bonus

```python
def pascal(k):
    assert k > 0
    response = [[1]]
    for num in range(1, k+1):
        line = [1]
        for i in range(1, num):
            line.append(response[num-1][i - 1] + response[num - 1][i])
        line.append(1)
        response.append(line)
    return response
```
