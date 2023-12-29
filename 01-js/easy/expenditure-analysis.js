/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// Method 1: 
function calculateTotalSpentByCategory(transactions){

  let categoryFound;   // boolean variable to keep track by checking values
  let output=[]; // This will be the final output

  let indexes = transactions.length;

  for(let i=0;i<indexes;i++){
    categoryFound = false;
    let indexes2 = output.length;

    for(let j=0;j<indexes2;j++){
      if(transactions[i]["category"]==output[j]["category"]){
        // "category already exist in output"
        // so now only update the price by adding 

        output[j]["totalSpent"] = output[j]["totalSpent"] + transactions[i]["price"];
        categoryFound=true;
        break;
      }
    }

    if(categoryFound==false){
      // "category not exist in Output"
      // Push this new object for new category found
      output.push({
        category: transactions[i]["category"],
        totalSpent: transactions[i]["price"]
      })
    }
  }
  return output;
}



// Method 2:  
/*
function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // If the category is already in the totals, add the price; otherwise, initialize it
    if (categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  });

  // Convert the categoryTotals object into an array of objects
  const result = Object.keys(categoryTotals).map(category => ({
    category,
    totalSpent: categoryTotals[category],
  }));

  return result;
}
*/


module.exports = calculateTotalSpentByCategory;
