import { FormEvent, KeyboardEvent, useState } from 'react';

import { TextInput } from '../Input';
import { Tag, TagGroup } from '../Tag';
import { Merge } from '../../types/polymophic';

export type TagInputBaseProps = {
  hint?: string;
  label: string;
  onTagsChange(tags: Array<string>): any;
  tags?: Array<string>;
};

export type TagInputProps = Merge<React.InputHTMLAttributes<HTMLInputElement>, TagInputBaseProps>;

export const TagInput = ({
  hint,
  label,
  onTagsChange,
  tags,
  ...props
}: TagInputProps) => {
  const [input, setInput] = useState('');
  const [values, setValues] = useState(tags);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      if (values?.includes(input.trim())) return;
      const newValues = [...(values ?? []), input.trim()];
      setValues(newValues);
      setInput('');
      onTagsChange(newValues);
    }
  };

  const handleDeleteClick = (tag: string) => {
    const newValues = [...(values ?? []).filter((el) => el !== tag)];
    setValues(newValues);
    onTagsChange(newValues);
  };

  return (
    <div>
      <TextInput
        hint={hint}
        label={label}
        onChange={(event: FormEvent<HTMLInputElement>) => setInput((event?.target as HTMLTextAreaElement)?.value)}
        onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => handleKeyDown(event)}
        type="text"
        value={input}
        {...props}
      />
      <TagGroup>
        {(values ?? []).map((tag) => (
          <Tag
            className="fr-mr-1w"
            key={tag}
            onClick={() => handleDeleteClick(tag)}
            title={`Mot (${tag}) sélectionné, cliquer sur la touche "Entrée" ou la touche "Espace" pour le supprimer.`}
          >
            {tag}
            <span className='fr-icon-close-line' />
          </Tag>
        ))}
      </TagGroup>
    </div>
  );
};
