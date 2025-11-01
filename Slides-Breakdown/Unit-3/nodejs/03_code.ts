type types = {
  a: number;
  b: number;
};

function multiply(params: types): number {
  return params.a * params.b;
}

console.log(multiply({ a: 4, b: 5 }));
