import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import TrackingSearchPage from "./pages/TrackingSearchPage";
import TrackingShipmentPage from "./pages/TrackingShipmentPage";
import PricingPage from "./pages/PricingPage";
import SingInPage from "./pages/SingInPage";
import ContactSalesPage from "./pages/ContactSalesPage";

const RoutePages = () => (
  <Routes>
    <Route path="/" element={<TrackingSearchPage />} />
    <Route exact path="/tracking-shipment" element={<TrackingSearchPage />} />
    <Route path="/tracking-shipment/:num" element={<TrackingShipmentPage />} />
    <Route exact path="/pricing" element={<PricingPage />} />
    <Route exact path="/sign-in" element={<SingInPage />} />
    <Route exact path="/contact-sales" element={<ContactSalesPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default RoutePages;
