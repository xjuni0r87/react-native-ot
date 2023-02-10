import React from 'react';
import PropTypes from 'prop-types';
import OTIconTag from './OTIconTag';
import { CONTENTS } from './constants';
import { useTheme } from 'styled-components/native';

// ----------------------------------------------------------------------

const propTypes = {
  /**
   * Type of the OTContentCategory
   */
  type: PropTypes.oneOf([
    CONTENTS.article.type,
    CONTENTS.audio.type,
    CONTENTS.eBook.type,
    CONTENTS.video.type,
  ]),
  /**
   * Color of the OTContentCategory
   */
  color: PropTypes.oneOf(['white', 'blue']),
};

const OTContentCategory = ({ type, color }) => {
  const theme = useTheme();
  return (
    type && (
      <OTIconTag
        title={CONTENTS[type]?.label}
        titleColor={
          color === 'blue' ? theme.colors.font.blue : theme.colors.font.white
        }
        icon={CONTENTS[type]?.icon?.[color]}
      />
    )
  );
};

// ----------------------------------------------------------------------

OTContentCategory.propTypes = propTypes;

OTContentCategory.defaultProps = { color: 'white' };

export default OTContentCategory;
