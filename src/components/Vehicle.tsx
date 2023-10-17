// src/App.js
import React from "react";
import Table,  { AvatarCell, SelectColumnFilter, StatusPill, ActionButton } from "./Table";
import Favourite from "./Favourite";

const vehicles =  [
    {
      "vehicleId": 1,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 2,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 3,
      "images": [
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80"
      ],
      "make": "Honda",
      "model": "Civic",
      "year": 2019,
      "mileage": 20000,
      "price": 17000,
      "status": "Sold",
      "isFavourite": false
    },
    {
      "vehicleId": 4,
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/7/75/2018_Ford_Focus_ST-Line_X_1.0.jpg"
      ],
      "make": "Ford",
      "model": "Focus",
      "year": 2021,
      "mileage": 12000,
      "price": 20000,
      "status": "inprogress",
      "isFavourite": true
    },
    {
      "vehicleId": 1,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 2,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 3,
      "images": [
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80"
      ],
      "make": "Honda",
      "model": "Civic",
      "year": 2019,
      "mileage": 20000,
      "price": 17000,
      "status": "Sold",
      "isFavourite": false
    },
    {
      "vehicleId": 4,
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/7/75/2018_Ford_Focus_ST-Line_X_1.0.jpg"
      ],
      "make": "Ford",
      "model": "Focus",
      "year": 2021,
      "mileage": 12000,
      "price": 20000,
      "status": "inprogress",
      "isFavourite": true
    },
    {
      "vehicleId": 1,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 2,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 3,
      "images": [
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80"
      ],
      "make": "Honda",
      "model": "Civic",
      "year": 2019,
      "mileage": 20000,
      "price": 17000,
      "status": "Sold",
      "isFavourite": false
    },
    {
      "vehicleId": 4,
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/7/75/2018_Ford_Focus_ST-Line_X_1.0.jpg"
      ],
      "make": "Ford",
      "model": "Focus",
      "year": 2021,
      "mileage": 12000,
      "price": 20000,
      "status": "inprogress",
      "isFavourite": true
    },
    {
      "vehicleId": 1,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 2,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 3,
      "images": [
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80"
      ],
      "make": "Honda",
      "model": "Civic",
      "year": 2019,
      "mileage": 20000,
      "price": 17000,
      "status": "Sold",
      "isFavourite": false
    },
    {
      "vehicleId": 4,
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/7/75/2018_Ford_Focus_ST-Line_X_1.0.jpg"
      ],
      "make": "Ford",
      "model": "Focus",
      "year": 2021,
      "mileage": 12000,
      "price": 20000,
      "status": "inprogress",
      "isFavourite": true
    },
    {
      "vehicleId": 1,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 2,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 3,
      "images": [
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80"
      ],
      "make": "Honda",
      "model": "Civic",
      "year": 2019,
      "mileage": 20000,
      "price": 17000,
      "status": "Sold",
      "isFavourite": false
    },
    {
      "vehicleId": 4,
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/7/75/2018_Ford_Focus_ST-Line_X_1.0.jpg"
      ],
      "make": "Ford",
      "model": "Focus",
      "year": 2021,
      "mileage": 12000,
      "price": 20000,
      "status": "inprogress",
      "isFavourite": true
    },
    {
      "vehicleId": 1,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 2,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 3,
      "images": [
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80"
      ],
      "make": "Honda",
      "model": "Civic",
      "year": 2019,
      "mileage": 20000,
      "price": 17000,
      "status": "Sold",
      "isFavourite": false
    },
    {
      "vehicleId": 4,
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/7/75/2018_Ford_Focus_ST-Line_X_1.0.jpg"
      ],
      "make": "Ford",
      "model": "Focus",
      "year": 2021,
      "mileage": 12000,
      "price": 20000,
      "status": "inprogress",
      "isFavourite": true
    },
    {
      "vehicleId": 1,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 2,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 3,
      "images": [
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80"
      ],
      "make": "Honda",
      "model": "Civic",
      "year": 2019,
      "mileage": 20000,
      "price": 17000,
      "status": "Sold",
      "isFavourite": false
    },
    {
      "vehicleId": 4,
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/7/75/2018_Ford_Focus_ST-Line_X_1.0.jpg"
      ],
      "make": "Ford",
      "model": "Focus",
      "year": 2021,
      "mileage": 12000,
      "price": 20000,
      "status": "inprogress",
      "isFavourite": true
    },
    {
      "vehicleId": 1,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 2,
      "images": [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg&w=700&q=90&c=1"
      ],
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "mileage": 15000,
      "price": 18000,
      "status": "Available",
      "isFavourite": false
    },
    {
      "vehicleId": 3,
      "images": [
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80"
      ],
      "make": "Honda",
      "model": "Civic",
      "year": 2019,
      "mileage": 20000,
      "price": 17000,
      "status": "Sold",
      "isFavourite": false
    },
    {
      "vehicleId": 4,
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/7/75/2018_Ford_Focus_ST-Line_X_1.0.jpg"
      ],
      "make": "Ford",
      "model": "Focus",
      "year": 2021,
      "mileage": 12000,
      "price": 20000,
      "status": "inprogress",
      "isFavourite": true
    },
  ];

// Store the object into storage
const storedData = localStorage.getItem("vehicles");
if(storedData === null){
localStorage.setItem("vehicles", JSON.stringify(vehicles));
}

const getData = () => {
  if(storedData != null){
    const vehicleObj = JSON.parse(storedData)
    return [...vehicleObj];
    }
  else{
    const data = localStorage.getItem("vehicles");
    const vehicleObj = JSON.parse(data)
    return [...vehicleObj];
  }
};

const getFavouriteData = () => {

  if(storedData != null){
      const vehicleObj = JSON.parse(storedData)
      var filtered = vehicleObj.filter(function(elem) { 
        return elem.isFavourite !== false;  
      });
      return [...filtered];
   }
  else{
    const data = localStorage.getItem("vehicles");
    const vehicleObj = JSON.parse(data)
    var filtered = vehicleObj.filter(function(elem) { 
      return elem.isFavourite !== false;  
    });
    return [...filtered];
  }   
};


function Vehicle() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Make",
        accessor: "make",
        Cell: AvatarCell,
        imgAccessor: "images",
        // emailAccessor: "model",
        Filter: SelectColumnFilter,
        filter: "includes", 
      },
      {
        Header: "Model",
        accessor: "model",
        Filter: SelectColumnFilter,
        filter: "includes", 
      },
      {
        Header: "Price ($)",
        accessor: "price",
      },
      {
        Header: "Year",
        accessor: "year",
      },
      {
        Header: "Mileage",
        accessor: "mileage",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill, 
      },
      {
        Header: "Action",
        accessor: "isFavourite",
        Cell: ActionButton,
      },
    ],
    []
  );

  const favouriteColumns = React.useMemo(
    () => [
      {
        Header: "Make",
        accessor: "make",
        Cell: AvatarCell,
        imgAccessor: "images",
        // emailAccessor: "model",
        Filter: SelectColumnFilter,
        filter: "includes", 
      },
      {
        Header: "Model",
        accessor: "model",
        Filter: SelectColumnFilter,
        filter: "includes", 
      },
      {
        Header: "Price ($)",
        accessor: "price",
      },
      {
        Header: "Year",
        accessor: "year",
      },
      {
        Header: "Mileage",
        accessor: "mileage",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill, 
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);
  const favouriteData = React.useMemo(() => getFavouriteData(), []);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="p-5">
          <h1 className="text-xl font-semibold">
            Vehicle Search
          </h1>
        </div>
      <main className="inline-block shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-indigo-500/40 min-w-full rounded-lg overflow-hidden p-5 ">
        <Table columns={columns} data={data} />
      </main>
      <div className="p-5"></div>
      <main className="inline-block shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-indigo-500/40 min-w-full rounded-lg overflow-hidden p-5 ">
      <Favourite columns={favouriteColumns} data={favouriteData} />
      </main>
    </div>
  );
}

export default Vehicle;
