/* Task 1 */

let balance = 0;

function deposit(amount){
    if (amount > 0){
        balance += amount;
        console.log(amount);
    }
}

deposit(100)


/* Task 2 */

function withdraw(amount){
    if (amount > 0 ){
        if (amount <= balance) {
            balance -= amount;
            console.log("Successfully withdrawn")
        } else{
            console.log("Insufficient balance")
        }
    }    
}

withdraw(50)


/* Task 3 */

function totalBalance(){
    console.log(balance)
}


totalBalance()














