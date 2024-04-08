import {it, describe, beforeAll, init} from "./../dependencies.js";
import {Helper} from "../../app/tic-tac-toe/helper/helper.js";
describe('Status Button Tests', async () => {
    let module;
    beforeAll(async () => {
        await init();
    });

    it("should return true if the arrays are equal", async () => {
        const array1 = [1, 2, 3, 4, 5];
        const array2 = [1, 2, 3, 4, 5];
        const result = await Helper.assertArrays(array1, array2);
        assertEquals(result, true);
    });

    it("should return false if the arrays are not equal", async () => {
        const array1 = [1, 2, 3, 4, 6];
        const array2 = [1, 2, 3, 4, 5];
        const result = await Helper.assertArrays(array1, array2);
        assertEquals(result, false);
    });
});