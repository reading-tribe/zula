import React, {useState, useEffect} from "react";
import ZulaLayoutThreeColumn from "../components/ZulaLayoutThreeColumn";

export default function Home() {
    const [data, setData] = useState()
    useEffect(() => {
        fetch("http://localhost:1323/api/v1/users")
            .then(data => data.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.error(error))
    }, [])
    return (
        <ZulaLayoutThreeColumn content={
            <>
                <h1>Welcome to Zula</h1>
                <h2>The Reading Tribe</h2>
                {data ?
                    <pre>{JSON.stringify(data, null, 3)}</pre>
                    : <></>
                }
            </>
        } />
    )
}