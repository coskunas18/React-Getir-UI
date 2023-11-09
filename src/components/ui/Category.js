export default function Category({category : {id,title,image}}) {
    return (
      <a href="#" className="flex flex-col group items-center text-center p-4 gap-y-2 hover:bg-purple-50">
        <img src={image} alt="" className="w-12 h-12 rounded  border border-gray-200 " />
        <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-color tracking-tight">{title}</span>
      </a>
    )
}