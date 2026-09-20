import ProductHeader from "../components/ProductHeader.jsx";
import ProductFeatures from "../components/ProductFeatures.jsx";
import DownloadPanelProduct from "../components/DownloadPanelProduct.jsx";

function ProductView() {
    return (
        <>
            <ProductHeader />
            <ProductFeatures />
            <DownloadPanelProduct />
        </>
    );
}

export default ProductView;