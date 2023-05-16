// Hooks
import { useState } from "react"


function Infos(props) {
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div className="container-infos" style={{
            maxWidth: "582px",
            height: "300px",
            border: "1px solid red"
        }}>
            
            <button className="btn-infos" onClick={() => setIsOpen(false)}>{props.children}</button>
        </div>
           ) : (
            <div>
<button className="btn-infos" onClick={() => setIsOpen(true)}>{props.children}</button>
               <p>{props.description}{props.equipments}</p>
            </div>
                

           )
           
}

export default Infos


