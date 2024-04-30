/* eslint-disable no-unused-vars */
import AdvertisementCard from "../components/AdvertisementCard";
import {
  NavLink,
  json,
  useLoaderData,
  useNavigation,
  useNavigate,
} from "react-router-dom";
import NavBar from "../components/NavBar";
import React, { useEffect, useState } from "react";
import { IconButton, ButtonGroup } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Spinner from "../components/Spinner.jsx";

export default function RequestsPage() {
  const navigate = useNavigate();

  const requests = useLoaderData().requests;
  const category = useLoaderData().category;

  const totalCount = useLoaderData().totalCount;
  const itemsPerPage = 8;
  const totalPageCount = Math.ceil(totalCount / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const navigation = useNavigation();

  if (navigation.state === "submitting") {
    return (
      <div className="flex justify-center items-center h-[50rem]">
        <Spinner />
      </div>
    );
  }
  const getPageNumbers = () => {
    const maxVisiblePages = 7;
    let startPage, endPage;

    if (totalPageCount <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPageCount;
    } else {
      startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
      endPage = startPage + maxVisiblePages - 1;

      if (endPage > totalPageCount) {
        endPage = totalPageCount;
        startPage = endPage - maxVisiblePages + 1;
      }
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  useEffect(() => {
    navigate(`/requests/?category=${category}&page=${currentPage}`); // Update the URL with the current page
  }, [currentPage, navigate, category]);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const next = () => {
    if (currentPage < totalPageCount) setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const visiblePageNumbers = getPageNumbers();

  return (
    <>
      <ButtonGroup variant="outlined" className="mb-4 justify-center">
        <IconButton
          onClick={prev}
          style={{ color: currentPage === 1 ? "#A4A4A4" : "white" }}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-5 w-5" />
        </IconButton>
        {visiblePageNumbers.map((page) => (
          <IconButton
            key={page}
            onClick={() => handlePaginationClick(page)}
            style={{ color: currentPage === page ? "white" : "#A4A4A4" }}
          >
            {page}
          </IconButton>
        ))}
        <IconButton
          onClick={next}
          style={{
            color: currentPage === totalPageCount ? "#A4A4A4" : "white",
          }}
        >
          <ArrowRightIcon strokeWidth={2} className="h-5 w-5" />
        </IconButton>
      </ButtonGroup>
      <header className="flex gap-2">
        <NavLink
          to="/requests/create-request"
          className="w-12 h-12 bg-[#1A30A6] rounded-full flex justify-center items-center"
        >
          <div className="w-4 bg-white h-[1px]"></div>
          <div className="w-[1px] bg-white h-4 relative right-2"></div>
        </NavLink>
        <NavLink
          to="/requests/filter"
          className="w-12 h-12 bg-[#1E1E1E] rounded-full flex flex-col gap-1 justify-center items-center"
        >
          <div className="w-5 bg-white h-[2px]"></div>
          <div className="w-3 bg-white h-[2px]"></div>
          <div className="w-2 bg-white h-[2px]"></div>
        </NavLink>
      </header>
      <main className="mt-[24px] flex flex-col gap-5">
        {requests.length === 0 ? (
          <p>No Requests Found</p>
        ) : (
          requests.map((request) => (
            <AdvertisementCard
              key={request.id}
              category={request.category}
              requestName={request.title}
              requestId={request.id}
              eventDate={request.eventDate}
              eventTime={request.eventTime}
              price={request.price}
            />
          ))
        )}
        <NavBar />
      </main>
    </>
  );
}

export async function loader({ request, params }) {
  const url = new URL(request.url);

  const category = +url.searchParams.get("category");
  const itemsPerPage = 8;
  const searchParams = {
    page: +url.searchParams.get("page") || 1,
    amountOnPage: itemsPerPage,
  };

  if (+url.searchParams.get("category")) {
    searchParams.category = +url.searchParams.get("category");
  }

  const response = await fetch(
    "https://testtmpss.azurewebsites.net/api/v1/support/requests",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(searchParams),
    }
  );

  if (!response.ok) {
    console.error("Failed to fetch data:", response.statusText);
    throw json({ message: "Couldn't fetch the data" }, 400);
  }
  const parsedRes = await response.json();

  return {
    requests: parsedRes.items,
    category: +url.searchParams.get("category"),
    totalCount: parsedRes.itemsCount,
  };
}
