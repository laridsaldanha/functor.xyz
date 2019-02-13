# Functor #1 - 
What more fitting of a way to kick of the posts section of functor.xyz then with a bit on functors! Alright. Let's *contain* our excitement though - we've got some work to do. 😎

In this post we're going to learn what requirements must be meant in order for something to be considered a fucntor.


#### "You can't put me in a box"
The essence of a **functor data type** is that it is `mappable`. This simply means that it provides a container (or box) that we can `map()` through in order to transform values. 

```
				map(a→b)
[Box of `a`s] ------> [Box of `b`s]
```

Hmmm.... A container that we can map through. 🤔 Sounds kinda familiar, right? Well that's because it is! JavaScript's `Array []` type is a functor. Whether you've realized it or not you have been using functors all along!

##### Testing `map`


Below we see the the functor `a` which is a single element array `[10]`. Our second functor `b` is then created using JavaScript's built-in `Array.prototype.map` method.

```javascript
const doubleIt = x => x * 2;

const functor = [10];
const x = functor.map(doubleIt);
const y = functor.map(x => x * 2);
// testing equality
console.log(x.toString() === y.toString()) // true
```

It's really that simple. If you're a skeptic like me, then you might be having a hard time buying this. Just sit tight though it will all make sense soon.

### Category Theory
Functional Programming is deeply rooted in category theory - here are its basics:
 
1. **Category**: A collection of objects and arrows between objects.
	* Objects can be anything.
		* ex. `[{name: 'Tom', age: 26}]`, `[10,30]`, `['$']` 
2. **morphisms**
	* Arrays 
	* Example above | ex. `A −f→ B` 	



#### Functor Laws: 
There two functor laws are:

1. **Identity**:
	*  id function must always `map` a functor back to the **same value**,
	* `const id = x => x;` 
	* `[1,2,3].map(id); // returns [1,2,3]` 
2. **Composition**: 
	* Functors of the same type can be computed in any order and it will not effect their value.
	* *Given `g: x => y, f: y => z` where `x,y,z` are collection objects...* **there must be a composition that directly `X → Z`**.

> This composistion law was the same that I was forced to learn in algebra class. It' **associatve** meaning that the order in which it is computer does not matter. Realizing this was a big "a-ha" moment when studying functional programming. 

> **Ex.:**  (f ◦ g) ◦ h = f ◦ g ◦ h = f ◦ (g ◦ h)


Now that we know the functor laws lets apply them to another array. Below we have the following:

1. `f` takes an `x` and divides by `.5`
2. `g` takes an `x` and multiplies by `16`
3. `data` is a functor containing 4 values.

 
```javascript
const f = x => x / .5;
const g = x => x * 16;
const data = [25];

// identity law
console.log(
	data.toString() === data.map(x => x).toString()
) // 25 === 25

// composistion law
console.log(
    functor.map(g).map(f).toString() === functor.map(x => f(g(x))).toString(),
)

```

#### Creating the `Box` functor
We've seen functors in action and we've learned the rules that they must abide by. Now let's create one for ourselves. 

The `Box` functor will take a value and retun an object with a `map` method. When `map` executes, it will apply it's input `fn` to the value inside and return it's result wrapped inside of.

```javascript
const Box = value => ({
	map: fn => Identity(fn(value))
})

/// traces curried functions
const trace = val => {
    console.log(`value:: ${val}`)
    return val
}

const num = Box(20);

// identity law
const id = x => x;

const x1 = num;
const x2 = num.map(id);

x2.map(trace); // value:: 1
x1.map(trace); // value:: 1

// composistion law f(x) * g(x) = f(g(x))
```

### Wrap up
And thus conclude this intro post on functors. Hopefully you've learned something that you didn't prior to reading this.

Need Improvemen? Give me a call!







