
export class Helper {

    /**
     * @method assertArrays - This function will be used to compare two arrays and return true if they are equal
     * @param array1 {Array} - The first array to be compared
     * @param array2 {Array} - The second array to be compared
     * @return {Promise<Boolean>} - The result of the comparison true | false
     */
    static async assertArrays(array1, array2,  combination) {
        if (array1.length !== combination.length && array2.length !== combination.length) return false;

        for (let i = 0; i < array1.length; i++) {
            const winningCombination = combination[i];
            if (array1[i] !== winningCombination && array2[i] !== winningCombination) return false;
        }
        return true;
    }
}