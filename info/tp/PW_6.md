---
title: 💻 TP n°6
finished: true
tags:
  - info
  - tp
order: 6
---

## Tuples

```python
def tupleToList(t: tuple) -> list:
    """
    read the name dah
    """
    liste = []
    for e in t:
        liste.append(e)
    return liste

def maxX(tab: list) -> int:
    """
    """
    maxi = -float("inf")
    for e in tab:
        if e[0] > maxi: maxi = e[0]
    return maxi

# tab.pop().append((5, 2))
```
