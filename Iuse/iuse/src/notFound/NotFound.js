import React from 'react'
import { Result, Button } from 'antd';
import '../notFound/NotFound.css'

export default function NotFound() {
    return (
        <>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
        </>
    )
}
