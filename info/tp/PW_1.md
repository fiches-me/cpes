---
title: 💻 PW n°1
finished: true
tags:
  - info
  - tp
---

# PW n°1

## Dice Game

### Two Dice Game

```python [TwoDice.py]
dice1 = int(input("Give the value of the first dice: "))
if 0 < dice1 < 7:
    dice1 = int(dice1)
    print("It is correct!")
    dice2 = int(input("Give the value of the second dice: "))
    if 0 < dice2 < 7:
        print("It is correct!")
        if dice1 > dice2:
            print("The two values are", dice1, dice2)
        else:
            print("The two values are", dice2, dice1)
    else:
        print("This value is incorrect !")
else:
    print("This value is incorrect !")
dice2 = int(input("Give the value of the second dice: "))
```

### Three Dice Game

> [!SUMMARY]
> J'ai fais le choix d'utiliser des listes pour que le code soit plus lisible. Au moment où nous avons fait ce TP, nous ne sommes pas censés connaitre les listes.

```python [ThreeDice.py]
dice1 = int(input("Give the value of the first dice: "))
if 0 < dice1 < 7:
    print("It is correct!")
    dice2 = int(input("Give the value of the second dice: "))
    if 0 < dice2 < 7:
        print("It is correct!")
        dice3 = int(input("Give the value of the third dice: "))
        if 0 < dice3 < 7:
            print("It is correct!")
            dice_list = [dice1, dice2, dice3]
            dice_list.sort(reverse=True)
            print("The three values are:", dice_list[0], dice_list[1], dice_list[2])
            if dice_list == [4, 2, 1]:
                print("You win!")
            else:
                print("You loose...")
    else:
        print("This value is incorrect !")
else:
    print("This value is incorrect !")
```

## Selection and Guaranty

```python [g30.py]
delay = int(input("Please enter your train's delay (in minutes. 1h = 60min): "))
price = int(input("Please enter your train's ticket price: "))

if delay <= 30:
    print("Sorry, you are not eligible to refunds for this delay")
elif delay <= 120:
    print("You can be refunded", price * 0.25)
elif delay <= 180:
    print("You can be refunded", price * 0.5)
else:
    print("You can be refunded", price * 0.75)
```

## Guessing Game

> [!SUMMARY]
> Python uses **modules**, a point not seen in class yet but a really powerful tool of Python. With theses, you can make almost anything by using pre-existing code to build your tools (so you can create web pages, do drawings, and even make discord bot if you like it $crazy$). Here, we will take a look at **random**, which can generates pseudo-random numbers ( [read the docs](https://docs.python.org/3/library/random.html)).

```python [GuessGame.py]
from random import randint

Playing = ""

while Playing != "no":
    number_to_guess = randint(1, 100)
    tries = 0
    while tries < 10 and number_to_guess != guess:
        guess = int(input("Guess a number: "))
        if guess < number_to_guess:
            print("More")
        elif guess > number_to_guess:
            print("Less")
        else:
            print("You win! Tries:", tries + 1)
        tries += 1
    Playing = input("Do you want to play again? Yes or No").lower()
```
