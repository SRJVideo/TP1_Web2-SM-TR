function calculFibonacci(num) {
    if (num === 0) {
        return 0
    }
    else if (num === 1) {
        return 1
    }
    else {
        return calculFibonacci(num - 1) + this.calculFibonacci(num - 2)
    }
}


export  {
    calculFibonacci
}