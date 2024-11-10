export const ListItem = (props) => {
  const { id, name, age, personalColor = "grey", hobbies } = props;
  return (
    <p style={{ color: personalColor }}>
      {id}:{name}({age}) {hobbies?.join(" / ")}
    </p>
  );
};
