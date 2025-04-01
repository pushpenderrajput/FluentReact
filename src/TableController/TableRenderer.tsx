import * as React from "react";
import * as XLSX from 'xlsx';
import {
  SearchBox,
  Dialog,
  DialogContent,
  DialogSurface,
  DialogBody,
  DialogActions,
  DialogTitle,
  Input,
  Label,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  Divider



} from "@fluentui/react-components";
import {
  FilterRegular,
  EditRegular,
  DeleteRegular,
  OpenRegular,
  PresenceBlockedRegular,
  ArrowDownload24Regular,
  MoreVerticalRegular
} from "@fluentui/react-icons";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  Button,
  Select
} from "@fluentui/react-components";

interface TableItem {
  senderID: string;
  format: string;
  type: string;
  status: string;
  creationdatetime: string;

}


interface ColumnConfig {
    key: string;
    title: string;
    dataIndex: string;
    statuses?: Array<{
      status: string;
      style: React.CSSProperties;
    }>;
  }
  
  interface ActionConfig {
    config: {
      icon: string;
    };
    status: string;
    style: {
      color: string;
    };
  }
  interface ApiConfig{
    contextHeading: String;
    
  }
  
  interface TableConfig {
    columns: ColumnConfig[];
    actions: ActionConfig[];
    apiConfig:ApiConfig;
  }
  interface DynamicTableProps {
    data: TableItem[];
    tableConfig: TableConfig;
  }

interface DeleteConfirmationDialogProps {
  isDeleteBox: boolean;
  onDelete: () => void;
  onCancel: () => void;
}



const DynamicTable: React.FC<DynamicTableProps> = ({ data, tableConfig }) => {
  const columns = tableConfig.columns;
  const actions = tableConfig.actions;
  const [isEditOpen, setIsEditOpen] = React.useState(false);
  const [filterText, setFilterText] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(data)
  // const [selectedRowData, setSelectedRowData] = React.useState<TableItem | null>(null);
  const [isDeleteBox, setDelete] = React.useState(false);
  const [selectedRowID, setSelectedRowID] = React.useState<string | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [viewItem, setViewItem] = React.useState(null);
  const [isViewOpen, setIsViewOpen] = React.useState(false);
  const [editItem, setEditItem] = React.useState(null);
  const [formData, setFormData] = React.useState({});

  const exportToCSV = (data: TableItem[], columns: ColumnConfig[], filename = "export.csv") => {
    const csvRows = [];

    const headers = columns.map(col => col.title).join(",");
    csvRows.push(headers);

    data.forEach(row => {
        const values = columns.map(col => (row as any)[col.dataIndex] || "");
        csvRows.push(values.join(","));
    });

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
};

const exportToXLSX = (data: TableItem[], columns: ColumnConfig[], filename = "export.xlsx") => {
    const worksheet = XLSX.utils.json_to_sheet(data.map(row => {
        let newRow: Record<string, string> = {};
        columns.forEach(col => {
            newRow[col.title] = (row as any)[col.dataIndex] || "";
        });
        return newRow;
    }));

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, filename);
};


const handleExport = (format: "csv" | "xlsx", data: TableItem[], columns: ColumnConfig[]) => {
  if (format === "csv") {
      exportToCSV(data, columns);
  } else if (format === "xlsx") {
      exportToXLSX(data, columns);
  }
};






  const openDelete = (senderID: string) => {
    setSelectedRowID(senderID);
    setDelete(true);
  };
  const handleOpenView = (item: any) => {
    setIsViewOpen(true);
    setViewItem(item);
  };
  const handleDelete = () => {
    if (selectedRowID) {
      console.log("Deleting senderID:", selectedRowID);
    }
    setDelete(false);
    setSelectedRowID(null);
  };
  const handleOpenEdit = (item: any) => {
    setEditItem(item);
    setFormData(item);
    setIsEditOpen(true);
  };
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
const handleSearch = (e:any)=>{
    const searchText = e.target.value.toLowerCase();
    setFilterText(searchText);
    const filtered = data.filter((row) =>
        Object.values(row).some(
            (value) =>
                value && value.toString().toLowerCase().includes(searchText)
        )
    );
    setFilteredData(filtered);
    setCurrentPage(1); 
}

  const handleRowsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  return (
    <div>
        <div><h1>{tableConfig.apiConfig.contextHeading}</h1></div>
        <div style={{display:"flex",justifyContent:"space-between", paddingBottom:"6px"}}>
            <SearchBox placeholder="Search"  value={filterText} onChange={handleSearch}></SearchBox>
            <div style={{display:"flex"}}>
              <div style={{paddingRight:"6px"}}>
                <Menu>
                  <MenuTrigger disableButtonEnhancement>
                      <Button icon={<ArrowDownload24Regular />} appearance="primary">Export</Button>
                  </MenuTrigger>
                  <MenuPopover>
                      <MenuList>
                          <MenuItem onClick={() => handleExport("xlsx", filteredData, columns)}>XLSX</MenuItem>
                          <MenuItem onClick={() => handleExport("csv", filteredData, columns)}>CSV</MenuItem>
                      </MenuList>
                  </MenuPopover>
                </Menu>
                </div>
                <div style={{paddingRight:"6px"}}>
                <Button icon={<FilterRegular/>}>Filters</Button>
                </div>
                <Button icon={<MoreVerticalRegular/>}></Button>
            </div>
        </div>
        <Divider style={{padding:"6px"}}/>

      <Table aria-label="Dynamic Table" style={{ tableLayout: "auto", width: "100%"}}>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHeaderCell key={column.key}>{column.title}</TableHeaderCell>
            ))}
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item, index) => (
            <TableRow key={index}>
              {columns.map((col) => (
                <TableCell key={col.key}>
                  {col.dataIndex === "status" ? (
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "8px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: "600",
                        ...(col.statuses?.find((s) => s.status === item.status)?.style || {}),
                      }}
                    >
                      {item.status}
                    </span>
                  ) : (
                    item[col.dataIndex as keyof TableItem]
                  )}
                </TableCell>
              ))}
              <TableCell >
                <div style={{ display: "flex", gap: "8px" }}>
                  {actions.map((action, actionIndex) => (
                    <Button
                      key={actionIndex}
                      icon={
                        action.config.icon === "edit" ? <EditRegular /> :
                          action.config.icon === "delete" ? <DeleteRegular /> :
                            action.config.icon === "block" ? <PresenceBlockedRegular /> :
                              <OpenRegular />
                      }
                      onClick={() => {
                        if (action.config.icon === "delete") {
                          openDelete(item.senderID);
                        } else if (action.status === "Edit") {
                          handleOpenEdit(item);
                        } else if (action.status === "View") {
                          handleOpenView(item);
                        }
                      }}
                      style={{ color: action.style.color }}
                    />
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div style={{
        padding: "16px",
        borderTop: "1px solid #eaeaea",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "100%"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label style={{ fontSize: "14px", fontWeight: "bold" }}>Rows per page:</label>
          <Select
            value={rowsPerPage}
            onChange={handleRowsChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </Select>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            appearance="outline"
          >
            Previous
          </Button>

          <span style={{ fontSize: "14px", fontWeight: "bold" }}>
            Page {currentPage} of {totalPages}
          </span>

          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            appearance="outline"
          >
            Next
          </Button>
        </div>
      </div>
      {isViewOpen && (
        <Dialog
          open={isViewOpen}

        >


          <DialogSurface>
            <DialogBody>
              <DialogTitle>View Details</DialogTitle>
              {viewItem ? (
                <div>
                  {columns.map((col) => (
                    <p key={col.key}><b>{col.title}:</b> {viewItem[col.dataIndex]}</p>
                  ))}
                </div>
              ) : (
                <p>No data!</p>
              )}
              <DialogActions>
                <Button onClick={() => setIsViewOpen(false)}>Close</Button>
              </DialogActions>
            </DialogBody>
          </DialogSurface>
        </Dialog>
      )}
      {isDeleteBox && (
        <Dialog
          open={isDeleteBox}


        >
          <DialogSurface>
            <DialogBody>
              <DialogTitle>Are You sure You want to Delete?</DialogTitle>
              <DialogContent>This action cannot be undone!</DialogContent>
              <DialogActions>
                <Button onClick={() => { setDelete(false) }}>Cancel</Button>
                <Button onClick={handleDelete} appearance="primary">Delete</Button>
              </DialogActions>
            </DialogBody>
          </DialogSurface>
        </Dialog>
      )
      }


      {isEditOpen && (
        <Dialog open={isEditOpen} onOpenChange={(_, { open }) => setIsEditOpen(open)}>
          <DialogSurface>
            <DialogBody>
              <DialogTitle>Update Details</DialogTitle>
              {editItem ? (
                <div style={{display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
                  {columns.map((col) => (
                    <div key={col.key} style={{ marginBottom: "10px", display:"flex", flexDirection:"column"}}>
                      <Label>{col.title}</Label>
                      <Input
                        type="text"
                        name={col.dataIndex}
                        value={formData[col.dataIndex as keyof typeof formData] || ""}

                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p>No data!</p>
              )}
              <DialogActions>
                <Button onClick={() => setIsEditOpen(false)}>Cancel</Button>
                <Button appearance="primary" >Save</Button>
              </DialogActions>
            </DialogBody>
          </DialogSurface>
        </Dialog>
      )}



    </div>
  )
};



export default DynamicTable;