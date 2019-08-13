import React from "react";
import Tabs from "./components/Tabs";
import User from "./components/User";
import Random from "./components/Random";


export const WatchList = () => (
<div className="container">
<div className="row">
    <div className="col">
    <User />
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

