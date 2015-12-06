# Angular Stock Chart
Stock Chart that utilizes Angular, D3.js and Bootstrap. 
[Demo](http://alexkonovalov.github.io/angular-stock-chart/)

Unit tests run on Karma with the aid of Jasmine

##Definition of the task

Create an app that utilizes AngularJS and D3.js that takes bond data from a remote or local fake 
source and present it in the form of graph. There are 3 measures: "yield", "price", "spread".
User should be able to select a measure and a time frame to be presented on the graph.


###To load all dependencies 

```bash
npm install
```

###To start testing 

```bash
npm test
```


###To build

```bash
grunt
```

###To publish

```bash
grunt publish
```