import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BreadCrumbProps {
  firstLevel?: string;
  secondLevel: string;
  thirdLevel?: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  firstLevel = 'Home',
  secondLevel,
  thirdLevel,
}) => {
  const goto = useNavigate();

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <span style={{ cursor: 'pointer' }} onClick={() => goto('/')}>{firstLevel}</span>
          </li>
          <li className="breadcrumb-item">
            <span style={{ cursor: 'pointer' }} onClick={() => goto(`/${secondLevel.toLowerCase()}`)}>{ secondLevel }</span>
          </li>
          {thirdLevel ? (
            <li className="breadcrumb-item active" aria-current="page">
              {thirdLevel}
            </li>
          ) : (
            <span></span>
          )
          }
        </ol>
      </div>
      {/* <!-- End .container --> */}
    </nav>
  );
};

export default BreadCrumb;
