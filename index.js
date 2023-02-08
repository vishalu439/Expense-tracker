var form=document.querySelector("form");
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
form.addEventListener("submit",function(event){
event.preventDefault();



// let type = document.getElementById('expense').value;
    let desc = document.getElementById('description').value;
    let category = document.getElementById('category').value;
    let amount = document.getElementById('amount').value;
    console.log(desc,category,amount)

    if(desc.length > 0 
    && amount > 0 && category!==null){
    const expense = {
        desc, 
        category, 
        amount,
        id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
    }

    expenses.push(expense);
    
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

document.querySelector('form').reset();
showExpenses();







})

const showExpenses = () => {

    const expenseTable = document.getElementById('expenseTable');

    expenseTable.innerHTML = '';

    for(let i = 0; i < expenses.length; i++){
        expenseTable.innerHTML += `
            <tr>
                <td>${expenses[i].category}</td>
                <td>${expenses[i].desc}</td>
                <td>$${expenses[i].amount}</td>
                <td><a class="deleteButton" onclick="deleteExpense(${expenses[i].id})">
                    Delete</td>
            </tr>
        `;
    }
}

const deleteExpense = (id) => {
    for(let i = 0; i < expenses.length; i++){
        if(expenses[i].id == id){
            expenses.splice(i, 1);
        }
    }

    // localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));
    showExpenses();
}
console.log("hello")