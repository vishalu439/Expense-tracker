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

    //expenses.push(expense);
  
  async function postData() {
    try {
      const response = await axios.post('https://crudcrud.com/api/e264f330d5b1463a8f69f8ec2c9683af/newdata', expense
      );
      console.log(response.data);
      fetch()
    } catch (error) {
      console.error(error);
    }
  }
  postData()
  
}

document.querySelector('form').reset();
showExpenses();







})

console.log("fetching")
async function fetch() {
  try {
    const response = await axios.get('https://crudcrud.com/api/e264f330d5b1463a8f69f8ec2c9683af/newdata');
    console.log(response);
    showExpenses(response.data)
  } catch (error) {
    console.error(error);
  }
}

fetch()
const showExpenses = (data) => {

    const expenseTable = document.getElementById('expenseTable');

    expenseTable.innerHTML = '';

    
    for(let i = 0; i < data.length; i++){
      var itemId = data[i]._id
      console.log(itemId)
        expenseTable.innerHTML += `
            <tr>
                <td>${data[i].category}</td>
                <td>${data[i].desc}</td>
                <td>$${data[i].amount}</td>
                

            
                
                

                <td><a id=${itemId} onclick="deleteExpense(id)">
                    Delete</td>
            </tr>
            
        `;
    }
}

async function deleteExpense(id) {
  console.log(id)
  try {
    const response = await axios.delete(`https://crudcrud.com/api/e264f330d5b1463a8f69f8ec2c9683af/newdata/${id}`);
    console.log(response.data);
    fetch()
  } catch (error) {
    console.error(error);
  }
}

