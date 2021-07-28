
const Navbar = () => {
    return (
<>
<nav
      className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 "
    >
      <div
        className="container px-4 mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
        >
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            >SQUILLIZ</a
          ><button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"

          >
            <i className="text-white fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>


    
</>
    )
}

export default Navbar;