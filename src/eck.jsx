import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// import Table from "@material-ui/core/Table";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableSortLabel from "@material-ui/core/TableSortLabel";
// core components
// import { Divider } from "@material-ui/core";
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
export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      ageGroupHeaders: [{ 1: "pam" }, { 2: "qam" }, { 3: "ram" }, { 4: "sam" }]
    };
  }
  iteration() {
    for (const [key, value] of Object.entries(this.state.ageGroupHeaders)) {
      console.log(key, value);
      return <Tab label={value} {...a11yProps(key)} />;
    }
  }
  // useEffect(() => console.log('tableHead',tableHead));

  // const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  handleChange(e, newValue) {
    this.setState({ value: newValue });
  }
  render() {
    const { value, ageGroupHeaders } = this.state;
    return (
      <div className={useStyles.root}>
        <AppBar color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {Object.keys(ageGroupHeaders).forEach(function(key) {
              console.log(ageGroupHeaders[key.valueOf(key)], key);
              return <Tab label={ageGroupHeaders[key]} {...a11yProps(key)} />;
            })}
            {/* {ageGroupHeaders.forEach((name, index) => {
              // i = i++;
              console.log(name, index);
              return <Tab label={name} {...a11yProps(index)} />;
            })} */}
            {/* {this.iteration()} */}
            {/* <Tab label="Client" {...a11yProps(0)} />
            <Tab label="Parent/Guardian" {...a11yProps(1)} />
            <Tab label="Teacher" {...a11yProps(2)} />
            <Tab label="Direct Care Worker" {...a11yProps(3)} /> */}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}
