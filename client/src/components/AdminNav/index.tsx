import React from "react"
import { NavLink } from "react-router-dom"
import {StyledAdminNav} from "./StyledAdminNav"

export default function AdminNav () {
    return (
        <StyledAdminNav>
             <ul className="adminNav">
                <li className="products">
                    <NavLink to="/admin/products" className="navlink" activeClassName="selected">Products</NavLink>
                </li>
                <li className="categories">
                <NavLink  to="/admin/category" className="navlink" activeClassName="selected">Categories</NavLink>
                </li>
                <li className="orders">
                <NavLink  to="/admin/orders" className="navlink" activeClassName="selected">Orders</NavLink>
                </li>
                <li className="users">
                <NavLink  to="/admin/users" className="navlink" activeClassName="selected">Users</NavLink>
                </li>
                <li className="stock">
                <NavLink  to="/admin/stock" className="navlink" activeClassName="selected">Stock</NavLink>
                </li>
                <li className="offers">
                <NavLink  to="/admin/offers" className="navlink" activeClassName="selected">Offers</NavLink>
                </li>
            </ul>
            <ul className="adminNavMovile">
                <li className="">      
                    <NavLink to="/admin/products" className="navlink" activeClassName="selected"><i className="fas fa-shoe-prints"></i></NavLink>               
                </li>
                <li className="categories">
                <NavLink  to="/admin/category" className="navlink" activeClassName="selected"> <i className="fas fa-list"></i></NavLink>
                </li>
                <li className="orders">
                <NavLink  to="/admin/orders" className="navlink" activeClassName="selected"> <i className="fas fa-file-invoice-dollar"></i></NavLink>
                </li>
                <li className="users">
                <NavLink  to="/admin/users" className="navlink" activeClassName="selected"><i className="fas fa-users fasMobile"></i></NavLink>
                </li>
                <li className="stock">
                <NavLink  to="/admin/stock" className="navlink" activeClassName="selected"><i className="fas fa-layer-group"></i></NavLink>
                </li>
                <li className="offers">
                <NavLink  to="/admin/offers" className="navlink" activeClassName="selected"><i className="fas fa-tags"></i></NavLink>
                </li>
            </ul>
        </StyledAdminNav>
    )
}