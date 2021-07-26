import * as themes from '../themes';

interface Props {
  name?: NonNullable<keyof typeof themes>;
  children: JSX.Element
}

function Theme(props: Props) {
  const { name, children } = props;

  const Container = themes[name || 'Default'];

  return (
    <Container>
      {children}
    </Container>
  );
}

Theme.defaultProps = {
  name: 'Default',
};

export default Theme;
