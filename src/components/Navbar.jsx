import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className=" bg-[#0f1636]">
     <div className="mx-[250px] flex justify-between items-center py-4  text-white">
     <ul className="flex gap-[15px] items-center text-[18px] font-[600]">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Master Price </a></li>
        <li><a href="#">Custom Price</a></li>
        <li><a href="#">Calendar</a></li>
        <li><a href="#">Reports</a></li>
       
        </ul> 
        <div className="flex gap-2 items-center">
            <IoNotificationsOutline size={20} />
            <FaRegUserCircle size={20} />
        </div>
     </div>
    </div>
  )
}

export default Navbar