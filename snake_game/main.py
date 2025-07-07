from turtle import Turtle, Screen
from scoreboard import Scoreboard
from food import Food
import time
from snake import Snake

ts = 0.1




screen = Screen()
screen.setup(width=600,height=600)
screen.bgcolor("black")
screen.tracer(0)

scoreboard = Scoreboard()
food = Food()
snake = Snake()

def nitro():
    global ts
    old_ts = ts
    ts *= 0.65  
    def restore():
        global ts
        ts = old_ts
    screen.ontimer(restore, 2000)

    

screen.listen()

screen.onkey(fun=snake.left, key="Left")
screen.onkey(fun=snake.right, key="Right")
screen.onkey(fun=snake.up, key="Up")
screen.onkey(fun=snake.down, key="Down")
screen.onkeypress(fun=nitro, key="space")


game_is_on = True

while game_is_on:
    time.sleep(ts)
    screen.update()
    # snake.head.forward(10)
    snake.move()

    # detect coll with food
    if snake.head.distance(food) < 15:
        snake.extend()
        scoreboard.increase_score()
        food.appear()
        if scoreboard.score%5 == 0:
            ts*=0.8

    # detect coll with wall
    if snake.head.xcor() > 290 or snake.head.xcor() < -290 or snake.head.ycor() > 290 or snake.head.ycor() < -290 :
        game_is_on = False
        scoreboard.game_over()
    
    for segment in snake.segments[1:]:
        if snake.head.distance(segment) < 2:
            game_is_on = False
            scoreboard.game_over()

    





screen.exitonclick()