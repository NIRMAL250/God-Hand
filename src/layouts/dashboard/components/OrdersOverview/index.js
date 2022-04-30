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

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Transactions
        </MDTypography>
        <MDBox mt={0} mb={2} />
      </MDBox>
      <MDBox p={2}>
        <TimelineItem color="success" title="$2400, John Michael" dateTime="22 DEC 7:20 PM" />
        <TimelineItem color="error" title="₹10,00,000, Rahul K" dateTime="22 DEC 11 AM" />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="€9000, Bardrich"
          dateTime="22 DEC 9:34 AM"
        />
        <TimelineItem color="warning" title="$5000, Liam" dateTime="22 DEC 5:20 AM" />
        <TimelineItem
          color="primary"
          title="د.إ100000, Maryam"
          dateTime="22 DEC 4:54 AM"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
