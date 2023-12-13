type prop = {
    link: string,
    to: string
  }
  
  const Link = ({ link, to }: prop) => {
    return (
      <a className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href={to}>
        {link}
      </a>
    )
  }
  
  export default Link;