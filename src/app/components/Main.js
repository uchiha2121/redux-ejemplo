import React from "react";

export const Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <form>
                        <input
                        type="text"
                        value={props.username}
                        onChange={(e) => {props.changeUsername(e.target.value)}}
                        >    
                        </input>
                    </form>
                </div>
            </div>
        </div>
    );
}