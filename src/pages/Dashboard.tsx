/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Checkbox, EditInformationForm } from "../components";
import Table from "../components/Table";
import Modal from "../components/Modal";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const Dashboard = () => {
  const data = [
    {
      first_name: "Naruto",
      last_name: "Uzumaki",
      weight: "42.8",
      height: "5.4",
      city: "$45",
      membership: "monthly",
      actions: {
        edit: <MdModeEditOutline size={15} />,
        delete: <AiOutlineClose size={15} />,
      },
    },
    {
      first_name: "Sasuke",
      last_name: "Uchiha",
      weight: "56",
      height: "5.9",
      city: "$50",
      membership: "monthly",
      actions: {
        edit: <MdModeEditOutline size={15} />,
        delete: <AiOutlineClose size={15} />,
      },
    },
    {
      first_name: "Eren",
      last_name: "Yeager",
      weight: "74.7",
      height: "5.6",
      city: "$8,777",
      membership: "monthly",
      actions: {
        edit: <MdModeEditOutline size={15} />,
        delete: <AiOutlineClose size={15} />,
      },
    },
    {
      first_name: "Hinata",
      last_name: "Shoyo",
      weight: "66",
      height: "6",
      city: "$100",
      membership: "quarterly",
      actions: {
        edit: <MdModeEditOutline size={15} />,
        delete: <AiOutlineClose size={15} />,
      },
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
              <Table.Cell cellType="th">FirstName</Table.Cell>
              <Table.Cell cellType="th">LastName</Table.Cell>
              <Table.Cell cellType="th">Weight</Table.Cell>
              <Table.Cell cellType="th">Height</Table.Cell>
              <Table.Cell cellType="th">City</Table.Cell>
              <Table.Cell cellType="th">Membership Plan</Table.Cell>
              <Table.Cell className="actions w-40" cellType="th">
                Actions
              </Table.Cell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((i) => (
              <Table.Row
                key={i.first_name}
                className="hover:bg-primary-50 hover:bg-opacity-50"
              >
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>

                <Table.Cell>{i.first_name}</Table.Cell>
                <Table.Cell>{i.last_name}</Table.Cell>
                <Table.Cell>{i.weight}</Table.Cell>
                <Table.Cell>{i.height}</Table.Cell>
                <Table.Cell>{i.city}</Table.Cell>
                <Table.Cell>{i.membership}</Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Modal
                      title="Edit Profile"
                      trigger={i.actions?.edit}
                      content={<EditInformationForm />}
                    />
                    {i.actions?.delete}
                  </div>
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
