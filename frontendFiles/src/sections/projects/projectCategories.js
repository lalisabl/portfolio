import { useState } from 'react';
import CategoryButton from './categoryButton';

const projectCategories = ({ categories, onFilterProjects }) => {
  const [acvtiveCategory, setacvtiveCategory] = useState('all');
  const changeCategoryHandler = (activeCat) => {
    setacvtiveCategory(activeCat);
    onFilterProjects(activeCat);
  };
  return (
    <div className="portfolio__category">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => changeCategoryHandler(category)}
          className={`btn cat_btn ${
            acvtiveCategory === category ? 'primary' : 'white'
          }`}
        />
      ))}
    </div>
  );
};

export default projectCategories;
