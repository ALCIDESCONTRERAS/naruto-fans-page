import { Menu } from "lucide-react";
import { useNaruto } from "../../hooks/useNaruto";

function SidebarButton() {
  const { dispatch } = useNaruto();
  return (
    <button
      className="text-sm px-4 text-gray-500 rounded-lg hover:bg-gray-200 justify-self-start"
      onClick={() => dispatch({ type: "show_sidebar", payload: true })}
    >
      <Menu className="h-9 w-9"/>
    </button>
  );
};
export default SidebarButton;
