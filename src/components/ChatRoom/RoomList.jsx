import { PlusSquareOutlined } from '@ant-design/icons';
import { Button, Collapse, Typography } from 'antd'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useFirestore from '../../hook/useFirestore';

const { Panel } = Collapse

const PanelStyled = styled(Panel)`
    &&& {
        .ant-collapse-header, p{
            color: white;
        }
        .ant-collapse-content-box{
            padding: 0 40px;
        }

        .add-room{
            padding: 0;
            color: white;
        }
    }
`

const LinkStyled = styled(Typography.Link)`
    display: block;
    margin-bottom:5px;      
`

export default function RoomList() {
    const { uid } = useSelector((state) => state.authReducer.user);
    const roomsCondition = useMemo(() => {
        return { fieldName: 'members', operator: 'array-contains', compareValue: uid }
    }, [uid])

    const rooms = useFirestore('rooms', roomsCondition)
    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header="Danh sách các phòng" key='1'>
                {rooms.map((room => <LinkStyled key={room.id}>{room.name}</LinkStyled>))}
                <Button type='text' icon={<PlusSquareOutlined />} className='add-room'>Thêm phòng</Button>
            </PanelStyled>
        </Collapse>
    )
}
