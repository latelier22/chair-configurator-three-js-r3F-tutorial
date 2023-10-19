import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  const {
    material,
    setMaterial,
    legs,
    setLegs,
    chairColors,
    chairColor,
    setChairColor,
    cushionColors,
    cushionColor,
    setCushionColor,
  } = useCustomization();

  return (
    <div className="configurator">

      <div className="configurator__section">
        <div className="configurator__section__title">Chair color</div>
        <div className="configurator__section__values">
          {chairColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === chairColor.color ? "item--active" : ""
              }`}
              onClick={() => setChairColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Configurator;
