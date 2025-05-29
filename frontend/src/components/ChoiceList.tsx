import type { Choice } from "@shared/types";

type Props = {
  choices: Choice[];
  onSelect: (choice: Choice, index: number) => void;
};

const ChoiceList: React.FC<Props> = ({choices, onSelect}) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      {choices.map((choice, index) => (
        <button
          key={choice.id}
          onClick={() => onSelect(choice, index)}
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            backgroundColor: '#e0e0e0',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {`${index + 1}. ${choice.choiceText}`}
        </button>
      ))}
    </div>
  );
};

export default ChoiceList;