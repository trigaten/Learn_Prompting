---
sidebar_position: 2
---

# * Coding Assistance

You can use ChatGPT for debugging, code generation, reformatting, commenting, and more. It can work with code in over 40 programming languages. 

| Web Development | General-Purpose | Scientific Computing |
| --------------- | --------------- | -------------------- |
| JavaScript      | Python          | R                    |
| TypeScript      | Java            | MATLAB               |
| HTML            | C / C++         | Julia                |
| CSS             | C# / VB.Net     | Fortran              |
| PHP             | Go              | Scala                |
| Ruby            | Swift           | Haskell              |
| SQL             | Kotlin          | Rust                 |
| XML             | Perl            |                      |
|                 | COBOL           |                      |
|                 | Shell           |                      |
|                 | Objective-C     |                      |

## Code Generation

Instructing ChatGPT to generate code is as simple as this:

>\>Act as a Python programmer. Please generate the Python code to output a single cycle of a sine wave using text characters and newlines.

The output will be something like:
```
import math

amplitude = 30
frequency = 2
num_points = 50

for i in range(num_points):
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
        print(' ' * (amplitude + y) + '*')
```

<div 
trydyno-embed="" 
openai-model="text-davinci-003" 
initial-prompt="Act as a Python programmer. Please generate the Python code to output a single cycle of a sine wave using text characters and newlines." 
initial-response="import math\n\namplitude = 30\nfrequency = 2\nnum_points = 50\n\nfor i in range(num_points):\n    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))\n    print(' ' * (amplitude + y) + '*')\n" 
max-tokens="256" 
box-rows="3" 
model-temp="0.7" 
top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

## Commenting Code

You can ask ChatGPT to add comments to your code. After your prompt instruction, add three hashmarks and then paste in the code you'd like it to comment:

>\>Please add line comments to this Python code:
>
>\#\#\#
>```
>import math
>
>amplitude = 30
>frequency = 2
>num_points = 50
>
>for i in range(num_points):
>    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
>    print(' ' * (amplitude + y) + '*')


The output will be something like:
```
# Import the math module
import math

# Set the amplitude, frequency, and number of points in the wave
amplitude = 30
frequency = 2
num_points = 50

# Loop over each point in the wave
for i in range(num_points):
    # Calculate the y value of the wave using the sine function from the math module
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    
    # Print a space for padding, followed by an asterisk at the appropriate position on the wave
    print(' ' * (amplitude + y) + '*')
```

<div 
trydyno-embed="" 
openai-model="text-davinci-003" 
initial-prompt="Please add line comments to this Python code:\n\n###\n\nimport math\n\namplitude = 30\nfrequency = 2\nnum_points = 50\n\nfor i in range(num_points):\n   y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))\n   print(' ' * (amplitude + y) + '*')\n" 
initial-response="# Import the math module\nimport math\n\n# Set the amplitude, frequency, and number of points in the wave\namplitude = 30\nfrequency = 2\nnum_points = 50\n\n# Loop over each point in the wave\nfor i in range(num_points):\n    # Calculate the y value of the wave using the sine function from the math module\n    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))\n\n       # Print a space for padding, followed by an asterisk at the appropriate position on the wave\n    print(' ' * (amplitude + y) + '*')\n" 
max-tokens="256" 
box-rows="3" 
model-temp="0.7" 
top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

## Debugging

As you might imagine, it's relatively easy for ChatGPT to detect syntax errors in code, but it can also detect logical errors that crop up when code is executed. Below is an example of a Python script that eventually causes a division by zero error. For more nuanced errors, you may need to add jmore specifics: the error message, environment variables, or inputs -- but you can start with this simple prompt:

>\>Please debug this Python code:
>
>\#\#\#
>```
>pizza_cost = 100
>partygoers = 10
>while partygoers >= 0:
>    cost_per_person = pizza_cost / partygoers
>    print("the cost per person is $", "{:.2f}".format(cost_per_person))
>    partygoers -= 2


The output will be something like this, with the while loop corrected to ensure it stays positive:
```
pizza_cost = 100
partygoers = 10
while partygoers > 0:
    cost_per_person = pizza_cost / partygoers
    print("the cost per person is $", "{:.2f}".format(cost_per_person))
    partygoers -= 2
```

## Reformatting

Coming soon

## Simulating a Database

Coming soon

## Simulating a Linux Command Line

Coming soon

## Acting as a Python Interpreter

Coming soon
