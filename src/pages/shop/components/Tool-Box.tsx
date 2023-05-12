import React from 'react';

const ToolBox = () => {
  return (
    <div className="toolbox">
      <div className="toolbox-left">
        <div className="toolbox-info">
          Showing <span>9 of 56</span> Products
        </div>
        {/* <!-- End .toolbox-info --> */}
      </div>
      {/* <!-- End .toolbox-left --> */}

      <div className="toolbox-right">
        <div className="toolbox-sort">
          <label htmlFor="sortby">Sort by:</label>
          <div className="select-custom">
            <select name="sortby" id="sortby" className="form-control">
              <option value="popularity" selected>
                Most Popular
              </option>
              <option value="rating">Most Rated</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>
        {/* <!-- End .toolbox-sort --> */}
        <div className="toolbox-layout">
          <a href="category-list.html" className="btn-layout">
            <svg width="16" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="10" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="10" height="4" />
            </svg>
          </a>

          <a href="category-2cols.html" className="btn-layout">
            <svg width="10" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="4" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" />
            </svg>
          </a>

          <a href="category.html" className="btn-layout">
            <svg width="16" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="4" height="4" />
              <rect x="12" y="0" width="4" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" />
              <rect x="12" y="6" width="4" height="4" />
            </svg>
          </a>

          <a href="category-4cols.html" className="btn-layout active">
            <svg width="22" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="4" height="4" />
              <rect x="12" y="0" width="4" height="4" />
              <rect x="18" y="0" width="4" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" />
              <rect x="12" y="6" width="4" height="4" />
              <rect x="18" y="6" width="4" height="4" />
            </svg>
          </a>
        </div>
        {/* <!-- End .toolbox-layout --> */}
      </div>
      {/* <!-- End .toolbox-right --> */}
    </div>
  );
};

export default ToolBox;
