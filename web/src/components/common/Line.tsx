import React from "react";

type Props = {
    color?: string
}
export default function Line({color = '#000'}: Props){
    return (
        <div className={`w-full border-[0.5px] border-[${color}]`}>

        </div>
    )
}