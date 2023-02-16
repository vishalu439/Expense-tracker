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
        amount
    }

    expenses.push(expense);
    axios.post('https://crudcrud.com/api/ca08ddb5b2734516adbe262558887e08/newdata', expense)
  .then(function (response) {
    
    fetch()
  })
  .catch(function (error) {
    console.log(error);
  });
    
    //localStorage.setItem('expenses', JSON.stringify(expenses));
}

document.querySelector('form').reset();
showExpenses();







})

console.log("fetching")
let fetch=()=>{
axios.get('https://crudcrud.com/api/ca08ddb5b2734516adbe262558887e08/newdata')
  .then(function (response) {
    showExpenses(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });

}
fetch()
const showExpenses = (data) => {

    const expenseTable = document.getElementById('expenseTable');

    expenseTable.innerHTML = '';

    
    for(let i = 0; i < data.length; i++){
    
        expenseTable.innerHTML += `
            <tr>
                <td>${data[i].category}</td>
                <td>${data[i].desc}</td>
                <td>$${data[i].amount}</td>
                

            
                
                

                <td><a class="deleteButton" onclick=deleteExpense(${data[i]._id})>
                    Delete</td>
            </tr>
        `;
    }
}


const deleteExpense = (id) => {
    console.log(id)
    axios.delete(`https://example.com/api/ca08ddb5b2734516adbe262558887e08/data/${id}`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
console.log("hello")