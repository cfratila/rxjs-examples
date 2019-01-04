import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AsyncSubject } from 'rxjs/AsyncSubject';

import 'rxjs/add/operator/share';
import { fromEvent } from 'rxjs/Observable/fromEvent';

// --- Start L1 Observable create ---- ///
// var observable = Observable.create(function subscribe(observer: any) {
//   observer.next('Hey girls and guys!');
//   observer.next('How are you?');
//   observer.complete();
//   observer.next('This will not send');
// });

// observable.subscribe(
//   (x: any) => addItem(x),
//   (err: any) => addItem(err),
//   () => addItem('Completed')
// );

// --- End Observable create 1 ---- ///

// --- Start L2 Observable ---- ///
// var observable = Observable.create(function subscribe(observer: any) {
//   try {
//     observer.next('Hey girls and guys!');
//     observer.next('How are you?');
//     setInterval(() => {
//       observer.next('I am good');
//     }, 2000);
//   } catch (err) {
//     observer.error(err);
//   }
// });

// var observer = observable.subscribe((x: any) => addItem(x), (err: any) => addItem(err), () => addItem('Completed'));

// stop observer2 when observer is unsubscribed
// var observer2 = observable.subscribe((x: any) => addItem(x), (err: any) => addItem(err), () => addItem('Completed'));

// observer.add(observer2);

// setTimeout(() => {
//   observer.unsubscribe();
// }, 6000);
// --- End Observable L2 ---- ///

//--- Start L3 Hot vs Cold Observables ---- ///
// var observable = Observable.create(function subscribe(observer: any) {
//   try {
//     observer.next('Hey girls and guys!');
//     observer.next('How are you?');
//     setInterval(() => {
//       observer.next('I am good');
//     }, 2000);
//   } catch (err) {
//     observer.error(err);
//   }
// }).share();

// var observer = observable.subscribe((x: any) => addItem(x), (err: any) => addItem(err), () => addItem('Completed'));

// setTimeout(() => {
//   var observer2 = observable.subscribe((x: any) => addItem(`Subscriber 2: ${x}`));
// }, 1000);
//--- End Observable L3 ---- ///

//--- Start L4 Hot Observables ---- ///

// var observable = fromEvent(document, 'mousemove');

// setTimeout(() => {
//   var subscription = observable.subscribe((x:any) => addItem(x));
//   console.log('in settimeout');
// }, 2000);

//--- End L4 Hot Observables ---- ///

//--- Start L5 Subject ---- ///
// var subject = new Subject();

// subject.subscribe(
//   data => addItem(`Observer 1: ${data}`),
//   (err) => addItem(err),
//   () => addItem('Observer 1 completed')
// );

// subject.next('The first thing has been sent');

// var observer2 = subject.subscribe(
//   data => addItem(`Observer 2: ${data}`),
//   (err) => addItem(err),
//   () => addItem('Observer 2 completed')
// );

// subject.next('The second thing has been sent');
// subject.next('A third thing has been sent');

// observer2.unsubscribe();

// subject.next('A final thing has been sent');

//--- End L5 Subject ---- ///

//--- Start L6 BehaviorSubject ---- ///
// var subject = new BehaviorSubject('First');

// subject.subscribe(
//   data => addItem(`Observer 1: ${data}`),
//   (err) => addItem(err),
//   () => addItem('Observer 1 completed')
// );

// subject.next('The first thing has been sent');
// subject.next('...Observer 2 is about to subscribe...');

// var observer2 = subject.subscribe(
//   data => addItem(`Observer 2: ${data}`),
//   (err) => addItem(err),
//   () => addItem('Observer 2 completed')
// );

// subject.next('The second thing has been sent');
// subject.next('A third thing has been sent');

// observer2.unsubscribe();

// subject.next('A final thing has been sent');

//--- End L6 BehaviorSubject ---- ///

//--- Start L7 ReplaySubject ---- ///
// var subject = new ReplaySubject(2);

// subject.subscribe(
//   data => addItem(`Observer 1: ${data}`),
//   (err) => addItem(err),
//   () => addItem('Observer 1 completed')
// );

// subject.next('The first thing has been sent');
// subject.next('Another thing has been sent');
// subject.next('...Observer 2 is about to subscribe...');

// var observer2 = subject.subscribe(
//   data => addItem(`Observer 2: ${data}`),
//   (err) => addItem(err),
//   () => addItem('Observer 2 completed')
// );

// subject.next('The second thing has been sent');
// subject.next('A third thing has been sent');

// observer2.unsubscribe();

// subject.next('A final thing has been sent');

//--- End L7 ReplaySubject ---- ///

//--- Start L7.1 ReplaySubject ---- ///
// var subject = new ReplaySubject(3, 200)

// subject.subscribe(
//     data => addItem('Observer 1: '+ data),
//     err => addItem(err),
//     () => addItem('Observer 1 Completed')
// )

// var i = 1;
// var int = setInterval(() => subject.next(i++), 100);

// setTimeout(() => {
//   var observer2 = subject.subscribe((data) => addItem('Observer 2: ' + data));
//   clearInterval(int);
// }, 500);
//--- End L7.1 ReplaySubject ---- ///

//--- Start L8 AsyncSubject ---- ///
var subject = new AsyncSubject();

subject.subscribe(
  (data) => addItem('Observer 1: ' + data),
  (err) => addItem(err),
  () => addItem('Observer 1 Completed')
);

var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
  var observer2 = subject.subscribe(
    (data) => addItem('Observer 2: ' + data),
    (err) => addItem(err),
    () => addItem('Observer 2 Completed')
  );
  subject.complete();
}, 500);
//--- End L8 AsyncSubject ---- ///

function addItem(val: any) {
  let node = document.createElement('li');
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
