import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { useState } from "react";
import StoreItem from "../components/StoreItem";

const Store = () => {
  const [items, setItems] = useState(storeItems);

  return items ? (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  ) : (
    "error"
  );
};

export default Store;
