import React from 'react';
import { Link } from "../utils/router";

export default function ToggleableLink(props)  {
    const { disabled, ...rest } = props;
    if (disabled)
        return props.children
    else {
        debugger;
        return <Link {...rest}>{props.children}</Link>
    }
    // return disabled ? props.children : <Link {...rest}>{props.children}</Link>  ;
}
