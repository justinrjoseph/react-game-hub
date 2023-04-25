import { Image, ImageProps } from '@chakra-ui/react';

import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';

const emojis: { [key: number]: ImageProps } = {
  3: { src: meh, alt: 'meh', boxSize: '1.5625rem' },
  4: { src: thumbsUp, alt: 'recommended', boxSize: '1.5625rem' },
  5: { src: bullsEye, alt: 'exceptional', boxSize: '2.1875rem' }
};

interface Props {
  rating: number;
}

function Emoji({ rating }: Props): JSX.Element | null {
  if (rating < 3) return null;

  return <Image {...emojis[rating]} marginBlockStart=".25rem" />;
}

export default Emoji;