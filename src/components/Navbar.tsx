
const menu = ['About', 'Work', 'Contact']

const Navbar = () => {
  return (
    <nav className='flex justify-between mt-2'>
      <div className="">
        Logo
      </div>
      <div className="flex">
        {
          menu.map((e, i) => (
            <a
              key={i}
              href="#"
              className='px-2 hover:text-blue-500'
            >
              {e}
            </a>
          ))
        } 
      </div>
    </nav>
  )
}

export default Navbar