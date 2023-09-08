import Header from "../DefaultLayout/Header";
function HeaderOnly({children}) { //children là phần content đc thay đổi
    return ( 
        <div>
            <Header/>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
     );
}

export default HeaderOnly;