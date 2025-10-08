export default function FramerMotionLogo() {
  return (
    <div className="relative group w-max">
      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 128 128">
        <path d="M22.684 0h84.253v42.667H64.81zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333z"></path>
      </svg>

      {/* Hidden by default, shows on hover */}
      <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white px-2 outline-2 outline-offset-2 outline-black border-2 border-white select-none">
        FramerMotion
      </p>
    </div>
  );
}
