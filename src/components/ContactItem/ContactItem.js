import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id, onRemove }) => {
  return (
    <List>
      <ListItem key={id}>
        {name}: {number}
      </ListItem>
      <Button type="button" onClick={() => onRemove(id)}>
        Delete
      </Button>
    </List>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string,
};
