import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  whiteColor,
  defaultFont,
  blackColor
} from "./EckerdsStyle";
// import { grey } from "@material-ui/core/colors";

const tableStyle = theme => ({
  warningTableHeader: {
    color: warningColor[0]
  },
  primaryTableHeader: {
    color: primaryColor[0]
  },
  dangerTableHeader: {
    color: dangerColor[0]
  },
  successTableHeader: {
    color: successColor[0]
  },
  infoTableHeader: {
    color: infoColor[0]
  },
  roseTableHeader: {
    color: roseColor[0]
  },
  grayTableHeader: {
    color: blackColor,
    backgroundColor: grayColor
  },
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    // color: grey[200],
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse"
  },
  tableHeadCell: {
    color: "inherit",
    ...defaultFont,
    "&, &$tableCell": {
      fontSize: "1em"
    }
  },
  tableCell: {
    ...defaultFont,
    lineHeight: "1.42857143",
    padding: "12px 8px",
    verticalAlign: "middle",
    fontSize: "0.8125rem",
    borderBottomColor: whiteColor,
    borderBottomWidth: 2
  },
  tableResponsive: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  tableHeadRow: {
    height: "50px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle"
  },
  tableBodyRow: {
    height: "50px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    //   borderBottomColor: blackColor[10],
    backgroundColor: whiteColor[10],
    verticalAlign: "middle"
  },
  deleteIcon: {
    color: "FireBrick"
  }
});

export default tableStyle;

{
  /* <div className={classes.tableResponsive}>
  <Table className={classes.table}>
    {tableHead !== undefined ? (
      <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
        <TableRow className={classes[tableHeaderTitle + "TableHeaderTitle"]}>
          {tableHeaderTitle.map(title => {
            return (
              <TableCell colSpan={8} key={(title + 1).toString()}>
                <b>{title}</b>
              </TableCell>
            ); colSpan={classes.tableHead.length()}
          })}
          <Divider />
        </TableRow>
        <TableRow className={classes.tableHeadRow}>
          {tableHead.map(headCell => {
            return renderHeaderCell(
              classes,
              headCell,
              headCell.numeric ? "right" : "left"
            );
          })}
        </TableRow>
      </TableHead>
    ) : null}
    <TableBody />
  </Table>
</div>; */
}
