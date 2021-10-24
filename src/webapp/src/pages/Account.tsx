import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ZulaLayoutThreeColumn from "../components/ZulaLayoutThreeColumn";
import ZulaSubAccountList from "../components/ZulaSubAccountList";
import { AccountsList } from "../models";

export default function Account() {
    const [data, setData] = useState<AccountsList>()
    useEffect(() => {
        fetch("http://localhost:1323/api/v1/accounts")
            .then(data => data.json())
            .then(jsonData => setData(jsonData))
    }, [])
    return (
        <ZulaLayoutThreeColumn content={
            <>
                {
                    data?
                    <>
                        {
                            data.items.map((account) => <ZulaSubAccountList subAccounts={account.subAccounts}/>)
                        }
                    </>
                    : <></>
                }
            </>
        } />
    )
}