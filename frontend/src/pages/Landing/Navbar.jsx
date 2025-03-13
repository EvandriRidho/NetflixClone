import OptionLanguange from "../../components/modules/OptionLanguange"
import DefaultButton from "../../components/modules/DefaultButton"
import {useNavigate} from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()

    return (
        <header className="relative z-20">
            <nav className="flex flex-wrap justify-between items-center pr-10 pl-7 py-4">
                <div>
                    <img src="/netflix-logo-icon-dea-afrizal.png"
                        alt="Netflix-logo" 
                        height={45} 
                        width={105}
                    />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <OptionLanguange/>
                    <DefaultButton text={"SignIn"} onClick={() => navigate("/login")}/>
                </div>
            </nav>
        </header>
    )
}

export default Navbar