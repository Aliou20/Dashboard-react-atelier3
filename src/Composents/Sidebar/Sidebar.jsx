import "./Sidebar.css";
import React from "react";
import { AiFillDashboard, AiOutlineFileText, AiOutlinePartition} from "react-icons/ai";
import { Accordion, Col } from "react-bootstrap";
import { FaAddressCard, FaClipboardList, FaFile, FaListUl, FaUserAlt, FaUsers } from "react-icons/fa";
import { TfiFiles    } from "react-icons/tfi";
import { GoFile } from "react-icons/go";
import { IoCalendarNumberOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <Col className="col-2 sidebar position-fixed overflow-auto h-100 bg-light pb-5 shadow mt-5">
      <div className="conteneur pb-5">
        <div className="conteneur_dashoard d-flex align-items-center bg-black text-white">
          <AiFillDashboard className="mx-2"/>
          <div className="fw-bold">Dashboard</div>
        </div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <FaClipboardList className="mx-2 my-3"/>
              <div>Master List</div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="conteneur_dashoard d-flex align-items-center py-3">
                <FaUsers className="mx-2"/>
                <div>Students List</div>
              </div>
              <div className="conteneur_dashoard d-flex align-items-center py-3 ">
                <FaAddressCard className="mx-2"/>
                <div>Subjects List</div>
              </div>
              <div className="conteneur_dashoard d-flex align-items-center py-3 ">
                <FaListUl className="mx-2"/>
                <div>Cumlilum List</div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header> 
              <FaFile className="mx-2 my-3"/>
              <div>Records</div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="conteneur_dashoard d-flex align-items-center py-3 ">
                <AiFillDashboard className="mx-2"/>
                <div>Cumlilum List</div>
              </div>
              <div className="conteneur_dashoard d-flex align-items-center py-3 ">
                <AiFillDashboard className="mx-2"/>
                <div>Cumlilum List</div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header> 
              <FaFile className="mx-2 my-3"/>
              <div>Reports</div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="conteneur_dashoard d-flex align-items-center py-3 ">
                <TfiFiles className="mx-2"/>
                <div>Form 123</div>
              </div>
              <div className="conteneur_dashoard d-flex align-items-center py-3 ">
                <TfiFiles className="mx-2"/>
                <div>Students List</div>
              </div>
              <div className="conteneur_dashoard d-flex align-items-center py-3 ">
                <GoFile className="mx-2"/>
                <div>Candidates record</div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="conteneur_dashoard d-flex align-items-center bg-black text-white">
          <FaUserAlt className="mx-2 "/>
          <div className="fw-bold">Users</div>
        </div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <AiOutlinePartition className="mx-2 my-3"/>
              <div>Maitenance</div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="conteneur_dashoard d-flex align-items-center py-3">
                <IoCalendarNumberOutline className="mx-2"/>
                <div>School Year</div>
              </div>
              <div className="conteneur_dashoard d-flex align-items-center py-3 ">
                <AiOutlineFileText className="mx-2"/>
                <div>Grade List</div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Col>
  );
};

export default Sidebar;
