# Variables Naming

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

### Numbers

For numbers, think about words that describe numbers. Words like maximum, minimum, total will .

```javascript
// good
const minPugs = 1;
const maxPugs = 5;
const totalPugs = 3;
```

### Functions

Functions should be named using a verb, and a noun. When functions perform some type of action on a resource, its name should reflect that. A good format to follow is ```actionResource```. For example, ```getUser```.