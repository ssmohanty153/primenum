export class primenum {
    static isPrime(num: number) {
        let flag: boolean = true;
        for (let i = 2; i <= num - 1; i++)
            if (num % i == 0) {
                flag = false;
                break;
            }

        if (flag == true)
            alert(num + " is prime");
        else {
            alert(num + " is not prime");
        }
        return flag
    }
}