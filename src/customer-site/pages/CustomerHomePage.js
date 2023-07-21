import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import CustomerMenuComponent from "../components/partials/CustomerMenuComponent";

function CustomerHomePage() {
    return (
        <>
            <CustomerMenuComponent/>

            <Link to="/admin">
                <Button variant="primary">Trang quản trị viên</Button>
            </Link>
        </>
    );
};

export default CustomerHomePage;
