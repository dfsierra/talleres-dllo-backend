
function resolvedor(a,b,c, positivo) {
	const disc = Math.pow(b,2)-4*a*c
  if (disc<0) {
  	return "deja el invento"
  }
  const raiz = Math.sqrt(disc)
  if (positivo) {
  return ((-b + raiz)/(2*a) )
  } else {
  return ((-b - raiz)/(2*a) )
  }
}

const a=1,b=5,c=4
console.log("Positivo: "+ resolvedor(a,b,c, true))
console.log("Negativo: "+ resolvedor(a,b,c, false))
