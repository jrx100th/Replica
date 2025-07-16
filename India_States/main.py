import turtle
import pandas as pd

# from PIL import Image

# # Open the JPG image
# img = Image.open("india_States_outline.jpg")

# # Save it as a GIF
# img.save("india_states_outline.gif")


screen = turtle.Screen()
screen.title("India States")
image = "india_states_outline.gif"
screen.addshape(image)
turtle.shape(image)
turtle.screensize(1200,1200)
screen.setup(width=1.0,height=1.0)


# def get_mouse_click_coor(x,y):
#     print(x,y)

# turtle.onscreenclick(get_mouse_click_coor)


df = pd.read_csv("states.csv")

correct = 0
total = 28

answer_set = set()

while correct!=total:
    answer_state = screen.textinput(title=f"{correct}/{total} States Correct", prompt="What's another state")
    if answer_state is None:
        break
    answer_state = answer_state.title()

    # checking for correct answer
    if answer_state in (df["state"]).to_list() and answer_state not in answer_set:
        answer_set.add(answer_state)
        correct += 1
        state = turtle.Turtle()
        state.hideturtle()
        state.penup()
        row = df[df["state"] == answer_state]
        x = int(row["x"].values[0])
        y = int(row["y"].values[0])
        state.goto(x,y)
        state.write(answer_state, align="left",font=("Courier",8,"normal"))
    
    if answer_state == "Exit":
        break

states_list = df.state.to_list()


new_dict = {
    "States" : []
}

for i in range(len(states_list)):
    if states_list[i] not in answer_set:
        new_dict["States"].append(states_list[i])

print(new_dict)

pd.DataFrame(new_dict).to_csv("states_to_learn.csv")


screen.exitonclick()