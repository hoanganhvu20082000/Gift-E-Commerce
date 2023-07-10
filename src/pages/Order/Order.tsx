import FilterFeature from "../../components/LayoutProduct/FilterLayout/FilterFeature";
import { useTranslation } from "react-i18next";
import { token } from "../../store/auth/authSlice";
import { useAppSelector } from "../../store/hooks/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchOrderByUserStart,
  getUserOrder,
} from "../../store/order/orderSlice";
import { Steps, Table } from "antd";
import { renderColumnOrderUser } from "./common.constant";

export default function Order() {
  const { t } = useTranslation(["order", "common"]);
  const currentUser = useAppSelector(token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrderByUserStart(currentUser?.id || ""));
  }, [currentUser.id, dispatch]);

  const userOrder = useAppSelector(getUserOrder);
  console.log("userOrder", userOrder);

  return (
    <>
      <br />
      <br />
      <Table
        dataSource={userOrder}
        columns={renderColumnOrderUser([currentUser])}
      />
    </>
  );
}
