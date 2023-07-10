import { Table, Button, Spin } from "antd";
import {
  dataProduct,
  fetchProductListStart,
  fetchingProduct,
} from "../../../store/product/productSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { useEffect, useState } from "react";
import { getAllUserStart, userSelector } from "../../../store/auth/authSlice";
import {
  renderColumnUsers,
  renderColumnProduct,
  renderColumnOrder,
} from "./renderColumn";
import ModalItem from "./ModalItem/modalProducts";
import ModalUser from "./ModalItem/modalUsers";
import ModalOrder from "./ModalItem/modalOrder";
import { fetchOrdersStart, getOrder } from "../../../store/order/orderSlice";

const RenderTable = (props: any) => {
  const { selectedItem } = props;
  const dispatch = useAppDispatch();

  const currentData = useAppSelector(dataProduct);
  const allUser = useAppSelector(userSelector);
  const allOrder = useAppSelector(getOrder);
  const fetching = useAppSelector(fetchingProduct);
  const [isModalProducts, setIsModalProducts] = useState(false);
  const [isModalUsers, setIsModalUsers] = useState(false);
  const [isModalOrder, setIsModalOrder] = useState(false);
  const [detailItem, setDetailItem] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const showModal = (val: any) => {
    if (!val) {
      setIsEdit(true);
    }
    switch (selectedItem) {
      case "products":
        setIsModalProducts(true);
        break;
      case "users":
        setIsModalUsers(true);
        break;
      case "orders":
        setIsModalOrder(true);
        break;
      default:
        break;
    }
    setDetailItem(val);
  };

  const handleOk = () => {
    setIsModalProducts(false);
    setIsModalUsers(false);
    setIsModalOrder(false);
    setIsEdit(false);
    dispatch(fetchProductListStart());
    dispatch(getAllUserStart());
    dispatch(fetchOrdersStart());
  };

  const handleCancel = () => {
    setIsModalProducts(false);
    setIsModalUsers(false);
    setIsModalOrder(false);
    setIsEdit(false);
    setDetailItem({});
  };

  let dataSource: any = [];
  let columms: any = [];

  switch (selectedItem) {
    case "products":
      dataSource = currentData;
      columms = renderColumnProduct;
      break;
    case "users":
      dataSource = allUser;
      columms = renderColumnUsers;
      break;
    case "orders":
      dataSource = allOrder;
      columms = renderColumnOrder(allUser);
      break;
    default:
      break;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    dispatch(fetchProductListStart());
    dispatch(getAllUserStart());
    dispatch(fetchOrdersStart());
  }, [dispatch]);

  return fetching ? (
    <Spin />
  ) : (
    <div>
      {selectedItem === "products" && (
        <Button
          style={{
            marginBottom: "10px",
          }}
          onClick={() => showModal(false)}
        >
          + Add Item
        </Button>
      )}
      {selectedItem === "products" && (
        <ModalItem
          isModalOpen={isModalProducts}
          handleOk={handleOk}
          handleCancel={handleCancel}
          detail={detailItem}
          isEdit={isEdit}
        />
      )}
      {selectedItem === "users" && (
        <ModalUser
          isModalOpen={isModalUsers}
          handleOk={handleOk}
          handleCancel={handleCancel}
          detail={detailItem}
        />
      )}
      {selectedItem === "orders" && (
        <ModalOrder
          isModalOpen={isModalOrder}
          handleOk={handleOk}
          handleCancel={handleCancel}
          detail={detailItem}
        />
      )}

      <Table
        dataSource={dataSource}
        columns={columms}
        onChange={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        scroll={{ y: 480, x: window.innerWidth }}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => showModal(record), // click row
          };
        }}
      />
    </div>
  );
};

export default RenderTable;
