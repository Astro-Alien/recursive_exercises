
export class FactorialCalculator{

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

}