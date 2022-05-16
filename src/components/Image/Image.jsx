import React from 'react';
import {base_url} from "../../common/constant";

const Image = ({src, alt, ...props}) => {
    return (<img src={`${base_url}/src/assets/images/${src}`} alt={alt || 'custom'} {...props} />)
}

export default Image;