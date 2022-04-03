export const PaginationPageState = {
	ACTIVE: "btn z-10 bg-white pagination-active position-relative d-inline-flex align-items-center px-2 px-lg-3 font-weight-normal",
	INACTIVE: "btn bg-white text-secondary position-relative d-inline-flex align-items-center px-2 px-lg-3 font-weight-normal",
	DEFAULT: "btn position-relative d-inline-flex align-items-center px-1 px-lg-2 bg-white font-weight-normal text-muted",
}

export const PaginationNavState = {
	ACTIVE: "btn position-relative d-inline-flex align-items-center px-0 px-lg-1 py-0 py-lg-1 bg-white font-weight-normal pagination-active",
	INACTIVE: "btn position-relative d-inline-flex align-items-center px-0 px-lg-1 py-0 py-lg-1 font-weight-normal text-dark",
}

export const testTableColumns = [
  {
    title: "Store ID",
    dataIndex: "id",
  },
  {
    title: "Store Name",
    dataIndex: "storeName",
  },
  {
    title: "Location",
    dataIndex: "location",
  },
  {
    title: "Store Manager",
    dataIndex: "storeManager",
  },
  {
    title: "Revenue Made",
    dataIndex: "revenueMade",
  },
  {
    title: "Total Customers",
    dataIndex: "totalCustomers",
  },
];
export const testTableData = [
  {
    id: "ID: 43178",
    storeName: "KFC Wuse",
    location: "10 ijaoye street jibowu, Lagos State",
    storeManager: "Morenike Oni",
    revenueMade: "₦345,000",
    totalCustomers: 433,
  },
];
let filteredTableData = testTableData;
export const testTableDataSource =
  filteredTableData &&
    filteredTableData.length > 0
      ? filteredTableData.map((row) => {
        return {
          id: row.id,
          storeName: (
            <div>
              {row.storeName}
            </div>
          ),
          location: (
            <div>
              {row.location}
            </div>
          ),
          storeManager: (
            <div>
              {row.storeManager}
            </div>
          ),
          revenueMade: (
            <div>
              {row.revenueMade}
            </div>
          ),
          totalCustomers: (
            <div>
              {row.totalCustomers}
            </div>
          ),
        };
      })
    : [];