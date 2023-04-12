import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75
    ? 'green'
    : score > 60 ? 'yellow' : '';

  return <Badge colorScheme={color}
    fontSize=".875rem"
    paddingX=".5rem"
    borderRadius=".25rem">
    {score}
  </Badge>;
}

export default CriticScore;