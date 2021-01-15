// FACTORIAL DE UN NUMBERO
// 5 = 5 * 4 * 3 * 2 * 1 = 120

const factorial = (number) => {
    if (number == 0) {
        return 1
    }  else {
        return number * factorial(number - 1)
    }
}

factorial(5) 