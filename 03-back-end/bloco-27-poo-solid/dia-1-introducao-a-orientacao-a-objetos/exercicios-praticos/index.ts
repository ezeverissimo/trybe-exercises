import { IClientItemRequest } from './interface/client';
import IStudent from './interface/student';

class Student {
  private registration: string;
  private name: string;
  private testResults: number[];
  private taskResults: number[];

  constructor({name, registration, testResults, taskResults}: IStudent) {
    this.name = name;
    this.registration = registration;
    this.testResults = testResults;
    this.taskResults = taskResults;
  }

  sumNotes():number {
    const total = this.testResults.reduce((prev, curr) => prev + curr);
    console.log(total);

    return total;
  };

  notesAverage():number {
    const total = this.sumNotes();
    const average = total / this.taskResults.length;
    console.log(average);
    
    return average
  }
}

class Client {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class ClientRequest {
  private clientName: string;
  private itemsRequest: IClientItemRequest[];
  private payment: string;
  private discount?: number;

  constructor(clientName: string, itemsRequest: IClientItemRequest[], payment: string, discount?: number) {
    this.clientName = clientName;
    this.itemsRequest = itemsRequest;
    this.payment = payment;
    if(discount) this.discount = discount;
  }

  sumTotal():number {
    const total = this.itemsRequest.reduce((prev, curr) => prev + curr.price, 0);
    console.log(total);

    return total;
  }
}

class ClientItemRequest {
  private itemName: string;
  private price: number;

  constructor(itemName: string, price: number) {
    this.itemName = itemName;
    this.price = price;
  }
}

const request1 = new ClientRequest('asdasdas', [{itemName: 'batata', price: 5}, {itemName: 'batata', price: 6}], 'cartao')

request1.sumTotal();