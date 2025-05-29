type Props = {
  text: string;
}

const QuestionText: React.FC<Props> = ({ text }) => {
  return (
    <section style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '0.5rem' }}>
    <p>{text}</p>
    </section>
  );
};

export default QuestionText;