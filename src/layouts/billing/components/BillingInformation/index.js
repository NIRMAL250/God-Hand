/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Billing Information
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="oliver liam"
            description="Urgent need of funds for Liver transplantation"
            email="oliver@gmail.com"
            phone="+1-674-362-9081"
          />
          <Bill
            name="lucas harper"
            description="My baby struggles for his life"
            email="lucas@gmail.com"
            phone="+1-212-456-7890"
          />
          <Bill
            name="ethan james"
            description="Intensive care for serious accidents"
            email="ethan@abc.hospital.com"
            phone="+91 19 2827 8237"
            noGutter
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
