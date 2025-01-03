import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { TbMenuDeep } from "react-icons/tb";
import FilterItem from "./FilterItem";
import FiltersContainer from "./FiltersContainer";

import { useDispatch, useSelector } from "react-redux";
import {  RootState, sortBy } from "../../../Store";
import { SortOptions } from "../../../utils";
import "./MobileFilter.css";
function MobileFilter({
  isFiltersLoading,
  setIsFiltersLoading,
}: {
  isFiltersLoading: boolean;
  setIsFiltersLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const sort = useSelector((state: RootState) => {
    return state.products.sortOption;
  });
  const selectedCategory = useSelector(
    (state: RootState) => state.products.selectedCategory
  );
  const categoryList = useSelector(
    (state: RootState) => state.products.categoryList
  );
  const dispatcher = useDispatch();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  
  return (
    <>
      <div className="d-flex w-100 align-items-start justify-content-center gap-3">
        <div
          className="filter-btn d-flex  border border-rounded fs-7 fw-600 justify-content-between align-items-center px-2 py-2 "
          onClick={() => {
            if (sortOpen) {
              setSortOpen(!sortOpen);
            }
            setFilterOpen(!filterOpen);
          }}
        >
          Filter
          <TbMenuDeep className="fs-7 fw-600" />
        </div>
        <div className="filter-btn d-flex flex-column  fs-7 fw-600 border border-rounded justify-content-between align-items-center px-3 py-2">
          <div
            className="d-flex w-100 justify-content-between align-items-center"
            onClick={() => {
              if (filterOpen) {
                setFilterOpen(!filterOpen);
              }
              setSortOpen(!sortOpen);
            }}
          >
            {sort}
            {sortOpen ? (
              <FaChevronUp className="fs-7 fw-600" />
            ) : (
              <FaChevronDown className="fs-7 fw-600" />
            )}
          </div>
          {sortOpen ? (
            <div className="mt-3 d-flex flex-column align-items-center justify-content-center gap-2">
              <FilterItem
                onClick={() => {
                  dispatcher(sortBy(SortOptions.Rating));
                  setSortOpen(!sortOpen);
                }}
                className="text-secondary"
              >
                Rating
              </FilterItem>

              <FilterItem
                onClick={() => {
                  dispatcher(sortBy(SortOptions.Name));
                  setSortOpen(!sortOpen);
                }}
                className="text-secondary"
              >
                Name
              </FilterItem>
              <FilterItem
                onClick={() => {
                  dispatcher(sortBy(SortOptions.HighestPrice));
                  setSortOpen(!sortOpen);
                }}
                className="text-secondary text-align-center"
              >
                Highest Price
              </FilterItem>
              <FilterItem
                onClick={() => {
                  dispatcher(sortBy(SortOptions.LowestPrice));
                  setSortOpen(!sortOpen);
                }}
                className="text-secondary"
              >
                Lowest Price
              </FilterItem>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {filterOpen && (
        <FiltersContainer
          isFiltersLoading={isFiltersLoading}
          setIsFiltersLoading={setIsFiltersLoading}
        />
      )}
    </>
  );
}

export default MobileFilter;
