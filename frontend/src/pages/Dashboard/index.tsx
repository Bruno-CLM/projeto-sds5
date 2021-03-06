import BarChat from "components/BarChat";
import DataTable from "components/DataTable";
import DonutChat from "components/DonutChat";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <BarChat />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Total de vendas</h5>
                        <DonutChat />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary">Total de vendas</h2>
                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;