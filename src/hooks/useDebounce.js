import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const  useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);// chỉ nhận giá trị value intial làn đầu tiên(ở đây là chuỗi rỗng)

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debouncedValue;
}

useDebounce.prototype = {
    value: PropTypes.string,
    delay:PropTypes.number,
}

export default useDebounce;
