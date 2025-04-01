import * as React from 'react';
import DynamicTable from '../../TableController/TableRenderer';
import tableConfig from "./viewTableColumn.json";
const dataItems = [
  {
    senderID: "23131",
    format: "https://api.example.com",
    type: "JSON",
    status: "Active",
    creationdatetime: "2025-03-24",
  },
  {
    senderID: "23130",
    format: "https://api.sample.com",
    type: "XML",
    status: "Inactive",
    creationdatetime: "2025-03-23",
  },
  {
    senderID: "231314",
    format: "https://api.sample.com",
    type: "JSON",
    status: "Inactive",
    creationdatetime: "2025-03-23",
  },
  {
    senderID: "231317",
    format: "https://api.sample.com",
    type: "XML",
    status: "Pending",
    creationdatetime: "2025-03-09",
  },
  {
    senderID: "231312",
    format: "https://api.sample.com",
    type: "JSON",
    status: "Active",
    creationdatetime: "2025-03-20",
  },
  {
    senderID: "231311",
    format: "https://api.sample.com",
    type: "XML",
    status: "Inactive",
    creationdatetime: "2025-03-27",
  },
  {
    senderID: "231320",
    format: "https://api.sample.com",
    type: "XML",
    status: "Pending",
    creationdatetime: "2025-03-29",
  },
  {
    senderID: "231323",
    format: "https://api.sample.com",
    type: "JSON",
    status: "Active",
    creationdatetime: "2023-03-23",
  },
  {
    senderID: "231321",
    format: "https://api.sample.com",
    type: "XML",
    status: "Active",
    creationdatetime: "2024-03-23",
  },
  {
    senderID: "231327",
    format: "https://api.sample.com",
    type: "XML",
    status: "Active",
    creationdatetime: "2025-06-24",
  },
  {
    senderID: "231325",
    format: "https://api.sample.com",
    type: "XML",
    status: "Active",
    creationdatetime: "2025-05-25",
  },
  {
    senderID: "231330",
    format: "https://api.sample.com",
    type: "JSON",
    status: "Inactive",
    creationdatetime: "2025-04-23",
  },
  
];



const Data = () => {
  const [data,setData] = React.useState({dataItems});
  return (
    <div>
      <DynamicTable data={dataItems} tableConfig={tableConfig} />
    </div>
  );
};

export default Data;
