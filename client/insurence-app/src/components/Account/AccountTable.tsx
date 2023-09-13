import { useDispatch, useSelector } from "react-redux";
import { getFormData } from "../../Redux/slices/offerFormDataSlice";

const AccountTable = () => {
  const dispatch = useDispatch();
  dispatch(getFormData());

  // const formData = useSelector(state => state.formData.items);
  const formData = {};
  return <div>{JSON.stringify(formData, null, 2)}</div>;
};

export default AccountTable;
