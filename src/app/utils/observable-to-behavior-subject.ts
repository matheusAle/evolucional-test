import {BehaviorSubject, Observable} from 'rxjs';

export function convertObservableToBehaviorSubject<T>(observable: Observable<T>): BehaviorSubject<T> {
  const subject = new BehaviorSubject(null);

  observable.subscribe({
    complete: () => subject.complete(),
    error: x => subject.error(x),
    next: x => subject.next(x)
  });

  return subject;
}
