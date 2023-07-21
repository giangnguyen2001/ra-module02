import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import AdminHeaderComponent from "../components/partials/AdminHeaderComponent";
import AdminFooterComponent from "../components/partials/AdminFooterComponent";

function AdminLayout() {
    return (
        <Container>
            <AdminHeaderComponent></AdminHeaderComponent>
            <Outlet />
            <AdminFooterComponent></AdminFooterComponent>
        </Container>   
    );
};

export default AdminLayout;
