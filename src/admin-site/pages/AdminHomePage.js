import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import AdminMenuComponent from "../components/partials/AdminMenuComponent";

function AdminHomePage() {
    return (
        <>
            <AdminMenuComponent/>

            <Link to="/">
                <Button variant="warning">Trang dành cho khách hàng</Button>
            </Link>
        </>
    );
};

export default AdminHomePage;
