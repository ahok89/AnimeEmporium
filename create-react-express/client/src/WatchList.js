import React from "react";
import Tabs from "./components/Tabs";
import CardMeetUp from "./components/CardMeetUp";
import Random from "./components/Random";


export const WatchList = () => (
<div>
<div className="row">
    <div className="col">
    <CardMeetUp />
    </div>
    <div className="col">
    <Tabs />
    </div>
    <div className="col">
    <Random />
    </div>
</div>
</div>

)

