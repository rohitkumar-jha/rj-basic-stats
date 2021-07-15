# rj-basic-stats
## We can use statistical operation like mean,median,varance, etc
## How to install
```sh
npm i rj-basic-stats
```
# How to use
## If we want to perforam statistical operation on number array
```sh
const stats=require('rj-basic-stats')
const numArray = [1, 5, 3, 4, 2, 6, 8];
const numResult=stats.CalNumModal(numArray);
if input data is population then use true as second parameter
eg: const numResult=stats.CalNumModal(numArray,true);
Here numResult will have object values like isValid, minValue, maxValue, sum, median, mean, variance, standardDeviation, standardError.
If we want only single value then we can that too
eg: const numMean=stats.CalNumModal(numArray).mean;
```
## If we want to perforam statistical operation on object array
```sh
const stats=require('rj-basic-stats')
const objData = [{ id: 1, name: 'Abc', age: 24 }, { id: 2, name: 'Bob', age: 38 }, { id: 3, name: 'Mack', age: 30 }, { id: 4, name: 'Joe', age: 34 }]
const objResult=stats.CalObjModal(objData,nameOfNumberColumn);
here nameOfNumberColumn is age so it will be const  objResult=stats.CalObjModal(objData,'age');
if input data is population then use true as third parameter
eg: const objResult=stats.CalObjModal(objData,'age'));
Here objResult will have object values like isValid, minValue, maxValue, sum, median, mean, variance, standardDeviation, standardError.
If we want only single value then we can that too
eg: const numMean=stats.CalObjModal(numArray).mean;
```