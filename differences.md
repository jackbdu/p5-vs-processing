## Differences between p5 and processing

### key
####letter key
In __p5__, a letter key is __case-insensitive__ and has to be referred to with the capital letter, like below:
```javascript
key === 'A';
```
In __processing__, the letter key is __case-sensitive__:
```processing
key == 'a';
```
is different from
```processing
key == 'A';
```
####arrrow key
In __p5__, arrow keys are used as below:
```javascript
keyCode === UP_ARROW;
```
In __processing__, arrow keys are used as below:
```processing
key == UP;
```

### quote
In __p5__, single quote equals to double quote, 'a' is the same as "a".
In __processing__, single quote and double quote are used differently:
```processing
println("strings"); // Strings have to be put in double quotes
key == 'A'; // for key, you have to use single quote
```
