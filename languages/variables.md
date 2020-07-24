# Variables Naming

### Numbers

For numbers, think about words that describe numbers. Words like ````maximum````, ```minimum```, ```total``` will .

```javascript
// good
const minPugs = 1;
const maxPugs = 5;
const totalPugs = 3;
```

### Arrays

```javascript
// great - "names" implies strings
const fruitNames = ['apple', 'banana', 'cucumber'];
```
or
```javascript
// great
const fruits = [{
    name: 'apple',
    genus: 'malus'
}, {
    name: 'banana',
    genus: 'musa'
}, {
    name: 'cucumber',
    genus: 'cucumis'
}];
```

### Booleans

```javascript
// good
const isOpen = true;
const canWrite = true;
const hasFruit = true;
```

### Functions

Functions should be named using a verb, and a noun. When functions perform some type of action on a resource, its name should reflect that. A good format to follow is ```actionResource```. For example, ```getUser```.

```javascript
// good
getUser(userId);
calculateTotal(items);
```

A common convention I’ve seen used for transforming values is prefixing function names with ```to```.

```javascript
toDollars('euros', 20);
toUppercase('a string');
```

### Classes

```javascript
class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return(this.name);
  }
}

let user = new User("Name");
user.getName(); // Name
```

### Constants

```javascript
const MAX_WIDTH = 40;
const SCREEN_HEIGHT = 500;
const GREEN = "#E78F47";
```

### Handlers

As a rule, have prefix ```on``` or ```Handler```

```javascript
const onClickButton = () => {
    // code here
}

const formSendHandler = () => {
    // code here
}
```
