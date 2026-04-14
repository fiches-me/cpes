---
title: 💻 TP n°7
finished: false
tags:
  - info
  - tp
order: 7
---

## Read

```python
f = open('starters.csv')
text = f.read()
f.close() # Withouth the f.close, we do not go back to the beggining of the file, as it was already readen
f = open('starters.csv')
surprise = f.readlines()
for i in range(len(surprise)):
    surprise[i] = surprise[i].strip("\n")
print(surprise)
```

## Write

```python
f1 = open("anything.txt", "w")
f1.write("One line\nTwo line")
f1.close()

f2 = open("anything.txt", "a")
f2.write("\nThird Line")
f2.close()
```

## CSV

```python
def printMathematicians():
    data = open("scientists.csv")
    for e in data.readlines():
        for f in e.split(","):
            if f.strip("\n") == "Maths":
                print(e, end="")
    data.close()

def niceScientists(scientists_csv = "scientists.csv"):
    data   = open(scientists_csv)
    output = open("nice-scientists.csv", "w")
    for e in data.readlines():
        if e.split(",")[-1].strip("\n") != "Physics":
            output.write(e)
    data.close()
    output.close()

def mergeScientists():
    data   = open("scientists.csv")
    new    = open("computer-scientists.csv")
    output = open("all-scientists.csv", "w")

    for e in data.readlines():
        output.write(e)

    lines = new.readlines()
    for i in range(1, len(lines)):
        output.write(lines[i].strip("\n") + ",Computer\n")

    data.close()
    new.close()
    output.close()

niceScientists("all-scientists.csv")
```

## Bottles

```python
def greenBottles(n:int) -> bool:
    file = open(f"{n}-green-bottles.txt", "w")
    for i in range(n, 1, -1):
        file.write(f"{i} green bottles hanging on the wall\n{i} green bottles hanging on the wall\nAnd if one green bottle should accidentally fall\nThere'll be {i - 1} green bottles\n")
    file.write(f"1 green bottles hanging on the wall\n1 green bottles hanging on the wall\nAnd if one green bottle should accidentally fall\nThere'll be no green bottles hanging on the wall\n")
    return True
```
