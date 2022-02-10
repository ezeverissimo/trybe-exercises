const math = (p1, p2, p3) => {
  return new Promise((resolve, reject) => {
    if(typeof p1 !== "number" || typeof p2 !== "number" || typeof p3 !== "number") {
      reject(new Error("Informe apenas números"));
    }
    const result = (p1 + p2) * p3;
    result < 50 ? reject(new Error("Valor muito baixo")) : resolve(result)
  }) 
}

const mathResult = async (a, b, c) => {
try {
  const result = await math(a,b,c);
  console.log(result);
} catch (error) {
  console.log(error.message);
}
}

const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);


mathResult(num1, num2, num3);