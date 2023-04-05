let f = []
f[0] = 0
f[1] = 1

function fib(n) {
	for(let i=2;i<n;i++) {
  	f[i] = f[i-1] + f[i-2]
  }
  return f
}

const r = fib(5)
console.log(r)
