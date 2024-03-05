import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { getCartData, logingUser } from "./utils/utils"
import { Button } from "react-bootstrap"
import Example from "./modle"

const AddToCart = () => {

    let user = JSON.parse(Cookies.get('token'))
    // const cartData = getCartData()
    const [cartData, setCartData] = useState([])
    const [show, setShow] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null)
    const handleClose = () => {
        setShow(false)
        setDeleteIndex(null)
    };
    const handleShow = () => setShow(true);
    // var deleteProduct
    useEffect(() => {
        setCartData(getCartData())
    }, [])
    const handelAdd = (item, index) => {
        let data = getCartData()
        data.splice(index, 1, { ...data[index], qty: data[index].qty + 1 })
        console.log(data, 'fiuwheuhe')
        localStorage.setItem("addproduct", JSON.stringify(data))
        setCartData(data)
    }

    const handelRemove = (e, i) => {
        let data = getCartData()

        if (e.qty > 1) {
            data.splice(i, 1, { ...data[i], qty: data[i].qty - 1 })
        }
        else {
            // if(data.splice(i, 1)){

            //     deleteProduct=()=>
            //         cartData.splice(i, 1)
            //        localStorage.setItem('addproduct', JSON.stringify(cartData))}
            handleShow()
            setDeleteIndex(i)
        }
        localStorage.setItem('addproduct', JSON.stringify(data))
        setCartData(data)
    }

    const deleteProduct = () => {
        let data = getCartData()
        data.splice(deleteIndex, 1)
        localStorage.setItem('addproduct', JSON.stringify(data))
        setCartData(data)
        handleClose()
    }

    return (
        <>
            {cartData?.map((e, i) => {
                if (e.email === user.Email) {
                    return (
                        <>

                            <h1>{e?.title}</h1>
                            <h3>{e?.qty}</h3>
                            <Button onClick={() => handelAdd(e, i)}>++++++++++++++</Button>
                            <Button onClick={() => handelRemove(e, i)}>-------------</Button>
                            {/* <button onClick={handleShow}>cwecw</button> */}
                        </>
                    )
                }

            })}
            <Example
                show={show}
                handleClose={handleClose}
                handledlt={deleteProduct}
            />
        </>)
}

export default AddToCart