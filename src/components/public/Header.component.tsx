import { Link } from "react-router";
import SearchMenu from "./SearchMenu.component";
import SidebarButton from "./SidebarButton.component";

export default function Header() {
  return (
    <header className="relative flex p-4 justify-between items-center">
      <div className="flex">
        <SidebarButton />
        <Link to="/">
          <img
            className="h-20 w-30"
            src="https://imgs.search.brave.com/Yp9ieaF5bH8lK3HdfN28_rSnDqtw-B5MNJVeaStq0ks/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L25hcnV0by90aGUt/ZW5kLW5hcnV0by1u/ZWFyLWVuc2lucy1n/YW1pbmctY29tbXVu/aXR5LTI0LnBuZw"
            alt="naruto logo"
          />
        </Link>
      </div>
      <div>
        <SearchMenu />
      </div>
    </header>
  );
}
