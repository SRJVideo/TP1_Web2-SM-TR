export default function calculFibonacci(num) {
   let val ;
    if (num === 0) {
        val = 0
    }
    else if (num === 1) {
        val = 1
    }
    else {
        val = calculFibonacci(num- 1) + calculFibonacci(num - 2)
    }
    return val
}