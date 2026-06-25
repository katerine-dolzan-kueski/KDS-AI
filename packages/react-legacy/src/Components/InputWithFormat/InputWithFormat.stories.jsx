import React from 'react';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { InputWithFormat } from '../InputWithFormat';

const DefaultTemplate = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <InputWithFormat {...args} />
  </>
);

function toGroups(text, groups, separator = ' ') {
  const regExpPattern = groups.map(n => `(.{1,${n}})?`).join('');
  const regExp = new RegExp(regExpPattern);
  return text
    .match(regExp) // Group characters in the generated pattern
    ?.slice(1, groups.length + 1) // Remove the full match from the results
    .filter(Boolean) // Remove empty matching groups
    .join(separator) ?? ''; // Join by separator
}

function toNumeric(text) {
  return text.replace(/[^0-9.]/g, '');
}

function inGroupsOf(text, groupSize, separator = ' ') {
  const regExp = new RegExp(`(.{1,${groupSize}})`, 'g');
  const groups = text.match(regExp); // Group characters in the generated pattern
  if (!groups) return '';
  return groups.join(separator) ?? ''; // Join by separator
}

function reverseString(text) {
  return text.split('').reverse().join('');
}

function rightToLeft(text, fn, ...args) {
  return reverseString(fn(reverseString(text), ...args));
}

export const NoFormat = DefaultTemplate.bind({});
export const Phone = DefaultTemplate.bind({});
export const Currency = DefaultTemplate.bind({});
export const Percentage = DefaultTemplate.bind({});

Phone.args = {
  $prefix: '+(52)',
  $suffix: '📞',
  formatter: text => toGroups(toNumeric(text), [3, 3, 4], '-'),
  label: 'Teléfono',
};

Currency.args = {
  $prefix: '$',
  formatter: (text) => {
    const [integers = '0', decimals] = toNumeric(text).split('.');
    const formattedInt = rightToLeft(integers, inGroupsOf, 3, ',');

    if (typeof decimals === 'undefined') return formattedInt;

    return `${formattedInt}.${decimals.substr(0, 2)}`;
  },
  label: 'Ingresa una cantidad',
};

Percentage.args = {
  $suffix: '%',
  formatter: text => Math.max(Math.min(parseInt(toNumeric(text || '0')), 100), 0),
  label: 'Ingresa un porcentaje',
};

export default {
  argTypes: {
    $error: {
      defaultValue: false,
      description: 'It will change the style for error style',
      type: 'boolean',
    },
    $prefix: {
      defaultValue: undefined,
      description: 'A prefix for the input',
      type: 'string',
    },
    $suffix: {
      defaultValue: undefined,
      description: 'A suffix for the input',
      type: 'string',
    },
    helperText: {
      defaultValue: 'Message',
      description: 'It will show a label under the input for instructions or errors',
      type: 'string',
    },
    label: {
      defaultValue: 'Label',
      description: 'It will show a label upper the input',
      type: 'string',
    },
  },
  component: InputWithFormat,
  title: 'OLD Design System/Components/InputWithFormat',
};
