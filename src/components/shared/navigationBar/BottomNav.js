import Link from "next/link";

function BottomNav({ navData }) {
  return (
    <nav>
      <div className="relative px-6">
        <div className="w-full flex items-center justify-center pt-4 transition-all relative">
          {navData.map((item, index) => (
            <div
              key={index}
              className="relative capitalize border px-6 py-2 text-nowrap group"
            >
              <Link href={item.url}>{item.name}</Link>

              {/* {item.info && (
                <div
                  className={`container mx-auto absolute left-0 top-full z-50 opacity-0 group-hover:opacity-100 bg-white w-full shadow-lg p-4 rounded transition-all transform group-hover:translate-y-2`}
                >
                  {item.info.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.url || "#"}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <p className="font-semibold">{subItem.name}</p>
                      <p className="text-sm text-gray-500">{subItem.title}</p>
                    </Link>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default BottomNav;
