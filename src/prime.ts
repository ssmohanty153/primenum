export class primenum {
    static isPrime(num: number) {
        let flag: boolean = true;
        for (let i = 2; i <= num - 1; i++)
            if (num % i == 0) {
                flag = false;
                break;
            }
        return flag
    }
    static listAllPrime(num: number) {
        let numbers: Array<number> = []
        for (let i = 2; i <= num; i++) {
            let flag = 0;
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if (i > 1 && flag == 0) {
                numbers.push(i);
            }

        }
        return numbers
    }

    static listinBetweenAllPrime(first: number, second: number) {
        if (first > second) { [first, second] = [second, first] }
        let numbers: Array<number> = []
        for (let i = first; i <= second; i++) {
            let flag = 0;
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if (i > 1 && flag == 0) {
                numbers.push(i);
            }

        }
        return numbers
    }
}