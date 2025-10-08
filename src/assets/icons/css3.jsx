export default function CssLogo() {
  return (
    <div className="relative group w-max">
      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 128 128">
        <path fill="#1572b6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"></path>
        <path fill="#33a9dc" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"></path>
        <path
          fill="#fff"
          d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"
        ></path>
        <path
          fill="#ebebeb"
          d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"
        ></path>
        <path
          fill="#fff"
          d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"
        ></path>
        <path
          fill="#ebebeb"
          d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"
        ></path>
      </svg>

      {/* Hidden by default, shows on hover */}
      <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white px-2 outline-2 outline-offset-2 outline-black border-2 border-white select-none">
        CSS
      </p>
    </div>
  );
}
