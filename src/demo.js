import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Table, TableBody, TableCell } from "@material-ui/core";
import { TableContainer, TableHead, TableRow } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
// import Test from "./eck";
// import CustomTable from "./reusable.jsx";
import "./demo.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default class ScrollableTabsButtonAuto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  handleChange(e, newValue) {
    this.setState({ value: newValue });
  }

  render() {
    const { value } = this.state;
    return (
      <div className={useStyles.root} style={{ padding: "0px" }}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange.bind(this)}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            // scrollButtons="auto"
            // aria-label="scrollable auto tabs example"
          >
            <Tab label="Client" {...a11yProps(0)} />
            <Tab label="Parent/Guardian" {...a11yProps(1)} />
            <Tab label="Teacher" {...a11yProps(2)} />
            <Tab label="Direct Care Worker" {...a11yProps(3)} />
          </Tabs>
        </AppBar>

        {/* <Test /> */}
        <TabPanel value={value} index={0} style={{ padding: "0px" }}>
          <TableContainer style={{ padding: "0px" }} component={Paper}>
            <Table
              className={useStyles.table}
              style={{ padding: "0px" }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Informant ID#</TableCell>
                  <TableCell align="right">Intake Part 1</TableCell>
                  <TableCell align="right">Intake Part 2</TableCell>
                  <TableCell align="right">Follow1 Up Part1</TableCell>
                  <TableCell align="right">Follow1 Up Part2</TableCell>
                  <TableCell align="right">Follow2 Up Part1</TableCell>
                  <TableCell align="right">Follow2 Up Part2</TableCell>
                  <TableCell align="right">Follow3 Up Part1</TableCell>
                  <TableCell align="right">Follow3 Up Part2</TableCell>
                  <TableCell align="right">Follow2 Up Part2</TableCell>
                  <TableCell align="right">Discharge Part 1</TableCell>
                  <TableCell align="right">Discharge Part 2</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={1}>
                  <TableCell component="th" scope="row">
                    1234
                  </TableCell>
                  <TableCell align="right">
                    <CheckOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    <CheckOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    <CloseOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    <CheckOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    <CloseOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    <CheckOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    <CloseOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    <CloseOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    <CheckOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    <CloseOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    <CloseOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TableContainer component={Paper}>
            <Table
              className={useStyles.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Informant ID#</TableCell>
                  <TableCell align="right">Intake Part 1</TableCell>
                  <TableCell align="right">Intake Part 2</TableCell>
                  <TableCell align="right">Follow1 Up Part1</TableCell>
                  <TableCell align="right">Follow1 Up Part2</TableCell>
                  <TableCell align="right">Follow2 Up Part1</TableCell>
                  <TableCell align="right">Follow2 Up Part2</TableCell>
                  <TableCell align="right">Follow3 Up Part1</TableCell>
                  <TableCell align="right">Follow3 Up Part2</TableCell>
                  <TableCell align="right">Follow2 Up Part2</TableCell>
                  <TableCell align="right">Discharge Part 1</TableCell>
                  <TableCell align="right">Discharge Part 2</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={1}>
                  <TableCell component="th" scope="row">
                    1234
                  </TableCell>
                  <TableCell align="right">
                    <CheckOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    <CheckOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    {/* <CloseOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    <CheckOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    {/* <CloseOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    <CheckOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    {/* <CloseOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    {/* <CloseOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    <CheckOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    {/* <CloseOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    {/* <CloseOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TableContainer component={Paper}>
            <Table
              className={useStyles.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Informant ID#</TableCell>
                  <TableCell align="right">Intake Part 1</TableCell>
                  <TableCell align="right">Intake Part 2</TableCell>
                  <TableCell align="right">Follow1 Up Part1</TableCell>
                  <TableCell align="right">Follow1 Up Part2</TableCell>
                  <TableCell align="right">Follow2 Up Part1</TableCell>
                  <TableCell align="right">Follow2 Up Part2</TableCell>
                  <TableCell align="right">Follow3 Up Part1</TableCell>
                  <TableCell align="right">Follow3 Up Part2</TableCell>
                  <TableCell align="right">Follow2 Up Part2</TableCell>
                  <TableCell align="right">Discharge Part 1</TableCell>
                  <TableCell align="right">Discharge Part 2</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={1}>
                  <TableCell component="th" scope="row">
                    1234
                  </TableCell>
                  <TableCell align="right">
                    {/* <CheckOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    {/* <CheckOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    <CloseOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    {/* <CheckOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    <CloseOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    {/* <CheckOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    <CloseOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    <CloseOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    {/* <CheckOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    <CloseOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    <CloseOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>{" "}
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TableContainer component={Paper}>
            <Table
              className={useStyles.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Informant ID#</TableCell>
                  <TableCell align="right">Intake Part 1</TableCell>
                  <TableCell align="right">Intake Part 2</TableCell>
                  <TableCell align="right">Follow1 Up Part1</TableCell>
                  <TableCell align="right">Follow1 Up Part2</TableCell>
                  <TableCell align="right">Follow2 Up Part1</TableCell>
                  <TableCell align="right">Follow2 Up Part2</TableCell>
                  <TableCell align="right">Follow3 Up Part1</TableCell>
                  <TableCell align="right">Follow3 Up Part2</TableCell>
                  <TableCell align="right">Follow2 Up Part2</TableCell>
                  <TableCell align="right">Discharge Part 1</TableCell>
                  <TableCell align="right">Discharge Part 2</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={1}>
                  <TableCell component="th" scope="row">
                    1234
                  </TableCell>
                  <TableCell align="right">
                    {/* <CheckOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    {/* <CheckOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    {/* <CloseOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    {/* <CheckOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    {/* <CloseOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    <CheckOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    <CloseOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    <CloseOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    {/* <CloseOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                  <TableCell align="right">
                    <CloseOutlinedIcon style={{ color: lightBlue[900] }} />
                  </TableCell>
                  <TableCell align="right">
                    {/* <CloseOutlinedIcon style={{ color: lightBlue[900] }} /> */}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </div>
    );
  }
}
