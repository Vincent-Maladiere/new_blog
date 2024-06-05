import Link from "next/link";
import { navLinks } from "../lib/data";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <nav className="w-[80%] flex justify-between py-10 text-xl">
        <Link href="/">
          Vincent Maladiere
        </Link>
        <div>
          {navLinks.map((l) => (
            <Link key={l.title} href={l.url} className="pl-5">
              {l.title}
            </Link>
          ))}
        </div>
      </nav>
      <div className="w-[80%] flex flex-col items-center gap-10">
        {children}
      </div>
      <footer></footer>
    </div>
  );
};

export default Layout;
