import { FormEvent, forwardRef, KeyboardEvent, useState } from 'react';

import { TextInput } from '../Input';
import { Tag, TagGroup } from '../Tag';
import { Merge } from '../../types/polymophic';

export type TagInputBaseProps = {
  hint?: string;
  label: string;
  onTagsChange(tags: Array<string>): any;
  placeholder?: string,
  tags?: Array<string>;
};

export type TagInputProps = Merge<React.InputHTMLAttributes<HTMLInputElement>, TagInputBaseProps>;

export const TagInput = forwardRef<HTMLInputElement, TagInputProps>(({
  hint,
  label,
  onTagsChange,
  placeholder = 'Press ENTER to search for serveral terms',
  tags,
}) => {
  const [input, setInput] = useState('');
  const [values, setValues] = useState(tags);

  const handleKeyDown = (e: KeyboardEvent) => {
    if ([9, 13].includes(e.keyCode) && input) {
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
        placeholder={placeholder}
        type="text"
        value={input}
      />
      <TagGroup>
        {(values ?? []).map((tag) => (
          <Tag
            className="fr-mr-1w"
            key={tag}
            onClick={() => handleDeleteClick(tag)}
            title={`Tag ${tag}`}
          >
            {tag}
            <span className='fr-icon-close-line' />
          </Tag>
        ))}
      </TagGroup>
    </div>
  );
});
