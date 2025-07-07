from turtle import Turtle

POSITIONS = [(-20,0),(0,0),(20,0)]



class Snake(Turtle):
    def __init__(self):
        super().__init__()
        self.segments = []
        self.create_snake()
        self.head = self.segments[0]
        
    
    def create_snake(self):
        for position in POSITIONS:
            self.add_segment(position=position)
    
    def add_segment(self, position):
        ns = Turtle("square")
        ns.penup()
        ns.color("white")
        ns.goto(position)
        self.segments.append(ns)


    def up(self):
        if self.head.heading() != 270:
            self.head.seth(90)

    def down(self):
        if self.head.heading() != 90:
            self.head.seth(270)
        
    def left(self):
        if self.head.heading() != 0:
            self.head.seth(180)

    def right(self):
        if self.head.heading() != 180:
            self.head.seth(0)

    def move(self):
        for seg in range(len(self.segments)-1,0,-1):
            self.segments[seg].goto(self.segments[seg-1].xcor(),self.segments[seg-1].ycor())
        self.head.forward(10)

    def extend(self):
        self.add_segment(self.segments[-1].position())

    