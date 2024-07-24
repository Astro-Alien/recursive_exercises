/**
 * @class PersonBuilder - A class to build a person object using the builder pattern
 * @property {string} name - the name of the person
 * @property {string} surname - the surname of the person
 * @property {number} age - the age of the person
 * @property {string} address - the address of the person
 * @property {string} jobTitle - the job title of the person
 * @property {string} company - the company of the person
 * returns {Promise<PersonBuilder>} - a person object
 */
export class PersonBuilder {
    //todo builder pattern logic slightly flawed revisit tomorrow.
    #person = {};
    // for testing purposes and cleanup of the private field after use
    dispose() {
        this.#person = {};
    }

    setName(name){
        this.#person.name = name;
        return this;
    }

    setSurname(surname) {
        this.#person.surname = surname;
        return this;
    }

    setAge(age) {
        this.#person.age = age;
        return this;
    }

    setAddress(address) {
        this.#person.address = address;
        return this;
    }

    setJobTitle(jobTitle) {
        this.#person.jobTitle = jobTitle;
        return this;
    }

    setCompany(company) {
        this.#person.company = company;
        return this;
    }

    build() {
        return this.#person;
    }
}