import React from 'react';

const ColorFilter = () => {

  const [activeColor, setActiveColor] = React.useState('#3399cc');

  const colors = ['#b87145', '#f0c04a', '#333333', '#cc3333', '#3399cc', '#669933', '#f2719c', '#ebebeb'];

  const FilterItem = ({ color }: { color: string }) => {
    return (
      <a href="" onClick={(e) => {
        e.preventDefault();
        setActiveColor(color);
      }} className={color === activeColor ? 'selected' : ''} style={{ background: color }}>
        <span className="sr-only">Color Name</span>
      </a>
    );
  };

  return (
    <div className="widget widget-collapsible">
      <h3 className="widget-title">
        <a
          data-toggle="collapse"
          href="#widget-3"
          role="button"
          aria-expanded="true"
          aria-controls="widget-3"
        >
          Colour
        </a>
      </h3>
      {/* <!-- End .widget-title --> */}

      <div className="collapse show" id="widget-3">
        <div className="widget-body">
          <div className="filter-colors">
            {colors && colors.map((c) => (
              <FilterItem color={c} key={c} />
            ))}
          </div>
          {/* <!-- End .filter-colors --> */}
        </div>
        {/* <!-- End .widget-body --> */}
      </div>
      {/* <!-- End .collapse --> */}
    </div>
  );
};

export default ColorFilter;
