import classNames from "classnames/bind";
import styles from './Search.module.scss';
import Tippy from '@tippyjs/react/headless';
import Product from "~/components/SearchResults";
import { Wrapper as PopperWrapper } from "~/components/Proper";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "~/hooks";
import * as searchServices from '~/apiServices/searchServices';


const cx = classNames.bind(styles);


const  Search = () => {

    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResut, setShowResult] = useState(true);// mặc định là hiển thị kết quả
    const [loading, setLoading] = useState(false);

    //người dùng ngừng gõ 500s thì sẽ gọi 

    const debounced = useDebounce(searchValue, 1000)

    const inputRef = useRef()


    useEffect(() =>{
        if(!debounced.trim()) {// nếu ko có nội dung trên input thì ko gọi API
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);
            
            const result = await searchServices.search(debounced);
            setSearchResult(result);

            setLoading(false);
        }
        fetchApi();

    },[debounced]);



    const handleHideResult =(()=>{
        setShowResult(false);
    })
   

    return ( 
        //using a wapper <div> tag around the reference element
        <div>
            <Tippy      
                        visible={showResut && searchResult.length>0} 
                        //điều kiện hiển thị kết quả là có kết quả 
                        
                        placement="bottom"
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>                        
                            {
                                //hiển thị kết quả
                                searchResult.map((item) => ( 
                                    <Product key={item.id} data={item}/>
                                ))
                            }
                        
                                </PopperWrapper>
                                
                            </div>
                                )}
                        onClickOutside={handleHideResult}
                                >
                            <div className={cx('search')}>
    
                            <input 
                            ref={inputRef} 
                            placeholder="tim kiem" 
                            value={searchValue} 
                            onChange={e => setSearchValue(e.target.value)}
                            onFocus={() =>setShowResult(true)}
                            />
                                {/*nếu có searchValue và ko có loading thì sẽ hiển thị icon close*/}
    
                                {!!searchValue && !loading && <button className={cx('clear')} ><FontAwesomeIcon  icon={faCircleXmark} 
                                onClick={() => {
                                        setSearchValue('');
                                        setSearchResult([]);
                                        inputRef.current.focus();
                                        }}/>
                                </button>}
                            
                               { loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                                    
                                <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}><FontAwesomeIcon  icon ={faMagnifyingGlass}/></button>
                            </div>
                            
                </Tippy>
        </div>
     );
}

export default Search;