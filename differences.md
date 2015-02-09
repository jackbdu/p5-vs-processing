## Differences between p5 and processing

### [key](http://p5js.org/reference/#/p5/keyPressed)
####letter key
In __processing__, the letter key is __case-sensitive__:
```processing
key == 'a';
```
is different from
```processing
key == 'A';
```
In __p5__, a letter key is __case-insensitive__ and has to be referred to with the capital letter, like below:
```javascript
key === 'A';
```
####arrrow key
In __processing__, arrow keys are used as below:
```processing
key == UP;
```
In __p5__, arrow keys are used as below:
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
