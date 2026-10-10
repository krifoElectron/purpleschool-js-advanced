class Billing {
    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal() {
        return this.amount;
    }
}

class FixBilling extends Billing {}

class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }

    calculateTotal() {
        return this.amount * this.hours;
    }
}

class ItemBilling extends Billing {
    constructor(amount, items) {
        super(amount);
        this.items = items;
    }

    calculateTotal() {
        return this.amount * this.items;
    }
}

const fixBilling = new FixBilling(2);
const hourBilling = new HourBilling(3, 5);
const itemBilling = new ItemBilling(3, 6);

console.log(fixBilling.calculateTotal());
console.log(hourBilling.calculateTotal());
console.log(itemBilling.calculateTotal());
