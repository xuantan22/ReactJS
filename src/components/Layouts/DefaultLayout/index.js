import Header from "./Header";
import Sidebar from "./Sidebar";
function Defaultlayout ({children}) {
    return (
        <div>
            <Header/>
            <div className="container">
                <Sidebar/>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default Defaultlayout ;