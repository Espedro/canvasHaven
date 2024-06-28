import { useEffect, useContext } from "react";
import CreateForm from "../components/CreateForm";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";




function AddPainting() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    user && user.isAdmin ? null : navigate("/");
  }, [user]);

  return <div>  <CreateForm /> </div>
}

export default AddPainting
