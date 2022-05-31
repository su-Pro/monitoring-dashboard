export function print<T>() {
  return (target: T) => console.log(target);
}
