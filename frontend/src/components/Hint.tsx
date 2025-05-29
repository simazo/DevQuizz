type Props = {
  hint: string;
  visible: boolean;
};

const Hint: React.FC<Props> = ({ hint, visible }) => {
  if (!visible) return null;

  return (
    <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f9f9f9' }}>
      <strong>ヒント：</strong> {hint}
    </div>
  );
};

export default Hint;