import React from 'react';
import classNames from 'classnames';
import {Link as RouteLink} from "react-router-dom";

const Link = ({to = "#", children: content, className, ...rest}) => {

	console.log(rest)

	const cx = classNames("underline", "underline-offset-4", "text-cyan-500", "hover:text-cyan-300", className)

	return ( <RouteLink className={cx} to={to} {...rest}>
		{content}
	</RouteLink> );
}
 
export default Link; 