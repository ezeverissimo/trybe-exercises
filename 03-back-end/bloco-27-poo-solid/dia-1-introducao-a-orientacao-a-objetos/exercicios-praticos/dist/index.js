"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor({ name, registration, testResults, taskResults }) {
        this.name = name;
        this.registration = registration;
        this.testResults = testResults;
        this.taskResults = taskResults;
    }
    sumNotes() {
        const total = this.testResults.reduce((prev, curr) => prev + curr);
        console.log(total);
        return total;
    }
    ;
    notesAverage() {
        const total = this.sumNotes();
        const average = total / this.taskResults.length;
        console.log(average);
        return average;
    }
}
class Client {
    constructor(name) {
        this.name = name;
    }
}
class ClientRequest {
    constructor(clientName, itemsRequest, payment, discount) {
        this.clientName = clientName;
        this.itemsRequest = itemsRequest;
        this.payment = payment;
        if (discount)
            this.discount = discount;
    }
    sumTotal() {
        const total = this.itemsRequest.reduce((prev, curr) => prev + curr.price, 0);
        console.log(total);
        return total;
    }
}
class ClientItemRequest {
    constructor(itemName, price) {
        this.itemName = itemName;
        this.price = price;
    }
}
const request1 = new ClientRequest('asdasdas', [{ itemName: 'batata', price: 5 }, { itemName: 'batata', price: 6 }], 'cartao');
request1.sumTotal();
