import EditClient from "../../components/DashboardClient/EditClient";
import NavbarDashboardClient from "../../components/DashboardClient/NavbarDashboardClient";
import SidebarClient from "../../components/DashboardClient/SidebarClient";


const DashboardClient = () => {
  return (
    <div>
      <NavbarDashboardClient/>
      <br/>
      <SidebarClient/>
      <EditClient/>
    </div>
  )
}

export default DashboardClient