import { Link } from "react-router";
import SidebarButton from "./SidebarButton.component";
import Search from "./Search.component";

export default function Header() {
  return (
    <header className="md:mx-8 relative flex flex-col md:flex-row p-4 md:justify-between items-center">
      <div className="flex md:gap-2 md:justify-start justify-center w-full md:w-auto">
        <div className="absolute left-0 top-1/2 -translate-y-10 md:static md:translate-y-5">
          <SidebarButton />
        </div>
        <Link to="/" className="justify-center">
          <img
            className="h-20 w-40"
            src="https://imgs.search.brave.com/Yp9ieaF5bH8lK3HdfN28_rSnDqtw-B5MNJVeaStq0ks/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L25hcnV0by90aGUt/ZW5kLW5hcnV0by1u/ZWFyLWVuc2lucy1n/YW1pbmctY29tbXVu/aXR5LTI0LnBuZw"
            alt="naruto logo"
          />
        </Link>
      </div>
      <div>
        <Search />
      </div>
    </header>
  );
}
