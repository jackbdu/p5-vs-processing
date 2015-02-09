## Differences between p5 and processing

### [keyPressed()](http://p5js.org/reference/#/p5/keyPressed) vs [keyTyped()](http://p5js.org/reference/#/p5/keyTyped)
#### letter key
In __processing__, the letter key is __case-sensitive__ in keyPressed():
```processing
key == 'a';
```
is different from
```processing
key == 'A';
```
In __p5__, a letter key is __case-insensitive__ and has to be referred to with the capital letter in keyPressed(), like below:
```javascript
key === 'A';
```
"For ASCII keys that was pressed is stored in the key variable. However, it does not distinguish between uppercase and lowercase. For this reason, it is recommended to use keyTyped() to read the key variable, in which the case of the variable will be distinguished." \( [p5.js reference](http://p5js.org/reference/#/p5/keyPressed) \)

####arrow key
In __processing__, arrow keys are used as below:
```processing
key == UP;
```
In __p5__, arrow keys are used as below __only__ in keyPressed():
```javascript
keyCode === UP_ARROW;
```
Follwing keyCodes are also supported: BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP\_ARROW, DOWN\_ARROW, LEFT\_ARROW, RIGHT_ARROW

### quote
In __p5__, single quote equals to double quote, 'a' is the same as "a".
In __processing__, single quote and double quote are used differently:
```processing
println("strings"); // Strings have to be put in double quotes
key == 'A'; // for key, you have to use single quote
```
