interface Props {
  children: JSX.Element
}

export function Default(props: Props) {
  const { children } = props;

  return (
    <div style={{ backgroundColor: '#000' }}>
      {children}
    </div>
  );
}

export default Default;
