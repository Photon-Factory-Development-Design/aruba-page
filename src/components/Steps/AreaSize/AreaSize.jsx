import React from 'react';
import BaseStep from "../BaseStep";
import {OutlineButton} from "../../Button";

const NumberWirelessDevices = () => {
    const title = "Number of wireless devices";
    const subTitle = <>How many devices are you connecting to your network? Think <br/>
        laptops, phones, tablets, security
        cameras, POS
        terminals, and
        smart <br/> devices like lighting and climate control.</>;

    return <BaseStep title={title} subtitle={subTitle}>
        <div className={"grid-cols-1 sm:grid-cols-3 gap-4 grid max-w-5xl m-auto"}>
            <OutlineButton>1 to 50</OutlineButton>
            <OutlineButton>51 to 100</OutlineButton>
            <OutlineButton>100+</OutlineButton>
        </div>
    </BaseStep>;
}

export default NumberWirelessDevices;