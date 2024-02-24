const data = [
  {
    id: 1,
    title: "iPhone 9",
    price: 549,
    inStock: true,
    catergory: "smartphones",
  },
  {
    id: 2,
    title: "iPhone 13",
    price: 1300,
    inStock: true,
    catergory: "smartphones",
  },
  {
    id: 3,
    title: "iPhone X",
    price: 800,
    inStock: true,
    catergory: "smartphones",
  },
  {
    id: 4,
    title: "Huawei P30",
    price: 200,
    inStock: true,
    catergory: "smartphones",
  },
  {
    id: 5,
    title: "iPhone 11",
    price: 899,
    inStock: true,
    catergory: "smartphones",
  },
  {
    id: 6,
    title: "iPhone 7",
    price: 150,
    inStock: true,
    catergory: "smartphones",
  },
  {
    id: 7,
    title: "Samsung s20",
    price: 1200,
    inStock: true,
    catergory: "smartphones",
  },
  {
    id: 8,
    title: "Huawei Nova",
    price: 600,
    inStock: true,
    catergory: "smartphones",
  },
  {
    id: 9,
    title: "Nokia",
    price: 150,
    inStock: true,
    catergory: "smartphones",
  },
];

const createTable = (productData) => {
  const tabelElement = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");

  const headers = Object.keys(productData[0]);
  tableHead.appendChild(creatHeaderRow(headers));

  productData.forEach((rowData) => {
    tableBody.appendChild(createProductRow(rowData));
  });

  tabelElement.appendChild(tableHead);
  tabelElement.appendChild(tableBody);
  return tabelElement;
};

const createProductRow = (product) => {
  const tr = document.createElement("tr");
  Object.values(product).forEach((value) => {
    const td = document.createElement("td");
    td.textContent = value;
    tr.appendChild(td);
  });

  return tr;
};

const sortDataBy = (columnName, direction) => {
  const sortAscenData = [
    ...data.sort((a, b) => (a[columnName] > b[columnName] ? 1 : -1)),
  ];
  const sortDescenData = [
    ...data.sort((a, b) => (a[columnName] < b[columnName] ? 1 : -1)),
  ];

  renderTable(direction === "ASC" ? sortAscenData : sortDescenData);
};

const creatHeaderRow = (columnNames) => {
  const tr = document.createElement("tr");
  columnNames.forEach((columnName) => {
    const th = document.createElement("th");
    th.textContent = columnName[0].toUpperCase() + columnName.slice(1);

    const searchUp = document.createElement("span");
    searchUp.textContent = "+";
    const searchDown = document.createElement("span");
    searchDown.textContent = "-";

    searchUp.onclick = () => sortDataBy(columnName, "ASC");
    searchDown.onclick = () => sortDataBy(columnName, "DESC");

    th.appendChild(searchDown);
    th.appendChild(searchUp);
    tr.appendChild(th);
  });

  return tr;
};

const renderTable = (productData) => {
  const sortableTableElement = document.getElementById("sortableTable");
  sortableTableElement.innerHTML = "";
  sortableTableElement.appendChild(createTable(productData));
};

renderTable(data);
