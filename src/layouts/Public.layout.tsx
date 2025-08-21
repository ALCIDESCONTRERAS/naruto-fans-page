import { Outlet } from "react-router"
import Header from "../components/public/Header.component"

export const PublicLayout = () => {
  return (
	<div>
		<Header />
		<Outlet />
	</div>
  )
}