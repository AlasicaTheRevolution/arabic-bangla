import React from "react";
import { FaHome, FaRegClone } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import ActiveLink from "../Dashboard/ActiveLink";
import Navbar from "../Shared/Navbar/Navbar";

function Nahu() {


  return (
    <div>
      {/* <Navbar /> */}
      <div className="min-h-screen ">
        <div className="sub-category">
          <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-[#F1F5F9] px-10">
              <Outlet />
              <h1>
                This is a content Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta quia tenetur? Atque, magni? Neque accusamus numquam itaque at atque voluptatum provident nam, expedita dicta deserunt aut, nulla suscipit porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam atque enim eveniet a tempora saepe, ullam eos dignissimos esse adipisci illum neque et deleniti provident accusantium itaque sequi nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veniam, ea, culpa voluptates recusandae ducimus sapiente maxime, aut perspiciatis adipisci cum provident omnis facere velit ipsum fuga deserunt harum nesciunt.This is a content Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta quia tenetur? Atque, magni? Neque accusamus numquam itaque at atque voluptatum provident nam, expedita dicta deserunt aut, nulla suscipit porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam atque enim eveniet a tempora saepe, ullam eos dignissimos esse adipisci illum neque et deleniti provident accusantium itaque sequi nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veniam, ea, culpa voluptates recusandae ducimus sapiente maxime, aut perspiciatis adipisci cum provident omnis facere velit ipsum fuga deserunt harum nesciunt.This is a content Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta quia tenetur? Atque, magni? Neque accusamus numquam itaque at atque voluptatum provident nam, expedita dicta deserunt aut, nulla suscipit porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam atque enim eveniet a tempora saepe, ullam eos dignissimos esse adipisci illum neque et deleniti provident accusantium itaque sequi nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veniam, ea, culpa voluptates recusandae ducimus sapiente maxime, aut perspiciatis adipisci cum provident omnis facere velit ipsum fuga deserunt harum nesciunt.This is a content Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta quia tenetur? Atque, magni? Neque accusamus numquam itaque at atque voluptatum provident nam, expedita dicta deserunt aut, nulla suscipit porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam atque enim eveniet a tempora saepe, ullam eos dignissimos esse adipisci illum neque et deleniti provident accusantium itaque sequi nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veniam, ea, culpa voluptates recusandae ducimus sapiente maxime, aut perspiciatis adipisci cum provident omnis facere velit ipsum fuga deserunt harum nesciunt.This is a content Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta quia tenetur? Atque, magni? Neque accusamus numquam itaque at atque voluptatum provident nam, expedita dicta deserunt aut, nulla suscipit porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam atque enim eveniet a tempora saepe, ullam eos dignissimos esse adipisci illum neque et deleniti provident accusantium itaque sequi nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veniam, ea, culpa voluptates recusandae ducimus sapiente maxime, aut perspiciatis adipisci cum provident omnis facere velit ipsum fuga deserunt harum nesciunt.This is a content Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta quia tenetur? Atque, magni? Neque accusamus numquam itaque at atque voluptatum provident nam, expedita dicta deserunt aut, nulla suscipit porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam atque enim eveniet a tempora saepe, ullam eos dignissimos esse adipisci illum neque et deleniti provident accusantium itaque sequi nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veniam, ea, culpa voluptates recusandae ducimus sapiente maxime, aut perspiciatis adipisci cum provident omnis facere velit ipsum fuga deserunt harum nesciunt.This is a content Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta quia tenetur? Atque, magni? Neque accusamus numquam itaque at atque voluptatum provident nam, expedita dicta deserunt aut, nulla suscipit porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam atque enim eveniet a tempora saepe, ullam eos dignissimos esse adipisci illum neque et deleniti provident accusantium itaque sequi nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veniam, ea, culpa voluptates recusandae ducimus sapiente maxime, aut perspiciatis adipisci cum provident omnis facere velit ipsum fuga deserunt harum nesciunt.
              </h1>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 px-[3px]  overflow-y-auto w-64 bg-base-100 text-base-content">
                <li>
                  <ActiveLink to="/dashboard"><FaHome />category - 1</ActiveLink>
                  <ActiveLink to="/dashboard"><FaHome />category - 2</ActiveLink>
                  <ActiveLink to="/dashboard"><FaHome />category - 2</ActiveLink>
                  <ActiveLink to="/dashboard"><FaHome />category - 3</ActiveLink>
                  <ActiveLink to="/dashboard"><FaHome />category - 4</ActiveLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nahu;
