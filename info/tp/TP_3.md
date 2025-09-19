---
title: TP n°3
finished: true
---

# TP n°3

> [!INFORMATION]
> I will switch the language of theses revision sheets to english to match with the TPs

## Cosinus

```python
def customCos(adjacent, hypotenuse):
    if hypotenuse == 0:
        return None
    return (adjacent / hypotenuse)
```

## Journalist

```python
def monday(word : str):
    return word + " " + word

def tuesday(word : str):
    if len(word) % 2 == 0:
        return (word + "-")*5 + word
    return (word + ",")*2 + word

def wednesday(word : str):
    if len(word) % 2 == 0:
        return word
    return "odd"

def thursday(word : str):
    return word*(len(word) % 3)

def friday(word):
    return word

def transformWord(word : str, day : int):
    if day == 1:
        return monday(word)
    elif day == 2:
        return tuesday(word)
    elif day == 3:
        return wednesday(word)
    elif day == 4:
        return thursday(word)
    elif day == 5:
        return friday(word)
    else:
        return "You need to select a day between 1 and 5"
```

Here is the edited version which support lists (so whole sentences) :

```python
def transformSentence(sentence : str, day : int):
    words = sentence.split(" ")
    newSentence = ""
    for word in words:
        newSentence += transformWord(word, day) + " "
    return newSentence
```

## Strings 'n' Loops
### DNA Search

```python
def search(gene, DNAseq):
    for i in range(len(DNAseq)):
        if DNAseq[i:i+len(gene)] == gene:
            return True
    return False
```

### Word Reverse

```python
def reverse(word):
    assert word != None and word != "", "Input word must be a non-empty string"
    newWord = ""
    for i in range(len(word), 0, -1):
        newWord += word[i-1]
    return newWord
```

### Word Number

```python
def word_number(sentence):
    num = 1
    for i in sentence:
        if i == " ": num += 1
    return num
```