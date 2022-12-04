export default () => {
  return (
    <div className="p-5">
      <table className="w-full table-auto border-spacing-2">
        <tbody>
          <tr>
            <td className="w-40 text-right p-3">Summary</td>
            <td>
              <input
                className="w-full bg-gray-200 text-gray-700 p-2 focus:outline-none focus:bg-white"
                placeholder="Summary"
              />
            </td>
          </tr>
          <tr>
            <td className="w-40 text-right p-3">Status</td>
            <td>
              <select className="bg-gray-200 text-gray-700 p-2 focus:outline-none focus:bg-white">
                <option>Backlog</option>
                <option>To do</option>
                <option>In Progress</option>
                <option>In QA</option>
                <option>Done</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="w-40 text-right p-3">Description</td>
            <td>
              <div className="grow-wrap">
                <textarea
                  className="bg-gray-200 text-gray-700 p-2 focus:outline-none focus:bg-white"
                  onInput={(event) => {
                    event.currentTarget.parentElement.dataset.replicatedValue =
                      event.currentTarget.value;
                  }}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="grid justify-items-center pt-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
      </div>
    </div>
  );
};
