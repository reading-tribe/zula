import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ZulaLayoutThreeColumn from "../components/ZulaLayoutThreeColumn";
import ZulaSubAccountList from "../components/ZulaSubAccountList";
import { AccountsList } from "../models";

export default function Account() {
    const [data, setData] = useState<AccountsList>()
    const { REACT_APP_API_URL } = process.env;
    useEffect(() => {
        if (REACT_APP_API_URL) {
            fetch(REACT_APP_API_URL+"/accounts")
                .then(data => data.json())
                .then(jsonData => setData(jsonData))
                .catch(error => console.error(error))
        }
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