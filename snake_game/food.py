from turtle import Turtle
from random import randint

class Food(Turtle):
    def __init__(self):
        super().__init__()
        self.color("red")
        self.shape("circle")
        self.shapesize(stretch_len=0.75,stretch_wid=0.75)
        self.appear()
        
    
    def appear(self):
        self.penup()
        new_x = randint(-280,280)
        new_y = randint(-280,280)
        self.goto(new_x,new_y)
