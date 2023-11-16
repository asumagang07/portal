/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";
import { TTableProps } from "./types";
import Modal from "../Modal";
import { EditInformationForm } from "../Forms";
import { Checkbox } from "../Checkbox";
import styled from "styled-components";

const Table: FC<TTableProps> = (props) => {
  const { layout = "list" } = props;

  return (
    <div className="w-full flex flex-col border border-gray-300 rounded p-2">
      <div className="flex items-center justify-between">
        <div className="">
          {/* <button className="">Filter 1</button>
          <button>Filter 2</button>
          <button>Filter 3</button> */}
        </div>
        <div className="flex border">
          <div className="p-1">1</div>
          <div className="p-1">2</div>
          <div className="p-1">3</div>
        </div>
      </div>
      <Styledtable className="w-full text-sm text-left rtl:text-right border-separate border-spacing-x-0 border-spacing-y-2 bg-gray-50 p-2">
        <thead className="text-sm text-white  bg-black table-header-group mb-4 ">
          <tr>
            <th className="w-10">
              <Checkbox />
            </th>
            <th scope="col" className="px-6 py-3">
              First Name
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Last Name</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Category</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Price</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="mt-2">
          <tr className="bg-white border border-gray-200 hover:border-blue-500 hover:shadow-lg hover:cursor-pointer my-1 ">
            <td>
              <Checkbox />
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4 text-right">
              <Modal
                title="Edit Profile"
                trigger={
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                }
                content={<EditInformationForm />}
              />
            </td>
          </tr>
          {/* ////////////////////////////////// */}
          <tr className="bg-white border border-gray-200 hover:border-blue-500 hover:shadow-lg hover:cursor-pointer my-1 ">
            <td className="w-10">
              <Checkbox />
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4 text-right">
              <Modal
                title="Edit Profile"
                trigger={
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                }
                content={<EditInformationForm />}
              />
            </td>
          </tr>
        </tbody>
      </Styledtable>
    </div>
  );
};

export default Table;

const Styledtable = styled.table`
  th,
  td {
    padding: 0.75rem 1.5rem;
  }
`;
