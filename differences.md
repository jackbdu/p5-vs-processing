## Differences between p5 and processing

### key
In __p5__, a letter key is __case-insensitive__ and has to be referred to with the capital letter, like below:
```javascript
key === 'A'
```
In __processing__, the letter key is __case-sensitive__:
```processing
key == 'a'
```
is different from
```processing
key == 'A'
```

### quote
In __p5__, single quote equals to double quote, 'a' is the same as "a".
In __processing__, single quote and double quote are used differently:
```processing
println("strings") // Strings have to be put in double quotes
key == 'A' // for key, you have to use single quote
```
