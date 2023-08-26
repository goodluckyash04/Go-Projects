import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Details() {
  const location=useLocation()
  return (
   
          <div className="list-group overflow-auto" style={{maxHeight:"90vh"}}>
            <Link
              to="/products"
              className={`list-group-item list-group-item-action ${location.pathname==="/products"?"active":""}`}  
            >
              Product
            </Link>
            <Link
              to="/notes"
              className={`list-group-item list-group-item-action ${location.pathname==="/notes"?"active":""}`}
            >
              Notes
            </Link>
            <Link
              to="/commingsoon"
              className={`list-group-item list-group-item-action ${location.pathname==="/commingsoon"?"active":""}`}
            >
              Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
            <Link
              to="/commingsoon"
              className="list-group-item list-group-item-action"
            >
            Comming Soon
            </Link>
          </div>
        
  );
}
