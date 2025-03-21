const CoreConcepts = ({image,description,title}) => {
  return (
    <div>
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </div>
  );
};

export default CoreConcepts;