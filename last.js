class Order {
    constructor(table, dishes, status) {
      this.table = table;
      this.dishes = dishes;
      this.status = status;
    }
    getTotalAmount() {
      return this.dishes.reduce((total, dish) => total + dish.price, 0);
    }
    changeStatus(newStatus) {
      this.status = newStatus;
    }
  }
  
  class Table {
    constructor(number) {
      this.number = number;
      this.orders = [];
    }
    addOrder(order) {
      this.orders.push(order);
    }
    getTotalAmountForTable() {
      return this.orders.reduce((total, order) => total + order.getTotalAmount(), 0);
    }
    cancelOrder(orderIndex) {
      this.orders.splice(orderIndex, 1);
    }
    changeOrderStatus(orderIndex, newStatus) {
      this.orders[orderIndex].changeStatus(newStatus);
    }
  }
  
  class System {
    constructor() {
      this.tables = [];
    }
    addTable(table) {
      this.tables.push(table);
    }
    addOrderToTable(tableNumber, order) {
      const table = this.tables.find(table => table.number === tableNumber);
      if (table) {
        table.addOrder(order);
      } else {
        console.log(`Table ${tableNumber} does not exist.`);
      }
    }
    getTotalAmountForTable(tableNumber) {
      const table = this.tables.find(table => table.number === tableNumber);
      return table ? table.getTotalAmountForTable() : null;
    }
    getTotalAmountForOrder(tableNumber, orderIndex) {
      const table = this.tables.find(table => table.number === tableNumber);
      return table ? table.orders[orderIndex].getTotalAmount() : null;
    }
    changeOrderStatus(tableNumber, orderIndex, newStatus) {
      const table = this.tables.find(table => table.number === tableNumber);
      if (table) {
        table.changeOrderStatus(orderIndex, newStatus);
      } else {
        console.log("Table" + tableNumber + "does not exist.");
      }
    }
    cancelOrder(tableNumber, orderIndex) {
      const table = this.tables.find(table => table.number === tableNumber);
      if (table) {
        table.cancelOrder(orderIndex);
      } else {
        console.log("Table" +tableNumber +"does not exist.");
      }
    }
  }
  
  let order1 = new Order(1, [
    { name: "Кава", price: 30 },
    { name: "Чізкейк", price: 50 }
  ], "в обробці");
  
  let order2 = new Order(2, [
    { name: "Лате", price: 40 },
    { name: "Тірамісу", price: 60 }
  ], "готується");

  let table1 = new Table(1);
  table1.addOrder(order1);
  let table2 = new Table(2);
  table2.addOrder(order2);
 
  let system = new System();
  system.addTable(table1);
  system.addTable(table2);
  