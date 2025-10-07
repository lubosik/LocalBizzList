interface ResourceChecklistProps {
  items: Array<{
    id: string
    text: string
    checked?: boolean
  }>
  title?: string
}

export function ResourceChecklist({ items, title }: ResourceChecklistProps) {
  return (
    <div className="my-8">
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="space-y-3">
          {items.map((item) => (
            <label
              key={item.id}
              className="flex items-start space-x-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                defaultChecked={item.checked}
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                {item.text}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
