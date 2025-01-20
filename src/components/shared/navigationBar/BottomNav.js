"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function BottomNav({ navData }) {
  const pathname = usePathname();
  return (
    <nav>
      <div className="relative container mx-auto px-3 lg:px-6 w-full hidden 2xl:flex items-center justify-center pt-4 transition-all">
        {navData.map((item, index) => (
          <div
            key={index}
            className={`relative capitalize border px-6 py-2 group 
             
            `}
          >
            <Link
              href={item.url}
              className={` ${
                pathname === item?.url
                  ? "border-b-4 border-b-[#0d6efd] pb-2"
                  : null
              }`}
            >
              {item.name}
            </Link>

            {/* {item.info && (
              <div
                className={`absolute left-0 top-full w-full opacity-0 group-hover:opacity-100 bg-white shadow-lg p-4 rounded transition-all transform group-hover:translate-y-2 z-50`}
              >
                <div className="max-w-screen mx-auto grid ">
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
              </div>
            )} */}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default BottomNav;
