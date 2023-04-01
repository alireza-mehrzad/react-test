interface Props {
  text: string;
  // color: string;
}

const Button = ({text}: Props) => {
  return (
    <>
      <button type="button" className="btn btn-primary">{text}</button>
    </>
  );
};

export default Button;
