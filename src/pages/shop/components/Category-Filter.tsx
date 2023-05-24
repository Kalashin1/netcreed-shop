import React from 'react';

type FilterItemProps = {
  category: string;
  brands: number;
}


const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = React.useState('Smart Phones');
  const categories = ['Smart Phones', 'Laptops', 'Smart Watches', 'Headphones', 'Speakers', 'Monitors', 'Televisions', 'Keyboards'];
  const FilterItem = ({ category, brands }: FilterItemProps) => {
    return (
      <div className="filter-item">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            checked={category === activeCategory}
            className="custom-control-input"
            id="cat-1"
          />
          <label onClick={() => setActiveCategory(category)} className="custom-control-label" htmlFor="cat-1">
            {category}
          </label>
        </div>
        <span className="item-count">{brands}</span>
      </div>
    );
  };
  return (
    <div className="widget widget-collapsible">
      <h3 className="widget-title">
        <a
          data-toggle="collapse"
          href="#widget-1"
          role="button"
          aria-expanded="true"
          aria-controls="widget-1"
        >
          Category
        </a>
      </h3>
      <div className="collapse show" id="widget-1">
        <div className="widget-body">
          <div className="filter-items filter-items-count">
            {categories && categories.map((c) => (
              <FilterItem key={c} category={c} brands={c.length} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
