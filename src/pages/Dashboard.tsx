/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Checkbox, EditInformationForm } from "../components";
import Table from "../components/Table";
import Modal from "../components/Modal";

const Dashboard = () => {
  const data = [
    {
      name: "Panda",
      rate: "$45",
      qty: "$1",
      subTotal: "$45",
    },
    {
      name: "Panda Pillows",
      rate: "$50",
      qty: "$1",
      subTotal: "$50",
    },
    {
      name: "Bacardi",
      rate: "$8,777",
      qty: "$1",
      subTotal: "$8,777",
    },
    {
      name: "Pillow",
      rate: "$100",
      qty: "$1",
      subTotal: "$100",
    },
  ];
  return (
    <div>
      <div className="">
        <Table>
          <Table.Header>
            <Table.Row className="!bg-transparent">
              <Table.Cell cellType="th" className="w-20">
                <Checkbox />
              </Table.Cell>
              <Table.Cell cellType="th">Item</Table.Cell>
              <Table.Cell cellType="th">Rate</Table.Cell>
              <Table.Cell cellType="th">Quantity</Table.Cell>
              <Table.Cell cellType="th">Subtotal</Table.Cell>
              <Table.Cell className="actions w-40" cellType="th">
                Actions
              </Table.Cell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((i) => (
              <Table.Row
                key={i.name}
                className="hover:bg-primary-50 hover:bg-opacity-50"
              >
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>

                <Table.Cell>{i.name}</Table.Cell>
                <Table.Cell>{i.rate}</Table.Cell>
                <Table.Cell>{i.qty}</Table.Cell>
                <Table.Cell>{i.subTotal}</Table.Cell>
                <Table.Cell>
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
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
