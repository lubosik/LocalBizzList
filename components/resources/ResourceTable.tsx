interface ResourceTableProps {
  headers: string[]
  rows: string[][]
  caption?: string
}

export function ResourceTable({ headers, rows, caption }: ResourceTableProps) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
        {caption && (
          <caption className="px-6 py-3 text-left text-sm font-medium text-gray-900 bg-gray-50 border-b border-gray-200">
            {caption}
          </caption>
        )}
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
