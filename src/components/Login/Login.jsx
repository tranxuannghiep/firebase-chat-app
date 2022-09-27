import { Button, Col, Row, Typography } from "antd";
import React from 'react';
import firebase, { auth, db } from '../../firebase/config';
import { addDocument } from "../../firebase/services";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider()

export default function Login() {

    const handleFbLogin = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider)
        if (additionalUserInfo.isNewUser) {
            addDocument("users", {
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId
            })
        }
    }

    return (
        <div>
            <Row justify="center" style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center' }} level={3}>Fun Chat</Title>
                    <Button style={{ width: '100%', marginBottom: 5 }}>Login with Google</Button>
                    <Button style={{ width: '100%' }} onClick={handleFbLogin}>Login with Facebook</Button>
                </Col>
            </Row>
        </div>
    )
}
