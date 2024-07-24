import {it, describe, beforeAll, init, assertEquals, afterEach} from "./../../dependencies.js";

describe("Builder Pattern Tests", async () => {
    let module,instance;
    beforeAll(async() => {
        await init();
        module = await import("../../../lib/builder-helpers/person-builder.js");
        instance = new module.PersonBuilder();
    });

    afterEach( async()=> {
       instance.dispose();
    });

    it ("create a person object that only contains the name, surname and age", async () => {
        const expectedResult = {
            name: "John",
            surname: "Doe",
            age: 25
        };

        const result = instance
            .setName("John")
            .setSurname("Doe")
            .setAge(25)
            .build();

        assertEquals(result, expectedResult);
    });

    it ("create a person object that only contains the name, surname, age, address and job title", async () => {
        const expectedResult = {
            name: "John",
            surname: "Doe",
            age: 25,
            address: "123 Main St",
            jobTitle: "Developer"
        };

        const result = instance
            .setName("John")
            .setSurname("Doe")
            .setAge(25)
            .setAddress("123 Main St")
            .setJobTitle("Developer")
            .build();

        assertEquals(result, expectedResult);
    });

    it ("create a person object that only contains the name, surname, age, address, job title and company", async () => {
         const expectedResult = {
            name: "John",
            surname: "Doe",
            age: 25,
            address: "123 Main St",
            jobTitle: "Developer",
            company: "ABC Inc."
        };

        const result = instance
            .setName("John")
            .setSurname("Doe")
            .setAge(25)
            .setAddress("123 Main St")
            .setJobTitle("Developer")
            .setCompany("ABC Inc.")
            .build();

        assertEquals(result, expectedResult);
    });

    it ("create a person object that contains a single property name", async () => {
        const expectedResult = {
            name: "John"
        };

        const result = instance
            .setName("John")
            .build();

        assertEquals(result, expectedResult);
    });
});