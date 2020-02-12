import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";

import Table from "@material-ui/core/Table";
import { TableContainer } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// core components
import tableStyle from "./reusableStyle.jsx";
// import { Divider } from "@material-ui/core";

function CustomTable({ ...props }) {
  const {
    classes,
    tableHeaderTitle,
    tableHead,
    tableData,
    tableHeaderColor
  } = props;

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");

  // useEffect(() => console.log('tableHead',tableHead));

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
    // alert(property);
  }

  function renderCell(classes, prop, key, alignment, destination) {
    var result = prop;
    switch (prop.value) {
      case "_EDIT_":
        result = (
          <IconButton size="small" to={{ pathname: destination, state: key }}>
            <Edit />
          </IconButton>
        );
        break;
      case "_DELETE_":
        result = (
          <IconButton size="small" onClick={() => destination(key)}>
            <Delete className={classes.deleteIcon} />
          </IconButton>
        );
        break;
      case "_UNENROLLSTAFF_":
        result = (
          <IconButton size="small" onClick={() => destination(key)}>
            {/* <FontAwesomeIcon size="md" icon={faUserTimes} color="firebrick" /> */}
          </IconButton>
        );
        break;
      case "_DISCHARGE_":
        result = (
          <IconButton size="small" onClick={() => destination(key)}>
            {/* <FontAwesomeIcon size="md" icon={faUserTimes} color="firebrick" /> */}
          </IconButton>
        );
        break;
      case "_RELEASE_":
        result = (
          <IconButton size="small" onClick={() => destination(key)}>
            {/* <FontAwesomeIcon size="md" icon={faThumbsDown} color="firebrick" /> */}
          </IconButton>
        );
        break;
      default:
        result = prop;
    }
    return (
      <TableCell className={classes.tableCell} key={key} align={alignment}>
        {result}
      </TableCell>
    );
  }

  function renderHeaderCell(classes, headCell, alignment) {
    const createSortHandler = property => event => {
      handleRequestSort(event, property);
    };
    let str = headCell.label;
    let res = str.toUpperCase();
    return (
      <TableCell
        align={alignment}
        className={classes.tableCell + " " + classes.tableHeadCell}
        key={headCell.id}
        sortDirection={orderBy === headCell.id ? order : false}
      >
        {headCell.action === true ? (
          res
        ) : (
          <TableSortLabel onClick={createSortHandler(headCell.id)}>
            {res}
          </TableSortLabel>
        )}
      </TableCell>
    );
  }

  return (
    <div className={classes.tableResponsive}>
      <TableContainer style={{ padding: "0px" }} component={Paper}>
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
              <TableRow
                className={classes[tableHeaderTitle + "TableHeaderTitle"]}
              />
              <TableRow className={classes.tableHeadRow}>
                {tableHead.map(headCell => {
                  return renderHeaderCell(classes, headCell);
                })}
              </TableRow>
            </TableHead>
          ) : null}
          {tableHead !== undefined ? (
            <TableBody>
              {tableData.map(item => {
                return (
                  <TableRow
                    key={item.id}
                    className={classes.tableBodyRow}
                    value={item}
                  >
                    {item.map(cell => {
                      //.values.map
                      return renderCell(classes, cell, item.id, "left");
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          ) : (
            ""
          )}
        </Table>
      </TableContainer>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.object),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(CustomTable);
