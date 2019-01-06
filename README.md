**RxJS Subject Types - samples**

RxJs - javascript implementation of ReactiveX

ReactiveX - API for asynchronous programming with observable streams (http://reactivex.io) (https://rxjs-dev.firebaseapp.com/api)

**Stream**
 - a stream is a sequence of ongoing events ordered in time. It can emit three different things: a value (of some type), an error, or a "completed" signal. Consider that the "completed" takes place, for instance, when the current window or view containing that button is closed (e.g. values/event emitted over time like a timeline)
 - Marble Diagram -> Stream: ---x------x-----x--------x--x--X----|---->
 - we capture these emitted events only asynchronously, by defining a function that will execute when a value is emitted, another function when an error is emitted, and another function when 'completed' is emitted. Sometimes these last two can be omitted and you can just focus on defining the function for values. The "listening" to the stream is called subscribing. The functions we are defining are observers. The stream is the subject (or "observable") being observed. This is precisely the Observer Design Pattern.

**Observable**
- add() - You can add child observers
- remove() - Removing child observers that were added
- unsubscribe() - You can close an observer subscription

**Cold Observable**
- is an observable whose producer ( producer <=> subscribe (next()), emits values/events) is activated once a subscription has been created
- a cold observable is an observable with a producer that's created inside of the observable
- whenever a new subscription is created, it will receive the same values, even the subscription was created at a different time

**Hot Observable**
- the producer emits values outside the observable (<=> producer is either created or activated 	  		outside of subscription)
- a truly hot observable is one that emits values without a subscriber having subscribed to it

**Subject**
 - different type of Observable that has different capabilities
 - is an Observable and Observer simultaneously (<=> observer that can emit values/events)

**BehaviorSubject**
- is a special type of Subject whose only different is that it will emit the last value upon a new observer's 	  subscription
- beside Subject it needs to be initialized with a value

**ReplaySubject**
- it's like the BehaviorSubject except that allows you to specify a buffer or the number of emitted values to     dispatch to observers
- BehaviorSubject only dispatches the last emitted value, and ReplaySubject allows you to dispatch any         		designated number of values
- accepts an optional second argument upon creation, which is referred to as the window time, and it's defined 		in milliseconds. It allows you to define a maximum number of events to return in the first argument, and the 		second argument is the time in milliseconds

**AsyncSubject**
- only emits the very last value, and will only do so once .complete() has been called on the subject
