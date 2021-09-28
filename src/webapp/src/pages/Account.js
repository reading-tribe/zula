import React, {useEffect, useState} from "react";
import ZulaLayoutThreeColumn from "../components/ZulaLayoutThreeColumn";

export default function Account(props) {
    const [data, setData] = useState()
    useEffect(() => {
        fetch("http://localhost:1323/api/v1/accounts")
            .then(data => data.json())
            .then(jsonData => setData(jsonData))
    }, [])
    return (
        <ZulaLayoutThreeColumn content={
            <>
                <h1>Accounts</h1>
                <h2>API DEMO</h2>
                {data ?
                    <pre>{JSON.stringify(data, null, 3)}</pre>
                    : <></>
                }
            </>
        } />
    )
}