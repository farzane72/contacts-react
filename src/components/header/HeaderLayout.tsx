

function Header() {
  
  return (
    <div className="bg-slate-800/95 p-4  flex flex-col gap-4 md:flex-row  md:gap-0   md:justify-around items-center">
      <div className="flex gap-2  ">
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="rgb(109 40 217)"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </span>
        <span className="text-white">وب اپلیمیشن مدیریت</span>
        <span className="text-violet-700">مخاطبین</span>
      </div>
     
     
    </div>
  );
}

export default Header;
