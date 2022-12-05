import React, { FC } from 'react';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

type CategoriesProps = {
  value: number;
  onChangeCategory: (index: number) => void;
};

const Categories: FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  return (
    <div className='categories'>
      <ul>
        {categories.map((categoryName, index) => (
          <li
            className={value === index ? 'active' : ''}
            key={index}
            onClick={() => onChangeCategory(index)}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
