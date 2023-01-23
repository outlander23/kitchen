import React, { useEffect, useState } from "react";
import CardOrder from "./components/CardOrder";
import Headbar from "./components/Headbar";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);
  const [data, setData] = useState([]);
  const [totalPages] = useState(9);

  const handleClick = async (page) => {
    setCurrentPage(page);
    const res = await axios.get(
      `https://my-api.com/data?page=${page}&per_page=${perPage}`
    );
    setData(res.data);
  };

  // your data
  const orders = [
    {
      id: 1,
      status: "green",
      time: "12:00",
      items: [
        {
          id: 1,
          ok: true,
          name: "Chicken Burger",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
        {
          id: 2,
          ok: false,
          name: "Chicken Burger 2",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
      ],
    },

    {
      id: 1,
      status: "green",
      time: "12:00",
      items: [
        {
          id: 1,
          ok: true,
          name: "Chicken Burger",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
        {
          id: 2,
          ok: false,
          name: "Chicken Burger 2",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      status: "green",
      time: "12:00",
      items: [
        {
          id: 1,
          ok: true,
          name: "Chicken Burger",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
        {
          id: 2,
          ok: false,
          name: "Chicken Burger 2",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      status: "green",
      time: "12:00",
      items: [
        {
          id: 1,
          ok: true,
          name: "Chicken Burger",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
        {
          id: 2,
          ok: false,
          name: "Chicken Burger 2",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      status: "green",
      time: "12:00",
      items: [
        {
          id: 1,
          ok: false,
          name: "Chicken Burger",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
        {
          id: 2,
          ok: false,
          name: "Chicken Burger 2",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      status: "green",
      time: "12:00",
      items: [
        {
          id: 1,
          ok: true,
          name: "Chicken Burger",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
        {
          id: 2,
          ok: false,
          name: "Chicken Burger 2",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      status: "green",
      time: "12:00",
      items: [
        {
          id: 1,
          ok: true,
          name: "Chicken Burger",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
        {
          id: 2,
          ok: true,
          name: "Chicken Burger 2",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      status: "green",
      time: "12:00",
      items: [
        {
          id: 1,
          ok: false,
          name: "Chicken Burger",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
        {
          id: 2,
          ok: true,
          name: "Chicken Burger 2",
          sepcial: [
            {
              id: 1,
              name: "More Cheese",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-full h-full pl-4 pr-4 pb-4 ">
      <Headbar />
      <div className="w-full h-full p-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {orders.map((order) => {
            return (
              <CardOrder
                key={order.id}
                order={order.id}
                personal={order.items.length}
                time={order.time}
                data={order.items}
                status={order.status}
              />
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center font-poppins font-bold text-lg pt-4 ">
        <button
          onClick={() => handleClick(currentPage - 1)}
          className="mr-4"
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {[1, 2, 3, 4].map((pageNumber) => (
          <button
            key={pageNumber}
            className={` mr-4 ${
              currentPage === pageNumber &&
              "bg-purple-500 text-white rounded-full h-[30px] w-[15px]"
            } `}
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <span className="text-gray-600 mr-2">...</span>
        <button onClick={() => handleClick(totalPages)}>{totalPages}</button>
        <button
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="ml-4"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
