import { useState } from 'react';

type FilterProps = {
  onFilterChange: (filters: {
    priceRange: string;
    sortBy: string;
  }) => void;
};

export default function ProductFilters({ onFilterChange }: FilterProps) {
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const handleFilterChange = (type: string, value: string) => {
    if (type === 'price') {
      setPriceRange(value);
    } else if (type === 'sort') {
      setSortBy(value);
    }

    onFilterChange({
      priceRange: type === 'price' ? value : priceRange,
      sortBy: type === 'sort' ? value : sortBy,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-light mb-4">GIÁ</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="price"
              value="all"
              checked={priceRange === 'all'}
              onChange={(e) => handleFilterChange('price', e.target.value)}
              className="text-accent"
            />
            <span className="text-sm">Tất cả</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="price"
              value="under500"
              checked={priceRange === 'under500'}
              onChange={(e) => handleFilterChange('price', e.target.value)}
              className="text-accent"
            />
            <span className="text-sm">Dưới 500.000₫</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="price"
              value="500to1000"
              checked={priceRange === '500to1000'}
              onChange={(e) => handleFilterChange('price', e.target.value)}
              className="text-accent"
            />
            <span className="text-sm">500.000₫ - 1.000.000₫</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="price"
              value="above1000"
              checked={priceRange === 'above1000'}
              onChange={(e) => handleFilterChange('price', e.target.value)}
              className="text-accent"
            />
            <span className="text-sm">Trên 1.000.000₫</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-light mb-4">SẮP XẾP</h3>
        <select
          value={sortBy}
          onChange={(e) => handleFilterChange('sort', e.target.value)}
          className="w-full px-4 py-2 dark:bg-[#2A2A2A] bg-white dark:text-white text-black border border-light-border dark:border-vintage-black/10 focus:outline-none focus:border-accent"
        >
          <option value="default">Mặc định</option>
          <option value="price-asc">Giá: Thấp đến cao</option>
          <option value="price-desc">Giá: Cao đến thấp</option>
          <option value="name-asc">Tên: A-Z</option>
          <option value="name-desc">Tên: Z-A</option>
        </select>
      </div>
    </div>
  );
} 