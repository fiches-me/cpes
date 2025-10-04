---
title: 💻 TP n°4
tags:
  - info
  - tp
finished: true
---

# 💻 TP n°4

## Exercice 1

> [!INFO]
> I started to add **types definitions** to my variables. It's the things after the barable with the little **:**. It tells python which variables i'm expecting to get in the function, and which one I will give back. *Note that it's only an aesthetic behavior, python will allow you to not respect them.*

```python
def search(elt: int, tab: list)->list:
	"""
	Search if the elt element is in the list tab.
	"""
    response = []
    for i in range(len(tab)):
        if tab[i] == elt:
            response.append(i)
    return response
```

## Exercice 2

```python
def print_matrix(m:list)->None:
	"""
	Print a Matrix like a pixel art.
	"""
    for tab in m:
        for el in tab:
            print(el, end="")
        print()
```

## Exercice 3

```python
def average1(tab:list)->int:
	"""
	Average values from a List.
	"""
    assert len(tab) > 0
    acc = 0
    for e in tab:
        acc += e
    return int(acc/len(tab))

def weightedAverage1(tab:list, weights:list)->int:
	"""
	Average values from a List, weighted from another List.
	"""
    assert len(tab) > 0
    assert len(tab) < len(weights)
    acc = 0
    total = 0
    for i in range(len(tab)):
        acc += tab[i] * weights[i]
        total += weights[i]
    return int(acc/total)

def averageLine(m: list, line:int)->int:
	"""
	Average values from one line of a Matrix.
	"""
    assert len(m) > 0
    return average1(m[line])

def averageCol(m: list, col:int)->int:
	"""
	Average column from one line of a Matrix.
	"""
    assert len(m) > 0
    acc = 0
    for i in range(len(m)):
        acc += m[i][col]
    return int(acc/len(m))
```

All of these functions created up there contain a `assert` line before executing to avoid any division by zero. This code will so work with empty lists.  

## Exercice 4

```python
def print_matrix(m:list)->None:
	"""
	Print a Matrix with specific caracters.
	If 0, print " "
	If 1, print "*"
	
	It's basically the print_matrix() funtion created earlier
	but with an if clause.
	"""
    for tab in m:
        for el in tab:
            if el == 1: 
                print('*', end="")
            else:
                print('  ', end="")
        print()

def zoomList(startList:list, k:int) -> list:
	"""
	Multiply each list element by k. 
	"""
    endList = []
    for e in startList:
        for _ in range(k):
            endList.append(e)
    return endList

def zoomPicture(startMatrix:list, k:int) -> list:
	"""
	Zoom a picture created from a Matrix.
	"""
    endMatrix = []
    for e in startMatrix:
	    # Here, the sollution is to think in 2 dimmensions.
	    # By repeating each line k time, you get the y axis multiplication
        for _ in range(k):
	        # and the zoomList() function carries the x axis.
            endMatrix.append(zoomList(e, k))
    return endMatrix
```

## Exercice Bonus

> [!INFO]
> This exercice was added to e-campus for the brave List enjoyers. It is not necessarily complex, but you have to do maths in python to achieve the goal. 

```python
def pascal(k:int)->list:
	"""
	Retrun a Matrix of pascal's triangle.
	"""
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
