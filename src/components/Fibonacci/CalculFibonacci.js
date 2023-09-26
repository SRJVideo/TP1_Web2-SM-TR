export default function calculFibonacci(num) {
    if (num === 0 || num === 1) {
        return num
    }

    else {
        return calculFibonacci(num - 1) + calculFibonacci(num - 2)
    }
}