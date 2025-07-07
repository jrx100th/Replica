from turtle import Turtle

class Scoreboard(Turtle):
    def __init__(self):
        self.score = 0
        super().__init__()
        self.color("white")
        self.hideturtle()
        self.penup()
        self.goto(x=0,y=280)
        self.write(f"Score : {self.score}",move=False, align="center",font=("Courier",14,"normal"))

    def increase_score(self):
        self.clear()
        self.score+=1
        self.write(f"Score : {self.score}",move=False, align="center",font=("Courier",14,"normal"))

    def game_over(self):
        self.clear()
        self.goto(0,0)
        self.write(f"Game Over\nFinal Score is {self.score}",move=False, align="center",font=("Courier",40,"normal"))
        