import {
    Row,
    Col,
    Image
} from "react-bootstrap"

interface ZulaSubAccountProps {
    displayName: string
}

export default function ZulaSubAccount(props: ZulaSubAccountProps) {
    return (
        <Col xs={9} md={4}>
            <Image width="175vw" src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" roundedCircle />
            <p>{props.displayName}</p>
        </Col>
    )
}