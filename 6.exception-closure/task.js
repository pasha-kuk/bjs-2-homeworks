function parseCount (z) {
    let parsItem = Number.parseFloat(z);
    if (isNaN(parsItem)){
        throw new Error ("Невалидное значение");
    }
    return parsItem;
}

function validateCount(x) {
    try {
      return parseCount(x);
    } catch (error) {
      return error;
    }
  }

class Triangle {
    constructor(sideA, sideB, sideC) {
        if (sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
            throw new Error ("Треугольник с такими сторонами не существует");
        } 
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
        
    }

    get perimeter() {
        let sum =  this.sideA + this.sideB + this.sideC;
         return sum
      }

    get area() {
        let p = this.perimeter/ 2.0;
        let S = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
        return (+S.toFixed(3));
    }
}
const errorTriangle = {
    get perimeter() {
        let text =  "Ошибка! Треугольник не существует";
         return text
    },

    get area () {
        let text =  "Ошибка! Треугольник не существует";
         return text
    }
}

function getTriangle (sideA, sideB, sideC) {
    debugger
    try {
        return new Triangle(sideA, sideB, sideC);
      } catch {
        return errorTriangle
      }
}