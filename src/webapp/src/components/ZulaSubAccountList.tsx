import {
    Row,
    Container
} from "react-bootstrap"
import { SubAccount } from "../models"
import ZulaSubAccount from "./ZulaSubAccount"

interface ZulaSubAccountListProps {
    subAccounts: SubAccount[]
}

export default function ZulaSubAccountList(props: ZulaSubAccountListProps) {
    return (
        <Container>
            <Row className="justify-content-md-center">
            {
                props.subAccounts?
                props.subAccounts.map((subAccount) => {
                    return <ZulaSubAccount displayName={subAccount.displayName}/>
                })
                :<></>
            }
            </Row>
        </Container>
    )
}