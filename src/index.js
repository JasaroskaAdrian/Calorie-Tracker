//Calorie Counter :)
let totalCalories = 0;


  const mealInput = document.getElementById('mealInput');
  const calorieInput = document.getElementById('calorieInput');
  const mealTableBody = document.getElementById('mealTableBody');
  const totalCaloriesDisplay = document.getElementById('totalCalories');

  // Updates the total amount of calories
  const updateTotalCalories = () => {
    totalCaloriesDisplay.textContent = totalCalories;
  };

  // Function to add a new meal row
  const addMeal = () => {
    const mealName = mealInput.value.trim();
    const calories = parseInt(calorieInput.value.trim(), 10);

    if (mealName && !isNaN(calories)) {
      // Create a new row
      const row = document.createElement('tr');

      // Meal name cell
      const mealCell = document.createElement('td');
      mealCell.className = 'border px-4 py-2 flex items-center';
      mealCell.textContent = mealName;
      row.appendChild(mealCell);

      // Calories cell
      const caloriesCell = document.createElement('td');
      caloriesCell.className = 'border px-4 py-2';
      caloriesCell.textContent = calories;
      row.appendChild(caloriesCell);

      // Delete button cell
      const deleteCell = document.createElement('td');
      deleteCell.className = 'border px-4 py-2 text-center';
      const deleteButton = document.createElement('button');
      deleteButton.className = 'text-gray-500 hover:text-gray-700';
      deleteButton.innerHTML = '🗑️';
      deleteButton.addEventListener('click', () => {
        totalCalories -= calories;
        mealTableBody.removeChild(row);
        updateTotalCalories();
      });
      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);

      // Add the new row to the table body
      mealTableBody.appendChild(row);

      // Update the total calories
      totalCalories += calories;
      updateTotalCalories();

      // Clear inputs
      mealInput.value = '';
      calorieInput.value = '';
    } else {
      alert('Please enter a valid meal name and calorie amount.');
    }
  };

  // Event listener for Add Meal button
  document.getElementById('addButton').addEventListener('click', addMeal);

  
  
  document.getElementById('cancelButton').addEventListener('click', () => {
    alert('Action canceled!');
  });