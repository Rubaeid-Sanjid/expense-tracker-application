import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  
  const filteredItems = category ? expenses.filter(expense => expense.category === category) : expenses;
  
  const total = filteredItems
    .filter((expense) => expense.amount)
    .reduce((prev, curr) => prev + parseFloat(curr.amount), 0);

  const highestAmount = Math.max(
    ...expenses.map((expense) => parseFloat(expense.amount))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const amount = form.amount.value;
    const date = form.date.value;
    const category = form.category.value;

    const expenseInfo = {
      title,
      amount,
      date,
      category,
    };

    fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(expenseInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/expenses")
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, [expenses]);

  const handleFilter = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
  };


  return (
    <section className="px-12 flex flex-col gap-12 my-10">
      <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
        Welcome To Expense Tracker
      </h1>
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold mb-5">Add New Expense</h1>
        <form onSubmit={handleSubmit}>
          <div className="sm:col-span-4">
            <label
              for="title"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Expense Title
            </label>
            <div class="mt-2">
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              for="amount"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Amount (TK)
            </label>
            <div class="mt-2">
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              for="date"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Date
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              for="category"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Category
            </label>
            <div className="mt-2 grid grid-cols-1">
              <select
                id="category"
                name="category"
                required
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Bills">Bills</option>
                <option value="Others">Others</option>
              </select>
              <svg
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div>
            <input
              type="submit"
              value={"submit"}
              name="submit"
              // disabled={!expenseInfo}
              className="border bg-blue-500 text-white p-2 rounded-lg"
            />
          </div>
        </form>
      </div>

      {/* Display */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold mb-5">
          All Expense Details
        </h1>

        {/* Filter Form */}
        <form>
          <h3>Filter by Category: </h3>
          <select
            id="category"
            name="category"
            required
            onChange={handleFilter}
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Bills">Bills</option>
            <option value="Others">Others</option>
          </select>
        </form>

        <table className="w-full text-center">
          <tr className="border p-4">
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
          {filteredItems.map((expense) => (
            <tr className=" border-b">
              <td>{expense.title}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>
                <button className="rounded-lg text-white p-2 bg-blue-500">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>

      {/* Expense Summery */}
      <div className="flex flex-col lg:flex gap-6">
        <div className="border px-6 py-3">
          <h3>Total Expenses: </h3>
          <h3>{total}</h3>
        </div>

        <div className="border px-6 py-3">
          <h3>Highest Expenses: </h3>
          <h3>{highestAmount}</h3>
        </div>
      </div>
    </section>
  );
}

export default App;
