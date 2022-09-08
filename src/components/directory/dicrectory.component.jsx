import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";
const Directory = (props) => {
	const { categories } = props;
	return (
		<div className="directory-container">
			{categories.map((categ) => {
				return <CategoryItem category={categ} key={categ.id} />;
			})}
		</div>
	);
};

export default Directory;
