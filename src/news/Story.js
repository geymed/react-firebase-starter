/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { createFragmentContainer, graphql } from 'react-relay';

import Link from '../common/Link';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.content,
  },
}));

function Story(props) {
  const {
    data: { title, text, isURL },
  } = props;

  const s = useStyles();

  return (
    <div className={s.root}>
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      {isURL ? (
        <Typography>
          <a href={text}>{text}</a>
        </Typography>
      ) : (
        text &&
        text.split('\n').map(x => <Typography gutterBottom>{x}</Typography>)
      )}
      <div style={{ marginTop: 10, textAlign: 'right' }}>
        <Button component={Link} href="/news">
          Go back
        </Button>
      </div>
    </div>
  );
}

export default createFragmentContainer(
  Story,
  graphql`
    fragment Story on Story {
      title
      text
      isURL
    }
  `,
);
