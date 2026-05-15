function DataTable({ columns, data }) {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl border">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="text-left p-4"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-t"
            >
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="p-4"
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;