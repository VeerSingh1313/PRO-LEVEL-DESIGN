import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Products, fetchMoreProducts } from "./redux/action";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { getCartData, logingUser } from "./utils/utils";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getdata = Cookies.get('token');
    const data = useSelector((state) => state?.reducer?.Product);
    const [pagination, setPagination] = useState({ pageNo: 0, pageSize: 8 })
    const [qty, setqty] = useState(1)

    useEffect(() => {
        if (!getdata) {
            navigate('/');
        }
        dispatch(Products(pagination))
        getCartData()
    }, []);
    const handledata = () => {
        dispatch(fetchMoreProducts({

            ...pagination,
            pageNo: pagination.pageSize + pagination.pageNo,
        }))
        setPagination({
            ...pagination,
            pageNo: pagination.pageSize + pagination.pageNo,
        })
    }
    // console.log(cartData, 'jgbnyulk')
    const handlNext = () => {
        navigate('/home2')
    }

    const Carybeg = (e) => {
        let userdata = logingUser()
        let userEmail = userdata.Email
        let data = []
        let cartData = getCartData()

        if (cartData) {
            let index
            const founddata = cartData.find((item, i) => {
                if (item?.id === e.id && item.email === userEmail) {
                    index = i
                    return item
                }
            })

            if (founddata) {
                // setqty(update.qty = + 1)
                founddata.qty = founddata.qty + 1
                cartData.splice(index, 1, founddata)
                localStorage.setItem('addproduct', JSON.stringify(cartData));
            } else {
                data = [...cartData, { ...e, email: userEmail, qty: qty }]
                localStorage.setItem('addproduct', JSON.stringify(data));
            }
        } else {
            data = [{ ...e, email: userEmail, qty: 1 }]
            localStorage.setItem('addproduct', JSON.stringify(data));
        }

        navigate('/addtocart')
    }
    const handleDice = () => {
        navigate('/home/game')
    }
    const handleNewgame = () => {
        navigate('/home/snakeAndLadder')
    }
    const fildArray = () => {
        navigate('/home/sdfg')
    }
    const handlenext = () => {
        navigate("/home/html")
    }
    return (
        <>
            <Row>
                <InfiniteScroll
                    dataLength={data.length}
                    next={handledata}
                    hasMore={data.length < 50}
                    loader={<h4>Loading...</h4>}
                >
                    {data?.map((e, index) => (
                        <Col md={3} sm={4} className='mb-3 product_div' key={index}>

                            <div className='carddev'>
                                <Card>
                                    <Card.Img src={e.images} crossOrigin="anonymous" />
                                    <Card.Body>
                                        <Card.Title>{e.title}</Card.Title>
                                        <Card.Text>
                                            {/* {e.description.substring(0, 30)}... */}
                                            {e?.description}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => Carybeg(e)}>Buy Now</Button>
                                        <Button variant="primary">Shop Now</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    ))}
                    {/* <Button onClick={() => handledata()}>More Data</Button> */}
                </InfiniteScroll>
            </Row>
            <Button onClick={() => handleNewgame()}>Play snake And Ladder</Button>
            <Button onClick={() => handleDice()}>Play Game</Button>
            <Button onClick={() => fildArray()}>tast final form</Button>
            <Button onClick={() => handlNext()}>Next</Button>
            <Button onClick={() => handlenext()}>html page</Button>
        </>
    );
};

export default Home;
