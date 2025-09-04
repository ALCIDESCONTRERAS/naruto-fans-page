import { Menu } from "lucide-react";
import { useNaruto } from "../../hooks/useNaruto";

function SidebarButton() {
  const { dispatch } = useNaruto();
  return (
    <button
      className="text-sm px-4 text-gray-200 rounded-lg hover:bg-gray-700"
      onClick={() => dispatch({ type: "show_sidebar", payload: true })}
    >
      <Menu className="h-9 w-9 my-2"/>
    </button>
  );
};
export default SidebarButton;
