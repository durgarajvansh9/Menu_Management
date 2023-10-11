import React from 'react'
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <ul className="nav justify-content-end shadow-lg mb-5 py-3 bg-body rounded">
  <li className="nav-item">
    <a className="nav-link active fs-5 fw-bold text-black " aria-current="page" href="#">Breakfast</a>
  </li>
  <li className="nav-item">
    <a className="nav-link fs-5 fw-bold text-black" href="#">Lunch</a>
  </li>
  <li className="nav-item">
    <a className="nav-link fs-5 fw-bold text-black" href="#">Dinner</a>
</li>
<button type="button" class="btn btn-warning btn-sm rounded-pill my-2 p-2 button1 px-2">Add item</button>
<button type="button" class="btn btn-warning btn-sm rounded-pill my-2 p-2 button2">Update item</button>
</ul>
    </div>
  )
}
