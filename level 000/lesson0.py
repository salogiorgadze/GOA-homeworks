from turtle import *

#we want to draw a house

#step 1 : draw a square

width(7)
speed(30)
color("purple")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing a door

forward(70)
color("yellow")
begin_fill()
left(90)   
forward(120)   #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200,200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200 )
end_fill()

#drawing left window
penup()
goto(30,180)  
setheading(0)  
pendown()
color("lightblue")
begin_fill()
for _ in range(4):
    forward(50)
    right(90)
end_fill()

#drawing right window
penup()
goto(120, 180)  
setheading(0)
pendown()
color("lightblue")
begin_fill()
for _ in range(4):
    forward(50)
    right(90)
end_fill()


exitonclick()