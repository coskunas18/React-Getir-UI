

export default function Menu({title,items}) {
  return (
    <section>
    <nav className="grid gap-y-4">
    <h6 className="font-semibold text-md text-primary-brand-color">{title}</h6>
        <ul className="grid gap-y-2 ">
            {items.map((item,index) => (
                <li key={index}>
                    <a className="text-sm hover:text-brand-color" href="#">
                    {item.title}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
    </section>
  )
}
