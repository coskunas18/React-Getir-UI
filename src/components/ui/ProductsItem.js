import {FiPlus} from "react-icons/fi"

export default function ProductsItem({product}) {
  return (
    <div className="bg-white flex flex-col gap-y-1 relative items-center text-center text-sm font-semibold p-3">
      <button className="absolute bg-white top-3 right-3 w-7 h-7  flex items-center justify-center
       border rounded-lg text-brand-color shadow-md transition-colors hover:border-brand-color">
        <FiPlus size={15} />
        </button>
      <img src={product.image} alt={product.title} />
      <div className=" text-brand-color">{product.title}</div>
      <div className=" text-gray-900">{product.price}</div>
      <div className="text-gray-500">{product.alt}</div>
    </div>
  )
}
