import Link from "next/link";

function BottomNav({ navData }) {
  return (
    <div className="container mx-auto px-6 flex items-center justify-center pt-4">
      {navData.map((navList, ind) => (
        <Link
          href={navList?.url}
          key={ind}
          className="capitalize border px-6 py-2"
        >
          {navList?.name}
        </Link>
      ))}
    </div>
  );
}

export default BottomNav;
