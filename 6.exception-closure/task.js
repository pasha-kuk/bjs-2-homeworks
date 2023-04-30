function parseCount (z) {
    if (isNaN(Number.parseFloat(z)) === true){
        throw new Error ("Невалидное значение");
    }
    return Number.parseFloat(z);
}



function validateCount(x) {
    try {
      parseCount(x);
    } catch (error) {
      console.log(error);
    }
    return parseCount(x);
  }

class Triangle {
    constructor(sideA, sideB, sideC) {
        if (sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
            throw new Error ("Треугольник с такими сторонами не существует");
        } else {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        }
    }

    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
      }

    get area() {
        let p = (this.sideA + this.sideB + this.sideC) / 2.0;
        let S = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
        return (+S.toFixed(3));
    }
}

function getTriangle (sideA, sideB, sideC) {
    debugger
    try {
        return new Triangle(sideA, sideB, sideC);
      } catch (error) {
        console.log(error);
      }
}