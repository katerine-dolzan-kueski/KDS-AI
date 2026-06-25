import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { filledNames, flatNames, outlinedNames } from '../Icon/Categories';

export default {
  component: Icon,
  title: 'OLD Design System/Components/Icon',
};

const List = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

const ListItem = styled.div`
  align-content: center;
  align-items: center;
  background-color: #e3e4e5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  width: 150px;
`;

const filledList = Object.entries(filledNames).sort();
const flatList = Object.entries(flatNames).sort();
const outlinedList = Object.entries(outlinedNames).sort();
type OutlinedKeys = keyof typeof filledNames;

const ListTemplate = (args: ListTemplate) => (
  <List>
    <h2>{args.title}</h2>
    <p>{args.description}</p>
    {args.list.length > 0 ? (
      args.list.map(([key]) => (
        <ListItem key={key}>
          <Icon name={key} {...args} />
          <p>{key}</p>
        </ListItem>
      ))
    ) : (
      <h3>
        <i>No hay iconos por el momento.</i>
      </h3>
    )}
  </List>
);

interface ListTemplate {
  description: string;
  height: number;
  list: [OutlinedKeys, unknown][];
  title: string;
  width: string;
}

export const Filled = ListTemplate.bind({});
// @ts-expect-error arguments to ListTemplate
Filled.args = {
  description: `Filled icons are graphical symbols and are usually solid. They can be
    scaled to whatever size you need and can be customized with different
    colors and shadow effects. Because they're generally a solid color,
    filled icons can work really well at small sizes, but may not hold much
    visual interest at larger sizes.
  `,
  height: 32,
  list: filledList,
  title: 'Filled icons',
  width: 32,
};

export const Flat = ListTemplate.bind({});
// @ts-expect-error arguments to ListTemplate
Flat.args = {
  description: `Flat icons are the colored counterpart of glyph icons and are known
    for their subtle use of highlight and shadow. This lack of contrast
    is what gives this popular icon style the name 'flat'.
  `,
  height: 32,
  list: flatList,
  title: 'Flat icons',
  width: 32,
};

export const Outlined = ListTemplate.bind({});
// @ts-expect-error arguments to ListTemplate
Outlined.args = {
  description: `Outlined icons are created by vector strokes, and are empty inside.
    They have pros and cons. On the upside, they're clean, minimalist,
    and can look very polished. On the downside, they can take users more
    time to process and recognize.
  `,
  height: 32,
  list: outlinedList,
  title: 'Outlined icons',
  width: 32,
};
