function App() {
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
    console.log(expenseInfo);

    fetch('', {
      method: "POST",
      headers: {
        'content-type': "application/json",
      },
      body: JSON.stringify()
    });

  };
  return (
    <>
      <h1>Add New Expense</h1>
      <div>
        <form onSubmit={handleSubmit}>
         
          <div class="sm:col-span-4">
            <label
              for="title"
              class="block text-sm/6 font-medium text-gray-900"
            >
              Expense Title
            </label>
            <div class="mt-2">
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="title"
                  id="title"
                  class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label
              for="amount"
              class="block text-sm/6 font-medium text-gray-900"
            >
              Amount (TK)
            </label>
            <div class="mt-2">
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="date" class="block text-sm/6 font-medium text-gray-900">
              Date
            </label>
            <div class="mt-2">
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="date"
                  name="date"
                  id="date"
                  class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="category"
              class="block text-sm/6 font-medium text-gray-900"
            >
              Category
            </label>
            <div class="mt-2 grid grid-cols-1">
              <select
                id="category"
                name="category"
                required
                class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Bills">Bills</option>
                <option value="Others">Others</option>
              </select>
              <svg
                class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
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
              // disabled
              className="border bg-blue-500 text-white p-2 rounded-lg"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
