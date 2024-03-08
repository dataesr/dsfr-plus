import { FormEvent, forwardRef, KeyboardEvent, useState } from 'react';

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

export const TagInput = forwardRef<HTMLInputElement, TagInputProps>(({
  hint,
  label,
  onTagsChange,
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
        type="text"
        value={input}
        label={label}
        hint={hint}
        onChange={(event: FormEvent<HTMLInputElement>) => setInput((event?.target as HTMLTextAreaElement)?.value)}
        onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => handleKeyDown(event)}
      />
      <TagGroup>
        {(values ?? []).map((tag) => (
          <Tag
            key={tag}
            className="fr-mr-1w"
            onClick={() => handleDeleteClick(tag)}
          >
            {tag}
            {/* <Icon iconPosition="right" name="ri-close-line" /> */}
          </Tag>
        ))}
      </TagGroup>
    </div>
  );
});
