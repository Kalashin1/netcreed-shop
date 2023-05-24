import React from 'react';

type FilterItemProps = {
  brand: string;
}

const BrandFilter = () => {

  const [activeBrand, setActiveBrand] = React.useState('Apple');
  const brands = ['Apple', 'Samsung', 'Dell', 'HP', 'Lenovo', 'Acer', 'Toshiba', 'Google'];



  const BrandFilter = ({ brand }: FilterItemProps) => {
    return (
      <div className="filter-item">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            checked={brand === activeBrand}
            className="custom-control-input"
            id="brand-1"
          />
          <label onClick={() => setActiveBrand(brand)} className="custom-control-label" htmlFor="brand-1">
            {brand}
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
          href="#widget-4"
          role="button"
          aria-expanded="true"
          aria-controls="widget-4"
        >
          Brand
        </a>
      </h3>

      <div className="collapse show" id="widget-4">
        <div className="widget-body">
          <div className="filter-items">
            {brands && brands.map((b) => (
              <BrandFilter key={b} brand={b} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandFilter;
