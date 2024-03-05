import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Card, Col, Row } from "react-bootstrap"
import { Products, fetchMoreProducts } from "./redux/action"

const Practie = () => {
    const data = useSelector((state) => state?.reducer?.Product)
    const [pagination, setPagination] = useState({ pageNo: 0, pageSize: 10 })
    // console.log(data, 'asdfghjkkkkk')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Products(pagination))
    }, [dispatch]);
    const handleMoreData = () => {
        dispatch(fetchMoreProducts({
            ...pagination,
            pageNo: pagination.pageSize + pagination.pageNo,
        }))
        setPagination({
            ...pagination,
            pageNo: pagination.pageSize + pagination.pageNo,
        })
        console.log(pagination, 'dfmdfutug')
    }
    
    return (
        <>
            <Row>
                {data.map((e, index) =>
                    <Col md={3} sm={4} className='mb-3 product_div' key={index}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={e.images} />
                            <Card.Body>
                                <Card.Title>{e.title}</Card.Title>
                                <Card.Text>
                                    {e.description}
                                    <br />
                                    ${e.price}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
                <Button onClick={() => handleMoreData()}>More data</Button>
            </Row>
        </>
    )
}
export default Practie