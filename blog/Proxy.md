---
slug: "/blog/Proxy"
date: "2019-05-17"
title: "Reactivity in Vue3 vs Vue 2(Proxy in js)"
---

### Reactivity in Vue🙋

What do you mean by `reactivity`🙄, Models in Vue are just plain JavaScript objects. When you modify them, the view updates.

When you pass a plain JavaScript object to a `Vue instance` as its `data` option, Vue will walk through all of its properties and convert them to getter/setters using **Object.defineProperty**😶.

The **getter/setters** are invisible to the user, but under the hood they enable Vue to perform dependency-tracking and change-notification when properties are accessed or modified.

Every component instance has a corresponding **watcher**🧐 instance, which records any properties “touched” during the component’s render as dependencies. Later on when a dependency’s setter is triggered, it notifies the watcher, which in turn causes the component to re-render.

<img src="https://vuejs.org/images/data.png"  class="wid" />

> A property must be present in the data object in order for Vue to convert it and make it reactive

<pre><code class="code">
var vm = new Vue({
  data: {
    a: 1
  }
})
// `vm.a` is now reactive

vm.b = 2
// `vm.b` is NOT reactive

</code></pre>

#### [object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 

*object.defineProperty()* defines a new property directly on an object.

 It can also modify an existing property on an object and return the object. With object.defineProperty, we can easily set the *getters* and *setters* of an object.


<pre><code class="code"  >
const data = {
    count: 10
};

const newData = {

}

Object.defineProperty(newData, 'count', {
  get() { return data.count; },
  set(newValue) { data.count = newValue; },
});

console.log(newData.count); // 10

newData.count = 20;

console.log(newData.count); // 20
</code></pre>


> Now let's Add **trigger** and **track** function🤟 🤘, we can easily see when changes occur and perform dependency-tracking and change-notification operation, on same data & newData.

<pre><code class="code" >
function track(){
  console.log("Prop accessed")
}
function trigger(){
  console.log("Prop modified")
}
Object.defineProperty(newData, 'count', {
  get() {track();return data.count; },
  set(newValue) { data.count = newValue;trigger(); },
});

console.log(newData.count); 
// Prop accessed 
// 10

newData.count = 20;
// Prop modified

console.log(newData.count); 
// Prop accessed
// 20
</code></pre>

--------------------------------

####  Intro of Proxy in Vue 3 to avoid the limitations of reactivity 🔥

 The reactive system was rewritten to utilize [JavaScript’s proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)


 > *Proxy* object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

 proxy,needs  two parameters:

 1. **target**: the original object which you want to proxy
 2. **handler**: an object that defines which operations will be intercepted and how  to     redefine intercepted operations.

<pre><code class="code" >
const data = {
  meal: "rice"
}

const handler = {
  get(target, prop, receiver){
    console.log("Data Get: ", target, prop);
    return target[prop];
  },
  set(target, key, value, receiver) {
    console.log("Data Set: ", target, key, value);
    return target[key] = value;
  }
}

const proxy = new Proxy(data, handler);

console.log(proxy) // { meal: "rice" }

console.log(proxy.meal)

// Data Get: { meal: "rice" } meal
// rice

proxy.meal = "yam"

// Data Set: { meal: "rice" } meal yam
// yam

</code></pre>

 > - The proxy object that accepted a data object.

 > - The handler that we use to intercept the **get** and **set** operations in our objects

#### There much more to Proxy, watch() and reactivity in vue... 🤪

--------------------------------------------------------------


##### Reference Article's:

 - reactivity in vue: [https://vuejs.org/v2/guide/reactivity.html](https://vuejs.org/v2/guide/reactivity.html)

 - proxy in js: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

<style>
.wid {
    width:700px;
   
}
 .code {
        display: block;
    background: #f5f5f5;
    border: 1px solid #ccc;
    font-size: 16px;
    }
  @media screen and (max-width: 480px) {
    .wid {
    width:400px;
   }
       .code {
       overflow:scroll;
    }
  }
</style>
