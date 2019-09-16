class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name);
        }, 100);
    }

    printNameFunction() {
        setTimeout(function () {
            console.log('Function: ' + this.name);
        }, 100);
    }
}

let person = new Person('TUNG');
person.printNameArrow();
person.printNameFunction();
console.log(this.name);


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
