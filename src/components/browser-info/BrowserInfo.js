import React from "react"
export class BrowserInfo extends React.Component{
    render(){
        return <p>{navigator.userAgent}</p>
    }
}
