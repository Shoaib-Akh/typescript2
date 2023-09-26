// import React from 'react'
import { Col, Row } from "react-bootstrap"
import storeItemsssss from "../data/item.json"
import StoreItem from "../commponets/StoreItem"
const Store = () => {
  return (
    <Row>
        {storeItemsssss.map((item:any)=>(<>
        <Col key={item.id}>
{/* {JSON.stringify(item)} */}
{/* <storeItem  {...item}/> */}
<StoreItem {...item}/>
        </Col>
        </>))}
    </Row>
  )
}

export default Store
