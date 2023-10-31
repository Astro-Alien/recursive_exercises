
export class RecursiveHelper {

    /**
     * Scenario: user pass in a number e.g 5 and the function calculates the product of all
     * positive integers from 1 up to the given positive integer n.
     * Given: the number  n e.g 5
     * When: the function is called the function should validate that n
     * is a positive integer.
     * Then: the function should return 120
     */
    static async calculateFactorial(number) {
        if (number === 0) return 1;
        if (number < 0) return false;
        if (typeof number !== "number" || Number.isInteger(number) === false) return "The given input is not a integer";

        return number * await this.calculateFactorial(number - 1);
    }

    /**
     * Scenario : user pass in a number e.g 5 and the function calculates the fibonacci sequence of a given integer
     * Given: the number  n e.g 5
     * When: the function is called the function should validate that n
     * is a positive integer.
     * Then: the function should return sequence of 0,1,1,2,3,5
     */
    static async fibonacciSequence(number) {
        if (number === 0) return 0;
        if (number === 1) return 1;
        if (number < 0) return "The given input is not a positive integer";
        if (typeof number !== "number" || Number.isInteger(number) === false) return "The given input is not a integer";

        return await this.fibonacciSequence(number -1) + await this.fibonacciSequence(number - 2);
    }
}