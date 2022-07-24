
import { FaGlassMartiniAlt } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { GiBookmarklet } from "react-icons/gi";
import SideBarIcon from "./SideBarIcon";


const SideBar: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-48 m-0 flex flex-col  text-foreground shadow-lg bg-gradient-to-b from-color8/10 via-color1 to-color8/5 rounded-lg">
            <SideBarIcon icon={<FaGlassMartiniAlt size="44" />} path="whatcanimake" tooltip="What can I make" />
            <SideBarIcon icon={<GiSchoolBag size="52" />} path="myingredients" tooltip="My ingredients" />
            <SideBarIcon icon={<FaBook size="44" />} path="allrecipes" tooltip="All recipes" />
            <SideBarIcon icon={<FcIdea size="44" />} path="expandrepertoire" tooltip="Expand Repertoire" />
            <SideBarIcon icon={<GiBookmarklet size="44" />} path="mynotebook" tooltip="My Notebook" />
        </div>
    );
};

export default SideBar;



