---
title: 💻 TD n°3
tags:
  - info
  - tp
---

# 💻 TD n°3
## Exercice 1
```python
def orderedList(liste: list) -> bool:
    """
    Check if a list is ordered (from smaller to bigger).

    Input: List
    Output: boolean

    >>> orderedList([i for i in range(0, 101, 1)])
    True

    >>> orderedList([i for i in range(100, -1, -1)])
    False
    """
    mini = -float("inf")
    for e in liste:
        if e < mini:
            return False
        mini = e
    return True


if __name__ == "__main__":
    import doctest
    doctest.testmod()
```

## Exercice 2
```python
def listMinimum(liste: list) -> int:
    """
    Return the smallest value of a list.

    Input: List
    Output: integrer

    >>> listMinimum([i for i in range(0, 101, 1)])
    0

    >>> listMinimum([i for i in range(100, -1, -1)])
    0

    >>> listMinimum([])
    inf
    """
    mini = float("inf")
    for e in liste:
        if e < mini:
            mini = e
    return mini 

def minimumGreaterThan(liste: list, mini: int) -> int:
    """
    Return the smallest value of a list which is greater that mini.

    Input: List of numbers, Integrer (Minimum)
    Output: integrer

    >>> listMinimum([i for i in range(0, 101, 1)])
    0

    >>> listMinimum([i for i in range(100, -1, -1)])
    0

    >>> listMinimum([])
    inf
    """
    m = float("inf")
    for e in liste:
        if e < m and e > mini:
            m = e
    return m 

if __name__ == "__main__":
    import doctest
    doctest.testmod()
```

## Exercice 3
```python
def textToString(texte: str) -> list:
    """
    Return the list from a text.

    Input: Text
    Output: List

    >>> textToString("Hello")
    ['H', 'e', 'l', 'l', 'o']
    """
    opt = []
    for e in texte:
        opt.append(e)
    return opt 

def sentenceCounter(texte: str) -> list:
    """
    Return a list of the length of each word in a text.
    
    Input: Text
    Output: List

    >>> sentenceCounter("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
    [5, 5, 5, 3, 5, 11, 10, 5, 3, 2, 7, 6, 10, 2, 6, 2, 6, 5, 7]
    """
    opt = []
    for e in texte.split():
        opt.append(len(e))
    return opt 

# To test all ma functions, I use a python tool called "doctest",
# which exxecute the code with ">>>" in the function's docstrings

# This code actually run them only if I run this file dirrectly
if __name__ == "__main__":
    import doctest
    doctest.testmod()
    print("All tests succeeded.")
```

## Exercice 4
```python
def extendedCaesar(ch: str, shift: int = 1) -> str:
    # Take the ASCII value, add one, and convert it back
    return chr(ord(ch) + 1)
    
def caesarSentence(texte: str) -> str:
    opt = ""
    for e in texte:
        opt += extendedCaesar(e)
    return opt
```