import cn from 'classnames';
import { FormEvent, KeyboardEvent, useId, useRef, useState } from 'react';

import { DismissibleTag, TagGroup } from '../Tag';
import { Merge } from '../../types/polymophic';

export type TagInputBaseProps = {
  hint?: string;
  label: string;
  onTagsChange?: (tags: Array<string>) => any;
  tagTitle?: string | ((tag: string) => string);
  tags?: Array<string>;
};

export type TagInputProps = Merge<React.InputHTMLAttributes<HTMLInputElement>, TagInputBaseProps>;

export function TagInput({
  hint,
  label,
  onTagsChange = () => { },
  tagTitle = (tag: string): string => `Mot (${tag}) sélectionné, cliquer sur la touche "Entrée" ou la touche "Espace" pour le supprimer.`,
  tags,
  ...props
}: TagInputProps) {
  const [input, setInput] = useState('');
  const [values, setValues] = useState(tags);
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);

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
    <div className="fr-input-group">
      <label className={cn('fr-label')} htmlFor={id}>
        {label}
        {hint && <span className={cn('fr-hint-text')}>{hint}</span>}
      </label>
      <input
        autoComplete="off"
        className="fr-input"
        id={id}
        onChange={(event: FormEvent<HTMLInputElement>) => setInput((event?.target as HTMLTextAreaElement)?.value)}
        onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => handleKeyDown(event)}
        ref={inputRef}
        type="text"
        value={input}
        {...props}
      />
      <TagGroup className="fr-pt-1w">
        {(values ?? []).map((tag) => (
          <DismissibleTag
            aria-label={typeof tagTitle === 'function' ? tagTitle(tag) : tagTitle}
            className="fr-mr-1w"
            key={tag}
            onClick={() => handleDeleteClick(tag)}
          >
            {tag}
          </DismissibleTag>
        ))}
      </TagGroup>
    </div>
  );
}
