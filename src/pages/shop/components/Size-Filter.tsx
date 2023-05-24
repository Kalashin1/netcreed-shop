import React from 'react';

type FilterItemProps = {
  size?: string
}


const SizeFilter = () => {
  const [activeSize, setActiveSize] = React.useState('M');

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const FilterItem = ({ size = 'XS' }: FilterItemProps) => {
    return (
      <div className="filter-item">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            checked={size === activeSize}
            className="custom-control-input"
            id="size-1"
          />
          <label onClick={e => setActiveSize(size)} className="custom-control-label" htmlFor="size-1">
            {size}
          </label>
        </div>
      </div>
    );
  };

  return (
    <div className="widget widget-collapsible">
      <h3 className="widget-title">
        <a
          data-toggle="collapse"
          href="#widget-2"
          role="button"
          aria-expanded="true"
          aria-controls="widget-2"
        >
          Size
        </a>
      </h3>

      <div className="collapse show" id="widget-2">
        <div className="widget-body">
          <div className="filter-items">
            { sizes.map((size) => (
              <FilterItem size={size} key={size} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeFilter;
