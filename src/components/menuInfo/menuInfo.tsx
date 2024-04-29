import React from 'react';
import { MenuDTO } from '../../models/IVenue';

const MenuInfo: React.FC<{ menu: MenuDTO; index: number }> = ({
    menu,
    index,
}) => {
    return (
        <div className="container-md">
            <div className="card shadow mb-3">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0">Menu {index + 1}</h5>
                    <span className="text-muted">#{menu.menuId}</span>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        <strong>Name:</strong> {menu.name}
                    </p>
                    <p className="card-text">
                        <strong>Description:</strong>
                    </p>
                    <pre className="card-text">{menu.description}</pre>
                    <p className="card-text">
                        <strong>Type:</strong> {menu.type}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MenuInfo;
